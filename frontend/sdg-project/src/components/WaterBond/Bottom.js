import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import stackBar from '../DetailContent/AvoidedCost/stackBarChart'

const BottomWrapper = styled.div`

display: flex;
padding: 30px;
`
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

  // useEffect(() => {
  //   if (document.querySelector('#AvoidedCostRightStackBarNode')) {
  //     document.querySelector('#AvoidedCostRightStackBarNode').append(stackBarNode)
  //   }
  // }, [])


  return <BottomWrapper>
    <Item idName="BottomStackBar1" />
    <Item idName="BottomStackBar2" />
  </BottomWrapper>

}

const Item = ({ idName }) => {
  useEffect(() => {
    if (document.querySelector(`#${idName}`)) {
      document.querySelector(`#${idName}`).append(stackBar())
    }
  }, [])
  return <Wrapper>
    <Header>
      <HeaderTop>
        <HeaderTitle>
          Avoided Cost
      </HeaderTitle>
      </HeaderTop>
      <HeaderDesc>tonnes of CO2 equivalent</HeaderDesc>

    </Header>
    <div id={idName}></div>

  </Wrapper>
}

export default AvoidedCostRight