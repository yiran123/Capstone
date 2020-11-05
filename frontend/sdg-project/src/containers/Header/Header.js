import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/auth';
import logo from '../../static/icons/logo.png';
import search from '../../static/icons/search.svg';
import './Header.css';

const LoginButton = styled(Button)`
  color: white;
  height: 32px;
  width: 99px;
  &.MuiButton-containedPrimary{
    background-color: #1589EE;
    &:hover{
      background-color: #1589EE;
      }
  }
`;

const SearchButton = styled(Button)`
  color: white;
  height: 32px;
  &.MuiButton-containedPrimary{
    width: 32px;
    min-width: 32px;
    height: 32px;
    background-color: rgba(21, 137, 238, 0.1);
    margin-right: 14px;
    &:hover{
    background-color: rgba(21, 137, 238, 0.1);
      }
  }
`;

class Header extends Component {
  //const [lang, setLang] = useState('ESPANOL')
  render() {
    return (
      <div className="page-header">
        <div className="page-header-inner">
          <img src={logo} className="page-header-logo" alt="logo" />
  
          <div>
            <SearchButton size="small" variant="contained" color="primary">
              <img src={search} alt="search" />
            </SearchButton>
            
            {
              this.props.isAuthenticated ?
  
              <LoginButton onClick={this.props.logout} size="small" variant="contained" color="primary">
                LOGOUT
              </LoginButton>
  
              :
  
              <LoginButton href="/login" size="small" variant="contained" color="primary">
                LOGIN
              </LoginButton>
            }
            <LoginButton onClick={this.props.logout} size="small" variant="contained" color="primary">
              LOGOUT
            </LoginButton>
  
          </div>
        </div>
        
        {/* <logo /> */}
        {/* this is header */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Header);