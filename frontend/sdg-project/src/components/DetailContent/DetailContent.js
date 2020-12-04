import React, { useState, useEffect } from 'react';
import Tab from '../Tab/Tab'
import Table from './Table'
import DetailContentBottom from './DetailContentBottom'
import SdgsAlignment from './SdgsAlignment'
import FinancialInformation from './FinancialInformation'
import impactTypesNode from './impactTypes'
import cloundy from '../../static/icons/cloundy.svg';
import areaLineNode from './areaLine'
import barNode from './bar'
import AnnualWaterReduction from './AnnualWaterReduction/index'
import AnnualGHG from './AnnualGHG/index'
import AvoidedCost from './AvoidedCost/index'



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
      <Tab change={this.onChangeTab} bond={this.state.bond} />
      {
        curTab === 'TRACKER' && <div>
          <div className="DetailContentProject">
            <div className="DetailContentProjectInner">
              <div className="DetailContentProjectCard" style={{ margin: '0 31px' }}>
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
                  <SdgsAlignment projects={this.state.bond.projects}/>
                </div>

              </div>
              <div className="DetailContentProjectCard" style={{ margin: '0 31px' }}>
                <div className="DetailContentProjectCardTop">
                  <div className="title">FINANCIAL INFORMATION</div>

                </div>
                <div className="DetailContentProjectCardBottom">
                  <FinancialInformation projects={this.state.bond.projects}/>
                </div>

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
              <div className="text-area">
                <div className="text">Track the climate impacts of projects funded by this specific bond. All metrics are those recommended by the ICMA
                Harmonized Framework for Green Bond Impact Reporting. Some metrics are only tracked exclusively for certain enterprises.
                In some instances, issuers may not be able to disclose all information related to all metrics due to internal limitations. </div>
              </div>

              </div>
            <div className="impactBottom">
              <div className="impactChart">
              <div className="wrapper-info">
      <div className="wrapper-impact">
        <div className="wrapper-impact-txt1">MEASURING SOCIAL IMPACT</div>
        <div className="wrapper-impact-txt2">Track the climate impacts of projects funded by this specific bond. All metrics are those
         recommended by the ICMA Harmonized Framework for Green Bond Impact Reporting. </div>
        <div className="wrapper-impact-data">
          <div className="wrapper-impact-data-info">
            <div className="wrapper-impact-data-txt1">8,923</div>
            <div className="wrapper-impact-data-txt2">Residents with Equitable and Clean Access to Utilities</div>
            <div className="wrapper-impact-data-txt3">*Number of People with Access to Clean Water</div>
          </div>
          <div className="wrapper-impact-data-info">
            <div className="wrapper-impact-data-txt1">12,459</div>
            <div className="wrapper-impact-data-txt2">SF Residents Benefitting from Climate Mitigation Efforts</div>
          </div>
          <div className="wrapper-impact-data-info">
            <div className="wrapper-impact-data-txt1">20,000</div>
            <div className="wrapper-impact-data-txt2">New Household  Connections</div>
            <div className="wrapper-impact-data-txt3">*Number of New Household Water Connections</div>
          </div>
        </div>
      </div>
      <div className="wrapper-char">
        <div className="wrapper-char-left">
          <div className="wrapper-char-left-txt1">
            ANNUAL WATER TREATED, REUSED,  AND AVOIDED
          </div>
          <div className="flex space-bet">
            <div className="wrapper-char-left-txt2">
              Amount in Tons
            </div>
            <div className="flex wrapper-char-demo">
              <div className="wrapper-char-demo1"></div>
              <div className="wrapper-char-left-txt3">Treated</div>
              <div className="wrapper-char-demo2"></div>
              <div className="wrapper-char-left-txt3">Reused</div>
              <div className="wrapper-char-demo3"></div>
              <div className="wrapper-char-left-txt3 pr37">Avoided</div>
            </div>
          </div>
          <div className="wrapper-char-bar" id="water-page-line-chart"></div>
        </div>
        <div className="wrapper-char-right">
          <div className="flex space-bet">
            <div className="wrapper-char-right-txt1">PROJECT STATUS</div>
            <div className="wrapper-char-right-txt2">As of June 30, 2019</div>
          </div>
          <div className="flex space-bet">
            <div className="wrapper-char-right-case">
              <div className="flex">
                <div className="wrapper-char-right-button background1">
                  <span className="wrapper-char-right-txt5">44</span>
                  <span className="triangle-up"></span>
                  <span className="wrapper-char-right-txt6">1</span>
                </div>
                <div className="wrapper-char-right-txt4">Not Started</div>
              </div>
              <div className="flex">
                <div className="wrapper-char-right-button background2">
                  <span className="wrapper-char-right-txt5">44</span>
                  <span className="triangle-down"></span>
                  <span className="wrapper-char-right-txt6">1</span>
                </div>
                <div className="wrapper-char-right-txt4">Under Construction</div>
              </div>
              <div className="flex">
                <div className="wrapper-char-right-button background3">
                  <span className="wrapper-char-right-txt5">44</span>
                  <span className="triangle-up"></span>
                  <span className="wrapper-char-right-txt6">1</span>
                </div>
                <div className="wrapper-char-right-txt4">Upgraded</div>
              </div>
              <div className="flex">
                <div className="wrapper-char-right-button background4">
                  <span className="wrapper-char-right-txt5">44</span>
                  <span className="triangle-down"></span>
                  <span className="wrapper-char-right-txt6">1</span>
                </div>
                <div className="wrapper-char-right-txt4">Built</div>
              </div>
            </div>
            <div className="wrapper-char-right-txt3">
              The goal is to <span>prioritize low-carbon alternatives</span> of important community investments. Establishing a conventional project to compare against mitigation alternatives is critical for quantifying greenhouse gas reductions.
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-news">
        <div className="wrapper-news-left">
          <div className="wrapper-news-left-txt1">ANNUAL GHG EMISSIONS</div>
          <div className="wrapper-news-left-txt2">The goal is to <span>prioritize low-carbon alternatives</span> of important community investments. Establishing a conventional project to compare against mitigation alternatives is critical for quantifying greenhouse gas reductions.
          <span>Wedge</span> is the difference between emissions for conventional investment choices and emissions from actual investments selected for financing in CIP.
          </div>
        </div>
        <div className="wrapper-news-right" id="water-page-bar-char">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="waterInfoContent-tab3-demo">
              <div className="flex-r">
                <div className="waterInfoContent-tab3-bg3"></div>
                <div className="waterInfoContent-tab3-txt2 line20">Baseline</div>
              </div>
              <div className="flex-r">
                <div className="waterInfoContent-tab3-bg4"></div>
                <div className="waterInfoContent-tab3-txt2 line20">Actual</div>
              </div>
            </div>
            <div className="waterInfoContent-tab3-txt2 waterInfoContent-tab3-bg2 line30">Raw Amount [kg]</div>

          </div>
        </div>
      </div>
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