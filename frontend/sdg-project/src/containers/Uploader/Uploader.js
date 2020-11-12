import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import * as XLSX from 'xlsx';
import * as papa from 'papaparse';


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

    onClickHandler = () => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target.result;

            console.log('+++++++++++++++++++');
            console.log(result);

            const workbook = XLSX.read(result, {type: 'binary'});
            console.log('workbook:');
            console.log(workbook);

            console.log('sheetname[0]:');
            console.log(workbook.SheetNames[2]);

            const worksheet = workbook.Sheets[workbook.SheetNames[0]];

            console.log('worksheet:');
            console.log(worksheet);

            const range = XLSX.utils.decode_range(worksheet['!ref']);
            console.log('range:');
            console.log(range);

            const csvString = XLSX.utils.sheet_to_csv(worksheet, {header: 1});     
            const json = papa.parse(csvString, {header: true});

            console.log('(((((((((((((((');
            console.log(json);
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