import React from 'react';

const SmallArticleCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <div className="card card-s h-100 position-relative">
        <img
          src="/article_img/8297dee2d3f3e92a18cca6191d35938d.jpg"
          className="card-img-top object-fit-cover"
          alt="卡片圖片"
        />
        <div className="card-body d-flex align-items-center p-4">
          <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-chevron-right fw-fa"></i>
          </button>
          <p className="card-text card-s-p ps-3">
            從手作料理開始，兼顧毛孩的健康與美味！
          </p>
          <div className="position-absolute bottom-0 end-0 p-3 d-flex align-items-center gap-1">
            <span className="text-muted regular">137</span>
            <i className="fa-regular fa-heart fa-fw card-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallArticleCard;