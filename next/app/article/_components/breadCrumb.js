'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Breadcrumb() {
  return (
    <div className="container desktop">
      <div className="row">
        <div className="col-12 d-flex align-items-center mt-3">
          <div className="title-line"></div>
          <p className="ms-4 petknowledge">Pet knowledge</p>
          <div className="petknowledge-c ms-4"></div> 
        </div>
        <div className="d-flex align-items-center fw-light gap-4 mt-4">
          <a href="#" className="mb-0 me-3 text-decoration-none bread">首頁</a>
          <FontAwesomeIcon icon={faAngleRight} className="bread"/>
          <a href="#" className="mb-0 me-3 ms-3 text-decoration-none bread">文章</a>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;