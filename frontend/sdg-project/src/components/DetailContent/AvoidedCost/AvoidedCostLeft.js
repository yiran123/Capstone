import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

// import barNode from './barChart'

// import './style.css'

const Wrapper = styled.div`
background: #fff;
box-sizing: border-box;
flex: 1 1 auto;
width: 50%;
box-shadow: 0px 0px 15px 2px #C0CEDB;
padding-bottom: 20px;
`

const Header = styled.div`
color: #3D4857;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 80px;
line-height: 109px;
text-align: center;
`


const TextWrapper = styled.p`
color: #0F1F19;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 29px;
text-align: center;
`

function AvoidedCostLeft () {

  useEffect(() => {
    // if (document.querySelector('#AnnualWaterReductionBarNode')) {
    //   document.querySelector('#AnnualWaterReductionBarNode').append(barNode)
    // }
  }, [])


  return <Wrapper>
    <Header>2000</Header>
    <TextWrapper>SF Residents Benefitting from Climate Mitigation Efforts</TextWrapper>
    {/* <TextWrapper></TextWrapper> */}
  </Wrapper>

}

export default AvoidedCostLeft