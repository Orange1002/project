/* eslint-disable @next/next/no-img-element */
import styles from './memberLayout.module.css'
import Breadcrumb from './_components/breadcrumb/breadcrumb'

export default function MemberLayout({ children }) {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: '首頁', href: '/' },
          { label: '會員中心', href: '/member' },
        ]}
      />
      <div className="container mt-5">
        <div className="row g-0 mb-5 justify-content-end">
          {/* 側邊欄 aside */}
          <aside
            className={`col-2 d-none d-lg-flex flex-column p-3 mt-5 ${styles.aside}`}
          >
            {/* 頭貼區塊 */}
            <div className="d-flex justify-content-center align-items-center flex-column mb-4">
              <div
                className={`member-img rounded-circle border-3 overflow-hidden d-flex justify-content-center align-items-center ${styles.memberImg}`}
              >
                <img
                  src="/images/user-img.svg"
                  className="object-fit-cover w-100 h-100"
                  alt="使用者頭貼"
                />
              </div>
              <p className="fs-5 fw-light mb-0 mt-3">hi, 林小旻</p>
            </div>

            {/* 功能選單 list-group */}
            <div className="list-group w-100"></div>
          </aside>

          {/* 右側內容區 */}
          <section className="col-12 col-lg-10 ps-lg-4 justify-content-between mt-5">
            {/* {children} 這是頁面內容會顯示的地方 */}
          </section>
        </div>
      </div>
    </main>
  )
}
