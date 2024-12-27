import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Card from '../aset/Card';

const Main = () => {

    return (
      <div className="">
        <p>내용 발싸</p>
        <div className="card-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
};

export default Main;