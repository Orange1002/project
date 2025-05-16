import React from 'react'

export default function ArticleSidebar() {
  return (
    <div className="col-2 d-none d-xl-block">
      <div className="list-group">
        <div className="article-list d-flex justify-content-center pt-4">
          <p>Article List</p>
          <div className="al-circle"></div>
        </div>

        {/* 文章列表 */}
        <a
          className="list-group-item2 list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white text-decoration-none"
          data-bs-toggle="collapse"
          href="#subCatch1"
        >
          文章列表 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch1">
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            飲食與營養
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            行為與訓練
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            健康與保健
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 last-item text-decoration-none"
          >
            戶外活動與探險
          </a>
        </div>

        {/* 熱門文章 */}
        <a
          className="list-group-item2 list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white text-decoration-none"
          data-bs-toggle="collapse"
          href="#subCatch2"
        >
          熱門文章 <span className="list-icon">&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch2">
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            飲食與營養
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            行為與訓練
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            健康與保健
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 last-item pt-4 text-decoration-none"
          >
            戶外活動與探險
          </a>
        </div>

        {/* 最新活動 */}
        <a
          className="list-group-item2 list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white text-decoration-none"
          data-bs-toggle="collapse"
          href="#subCatch3"
        >
          最新活動 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch3">
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            活動預告
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            熱烈進行中
          </a>
        </div>

        {/* 推薦知識影音 */}
        <a
          className="list-group-item2 list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white text-decoration-none"
          data-bs-toggle="collapse"
          href="#subCatch4"
        >
          推薦知識影音 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch4">
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            營養體重與健康
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            行為與訓練
          </a>
        </div>

        {/* 收藏文章 */}
        <a
          className="list-group-item2 list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white text-decoration-none"
          data-bs-toggle="collapse"
          href="#subCatch5"
        >
          收藏文章 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch5">
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            我的文章
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            飲食與營養
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            行為與訓練
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            健康與保健
          </a>
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 last-item pt-4 text-decoration-none"
          >
            戶外活動與探險
          </a>
        </div>

        {/* 寵物問答 */}
        <a
          className="list-group-item2 list-group-item-action d-flex justify-content-between align-items-center p-4 bg-white text-decoration-none"
          data-bs-toggle="collapse"
          href="#subCatch6"
        >
          寵物問答 <span>&rsaquo;</span>
        </a>
        <div className="collapse" id="subCatch6">
          <a
            href="#"
            className="list-group-item2 list-group-item-action border-bottom p-3 pt-4 text-decoration-none"
          >
            我要詢問
          </a>
        </div>
      </div>
    </div>
  )
}
