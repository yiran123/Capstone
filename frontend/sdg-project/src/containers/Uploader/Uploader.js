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

    /**
     * Delete empty cells.
     * @param {JsonArray} jsonArray json array
     */
    deleteEmptyCells = (jsonArray) => {
        return jsonArray.filter(item => {
            for (let key in item) {
                if (item[key].trim() != '') {
                    return true;
                }
            }
            return false;
        });
    }

    /**
     * Parse project information.
     * 
     * @param {worksheet} worksheet "Project Information" worksheet.
     * @returns Json array of all project information.
     */
    parseProjects = (worksheet) => {
        const csvString = XLSX.utils.sheet_to_csv(worksheet, {header: 1});
        const json = papa.parse(csvString, {header: true});

        // filter empty cell.
        const newJson = this.deleteEmptyCells(json.data);

        // Change key name.
        newJson.forEach((item) => {
            delete item['Instructions'];
            delete item[''];
            delete item['Project Name and Number'];
            delete item['Enterprise'];

            item['name'] = item['Project Name'];
            item['project_number'] = item['Project Number'];
            item['description'] = item['Project Description']
            item['sdg1'] = item['SDG Alignment #1']
            item['sdg2'] = item['SDG Alignment #2']

            delete item['Project Name'];
            delete item['Project Number'];
            delete item['Project Description'];
        });
        //TODO: sdg tag.

        return newJson;
    }

    parseBonds = (worksheet) => {
        //console.log(XLSX.utils.sheet_to_csv(worksheet));

        const csvString = XLSX.utils.sheet_to_csv(worksheet, {header: 1});
        const json = papa.parse(csvString, {header: true});
        const newJson = this.deleteEmptyCells(json.data);

        // Change key name.
        newJson.forEach((item) => {
            delete item['Instructions'];
            delete item[''];

            item['name'] = item['Bond Name'];
            item['enterprise'] = item['Enterprise'];
            item['avg_mature_rate'] = parseFloat(item['Coupon Rate']) / 100.0;

            item['CUSIP'] = item['Final CUSIP'];
            item['bond_type'] = item['Bond Type'];
            item['issue_year'] = parseInt(item['Issue Year']);
            item['series'] = item['Series']

            delete item['Bond Name']
            delete item['Enterprise']
            delete item['Coupon Rate']
            delete item['Final CUSIP']
            delete item['Bond Type']
            delete item['Issue Year']
            delete item['Series']
        });

        return newJson;
    }

    onClickHandler = () => {
        const PROJECT_INFO_SHEET = "Project Information";
        const BOND_INFO_SHEET = "Bond Information";

        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target.result;

            const workbook = XLSX.read(result, {type: 'binary'});

            const projectWorksheet = workbook.Sheets[PROJECT_INFO_SHEET];
            const bondWorksheet = workbook.Sheets[BOND_INFO_SHEET];

            const projects = this.parseProjects(projectWorksheet);
            const bonds = this.parseBonds(bondWorksheet);

            console.log(projects);
            console.log(bonds);

            const json = {
                "projects": projects,
                "bonds": bonds
            }
            
            axios.post("http://127.0.0.1:8000/api/create", json)
                .then(res => {
                    console.log(res);
                });
        };

        reader.readAsBinaryString(this.state.file);
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