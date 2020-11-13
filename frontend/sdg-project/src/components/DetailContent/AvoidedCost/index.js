import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import AvoidedCostLeft from './AvoidedCostLeft'
import AvoidedCostRight from './AvoidedCostRight'

const Wrapper = styled.div`
margin-top: 40px;
display: flex;
flex-direction: row;
align-items: flex-start;
`

function AvoidedCost () {


  return <Wrapper>
    <AvoidedCostRight />
    <AvoidedCostLeft />
  </Wrapper>

}

export default AvoidedCost