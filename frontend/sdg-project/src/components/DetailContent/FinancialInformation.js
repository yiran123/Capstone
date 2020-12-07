import React from 'react';
import styled from 'styled-components'
import _ from 'lodash'
import { unsdgs } from '../Filter/const'
import './FinancialInformation.css'





class FinancialInformation extends React.Component {
  constructor(props) {
    super(props);
    
  }

  

  render (){
    var bond = this.props.bond
    var financialInfo = { use_of_proceeds: -1, prior_year_spending: -1, recent_year_spending: -1, maturity_date: '', avg_mature_rate: -1}
    if(bond.financial_info != undefined 
      && bond.financial_info.use_of_proceeds != undefined
      && bond.financial_info.prior_year_spending != undefined
      && bond.financial_info.recent_year_spending != undefined
      && bond.financial_info.maturity_date != undefined
      && bond.financial_info.avg_mature_rate != undefined
      ) {
      financialInfo = bond.financial_info;
    }
    return (
      <div>
      <div className="leftTitle">
      TOTAL USE OF PROCEEDS
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number"> ${financialInfo.use_of_proceeds} </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL EXPENDED
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number">(${financialInfo.prior_year_spending + financialInfo.recent_year_spending})</div>
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL REMAINING
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number">${financialInfo.use_of_proceeds - financialInfo.prior_year_spending - financialInfo.recent_year_spending}</div>
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL FY 18-19 SPENDING
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number">${financialInfo.recent_year_spending}</div>
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL PRIOR YRS SPENDING
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number">${financialInfo.prior_year_spending}</div>
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      FINAL MATURITY
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number">{financialInfo.maturity_date}</div>
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      COUPON RATE
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        <div className="number">{financialInfo.avg_mature_rate*100}%</div>
        </div>
      </div>

      <div className="line"></div>

      </div>
    );
  }
}

export default FinancialInformation;