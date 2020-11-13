import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import stackBarNode from './stackBarChart'


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
box-sizing: border-box;
box-shadow: 0px 0px 15px 2px #C0CEDB;
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


function EmissionsReduced () {

  useEffect(() => {
    if (document.querySelector('#EmissionsReducedStackBarNode')) {
      document.querySelector('#EmissionsReducedStackBarNode').append(stackBarNode)
    }
  }, [])


  return <Wrapper>
    <Header>
      <HeaderTop>
        <HeaderTitle>
          Annual GHG Emissions
          <HeaderDesc>tonnes of CO2 equivalent</HeaderDesc>
        </HeaderTitle>
        <StyledButton size="small" variant="contained" color="primary">Renewable Projects</StyledButton>
      </HeaderTop>

    </Header>
    <div id="EmissionsReducedStackBarNode"></div>
  </Wrapper>

}

export default EmissionsReduced