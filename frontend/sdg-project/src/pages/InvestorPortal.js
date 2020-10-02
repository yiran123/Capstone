import React from 'react';
import Swiper from '../components/Swiper/Swiper'
import Filter from '../components/Filter/Filter'
import FilterResult from '../components/FilterResult/FilterResult'
import { filterResults } from './config'

function InvestorPortal () {
  return (
    <div className="Header">
      <Swiper />
      <Filter />
      {
        filterResults.map((item) => {
          return <FilterResult result={item} />
        })
      }

    </div >
  );
}

export default InvestorPortal;