'use client'

import React, { useState, useEffect } from 'react'
import Pagination from './_components/pagination/Pagination'
import CouponCard from './_components/couponCard/CouponCard'
import SelectCard from './_components/selectCard/SelectCard'
import VIPCard from './_components/VIPCard/VIPCard'
import customCard from './_components/VIPCard/img/vipcard.jpg';
import iconStar from './_components/VIPCard/img/icon-paw.png';

export default function CouponPage(props) {
  return (
    <>
      <VIPCard
      userName="李小明"
      level="忠實會員"
      statusNote="（即將升級）"
      accumulatedPoints={5200}
      nextLevelPoints={8000}
      cardImage={customCard}
      iconImage={iconStar}
    />

      <SelectCard />

      <CouponCard
        title="6/01 限時 7-ELEVEN 免運券"
        date="2025.06.01 起生效"
        minSpend={399}
        multiplier="x2"
      />

      <CouponCard
        title="6/05 超市全站 $299 免運券"
        date="2025.06.05 起生效"
        minSpend={299}
        multiplier={null} // 或可不傳
      />
    </>
  )
}
