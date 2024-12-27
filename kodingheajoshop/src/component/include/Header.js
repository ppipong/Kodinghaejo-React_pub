import React from 'react';

const Header = () => {
  if (window.scrollY > 100) { document.querySelector('.header nav').style.position = 'fixed';}
  return (
    <header>
      <nav>
        <div className="logo">
          <h1><img src="/images/logo.png" alt="" srcset="" /></h1>
        </div>
        <div className="nav-menu">
          <ul className="nav-list left"  onClick={ function(){ document.querySelector('.tab-list-menu').classList.toggle('active') }}>
            <li><i class="bi bi-justify-left"></i></li>
          </ul>
          <ul className="nav-list right">
            <li><a href="#">회원 정보</a></li>
            <li><a href="#">주문 정보</a></li>
          </ul>
        </div>
      </nav>
      <div className="tab-list-menu">
        <ul>
          <li>
            <b>카테고리</b>
              <ol>
                <li>소 메뉴</li>
              </ol>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;