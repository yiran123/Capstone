import React from 'react';
import Swiper from '../components/Swiper/Swiper'
import Filter from '../components/Filter/Filter'
import FilterResult from '../components/FilterResult/FilterResult'
import { filterResults } from './config'

class InvestorPortal extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      bonds:[],
      filteredBonds:[],
      hash :''
    }
    this.fetchBonds = this.fetchBonds.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
  }

  applyFilter(funding, year, sdg) {

     var temp = this.state.bonds.filter(bond => {
        if (sdg == 'all') return true;
        else return bond.sdgs.includes(sdg);
        } )
       temp =  temp.filter(bond => {
        if (funding == 'all') return true;
        else return bond.series == funding;
        } )
          temp =  temp.filter(bond => {
        if (year == 'all') return true;
        else return bond.issue_year == year;
        } )
        this.setState({filteredBonds: temp})
  }

  fetchBonds() {
      fetch('http://localhost:8000/api/bond')
    .then(response => response.json())
    .then(data =>
      this.setState({bonds:data, filteredBonds:data})
      )
  }

  componentWillMount() {
    this.fetchBonds();
  }


  render() {
      return (
    <div className="Header">
      <Swiper />
      <Filter changeFilter={this.applyFilter}  />
      {
        filterResults.map((item) => {
          return <FilterResult result={item} bonds={this.state.filteredBonds} />
        })
      }

    </div>);
  }

}


export default InvestorPortal;