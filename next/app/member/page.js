import React from 'react'
import styles from './member.module.scss'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa6'
import { IoTicketOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa6'

export default function MemberPage() {
  return (
    <>
      <div className={`${styles.eventTitle} d-flex align-items-center`}>
        會員中心
      </div>
      <div className="mt-lg-3">
        <div
          className={`${styles.block} d-flex flex-column flex-lg-row g-0 justify-content-evenly align-items-center ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 mb-5 p-3`}
        >
          {/* VIP 卡片 */}
          <div
            className={`${styles.vipCard} rounded-3 order-1 order-lg-0`}
          ></div>
          {/* 姓名與會員資訊 */}
          <div className="order-0 order-lg-1 mb-3 m-lg-0">
            <p className="">林小旻</p>
            <div>
              <p className="">BARK & BIJOU 白金會員</p>
              <span className="">等級說明</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.block} justify-content-evenly align-items-center ps-lg-5 pe-lg-5 py-lg-0 mb-5`}
        >
          <div className="row g-0 p-3">
            <div className="d-flex flex-column justify-content-center col-4 col-lg-3 text-center">
              <div>0</div>
              <p className="m-0">待出貨</p>
            </div>
            <div className="d-flex flex-column justify-content-center col-4 col-lg-3 text-center">
              <div>0</div>
              <p className="m-0">已出貨</p>
            </div>
            <div className="d-flex flex-column justify-content-center col-4 col-lg-3 text-center">
              <div>0</div>
              <p className="m-0">待取貨</p>
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-center text-center">
              <Link
                href="/member/orders/product"
                className={`${styles.btnCustom} d-flex justify-content-center align-items-center mt-3 mt-lg-0`}
              >
                查看訂單
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${styles.block} d-flex justify-content-evenly align-items-center ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 p-3`}
        >
          <div className="col justify-content-center align-items-center d-flex flex-column text-center">
            <div className="member-button">
              <Link
                href="/member/profile/info"
                className="text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center flex-column"
              >
                <FaRegUser className="fs-4 text-dark mb-2" />
                <p className={`m-0 ${styles.myText}`}>會員基本資料</p>
              </Link>
            </div>
          </div>
          <div className="col justify-content-center align-items-center d-flex flex-column text-center">
            <div className="member-button">
              <Link
                href="/member/coupons"
                className="text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center flex-column"
              >
                <IoTicketOutline className="fs-4 text-dark mb-2" />
                <p className={`m-0 ${styles.myText}`}>我的優惠券</p>
              </Link>
            </div>
          </div>
          <div className="col justify-content-center align-items-center d-flex flex-column text-center">
            <div className="member-button">
              <Link
                href="/member/favorite/products"
                className="text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center flex-column "
              >
                <FaRegHeart className="fs-4 text-dark mb-2" />
                <p className={`m-0 ${styles.myText}`}>我的收藏</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="block d-flex d-lg-none justify-content-evenly align-items-center ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 mt-4 mb-4">
          <ul className="list-unstyled d-flex flex-column flex-lg-row g-0 align-items-center w-100 m-0 mobile-list">
            <li className="w-100">會員制度說明</li>
            <li className="w-100">常用收件人設定</li>
            <li className="w-100">購物說明</li>
            <li className="w-100">修改密碼</li>
            <li className="w-100 d-flex flex-row g-0 align-items-center justify-content-between">
              <p className="m-0">會員編號</p>
              <p className="m-0">XXXXXXXX</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
