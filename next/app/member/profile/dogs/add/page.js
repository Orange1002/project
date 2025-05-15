'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DogForm from '../_components/DogFrom/layout'

export default function DogAddPage() {
  const router = useRouter()

  const handleSubmit = async (formData) => {
    console.log('新增狗狗資料:', formData)
    // 模擬提交成功後返回列表頁
    router.push('/dogs')
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">新增狗狗資料</h1>
      <DogForm onSubmit={handleSubmit} />
    </div>
  )
}
