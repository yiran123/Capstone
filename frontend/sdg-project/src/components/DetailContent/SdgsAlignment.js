import React from 'react';
import styled from 'styled-components'
import _ from 'lodash'
import { unsdgs } from '../Filter/const'

const sdgsAlignment = [
  { value: 7, showTotal: '$30, 084,618', total: 30084618 },
  { value: 6, showTotal: '$20, 084,618', total: 20084618 },
  { value: 5, showTotal: '$25, 084,618', total: 20084618 },
  { value: 4, showTotal: '$30, 084,618', total: 10114618 },
  { value: 8, showTotal: '$30, 084,618', total: 30154618 },
]

const SdgsAlignmentItemWrapper = styled.div`
  display: flex;
  margin-bottom: 6px;
`

const ShowTotalLabel = styled.div`
  width: ${props => props.width}%;
  background: #E6E7E8;
  height: 56px;
  line-height: 56px;
  padding: 0 8px;
`

const getWidth = (width) => {
  const maxWidth = _.maxBy(sdgsAlignment, (sdg) => sdg.total).total
  console.log('maxWidth', Number.parseInt(width / maxWidth * 100))

  return Number.parseInt(width / maxWidth * 100)
}

console.log(getWidth(30084618))

function SdgsAlignment () {

  return (
    <div className="SdgsAlignment">
      {
        sdgsAlignment.map(sdg => {
          return <SdgsAlignmentItemWrapper>
            <img width="56" height="56" src={unsdgs[sdg.value]} alt='sdg' />
            <ShowTotalLabel width={getWidth(sdg.total)}>{sdg.showTotal}</ShowTotalLabel>
          </SdgsAlignmentItemWrapper>
        })
      }

    </div >
  );
}

export default SdgsAlignment;