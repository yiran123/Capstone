import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import EmissionsReduced from './EmissionsReduced'
import Emissions from './Emissions'

const Wrapper = styled.div`
margin-top: 40px;
display: flex;
flex-direction: row;
`

function AnnualGHG () {


  return <Wrapper>
    <EmissionsReduced />
    <Emissions />
  </Wrapper>

}

export default AnnualGHG