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
    
    return (
      <div>
      <div className="leftTitle">
      TOTAL USE OF PROCEEDS
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        $
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL EXPENDED
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        ($)
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL REMAINING
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        $
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL FY 18-19 SPENDING
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        $
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      TOTAL PRIOR YRS SPENDING
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        $
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      FINAL MATURITY
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        08/24/2024
        </div>
      </div>

      <div className="line"></div>
      <div className="leftTitle">
      COUPON RATE
        <div style={{
          display: 'inline-block',
          float:'right'
        }}>
        1.7%
        </div>
      </div>

      <div className="line"></div>

      </div>
    );
  }
}

export default FinancialInformation;