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

function Tab ({ change, bond }) {
  const [curTab, setCurTab] = useState('TRACKER')
  let reactSwipeEl;

  const onChangeTab = (tab) => {
    setCurTab(tab)
    change(tab)
  }


  return (
    <div className="Tab">
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink color="inherit" href="/" > Investor Relations & Financial Reports</BreadcrumbLink>
        <BreadcrumbLink color="inherit" href="/getting-started/installation/" >Debt Management & Disclosure Reports</BreadcrumbLink>
      </Breadcrumbs>
      <div className="tabDesc">
        <div className="tabDescContent">
          <div className="tabDescContent">
            41 PROJECTS <i className="tabDescContent-help"> • REFUNDING • SERIES G • ISSUED IN 2017</i>
          </div>
          <p className="tabDescContent-desc">Water Revenue Bond Series 2017G</p>
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
        <div className={`tabItem ${curTab === 'TRACKER' && 'active'}`} onClick={() => { onChangeTab('TRACKER') }} style={{ marginRight: '29px' }}>
          PROJECT TRACKER
        </div>
        <div className={`tabItem ${curTab === 'IMPACT' && 'active'}`} onClick={() => { onChangeTab('IMPACT') }}>
          PCLIMATE IMPACT DATA
        </div>
      </div>
    </div >
  );
}

export default Tab;