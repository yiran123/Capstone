import React, { useState } from 'react';

import right from '../../static/icons/seriesRight.svg';
import sdg3 from '../../static/icons/sdgs/E-WEB-Goal-03.png';
import sdg4 from '../../static/icons/sdgs/E-WEB-Goal-04.png';
import sdg6 from '../../static/icons/sdgs/E-WEB-Goal-06.png';

import './Series.css'

function Series ({ bond, seriesBg }) {

  return (
    <div className="seriesWrapper" style={{ 'backgroundColor': seriesBg }}>
      <div className="seriesTitle">{bond.name}
      <img src={right} alt="right" style={{ marginLeft: '20px', cursor: 'pointer' }} />
      </div>
      <div className="series-refunding-bond">
        Refunding Bond  •  2019
    </div>

      <div className="series-bond-rating">
        <div>S&P Bond rating</div>
        <div>AAA</div>
      </div>
      <div className="series-projects">
        <div style={{
          fontSize: '16px',
          lineHeight: '22px'
        }}>41 projects</div>
        <div style={{
          fontSize: '16px',
          lineHeight: '22px',
          color: '#092A47'
        }}>CUSIP: DF5</div>
      </div>

      <div className="series-line"></div>

      <div className="series-uop">
        UOP        $125, 960, 401
    </div>

      <div className="series-avg-maturity">
        Avg. Maturity       1.7%
    </div>

      <div className="series-UN-SDGs">
        <div className="series-UN-SDGs-title">UN SDGs</div>
        <div className="series-UN-SDGs">
          <img src={sdg3} width="52" height="54" alt="sdg3" style={{ marginRight: '11px' }} />
          <img src={sdg4} width="52" height="54" alt="sdg3" style={{ marginRight: '11px' }} />
          <img src={sdg6} width="52" height="54" alt="sdg3" style={{ marginRight: '11px' }} />

        </div>
      </div>
    </div>
  );
}

export default Series;