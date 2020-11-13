import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import barNode from '../../DetailContent/AnnualGHG/barChart'
import pieNode from '../../DetailContent/AnnualGHG/pieChart'
import outPieChart from './pieChart'

import Series from '../../Series/Series'
import { filterResults } from '../../../pages/config'
import { style } from 'd3';

const EnvironmentalDataWrapper = styled.div`
flex: 1 1 auto;
width: 70%;
`

const EnvironmentalDataTop = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 40px;
`

const TopItem = styled.div`
background: #FFFFFF;
padding: 20px 10px;
box-shadow: 0px 0px 15px 2px #C0CEDB;
width: 50%;
flex: 1 1 auto;
`

const TopItemHeader = styled.div`
color: #3D4857;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 80px;
line-height: 109px;
text-align: center;
`


const TopItemTextWrapper = styled.p`
color: #0F1F19;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 29px;
text-align: center;
`


const EnvironmentalDataBottom = styled.div`
`

const CarbonEmissionsWrapper = styled.div`

`

const CarbonEmissionsHeader = styled.div`
padding: 26px 36px;
background: #F6F6F6;
display: flex;
flex-direction: row;
`

const CarbonEmissionsTitle = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
color: #0F1F19;
`

const ButtonGroup = styled.div`

`
const StyledButton = styled.span`
display: inline-block;
padding: 5px 8px;
background: #fff;
color: #1589EE;
font-weight: bold;
font-size: 11px;
line-height: 18px;
cursor: pointer;
margin-right: 10px;

&.active{
  color: #fff;
  background: #1589EE;
}
`

const CarbonEmissionsBottom = styled.div``


const BodyTextWrapper = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`

const HeaderTitle = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
color: #0F1F19;
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
export default function EnvironmentalData () {
  useEffect(() => {
    if (document.querySelector('#EmissionsReducedBarNode')) {
      document.querySelector('#EmissionsReducedBarNode').append(barNode)
    }

    if (document.querySelector('#EmissionsReducedPieNode')) {
      document.querySelector('#EmissionsReducedPieNode').append(pieNode)
    }
    if (document.querySelector('#outPieChartNode')) {
      document.querySelector('#outPieChartNode').append(outPieChart)
    }

  }, [])

  return <EnvironmentalDataWrapper>
    <HeaderTitle>
      Environmental and Social Data
    </HeaderTitle>
    <EnvironmentalDataTop>
      <TopItem style={{ marginRight: '15px' }}>
        <div id="outPieChartNode"></div>
      </TopItem>
      <TopItem>
        <TopItemHeader>2000</TopItemHeader>
        <TopItemTextWrapper>SF Residents Benefitting from Climate Mitigation Efforts</TopItemTextWrapper>
      </TopItem>
    </EnvironmentalDataTop>
    <EnvironmentalDataBottom>
      <CarbonEmissionsHeader>
        <CarbonEmissionsTitle>Carbon Emissions</CarbonEmissionsTitle>
        <ButtonGroup>
          <StyledButton>ALL BONDS</StyledButton>
          <StyledButton>2007G</StyledButton>
          <StyledButton className="active">2007A</StyledButton>
          <StyledButton>2007C</StyledButton>
          <StyledButton>2007B</StyledButton>
        </ButtonGroup>
      </CarbonEmissionsHeader>
      <CarbonEmissionsBottom>
        <ChartWrapper>
          <ChartItem style={{ width: '70%' }} id="EmissionsReducedBarNode"></ChartItem>
          <ChartItem style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="EmissionsReducedPieNode"></ChartItem>
        </ChartWrapper>
        <BodyTextWrapper>
          The goal is to <TextHight>prioritize low-carbon alternatives</TextHight> of important community investments. Establishing a conventional project to compare against mitigation alternatives is critical for quantifying greenhouse gas reductions.
        <TextHight>Wedge</TextHight> is the difference between emissions for conventional investment choices and emissions from actual investments selected for financing in CIP.
    </BodyTextWrapper>
      </CarbonEmissionsBottom>
    </EnvironmentalDataBottom>
  </EnvironmentalDataWrapper>
}