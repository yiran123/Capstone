import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import barNode from './barChart'
import pieNode from './pieChart'
// import barNode from './barChart'

// import './style.css'

const Wrapper = styled.div`
background: #fff;
margin-right: 11px;
flex: 1 1 auto;
width: 50%;
box-sizing: border-box;
box-shadow: 0px 0px 15px 2px #C0CEDB;
`

const Header = styled.div`
color: #0F1F19;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
padding: 20px 32px;
background: #F7F7F7;
`

const BodyWrapper = styled.div`
  padding: 20px 32px;
`

const BodyTextWrapper = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`

const TextHight = styled.span`
color: #3AB2E3;
font-weight: bold;
`

const ChartWrapper = styled.div`
display: flex;
`

const ChartItem = styled.div`
flex: 1 1 auto;
`

function EmissionsReduced () {

  useEffect(() => {
    if (document.querySelector('#EmissionsReducedBarNode')) {
      document.querySelector('#EmissionsReducedBarNode').append(barNode)
    }

    if (document.querySelector('#EmissionsReducedPieNode')) {
      document.querySelector('#EmissionsReducedPieNode').append(pieNode)
    }
  }, [])


  return <Wrapper>
    <Header>Annual GHG Emissions Reduced</Header>
    <BodyWrapper>
      <ChartWrapper>
        <ChartItem style={{ width: '70%' }} id="EmissionsReducedBarNode"></ChartItem>
        <ChartItem style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="EmissionsReducedPieNode"></ChartItem>
      </ChartWrapper>
      <BodyTextWrapper>
        The goal is to <TextHight>prioritize low-carbon alternatives</TextHight> of important community investments. Establishing a conventional project to compare against mitigation alternatives is critical for quantifying greenhouse gas reductions.
        <TextHight>Wedge</TextHight> is the difference between emissions for conventional investment choices and emissions from actual investments selected for financing in CIP.
    </BodyTextWrapper>
    </BodyWrapper>
  </Wrapper>

}

export default EmissionsReduced