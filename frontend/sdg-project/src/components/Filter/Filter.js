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

class Filter extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      funding: 'all',
      year: 'all',
      sdgs: 'all'
    }
    this.onChange = this.onChange.bind(this);
  }


  onChange = (myFunding, myYear, mySdg) => {
    this.props.changeFilter(myFunding, myYear, mySdg)
    this.setState({funding:myFunding, year:myYear, sdgs:mySdg  })
  }

  render() {

  return (
    <div className="Filter">
    <div className="buttonWrapper">
    <nav>SELECT A BOND ISSUER</nav>
    </div>
      <div className="un-sdgs-filter">
        <div className="un-sdgs-filter-top">
          <div className="filter-name">UN SDGs</div>
          <SelectAllButton onClick={() => { this.onChange(this.state.funding, this.state.year,'all') }}>SELECT ALL</SelectAllButton>
        </div>
        <div className="un-sdgs-filter-bottom">
          {
            sdgs.map((sdg) => {
              return <div className="un-sdgs-filter-item" onClick={() => { this.onChange(this.state.funding, this.state.year, sdg.value) }}>
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
            <SelectAllButton onClick={() => { this.onChange('all', this.state.year, this.state.sdgs)}}>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom" >
            {fundings.map((item) => <div className="funding-filter-item" onClick={() => { this.onChange(item.label, this.state.year, this.state.sdgs)}}>{item.label}</div>)}
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
            <SelectAllButton onClick={() => { this.onChange(this.state.funding, 'all', this.state.sdgs)}}>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom">
            {issueYears.map((item) => <div className="issue-years-filter-item" onClick={() => { this.onChange(this.state.funding, item.label, this.state.sdgs) }}>{item.label}</div>)}
          </div>
        </div>
      </div>
    </div >
  );
}
}

export default Filter;