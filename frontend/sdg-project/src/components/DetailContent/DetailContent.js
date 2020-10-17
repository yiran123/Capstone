import React, { useState, useEffect } from 'react';
import Tab from '../Tab/Tab'
import Table from './Table'
import DetailContentBottom from './DetailContentBottom'
import SdgsAlignment from './SdgsAlignment'
import impactTypesNode from './impactTypes'
import cloundy from '../../static/icons/cloundy.svg';
import areaLineNode from './areaLine'
import barNode from './bar'


import './DetailContent.css'


const sdgsAlignment = [
  { value: 7, showTotal: '$30, 084,618', total: 30084618 },
  { value: 6, showTotal: '$30, 084,618', total: 30084618 },
  { value: 5, showTotal: '$30, 084,618', total: 30084618 },
  { value: 4, showTotal: '$30, 084,618', total: 30084618 },
  { value: 8, showTotal: '$30, 084,618', total: 30084618 },
]


class DetailContent extends React.Component {

    constructor(props) {
    super(props);
    this.state ={
      curTab: 'TRACKER',
      bond:{
        projects:[]
      }
    }
    this.fetchBond = this.fetchBond.bind(this)
    this.onChangeTab = this.onChangeTab.bind(this)
  }

  componentDidUpdate() {
    if (document.querySelector('#impactTypesNode')) {
      document.querySelector('#impactTypesNode').append(impactTypesNode)
    }

    if (document.querySelector('#areaLineNode')) {
      document.querySelector('#areaLineNode').append(areaLineNode)
    }

    if (document.querySelector('#barNode')) {
      document.querySelector('#barNode').append(barNode)
    }
  }

  componentWillMount() {
    this.fetchBond();
  }

  onChangeTab(e) {

     this.setState({curTab: e})
  }

  fetchBond() {
    fetch(`http://localhost:8000/api/bond/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data =>
      this.setState({bond:data})
      )
  }

  render() {
    var curTab = this.state.curTab;
      return (
    <div className="DetailContent">
      <Tab change={this.onChangeTab} bond={this.bond} />
      {
        curTab === 'TRACKER' && <div>
          <div className="DetailContentProject">
            <div className="DetailContentProjectInner">
              <div className="DetailContentProjectCard" style={{ marginRight: '32px' }}>
                <div className="DetailContentProjectCardTop">
                  <div className="title">SDG Alignment</div>
                  <div >
                    <span className="desc" style={{ marginRight: '30px' }}>Share [%]</span>
                    <span className="desc">
                      Amount [$]
                </span>
                  </div>
                </div>
                <div className="DetailContentProjectCardBottom">
                  <SdgsAlignment />
                </div>
              </div>
              <div className="DetailContentProjectCard">
                <div className="DetailContentProjectCardTop">
                  <div className="title">Impact Types</div>
                </div>
                <div id="impactTypesNode"></div>
              </div>
            </div>
            <p className="cardName">
              VIEWING : ALL PROJECTS
        </p>
          </div>
          <Table projects={this.state.bond.projects} />
          <DetailContentBottom />
        </div>
      }
      {
        curTab === 'IMPACT' &&
        <div>
          <div className="impactTop">
            <p className="model">
              <img className="tabDescImg" src={cloundy} alt='cloundy' />
              CLIMATE IMPACT MODEL
          </p>
            <p>
              Developed by Dr. Jan Whittington and her team of researchers at the University of Washington. Their model attempts to capture and forecast carbon emissions for SFPUC capital planning projects. This model provides the SFPUC with clear alternatives with different avoided cost and climate impacts.
          </p>
          </div>
          <div className="impactBottom">
            <div className="impactChart">
              <p className="impactChartTitle">GREENHOUSE GAS EMISSION & AVOIDED COSTS </p>
              <div className="impactChartBody">
                <div id="areaLineNode"></div>
              </div>
            </div>
            <div className="impactChart">
              <p className="impactChartTitle">INFRASTRUCTURE RESILIENCE  </p>
              <div className="impactChartBody">
                <div id="barNode"></div>
              </div>
            </div>
          </div>
        </div>
      }
    </div >
  );
  }


}

export default DetailContent;