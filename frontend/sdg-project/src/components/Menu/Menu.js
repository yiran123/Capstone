import React, { useState } from 'react';
import right from '../../static/icons/right.svg';
import './Menu.css'

const menus = [
  {
    title: 'About Us',
    path: '/about'
  },
  {
    title: 'Customer Service',
    path: '/customer',
    children: [{}]
  },
  {
    title: 'Environment',
    path: '/environment',
    children: [{}]
  },
  {
    title: 'Community',
    path: '/community',
    children: [{}]
  },
  {
    title: 'Construction Contracts',
    path: '/construction',
    children: [{}]
  },
]

function Menu () {
  const [curentMenu] = useState('/about')
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