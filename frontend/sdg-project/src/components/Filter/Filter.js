import React, { useState } from 'react';
import ReactSwipe from 'react-swipe';
import styled from 'styled-components'
import { Breadcrumbs, Link, Button } from '@material-ui/core';
import sdg1 from '../../static/icons/sdgs/E-WEB-Goal-01.png';
import yunduo from '../../static/icons/yunduo.svg';
import { sdgs, fundings, bondTypes, issueYears } from './const'
import './Filter.css'

const SelectAllButton = styled(Button)`
&.MuiButton-root{
  color: #1589EE;
font-weight: bold;
  
}
`

function Filter () {
  return (
    <div className="Filter">
    <div className="buttonWrapper">
    <nav>SELECT A BOND ISSUER</nav>
    </div>
      <div className="un-sdgs-filter">
        <div className="un-sdgs-filter-top">
          <div className="filter-name">UN SDGs</div>
          <SelectAllButton>SELECT ALL</SelectAllButton>
        </div>
        <div className="un-sdgs-filter-bottom">
          {
            sdgs.map((sdg) => {
              return <div className="un-sdgs-filter-item">
                <img width="52" height="52" src={sdg.imgSrc} alt='sdg' />
              </div>
            })
          }
        </div>
      </div>
      <div className="other-filter">
        <div className="other-filter-item">
          <div className="other-filter-item-top">
            <div className="filter-name">Funding</div>
            <SelectAllButton>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom">
            {fundings.map((item) => <div className="funding-filter-item">{item.label}</div>)}
          </div>
        </div>

        <div className="other-filter-item" style={{ margin: '0 56px' }}>
          <div className="other-filter-item-top" style={{ width: '200px' }}>
            <div className="filter-name">Bond Type</div>
            <SelectAllButton>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom">
            {bondTypes.map((item) => <div className="bond-types-filter-item">{item.label}</div>)}
          </div>
        </div>

        <div className="other-filter-item">
          <div className="other-filter-item-top" style={{ width: '424px' }}>
            <div className="filter-name">Issue Year</div>
            <SelectAllButton>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom">
            {issueYears.map((item) => <div className="issue-years-filter-item">{item.label}</div>)}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Filter;