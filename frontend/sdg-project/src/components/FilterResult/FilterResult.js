import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import download from '../../static/icons/download.svg';
import styled from 'styled-components'
import Series from '../Series/Series'

import './FilterResult.css'

const StyledButton = styled(Button)`
  color: #1589EE;
  height: 32px;
  &.MuiButton-containedPrimary{
  color: #1589EE;
  height: 32px;
    background-color: rgba(21, 137, 238, 0.1);
    margin-right: 14px;
    &:hover{
    background-color: rgba(21, 137, 238, 0.1);

      }
  }
  
`;


function FilterResult ({ result, bonds}) {
  return (
    <div className="FilterResultWrapper">
      <div className="FilterResultWrapperTop">
        <div className="FilterResultHeader">
          <div className="FilterResultHeaderTop">
            <div className="FilterResultHeaderTitle">
              <img src={result.titleIcon} style={{ marginRight: '19px' }} alt="water" />
              {result.title}
            </div>
            <div>
              <StyledButton style={{ color: result.seriesBg, backgroundColor: result.btnBg }} size="small" variant="contained" color="primary">IMPACT REPORT</StyledButton>
              <StyledButton style={{ color: result.seriesBg, backgroundColor: result.btnBg }} size="small" variant="contained" color="primary">READ MORE</StyledButton>
            </div>
          </div>
          <div className="bondRatingWrapper">
            <div className="bondRatingTitle">Bond Ratings</div>
            <div className="bondRatingBodyWrapper">
              <div className="bondRatingBody">
                <div className="bondRatingBodyItem">S&P</div>
                <div className="bondRatingBodyItem">long term AA-</div>
                <div className="bondRatingBodyItem">short term P-1</div>
              </div>
              <div className="bondRatingBody">
                <div className="bondRatingBodyItem">S&P</div>
                <div className="bondRatingBodyItem">long term AA-</div>
                <div className="bondRatingBodyItem">short term P-1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="FilterResultBody">
          {
            bonds.filter(bond => bond.enterprise == result.enterprise).map((bond) => {
              return <Series bond={bond} seriesBg={result.seriesBg} />
            })
          }
        </div>
      </div>

      <div className="FilterResultWrapperBottom">
        <div className="download-title">
          LINKS & DOWNLOADS
          <i className="download-title-time">Updated on 4th July 2020</i>
        </div>
        <div className="download-button-groups">
          <div className="download-button" style={{ borderColor: result.seriesBg }}>
            <div className="downloadButtonText">
              <div style={{ fontSize: '15px', lineHeight: '18px', fontWeight: 500 }}>
                Green Bond Report
              </div>
              <div style={{ fontSize: '10px', lineHeight: '12px', color: '#6E89A0' }}>
                1 file • PDF • 12.8 MB
              </div>
            </div>
            <img src={download} alt="download" style={{ marginLeft: '20px' }} />

          </div>
          <div className="download-button" style={{ borderColor: result.seriesBg }}>
            <div className="downloadButtonText">
              <div style={{ fontSize: '15px', lineHeight: '18px', fontWeight: 500 }}>
                GB Fact Sheet
              </div>
              <div style={{ fontSize: '10px', lineHeight: '12px', color: '#6E89A0' }}>
                1 file • PDF • 12.8 MB
              </div>
            </div>
            <img src={download} alt="download" style={{ marginLeft: '20px' }} />

          </div>
          <div className="download-button" style={{ borderColor: result.seriesBg }}>
            <div className="downloadButtonText">
              <div style={{ fontSize: '15px', lineHeight: '18px', fontWeight: 500 }}>
                Impact Report
              </div>
              <div style={{ fontSize: '10px', lineHeight: '12px', color: '#6E89A0' }}>
                1 file • PDF • 12.8 MB
              </div>
            </div>
            <img src={download} alt="download" style={{ marginLeft: '20px' }} />
          </div>

          <div style={{ color: result.seriesBg }} className="download-button download-all-button">
            DOWNLOAD ALL
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterResult;