import React, { useState } from 'react';
import ReactSwipe from 'react-swipe';
import styled from 'styled-components'
import { Breadcrumbs, Link, Button, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
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
      fundingArray: [],
      bondType: 'all',
      bondTypeArray: [],
      year: 'all',
      yearArray: [],
      sdgs: 'all',
      sdgsArray: []
    }
    this.onChange = this.onChange.bind(this);
  }


  onChange = (myFunding, myBondType, myYear, mySdg) => {
    var myFundingArray = [...this.state.fundingArray];
    var myFundingRange = 'all';
    var myBondTypeArray = [...this.state.bondTypeArray];
    var myBondTypeRange = 'all';
    var myYearArray = [...this.state.yearArray];
    var myYearRange = 'all';
    var mySdgsArray = [...this.state.sdgsArray];
    var mySdgsRange = 'all';

    if(myFunding != 'all') {
      myFundingRange = 'part';
      if(myFundingArray.includes(myFunding)) {
       var index = myFundingArray.indexOf(myFunding);
        if(index > -1) {
          myFundingArray.splice(index, 1);
        }
        if(myFundingArray.length == 0) {
          myFundingRange = 'all';
        }
      }
      else {
        myFundingArray = myFundingArray.concat(myFunding)
      }
    }
    else {
      myFundingRange = 'all';
    }
    if(myBondType != 'all') {
      myBondTypeRange = 'part';
      if(myBondTypeArray.includes(myBondType)) {
       var index = myBondTypeArray.indexOf(myBondType);
        if(index > -1) {
          myBondTypeArray.splice(index, 1);
        }
        if(myBondTypeArray.length == 0) {
          myBondTypeRange = 'all';
        }
      }
      else {
        myBondTypeArray = myBondTypeArray.concat(myBondType)
      }
    }
    else {
      myBondTypeRange = 'all';
    }

    if(myYear != 'all') {
      myYearRange = 'part';
      if(myYearArray.includes(myYear)) {
        var index = myYearArray.indexOf(myYear);
        if(index > -1) {
          myYearArray.splice(index, 1);
        }
        if(myYearArray.length == 0) {
          myYearRange = 'all';
        }
      }
      else {
        myYearArray = myYearArray.concat(myYear);
      }
    }
    else {
      myYearRange = 'all';
    }
    if(mySdg != 'all') {
      mySdgsRange = 'part';
      if(mySdgsArray.includes(mySdg)) {
        var index = mySdgsArray.indexOf(mySdg);
        if(index > -1) {
          mySdgsArray.splice(index, 1);
        }
        if(mySdgsArray.length == 0) {
          mySdgsRange = 'all';
        }
      }
      else {
        mySdgsArray = mySdgsArray.concat(mySdg);
      }
    }
    else {
      mySdgsRange = 'all';
    }
     
    this.setState({funding: myFundingRange, fundingArray: myFundingArray, bondType: myBondTypeRange, bondTypeArray: myBondTypeArray, year: myYearRange, yearArray: myYearArray, sdgs:mySdgsRange, sdgsArray: mySdgsArray })
    this.props.changeFilter(myFundingRange, myFundingArray, myBondTypeRange, myBondTypeArray, myYearRange, myYearArray, mySdgsRange, mySdgsArray)
    }
    
    
  



  render() {

  return (
    <div className="Filter">
    <div className="buttonWrapper">
          <FormControl variant="outlined" >
        <InputLabel id="select-outlined-label">SELECT A BOND ISSUER</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          value={this.state.bondIssuer}
          onChange={this.handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          {/* <nav>SELECT A BOND ISSUER</nav> */}
    </div>
      <div className="un-sdgs-filter">
        <div className="un-sdgs-filter-top">
          <div className="filter-name">UN SDGs</div>
          <SelectAllButton onClick={() => { this.onChange(this.state.funding, this.state.bondType, this.state.year,'all') }}>SELECT ALL</SelectAllButton>
        </div>
        <div className="un-sdgs-filter-bottom">
          {
            sdgs.map((sdg) => {
              return <div className="un-sdgs-filter-item" onclick="changeClass(this.id)" onClick={() => { this.onChange(this.state.funding, this.state.bondType, this.state.year, sdg.value) }}>
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
            <SelectAllButton onClick={() => { this.onChange('all', this.state.bondType, this.state.year, this.state.sdgs)}}>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom" >
            {fundings.map((item) => <div className="funding-filter-item" onClick={() => { this.onChange(item.label, this.state.bondType, this.state.year, this.state.sdgs)}}>{item.label}</div>)}
          </div>
        </div>

        <div className="other-filter-item" style={{ margin: '0 56px' }}>
          <div className="other-filter-item-top" style={{ width: '200px' }}>
            <div className="filter-name">Bond Type</div>
            <SelectAllButton onClick={() => { this.onChange(this.state.funding, 'all', this.state.year, this.state.sdgs)}}>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom">
            {bondTypes.map((item) => <div className="bond-types-filter-item" onClick={() => { this.onChange(this.state.funding, item.label, this.state.year, this.state.sdgs)}}>{item.label}</div>)}
          </div>
        </div>

        <div className="other-filter-item">
          <div className="other-filter-item-top" style={{ width: '424px' }}>
            <div className="filter-name">Issue Year</div>
            <SelectAllButton onClick={() => { this.onChange(this.state.funding, this.state.bondType, 'all', this.state.sdgs)}}>SELECT ALL</SelectAllButton>
          </div>
          <div className="other-filter-item-bottom">
            {issueYears.map((item) => <div className="issue-years-filter-item" onClick={() => { this.onChange(this.state.funding, this.state.bondType, Number(item.label), this.state.sdgs) }}>{item.label}</div>)}
          </div>
        </div>
      </div>
    </div >
  );
}
}

export default Filter;