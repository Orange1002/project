import React, { useState, useEffect } from 'react'

export default function CardSlider() {
  const cards = [
    {
      image: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
    {
      image: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
    {
      image: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
    {
      image: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
    {
      image: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
    {
      image: './article_img/istockphoto-1300658241-612x612.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
    {
      image: './article_img/download.jpg',
      text: '從手作料理開始，兼顧毛孩的健康與美味！',
    },
  ]

  const cardsPerPage = 4
  const [cardmove, setCardmove] = useState(0)

  // 顯示四張或剩餘卡片數量的邏輯
  const showCards = () => {
    const remainingCards = cards.length - cardmove
    const visibleCardsCount =
      remainingCards < cardsPerPage ? remainingCards : cardsPerPage
    const visibleCards = []

    for (let i = 0; i < visibleCardsCount; i++) {
      const index = (cardmove + i) % cards.length
      visibleCards.push(cards[index])
    }

    return visibleCards.map((card, index) => (
      <div key={index} className="card card-h">
        <img
          src={card.image}
          className="card-img-top object-fit-cover"
          alt="..."
        />
        <div className="card-body d-flex align-items-center p-4">
          <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-chevron-right fw-fa"></i>
          </button>
          <p className="card-text card-s-p ps-3">{card.text}</p>
          <div className="position-absolute bottom-0 end-0 p-3">
            <i className="fa-regular fa-heart fa-fw card-icon"></i>
          </div>
        </div>
      </div>
    ))
  }

  // 移動到上一組卡片
  const goToPrev = () => {
    setCardmove(
      (prevMove) => (prevMove - cardsPerPage + cards.length) % cards.length
    )
  }

  // 移動到下一組卡片
  const goToNext = () => {
    setCardmove((prevMove) => (prevMove + cardsPerPage) % cards.length)
  }

  // 自動輪播，每隔5秒切換
  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="row">
      <div className="category d-flex justify-content-between">
        <div className="event-title d-flex align-items-center">熱門文章</div>
        <div className="d-flex me-4">
          <p className="more">More</p>
          <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-3 ms-3">
            <i className="fa-solid fa-chevron-right fw-fa"></i>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5 mt-4 mb-4">
        <i
          className="fa-solid fa-chevron-left fw-fa arrow-left"
          onClick={goToPrev}
        ></i>
        <div className="d-flex cards-container gap-4">{showCards()}</div>
        <i
          className="fa-solid fa-chevron-right fw-fa arrow-right"
          onClick={goToNext}
        ></i>
      </div>
    </div>
  )
}
