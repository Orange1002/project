import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const EventSlider = () => {
  const [cardMove, setCardMove] = useState(0);
  const cardsPerPage = 4;
  const cards = [
    { img: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' },
    { img: './article_img/istockphoto-1300658241-612x612.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' },
    { img: './article_img/download.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' },
    { img: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' },
    { img: './article_img/istockphoto-1300658241-612x612.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' },
    { img: './article_img/8297dee2d3f3e92a18cca6191d35938d.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' },
    { img: './article_img/download.jpg', text: '從手作料理開始，兼顧毛孩的健康與美味！' }
  ];

  // 顯示當前頁面的卡片
  const showCards = () => (
    cards.slice(cardMove, cardMove + cardsPerPage).map((card, index) => (
      <div className="card card-h" key={index}>
        <img src={card.img} className="card-img-top object-fit-cover" alt="..." />
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
  );

  // 左箭頭點擊事件
  const handleLeftArrowClick = () => {
    setCardMove(prevMove => (prevMove - cardsPerPage < 0 ? cards.length - cardsPerPage : prevMove - cardsPerPage));
  };

  // 右箭頭點擊事件
  const handleRightArrowClick = () => {
    setCardMove(prevMove => (prevMove + cardsPerPage >= cards.length ? 0 : prevMove + cardsPerPage));
  };

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      setCardMove(prevMove => (prevMove + cardsPerPage >= cards.length ? 0 : prevMove + cardsPerPage));
    }, 5000); // 每5秒切換一次

    return () => clearInterval(interval); // 清除計時器
  }, []);

  return (
    <div className="row">
      <div className="category d-flex justify-content-between">
        <div className="event-title d-flex align-items-center">熱門文章</div>
        <div className="d-flex me-4">
          <p className="more">More</p>
          <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
            <i className="fa-solid fa-chevron-right fw-fa"></i>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-5 mt-4 mb-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow-left"
          onClick={handleLeftArrowClick}
        />
        <div className="d-flex cards-container gap-4">
          {showCards()}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow-right"
          onClick={handleRightArrowClick}
        />
      </div>
    </div>
  );
};

export default EventSlider;
