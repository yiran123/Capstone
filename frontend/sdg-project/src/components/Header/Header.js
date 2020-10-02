import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

import logo from '../../static/icons/logo.svg';
import search from '../../static/icons/search.svg';
import langImg from '../../static/icons/lang.svg';
import checkImg from '../../static/icons/check.svg';
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


function Header () {
  const [lang, setLang] = useState('ESPANOL')

  return (
    <div className="page-header">
      <div className="page-header-inner">
        <img src={logo} className="page-header-logo" alt="logo" />
        <div className="lang-change">
          <div>
            ENGLISH
          <img src={checkImg} alt="checkImg" />
          </div>
          <img src={langImg} className="lang-change-img" alt="langImglangImg" />
          <div className="lang-change-item-active">
            ESPANOL

          </div>
        </div>
        <div>
          <SearchButton size="small" variant="contained" color="primary">
            <img src={search} alt="search" />
          </SearchButton>
          <LoginButton size="small" variant="contained" color="primary">
            LOGIN
        </LoginButton>
        </div>
      </div>




      {/* <logo /> */}
      {/* this is header */}
    </div>
  );
}

export default Header;