import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Page = () => {
    return (
        <div>
            <div className="product-title"></div>
            <div className="product-content"></div>
            <div className="product-review"></div>
            <div className="product-QnA"></div>
            <div className="product-recommend"></div>
        </div>
    );
};

export default Page;