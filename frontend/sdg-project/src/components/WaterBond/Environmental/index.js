import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import AssociatedBonds from './AssociatedBonds'
import EnvironmentalData from './EnvironmentalData'

const EnvironmentalWrapper = styled.div`
display: flex;
flex-direction: row;
margin-top: 60px;
`

export default function Environmental () {
  return <EnvironmentalWrapper>
    <EnvironmentalData />
    <AssociatedBonds />
  </EnvironmentalWrapper>
}