import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // 如果使用 Bootstrap Icons

const ArticleHeaderActions = () => {
  return (
    <div className="d-flex">
      {/* 左邊按鈕區塊 */}
      <div className="d-flex gap-3">
        <button type="button" className="btn c-s-btn pt-2 text-white">
          我要發文
        </button>
        <button type="button" className="btn c-s-btn pt-2 text-white">
          修改文章
        </button>
      </div>

      {/* 搜尋表單 */}
      <form className="d-flex card-search ms-auto gap-2" role="search">
        <div className="input-group position-relative">
          <input
            className="form-control rounded-pill"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent"
            type="submit"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleHeaderActions;