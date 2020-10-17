import React, { useState } from 'react';

import right from '../../static/icons/seriesRight.svg';
import sdg3 from '../../static/icons/sdgs/E-WEB-Goal-03.png';
import sdg4 from '../../static/icons/sdgs/E-WEB-Goal-04.png';
import sdg6 from '../../static/icons/sdgs/E-WEB-Goal-06.png';

import './Series.css'

class Series extends React.Component  {
  constructor(props) {
    super(props);
    this.state ={
      hash :'',
    }
    this.goOtherPage = this.goOtherPage.bind(this)

  }

  goOtherPage() {
    this.setState({hash : `/detail/${this.props.bond.id}`})
    window.location.href = `${window.location.origin}/detail/${this.props.bond.id}`
  }

  componentDidMount() {
     if (window.location.hash === '/detail') {
      this.setState({hash:window.location.hash})
    }
  }

render() {
  const seriesBg = this.props.seriesBg;
  const bond = this.props.bond;
  const self = this;
  return (
    <div className="seriesWrapper" style={{ 'backgroundColor': seriesBg }}>
      <div className="seriesTitle">{bond.name}
      <img onClick={()=>self.goOtherPage()} src={right} alt="right" style={{ marginLeft: '20px', cursor: 'pointer' }} />
      </div>
      <div className="series-refunding-bond">
        {bond.bond_type} Bond  •  {bond.issue_year}
    </div>

      <div className="series-bond-rating">
        <div>S&P Bond rating</div>
        <div>AAA</div>
      </div>
      <div className="series-projects">
        <div style={{
          fontSize: '16px',
          lineHeight: '22px'
        }}>{bond.project_counts} projects</div>
        <div style={{
          fontSize: '16px',
          lineHeight: '22px',
          color: '#092A47'
        }}>CUSIP: {bond.CUSIP}</div>
      </div>

      <div className="series-line"></div>

      <div className="series-uop">
        UOP        ${bond.use_of_proceeds}
    </div>

      <div className="series-avg-maturity">
        Avg. Maturity       {(bond.avg_mature_rate*100).toFixed(2)}%
    </div>

      <div className="series-UN-SDGs">
        <div className="series-UN-SDGs-title">UN SDGs</div>
        <div className="series-UN-SDGs">
          {
            bond.sdgs.map((sdg)=>{
              if(sdg <= 9) {
                sdg = "0"+sdg
              }

              return <img src={require(`../../static/icons/sdgs/E-WEB-Goal-${sdg}.png`)} width="52" height="54" alt={sdg} style={{ marginRight: '11px' }} />

            })
          }

        </div>
      </div>
    </div>
  );
}
}

export default Series;