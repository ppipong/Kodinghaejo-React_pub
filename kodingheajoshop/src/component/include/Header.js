import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1><img src="/images/logo.png" alt="" srcset="" /></h1>
        </div>
        <div className="nav-menu">
          <ul className="nav-list">
            <li>icon</li>
          </ul>
          <ul className="nav-list">
            <li><a href="">회원 정보</a></li>
            <li><a href="">상품 정보</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;