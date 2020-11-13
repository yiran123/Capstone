import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import stackBar from './stackBarChart'


const StyledButton = styled(Button)`
color: #EB67D0;
height: 32px;
&.MuiButton-containedPrimary{
color: #EB67D0;
height: 32px;
background: #7557e545;
  margin-right: 14px;
  &:hover{
    background: #7557e545;

    }
}
`
const Wrapper = styled.div`
padding: 20px 32px;
background: #fff;
flex: 1 1 auto;
width: 50%;
margin-right: 11px;
box-shadow: 0px 0px 15px 2px #C0CEDB;
box-sizing: border-box;
`

const Header = styled.div`

`

const HeaderTop = styled.div`
display: flex;
    justify-content: space-between;
`

const HeaderTitle = styled.div`
color: #0F1F19;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
`

const HeaderDesc = styled.div`
color: #263238;
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`

const ButtonsWraper = styled.div`
display: flex;
`


function AvoidedCostRight () {

  useEffect(() => {
    if (document.querySelector('#AvoidedCostRightStackBarNode')) {
      document.querySelector('#AvoidedCostRightStackBarNode').append(stackBar())
    }
  }, [])


  return <Wrapper>
    <Header>
      <HeaderTop>
        <HeaderTitle>
          Avoided Cost
        </HeaderTitle>
        <ButtonsWraper>
          <StyledButton size="small" variant="contained" color="primary">Renewable Projects</StyledButton>
          <StyledButton >Energy Efficnecy Projects</StyledButton>
        </ButtonsWraper>
      </HeaderTop>
      <HeaderDesc>tonnes of CO2 equivalent</HeaderDesc>

    </Header>
    <div id="AvoidedCostRightStackBarNode"></div>

  </Wrapper>

}

export default AvoidedCostRight