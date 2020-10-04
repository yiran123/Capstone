import React from 'react';
import Swiper from '../components/Swiper/Swiper'
import Filter from '../components/Filter/Filter'
import FilterResult from '../components/FilterResult/FilterResult'
import { filterResults } from './config'

class InvestorPortal extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      bonds:[]
    }
    this.fetchBonds = this.fetchBonds.bind(this)

  }

   fetchBonds() {
      fetch('http://localhost:8000/api/bond')
    .then(response => response.json())
    .then(data =>
      this.setState({bonds:data})
      )
  }

  componentWillMount() {
    this.fetchBonds();

  }

  render() {

      return (
    <div className="Header">
      <Swiper />
      <Filter />
      {
        filterResults.map((item) => {
          return <FilterResult result={item} bonds={this.state.bonds} />
        })
      }

    </div>);
  }

}

export default InvestorPortal;