import React from 'react'
import Breadcrumb from './_components/breadcrumb/breadcrumb'

export default function MemberPage() {
  // 預設 breadcrumb 資料
  const breadcrumbItems = [
    { label: '首頁', href: '/' },
    { label: '會員中心', href: '/member' },
  ]

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      {/* 其他內容 */}
    </div>
  )
}
