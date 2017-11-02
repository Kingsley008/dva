import React from 'react';
import { Link } from 'react-router-dom'
import style from './topmenu.css';
import {Icon, Menu} from 'antd';

const TopMenu = () => {
  return (
      <div>
          <ul>
            <Link className={style.item} to="/">index</Link>
            <Link className={style.item} to="/count">count</Link>
            <Link className={style.item} to="/todo">todo</Link>
            <Link className={style.item} to="/products">Products</Link>
          </ul>
      </div>
  )
};

export {TopMenu}
