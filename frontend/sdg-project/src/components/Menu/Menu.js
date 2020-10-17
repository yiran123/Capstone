import React, { useState } from 'react';
import right from '../../static/icons/right.svg';
import './Menu.css'

const menus = [
  {
    title: 'Investor Portal',
    path: '/investor'
  },
  {
    title: 'About Impact Green',
    path: '/about',
    children: [{}]
  },
  {
    title: 'Resources',
    path: '/resources',
    children: [{}]
  },
  
]

function Menu () {
  const [curentMenu] = useState('/investor')
  return (
    <div className="menu">
      <div className="menu-inner">
        {
          menus.map(menu => {
            return <div key={menu.path} className={`menu-item ${curentMenu === menu.path && 'menu-item-active'} `}>
              <p>{menu.title}</p>
              {menu.children && menu.children.length && <img src={right} className="menu-item-img" alt="right" />}


            </div>
          })
        }

      </div>
    </div>
  );
}

export default Menu;