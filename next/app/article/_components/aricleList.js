import React from 'react';

export default function ArticleSidebar() {
  return (
    <div className="col-2 d-none d-xl-block">
      <div className="list-group">
        <div className="article-list d-flex justify-content-center pt-4">
          <p>Article List</p>
          <div className="al-circle"></div>
        </div>

        {/* 區塊重複部分可抽成元件（省略此步） */}
        <a
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white"
          data-bs-toggle="collapse"
          href="#subCatch1"
        >
          文章列表 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch1">
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">飲食與營養</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">行為與訓練</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">健康與保健</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4 last-item">戶外活動與探險</a>
        </div>

        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white" data-bs-toggle="collapse" href="#subCatch2">
          熱門文章 <span className="list-icon">&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch2">
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">飲食與營養</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">行為與訓練</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">健康與保健</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 last-item pt-4">戶外活動與探險</a>
        </div>

        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white" data-bs-toggle="collapse" href="#subCatch3">
          最新活動 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch3">
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">活動預告</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">熱烈進行中</a>
        </div>

        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white" data-bs-toggle="collapse" href="#subCatch4">
          推薦知識影音 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch4">
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">營養體重與健康</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">行為與訓練</a>
        </div>

        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white" data-bs-toggle="collapse" href="#subCatch5">
          收藏文章 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch5">
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">我的文章</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">飲食與營養</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">行為與訓練</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">健康與保健</a>
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 last-item pt-4">戶外活動與探險</a>
        </div>

        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white" data-bs-toggle="collapse" href="#subCatch6">
          寵物問答 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch6">
          <a href="#" className="list-group-item list-group-item-action border-bottom p-3 pt-4">我要詢問</a>
        </div>
      </div>
    </div>
  );
}