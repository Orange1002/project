import React from 'react';
import '../_style/list.scss';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

const Card2 = () => {
  return (
    <div className="card card-2 mt-4 d-none d-xl-block">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src="../article_img/image-11.jpeg"
            className="img-fluid float-start"
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body pt-4">
            <div className="d-flex align-items-center mt-2">
              <a href="#" className="icon-link">
                <a href="你的連結網址" className="icon-link">
                  <AiOutlineRightCircle className="icon" />
                </a>
              </a>
              <h5 className="card-title title-1 ms-2 mt-2">
                從散步開始，享受毛孩的健康與美好時光！
              </h5>
            </div>
            <div>
              <p className="text-content text-break lh-base big-card">
                每天的散步時間，是毛孩與主人最親密的時刻。無論是清晨的微風還是傍晚的夕陽，散步不僅能讓狗狗放鬆心情，更是促進健康的最佳方式。
              </p>
              <p className="text-content text-break lh-base big-card-2">
                但有時，毛孩可能因為缺乏運動或年齡增長，走路的速度變慢，甚至對散步失去興趣。作為主人，我們該如何幫助牠們重新找回散步的樂趣與活力呢？
              </p>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div><p>2025/05/06 22:16</p></div>
              <div className="d-flex align-items-center">
                <FaRegHeart className="card-icon card-i-hover" />
                <span className="ms-1">123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
