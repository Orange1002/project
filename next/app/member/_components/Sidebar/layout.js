'use client'
import Link from 'next/link'
import styles from './layout.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Sidebar() {
  const [openKey, setOpenKey] = useState(null)

  const toggleCollapse = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key))
  }

  return (
    <aside
      className={`col-2 d-none d-lg-flex flex-column p-3 mt-5 ${styles.aside}`}
    >
      {/* 頭貼 */}
      <div className="d-flex justify-content-center align-items-center flex-column mb-4">
        <div
          className={`rounded-circle border-3 overflow-hidden d-flex justify-content-center align-items-center ${styles.memberImg}`}
        >
          <Image
            src="/member/member_images/user-img.svg"
            alt="使用者頭貼"
            width={100}
            height={100}
            className="object-fit-cover w-100 h-100"
            priority
          />
        </div>
        <p className="fs-5 fw-light mb-0 mt-3">hi, 林小旻</p>
      </div>
      <div className="list-group w-100">
        {/* 區塊 1：會員資料 */}
        <button
          type="button"
          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center px-3 py-0 bg-white ${styles.listGroupItem}`}
          aria-expanded={openKey === 'subCatch1'}
          onClick={() => toggleCollapse('subCatch1')}
        >
          會員資料
          <span className={styles.arrow}>&rsaquo;</span>
        </button>
        {openKey === 'subCatch1' && (
          <div>
            <Link
              href="/member/profile/info"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              會員基本資料
            </Link>
            <Link
              href="/member/profile/dogs"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              會員狗狗資料
            </Link>
            <Link
              href="/member/profile/recepient"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              常用收件人
            </Link>
          </div>
        )}

        {/* 區塊 2：我的訂單 */}
        <button
          type="button"
          className={`list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white ${styles.listGroupItem}`}
          aria-expanded={openKey === 'subCatch2'}
          onClick={() => toggleCollapse('subCatch2')}
        >
          我的訂單
          <span className={styles.arrow}>&rsaquo;</span>
        </button>
        {openKey === 'subCatch2' && (
          <div>
            <Link
              href="/member/orders/product"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              狗狗用品訂單
            </Link>
            <Link
              href="/member/orders/sitter"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              寵物保母訂單
            </Link>
          </div>
        )}

        {/* 區塊 3：我的收藏 */}
        <button
          type="button"
          className={`list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white ${styles.listGroupItem}`}
          aria-expanded={openKey === 'subCatch3'}
          onClick={() => toggleCollapse('subCatch3')}
        >
          我的收藏
          <span className={styles.arrow}>&rsaquo;</span>
        </button>
        {openKey === 'subCatch3' && (
          <div>
            <Link
              href="#"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              狗狗用品收藏
            </Link>
            <Link
              href="#"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              狗狗保母收藏
            </Link>
            <Link
              href="#"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              文章收藏
            </Link>
            <Link
              href="#"
              className={`list-group-item list-group-item-action border-bottom d-flex align-items-center py-2 ps-4 pe-0 ${styles.listGroupItem}`}
            >
              活動收藏
            </Link>
          </div>
        )}

        {/* 其他單一選單 */}
        <Link
          href="#"
          className={`list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white ${styles.listGroupItem}`}
        >
          我的文章
          <span className={styles.arrow}>&rsaquo;</span>
        </Link>

        <Link
          href="#"
          className={`list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white ${styles.listGroupItem}`}
        >
          我的優惠券
          <span className={styles.arrow}>&rsaquo;</span>
        </Link>

        <Link
          href="#"
          className={`list-group-item list-group-item-action collapsed d-flex justify-content-between align-items-center px-3 py-0 bg-white ${styles.listGroupItem}`}
        >
          修改密碼
          <span className={styles.arrow}>&rsaquo;</span>
        </Link>
      </div>
    </aside>
  )
}
