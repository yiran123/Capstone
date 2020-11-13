import React, { useState, useEffect } from 'react';
import barNode from './barChart'
import './style.css'

function AnnualWaterReduction () {

  useEffect(() => {
    if (document.querySelector('#AnnualWaterReductionBarNode')) {
      document.querySelector('#AnnualWaterReductionBarNode').append(barNode)
    }
  }, [])


  return <div className="AnnualWaterReduction">
    <div className="AnnualWaterReductionHeader">
      <p className="AnnualWaterReductionHeadertitle">Annual Water Reduction </p>
      <p style={{ color: '#1589EE' }}>Amount [Tons] Reduction [%]</p>
    </div>
    <div id="AnnualWaterReductionBarNode"></div>
  </div>

}

export default AnnualWaterReduction