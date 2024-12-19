import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list"></ul>
        <div className="logo">
          <h1><img src="/images/logo.png" alt="" srcset="" /></h1>
        </div>
        <ul className="nav-list">
          <li>회원 정보</li>
          <li>상품 정보</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;