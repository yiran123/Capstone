import React, { useState, useEffect } from 'react';
import LocalContractorsNode from './LocalContractors'
import MapChart from './mapChart'

import './DetailContentBottom.css'


function DetailContentBottom () {
  useEffect(() => {

    if (document.querySelector('#LocalContractorsNode')) {
      document.querySelector('#LocalContractorsNode').append(LocalContractorsNode)
    }

    if (document.querySelector('#mapChart')) {
      document.querySelector('#mapChart').append(MapChart)
    }

  })
  return (
    <div className="DetailContentBottom">

      <div className="card">
        <div>
          <div className="LocalTitle">
            <p className="LocalTitleText">Local Contractors</p>
            <p className="LocalTitleText">Top Project Contractors</p>
          </div>
          <p className="LocalHelp">Fund Weight</p>
        </div>
        <div id="LocalContractorsNode"></div>
      </div>

    </div >
  );
}

export default DetailContentBottom;