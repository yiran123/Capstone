import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import * as XLSX from 'xlsx';
import * as papa from 'papaparse';
import axios from 'axios';


class Uploader extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            file: '',
        }
    };

    onChangeHandler = (e) => {
        console.log(e.target.files);
        this.setState({
            file: e.target.files[0]
        })
    }

    renameKey = ( json, oldKey, newKey ) => {
        json[newKey] = json[oldKey];
        delete json[oldKey];
    }

    onClickHandler = () => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target.result;

            const workbook = XLSX.read(result, {type: 'binary'});

            const worksheet = workbook.Sheets[workbook.SheetNames[2]];

            const csvString = XLSX.utils.sheet_to_csv(worksheet, {header: 1});

            const json = papa.parse(csvString, {header: true});

            console.log('(((((((((((((((');

            // filter empty cell.
            const newJson = json.data.filter(item => {
                for (let key in item) {
                    if (item[key] != '') {
                        return true;
                    }
                }
                return false;
            });

            // Change key name.
            newJson.forEach((item) => {
                delete item['Instructions'];
                delete item[''];
                delete item['Project Name and Number'];
                delete item['Enterprise'];


                item['name'] = item['Project Name'];
                item['project_number'] = item['Project Number'];
                item['description'] = item['Project Description']

                delete item['Project Name'];
                delete item['Project Number'];
                delete item['Project Description'];
                
                // this.renameKey(item, 'Project Name', 'name');
                // this.renameKey(item, 'Project Number', 'project_number');
            });

            //const jsonArray = JSON.stringify(newJson);
            //const jsonArray = {"data": newJson};

            const jsonArray = newJson;

            console.log('new json:--------');
            console.log(JSON.stringify(jsonArray));
            
            axios.post("http://127.0.0.1:8000/api/create", jsonArray)
                .then(res => {
                    console.log(res);
                })
        };

        reader.readAsBinaryString(this.state.file);

        // reader.onload = function(e) {
        //     console.log(reader.result);
        // }
        //reader.readAsText(this.state.file);
        
    }

    render() {
        return (
            <div>
                <div className="col-sm-12 btn btn-primary">
                        File Upload
                </div>

                <input type="file" onChange={e => this.onChangeHandler(e)} />
                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>
                    Upload
                </button> 
            </div>    
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Uploader);