import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from "./App.module.css";

export const MainPage = () => {
  return (
    <div className={styles.gridContainer}>
      <nav>
        <ul>
          <li>
            <Link to='/one'>Page One</Link>
          </li>
          <li>
            <Link to='/two'>Page Two</Link>
          </li>
          <li>
            <Link to='/three'>Page Three</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  )
};