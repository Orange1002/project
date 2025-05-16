// components/CardArea.jsx
import React from 'react'
import SmallArticleCard from './card-s.js'

const cardData = [
  {
    imgSrc: '/article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
    text: '從手作料理開始，兼顧毛孩的健康與美味！',
    likeCount: 137,
  },
  {
    imgSrc: '/article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
    text: '健康與美味之間，其實不用選擇！',
    likeCount: 95,
  },
  {
    imgSrc: '/article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
    text: '自製零食也能這麼營養？',
    likeCount: 88,
  },
  {
    imgSrc: '/article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
    text: '自製零食也能這麼營養？',
    likeCount: 88,
  },
  // 你可以再多加幾筆
]

const CardArea = () => {
  return (
    <div className="row card-area d-flex">
      {cardData.map((card, index) => (
        <SmallArticleCard
          key={index}
          imgSrc={card.imgSrc}
          text={card.text}
          likeCount={card.likeCount}
        />
      ))}
    </div>
  )
}

export default CardArea
