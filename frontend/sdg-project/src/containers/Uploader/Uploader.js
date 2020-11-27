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
        this.setState({
            file: e.target.files[0]
        })
    }

    parseContractors = (worksheet) => {
        const csvString = XLSX.utils.sheet_to_csv(worksheet, {header: 1});
        const json = papa.parse(csvString, {header: true});

        // filter empty cell.
        const newJson = this.deleteEmptyCells(json.data);
        
        newJson.forEach((item) => {
            delete item[''];
            delete item['Instructions'];

            item['name'] = item['Contractor Name'];
            item['description'] = item['Contractor Description'];

            delete item['Contractor Name'];
            delete item['Contractor Description'];
        })
        return newJson;
    }

    /**
     * Delete empty cells.
     * Helper method.
     * 
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
            delete item['SDG Alignment #1'];
            delete item['SDG Alignment #2'];
        });

        return newJson;
    }

    parseBonds = (worksheet) => {
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
            item['bond_type'] = item['Bond Type'];
            item['issue_year'] = parseInt(item['Issue Year']);
            item['series'] = item['Series'];
            item['verifier'] = item['Green Bond Verifier (If Applicable)'];
            item['maturity_date'] = item['Final Maturity Date'];

            delete item['Bond Name'];
            delete item['Enterprise'];
            delete item['Coupon Rate'];
            delete item['Bond Type'];
            delete item['Issue Year'];
            delete item['Series'];
            delete item['Green Bond Verifier (If Applicable)'];
            delete item['Final Maturity Date'];
        });
        return newJson;
    }

    parseFinancialInfo = (worksheets) => {
        const GAP = 7;
        const BOND_INITIAL_COL = 3;
        const PROJECT_INITIAL_COL = 2;

        const financialInfo = []

        worksheets.forEach((worksheet) => {
            const csvString = XLSX.utils.sheet_to_csv(worksheet);
            const parsedData = papa.parse(csvString);

            for (let j = BOND_INITIAL_COL; j < parsedData.data[0].length; j += GAP) {
                if (parsedData.data[0][j] === undefined
                || parsedData.data[0][j].toString().trim() == '') {
                    continue;
                }
    
                let bond_name = parsedData.data[0][j];
                financialInfo.push({
                    bond: bond_name,
                    projects: []
                });
            }
    
            for (let j = PROJECT_INITIAL_COL, counter = 0; counter < financialInfo.length; j += GAP, counter++) {
                for (let i = 2; i < parsedData.data.length; i++) {
                    
                    if (parsedData.data[i][j] === undefined
                        || parsedData.data[i][j + 1] === undefined
                        || parsedData.data[i][j + 2] === undefined
                        || parsedData.data[i][j + 3] === undefined
                        || parsedData.data[i][j].toString().trim() == ''
                        || parsedData.data[i][j + 1].toString().trim() == ''
                        || parsedData.data[i][j + 2].toString().trim() == ''
                        || parsedData.data[i][j + 3].toString().trim() == '') {
                        continue;
                    }
    
                    let project, use_of_proceeds, prior_year_spending, recent_year_spending;
                    try {
                        project = parsedData.data[i][j].toString();
                        use_of_proceeds = parseFloat(parsedData.data[i][j + 1].toString().substring(1).replace(/,/g, ''));
                        prior_year_spending = parseFloat(parsedData.data[i][j + 2].toString().substring(1).replace(/,/g, ''));
                        recent_year_spending = parseFloat(parsedData.data[i][j + 3].toString().substring(1).replace(/,/g, ''));
                    } catch (err) {
                        continue;
                    }
                    
                    financialInfo[counter].projects.push({
                        project: project,
                        use_of_proceeds: use_of_proceeds,
                        prior_year_spending: prior_year_spending,
                        recent_year_spending: recent_year_spending
                    });
                }
            }
        });

        console.log('financial info==========');
        console.log(financialInfo);
        return financialInfo;
    }

    onClickHandler = () => {
        const PROJECT_INFO_SHEET = "Project Information";
        const BOND_INFO_SHEET = "Bond Information";
        const FINANCIAL_INFO_SHEET_PREFIX = "Financial Information - Bonds";
        const CONTRACTOR_INFO_SHEET = "Contractor Information";

        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target.result;
            const workbook = XLSX.read(result, {type: 'binary'});

            const projectWorksheet = workbook.Sheets[PROJECT_INFO_SHEET];
            const bondWorksheet = workbook.Sheets[BOND_INFO_SHEET];
            const contractorWorksheet = workbook.Sheets[CONTRACTOR_INFO_SHEET];

            const financialInfoWorksheets = [];
            workbook.SheetNames.forEach((sheetName) => {
                if (sheetName.startsWith(FINANCIAL_INFO_SHEET_PREFIX)) {
                    financialInfoWorksheets.push(workbook.Sheets[sheetName]);
                }
            });

            const contractors = this.parseContractors(contractorWorksheet);
            const projects = this.parseProjects(projectWorksheet);
            const bonds = this.parseBonds(bondWorksheet);
            const financialInfo = this.parseFinancialInfo(financialInfoWorksheets);

            const json = {
                contractors: contractors,
                projects: projects,
                bonds: bonds,
                financialInfo: financialInfo
            }

            console.log(json);
            
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