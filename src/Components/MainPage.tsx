import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from "./App.module.css";

export const MainPage = () => {
  return (
    <div className={styles.gridContainer}>
      <nav>
        <ul>
          <li>
            <Link to='/one'>Counter</Link>
          </li>
          <li>
            <Link to='/two'>Reviews</Link>
          </li>
          <li>
            <Link to='/three'>Giveaway</Link>
          </li>
          <li>
            <Link to='/four'>Grocery Bud</Link>
          </li>
          <li>
            <Link to='/five'>Grocery Bud</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  )
};