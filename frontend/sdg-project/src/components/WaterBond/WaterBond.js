import React, { useState, useEffect } from 'react';
import Header from './Header'
import Environmental from './Environmental/index'
import Bottom from './Bottom'
import sdg3 from '../../static/icons/sdgs/E-WEB-Goal-03.png';
import sdg4 from '../../static/icons/sdgs/E-WEB-Goal-04.png';
import sdg6 from '../../static/icons/sdgs/E-WEB-Goal-06.png';
import sdg7 from '../../static/icons/sdgs/E-WEB-Goal-07.png';
import sdg8 from '../../static/icons/sdgs/E-WEB-Goal-08.png';
import whiteRight from '../../static/icons/whiteRight.svg';

import './SewerProject.css'


class WaterBond extends React.Component {
	constructor(props) {
    super(props);
    this.state ={
      
      project:{
        
      }
    }
    this.fetchProject = this.fetchProject.bind(this)
	}
	componentWillMount() {
    this.fetchProject();
  }
  fetchProject() {
    fetch(`http://localhost:8000/api/project/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data =>
      this.setState({project:data})
      )
  }
	render() {
		return (
			<div>
			<Header project={this.state.project}/>
	    <div className="waterInfoContent flex-r">
      <div className="waterInfoContent-left">
        <div>
          <div className="waterInfoContent-txt1">FINANCIAL INFORMATION</div>
          <div className="waterInfoContent-left-tab1">
            <div className="flex-r">
              <div className="waterInfoContent-txt2 waterInfoContent-left-tr1">BOND NAME</div>
              <div className="waterInfoContent-txt2 waterInfoContent-left-tr2">UOP</div>
              <div className="waterInfoContent-txt2">FY 18-19 SPENT</div>
              <div className="waterInfoContent-txt2">PRIOR SPENT</div>
              <div className="waterInfoContent-txt2">TOTAL SPENT</div>
            </div>
            <div className="flex-r tr1">
              <div className="waterInfoContent-txt3 waterInfoContent-left-td1">2016 C Water Revenue</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
            </div>
            <div className="flex-r tr2">
              <div className="waterInfoContent-txt3 waterInfoContent-left-td1">2016 C Water Revenue</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
            </div>
            <div className="flex-r tr3">
              <div className="waterInfoContent-txt3 waterInfoContent-left-td1">2016 C Water Revenue</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
              <div className="waterInfoContent-txt3">$23,230,239</div>
            </div>
          </div>
        </div>
        <div>
          <div className="waterInfoContent-txt1">CLIMATE IMPACT DATA</div>
          <div className="waterInfoContent-tab2">
            <div className="waterInfoContent-txt7">MEASURING SOCIAL IMPACT</div>
            <div className="flex-r">
              <div className="flex11 waterInfoContent-tab2-tr">
                <div className="waterInfoContent-txt6">8,923</div>
                <div className="waterInfoContent-txt4">Residents with Equitable and Clean Access to Utilities</div>
                <div className="waterInfoContent-txt5">*Number of People with Access to Clean Water</div>
              </div>
              <div className="flex11 waterInfoContent-tab2-tr">
                <div className="waterInfoContent-txt6">12,459</div>
                <div className="waterInfoContent-txt4">Residents Benefitting from Climate Mitigation Efforts</div>
              </div>
              <div className="flex11 waterInfoContent-tab2-tr">
                <div className="waterInfoContent-txt6">20,000</div>
                <div className="waterInfoContent-txt4">New Household  Connections</div>
                <div className="waterInfoContent-txt5">*Number of New Household Water Connections</div>
              </div>
            </div>
          </div>
        </div>
        <div className="waterInfoContent-tab3">
          <div className="flex-r">
            <div className="waterInfoContent-tab3-txt1">ANNUAL GHG EMISSIONS</div>
            <div className="waterInfoContent-tab3-txt2 waterInfoContent-tab3-bg1 line30">Percent Reduction [%]</div>
            <div className="waterInfoContent-tab3-txt2 waterInfoContent-tab3-bg2 line30">Raw Amount [kg]</div>
          </div>
          <div className="flex-rz">
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
          </div>
          <div className="waterInfoContent-tab3-bar" id="water-info-bar-chart">
          </div>
        </div>
        <div className="waterInfoContent-tab4">
          <div>
            <div className="waterInfoContent-tab4-txt1">ANNUAL WATER TREATED, REUSED,  AND AVOIDED </div>
            <div className="flex-r flex-spb">
              <div className="waterInfoContent-tab4-txt2">Amount in Joules</div>
              <div className="flex-r flex-spb waterInfoContent-tab4-demo">
                <div className="waterInfoContent-tab4-bg1"></div>
                <div className="waterInfoContent-tab4-txt3">Treated</div>
                <div className="waterInfoContent-tab4-bg2"></div>
                <div className="waterInfoContent-tab4-txt3">Reused</div>
                <div className="waterInfoContent-tab4-bg3"></div>
                <div className="waterInfoContent-tab4-txt3">Avoided</div>
              </div>
            </div>
          </div>
          <div className="waterInfoContent-tab3-line" id="water-info-line-chart"></div>
        </div>
        <div className="waterInfoContent-tab5">
          <div className="flex-r flex-spb">
            <div className="flex11 waterInfoContent-tab5-txt1">YEAR</div>
            <div className="flex11 waterInfoContent-tab5-txt2 waterInfoContent-tab5-width182">Annual Energy Generation from Nonrecyclable waste (J)</div>
            <div className="flex11 waterInfoContent-tab5-txt2 waterInfoContent-tab5-width131">Energy Recovered from Waste</div>
            <div className="flex11 waterInfoContent-tab5-txt4 waterInfoContent-tab5-width149">Annual Gross Amount of waste  (Tons)</div>
            <div className="flex11 waterInfoContent-tab5-txt1">Project Status</div>
          </div>
          <div className="flex-r flex-spb waterInfoContent-tab5-border">
            <div className="waterInfoContent-tab5-td1 waterInfoContent-tab5-txt3">2016</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width182">134,551</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width131">14%</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width149">134,551</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width120">Built</div>
          </div>
          <div className="flex-r flex-spb">
            <div className="waterInfoContent-tab5-td1 waterInfoContent-tab5-txt3">2017</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width182">231,712</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width131">12%</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width149">123,231</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width120">Built</div>
          </div>
          <div className="flex-r flex-spb waterInfoContent-tab5-border">
            <div className="waterInfoContent-tab5-td1 waterInfoContent-tab5-txt3">2018</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width182">123,231</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width131">---</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width149">123,231</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width120">Built</div>
          </div>
          <div className="flex-r flex-spb ">
            <div className="waterInfoContent-tab5-td1 waterInfoContent-tab5-txt3">2019</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width182">342,545</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width131">21.2%</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width149">342,545</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width120">Under Con.</div>
          </div>
          <div className="flex-r flex-spb flex-spb waterInfoContent-tab5-border">
            <div className="waterInfoContent-tab5-td1 waterInfoContent-tab5-txt3">2020</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width182">231,232</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width131">---</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width149">231,232</div>
            <div className=" waterInfoContent-tab5-txt3 waterInfoContent-tab5-width120">Upgraded</div>
          </div>
        </div>
      </div>
      <div className="waterInfoContent-right">
        <div className="waterInfoContent-txt1">ASSOCIATED BONDS</div>
        <div className="waterInfoContent-right-label waterInfoContent-right-label-bg1">
          <div className="flex-r flex-spb waterInfoContent-right-label-tr1">
            <div className="waterInfoContent-right-label-txt1">Series 2017G</div>
            <img className="whiteRight" src={whiteRight} />
          </div>
          <div className="waterInfoContent-right-label-txt2 waterInfoContent-right-label-tr2 waterInfoContent-right-label-border1">Refunding Bond  •  2019 </div>
          <div className="flex-r flex-spb waterInfoContent-right-label-tr3 waterInfoContent-right-label-border1">
            <div className="waterInfoContent-right-label-txt3">41 projects</div>
            <div className="waterInfoContent-right-label-txt6">CUSIP: DF5</div>
          </div>
          <div className="flex-r waterInfoContent-right-label-tr4">
            <div className="waterInfoContent-right-label-txt4">UOP</div>
            <div className="waterInfoContent-right-label-txt4">$125, 960, 401</div>
          </div>
          <div className="flex-r waterInfoContent-right-label-tr5">
            <div className="waterInfoContent-right-label-txt4">Avg. Maturity</div>
            <div className="waterInfoContent-right-label-txt4">1.7%</div>
          </div>
          <div className="waterInfoContent-right-label-txt5 waterInfoContent-right-label-tr4">UN SDGs</div>
          <div className="flex-r">
            <img className="tabDescImg" src={sdg3} />
            <img className="tabDescImg" src={sdg4} />
            <img className="tabDescImg" src={sdg6} />
          </div>
        </div>
        <div className="waterInfoContent-right-label waterInfoContent-right-label-bg2">
          <div className="flex-r flex-spb waterInfoContent-right-label-tr1">
            <div className="waterInfoContent-right-label-txt1">Series 2017A</div>
            <img className="whiteRight" src={whiteRight} />
          </div>
          <div className="waterInfoContent-right-label-txt2 waterInfoContent-right-label-tr2 waterInfoContent-right-label-border2">Refunding Bond  •  2019 </div>
          <div className="flex-r flex-spb waterInfoContent-right-label-tr3 waterInfoContent-right-label-border2">
            <div className="waterInfoContent-right-label-txt3">31 projects</div>
            <div className="waterInfoContent-right-label-txt6">CUSIP: DF5</div>
          </div>
          <div className="flex-r waterInfoContent-right-label-tr4">
            <div className="waterInfoContent-right-label-txt4">UOP</div>
            <div className="waterInfoContent-right-label-txt4">$125, 960, 401</div>
          </div>
          <div className="flex-r waterInfoContent-right-label-tr5">
            <div className="waterInfoContent-right-label-txt4">Avg. Maturity</div>
            <div className="waterInfoContent-right-label-txt4">1.7%</div>
          </div>
          <div className="waterInfoContent-right-label-txt5 waterInfoContent-right-label-tr4">UN SDGs</div>
          <div className="flex-r">
            <img className="tabDescImg" src={sdg3} />
            <img className="tabDescImg" src={sdg4} />
            <img className="tabDescImg" src={sdg6} />
          </div>
        </div>
        <div className="waterInfoContent-right-label waterInfoContent-right-label-bg2">
          <div className="flex-r flex-spb waterInfoContent-right-label-tr1">
            <div className="waterInfoContent-right-label-txt1">Series 2017A</div>
            <img className="whiteRight" src={whiteRight} />
          </div>
          <div className="waterInfoContent-right-label-txt2 waterInfoContent-right-label-tr2 waterInfoContent-right-label-border2">Refunding Bond  •  2019 </div>
          <div className="flex-r flex-spb waterInfoContent-right-label-tr3 waterInfoContent-right-label-border2">
            <div className="waterInfoContent-right-label-txt3">31 projects</div>
            <div className="waterInfoContent-right-label-txt6">CUSIP: DF5</div>
          </div>
          <div className="flex-r waterInfoContent-right-label-tr4">
            <div className="waterInfoContent-right-label-txt4">UOP</div>
            <div className="waterInfoContent-right-label-txt4">$125, 960, 401</div>
          </div>
          <div className="flex-r waterInfoContent-right-label-tr5">
            <div className="waterInfoContent-right-label-txt4">Avg. Maturity</div>
            <div className="waterInfoContent-right-label-txt4">1.7%</div>
          </div>
          <div className="waterInfoContent-right-label-txt5 waterInfoContent-right-label-tr4">UN SDGs</div>
          <div className="flex-r">
            <img className="tabDescImg" src={sdg3} />
            <img className="tabDescImg" src={sdg4} />
            <img className="tabDescImg" src={sdg6} />
          </div>
        </div>
      </div>
    </div>
	    	</div>
		)
	}
}
export default WaterBond;