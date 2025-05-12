import Link from 'next/link'
import styles from './sidebar.module.css'
import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState({
    subCatch1: false,
    subCatch2: false,
    subCatch3: false,
  })

  const toggleCollapse = (key) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <aside className="col-2 d-none d-lg-flex flex-column p-3 mt-5">
      {/* 頭貼 */}
      <div className="d-flex justify-content-center align-items-center flex-column mb-4">
        <div className="member-img rounded-circle border-3 overflow-hidden d-flex justify-content-center align-items-center">
          <img
            src="/images/user-img.svg"
            className="object-fit-cover w-100 h-100"
            alt="使用者頭貼"
          />
        </div>
        <p className="fs-5 fw-light mb-0 mt-3">hi, 林小旻</p>
      </div>

      <div className="list-group w-100">
        {/* 區塊 1：會員資料 */}
        <button
          type="button"
          className="list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white"
          onClick={() => toggleCollapse('subCatch1')}
        >
          會員資料
          <span className="arrow">&rsaquo;</span>
        </button>
        {open.subCatch1 && (
          <div>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0"
            >
              會員基本資料
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0"
            >
              會員狗狗資料
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0"
            >
              常用收件人
            </Link>
          </div>
        )}

        {/* 區塊 2：我的訂單 */}
        <button
          type="button"
          className="list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white"
          onClick={() => toggleCollapse('subCatch2')}
        >
          我的訂單
          <span className="arrow">&rsaquo;</span>
        </button>
        {open.subCatch2 && (
          <div>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0"
            >
              狗狗用品訂單
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0"
            >
              寵物保母訂單
            </Link>
          </div>
        )}

        {/* 區塊 3：我的收藏 */}
        <button
          type="button"
          className="list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white"
          onClick={() => toggleCollapse('subCatch3')}
        >
          我的收藏
          <span className="arrow">&rsaquo;</span>
        </button>
        {open.subCatch3 && (
          <div>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom py-2 ps-4 pe-0"
            >
              狗狗用品收藏
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom py-2 ps-4 pe-0"
            >
              狗狗保母收藏
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom py-2 ps-4 pe-0"
            >
              文章收藏
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action border-bottom py-2 ps-4 pe-0 last-item"
            >
              活動收藏
            </Link>
          </div>
        )}

        {/* 其他單一選單 */}
        <Link
          href="#"
          className="list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white"
        >
          瀏覽紀錄
          <span className="arrow">&rsaquo;</span>
        </Link>

        <Link
          href="#"
          className="list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white"
        >
          我的優惠券
          <span className="arrow">&rsaquo;</span>
        </Link>

        <Link
          href="#"
          className="list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white"
        >
          修改密碼
          <span className="arrow">&rsaquo;</span>
        </Link>
      </div>
    </aside>
  )
}
