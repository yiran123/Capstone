import React, { useState } from 'react';
import ReactSwipe from 'react-swipe';
import styled from 'styled-components'
import { Breadcrumbs, Link, Button } from '@material-ui/core';
import sdg4 from '../../static/icons/sdgs/E-WEB-Goal-04.png';
import sdg5 from '../../static/icons/sdgs/E-WEB-Goal-05.png';
import sdg6 from '../../static/icons/sdgs/E-WEB-Goal-06.png';
import sdg7 from '../../static/icons/sdgs/E-WEB-Goal-07.png';
import sdg8 from '../../static/icons/sdgs/E-WEB-Goal-08.png';
import treebg from '../../static/icons/treebg.svg';
import yunduo from '../../static/icons/yunduo.svg';

import './Tab.css'

const BreadcrumbLink = styled(Link)`
  &.MuiLink-root{
  color: #000;
  }
`;

class Tab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      curTab: 'TRACKER',
    }
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab = (tab) => {
    this.setState({curTab:tab})
    this.props.change(tab)
  }

  render() {
    var curTab = this.state.curTab;
    var bond = this.props.bond;

      return (
    <div className="Tab">

      <div className="tabDesc">
        <div className="tabDescContent">
          <div className="tabDescContent">
            {bond.projects.length} PROJECTS <i className="tabDescContent-help"> • {bond.bond_type} • SERIES {bond.series} • ISSUED IN {bond.issue_year}</i>
          </div>
          <p className="tabDescContent-desc">{bond.name} {bond.bond_type} Bond</p>
        </div>
        <div className="tabDescImgs">
          <img width="52" height="52" className="tabDescImg" src={sdg8} alt='sdg8' />
          <img width="52" height="52" className="tabDescImg" src={sdg7} alt='sdg8' />
          <img width="52" height="52" className="tabDescImg" src={sdg6} alt='sdg8' />
          <img width="52" height="52" className="tabDescImg" src={sdg4} alt='sdg8' />
          <img width="52" height="52" className="tabDescImg" src={sdg5} alt='sdg8' />
        </div>
      </div>
      <div className="tabWrapper">
        <div className={`tabItem ${curTab === 'TRACKER' && 'active'}`} onClick={() => { this.onChangeTab('TRACKER') }} style={{ marginRight: '29px' }}>
          PROJECT TRACKER
        </div>
        <div className={`tabItem ${curTab === 'IMPACT' && 'active'}`} onClick={() => { this.onChangeTab('IMPACT') }}>
          CLIMATE IMPACT DATA
        </div>
      </div>
    </div >
  );
  }

}

export default Tab;