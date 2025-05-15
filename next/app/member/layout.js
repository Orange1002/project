'use client'

import { usePathname } from 'next/navigation'
import Breadcrumb from './_components/BreadCrumb/layout'
import Sidebar from './_components/Sidebar/layout'

const breadcrumbMap = {
  '/member': '會員中心',
  '/member/password': '修改密碼',
  '/member/coupons': '我的優惠券',
  // '/articles': '我的文章',

  // 我的收藏 (通用父級路徑)
  '/member/favorites': '我的收藏',
  '/member/favorites/products': '狗狗用品收藏',
  '/member/favorites/sitters': '狗狗保母收藏',
  '/member/favorites/articles': '文章收藏',
  '/member/favorites/events': '活動收藏',

  // 我的訂單 (通用父級路徑)
  '/member/orders': '我的訂單',
  '/member/orders/products': '狗狗用品訂單',
  '/member/orders/sitters': '寵物保母訂單',

  // 會員資料 (通用父級路徑)
  '/member/profile': '會員資料',
  '/member/profile/info': '會員基本資料',
  '/member/profile/dogs': '會員狗狗資料',
  '/member/profile/dogs/add': '新增狗狗',
  '/member/profile/dogs/edit': '編輯狗狗資料',
  '/member/profile/recipients': '常用收件人',
}

export default function MemberLayout({ children }) {
  const pathname = usePathname()

  // 將路徑切割後逐步拼接，取得對應的 label
  const generateBreadcrumbItems = () => {
    const segments = pathname.split('/').filter(Boolean) // 移除空字串
    const items = [{ label: '首頁', href: '/' }]
    let path = ''
    for (let i = 0; i < segments.length; i++) {
      path += '/' + segments[i]
      const label = breadcrumbMap[path]
      if (label) {
        items.push({ label, href: path })
      }
    }
    return items
  }

  return (
    <main>
      <Breadcrumb items={generateBreadcrumbItems()} />
      <div className="container mt-4">
        <div className="row g-0 mb-5 justify-content-end">
          <Sidebar />
          <section className="col-12 col-lg-10 ps-lg-4 mt-lg-5 d-flex flex-column justify-content-start">
            {children}
          </section>
        </div>
      </div>
    </main>
  )
}
