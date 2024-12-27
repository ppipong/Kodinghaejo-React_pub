import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "../page/Page";

const Card = () => {

  // 찜 하기
  const mark = () => {}

  return (
    <div className="card-item">
      <div className="card-img">
        <img src="/images/product/a443b725e2966331753a3a09e98047d474042e331.webp" alt="" />
        <i id="heartIcon" class="bi bi-heart" onClick={mark}></i>
      </div>
      <div className="card-title">
        <p className="category"><a href="#">카테고리</a></p>
        <h4 className="product"><a href="/page/Page">상품명</a></h4>
      </div>
      <div className="card-sub-info">
        <h4>
          <span className="origin-price">상품원가격</span>
          <span className="real-price">상품찐가격</span>
        </h4>
        <p>
          <span>0 (0)</span>
          <span>찜</span>
        </p>
      </div>
    </div>
  );
};

export default Card;