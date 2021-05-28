import Header from '../Header';
import Menu from '../Dashboard/Menu';
import React from 'react';
import './Layout.css';

export const Layout = ({children}) => (
<div className="app-layout">
  <Header />
  <Menu />
  <div className="app-content">
    {children}
  </div>
</div>
)
