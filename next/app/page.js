/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const slides = [
  { src: '/images/hero-dog-1.jpg', alt: 'Dog 1' },
  { src: '/images/hero-dog-2.jpg', alt: 'Dog 2' },
  { src: '/images/hero-dog-3.jpg', alt: 'Dog 3' },
  { src: '/images/hero-dog-4.jpg', alt: 'Dog 4' },
  { src: '/images/hero-dog-5.jpg', alt: 'Dog 5' },
]

export default function AppPage() {
  const [index, setIndex] = useState(0)

  // 自動輪播（6 秒切換）
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* 第一區塊 hero*/}
      <section className="hero-section position-relative">
        <section className="custom-hero position-relative">
          <div className="hero-slider">
            <div className="carousel-inner">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`hero-slide ${i === index ? 'active' : ''}`}
                  style={{
                    opacity: i === index ? 1 : 0,
                    zIndex: i === index ? 1 : 0,
                    transition: 'opacity 2.5s ease-in-out', // 使用 fade 動畫
                  }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 自定義點點指示器 */}
          <div className="hero-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`indicator-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`切換到第 ${i + 1} 張幻燈片`}
              ></button>
            ))}
          </div>

          {/* 疊加文字內容區塊 */}
          <div className="hero-content-wrapper ps-5 d-none d-lg-block">
            <div className="hero-background-blur" />
            <div className="hero-content">
              <img
                src="images/hero-logo.png"
                alt="BARK & BIJOU Logo"
                className="hero-logo img-fluid"
              />
              <p className="hero-subtext custom-jp-text">
                用心為你的狗狗
                <br />
                創造一個舒適的小世界。
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* 第四區塊 */}
      <section>
        <Container>
          <Row className="my-96">
            <Col xs={12} lg={6} className="p-3">
              <a href="#">
                <div className="position-relative transform-size1">
                  <div className="position-relative">
                    <Image
                      src="./images/bigImg-1.png"
                      alt="Food"
                      fluid
                      className="img-siez1"
                    />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <div className="label position-absolute">FOOD</div>
                </div>
              </a>
            </Col>

            <Col xs={12} lg={6} className="p-3">
              <a href="#">
                <div className="position-relative transform-size1">
                  <div className="position-relative">
                    <Image
                      src="./images/bigImg-2.png"
                      alt="Outdoor"
                      fluid
                      className="img-siez1"
                    />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <div className="label position-absolute">
                    OUT
                    <br className="d-none d-lg-block" />
                    DOOR
                  </div>
                </div>
              </a>
            </Col>

            <Col xs={12} lg={4} className="p-3">
              <a href="#">
                <div className="position-relative transform-size1">
                  <div className="position-relative">
                    <Image
                      src="./images/bigImg-3.png"
                      alt="Indoor"
                      fluid
                      className="img-siez1"
                    />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <div className="label position-absolute">
                    IN
                    <br className="d-none d-lg-block" />
                    DOOR
                  </div>
                </div>
              </a>
            </Col>

            <Col xs={12} lg={4} className="p-3">
              <a href="#">
                <div className="position-relative transform-size1">
                  <div className="position-relative">
                    <Image
                      src="./images/bigImg-4.png"
                      alt="Hotel"
                      fluid
                      className="img-siez1"
                    />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <div className="label position-absolute">HOTEL</div>
                </div>
              </a>
            </Col>

            <Col xs={12} lg={4} className="p-3">
              <a href="#">
                <div className="position-relative transform-size1">
                  <div className="position-relative">
                    <Image
                      src="./images/bigImg-5.png"
                      alt="Health"
                      fluid
                      className="img-siez1"
                    />
                    <div className="overlay position-absolute"></div>
                  </div>
                  <div className="label position-absolute">HEALTH</div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* 第八區塊 */}
      <section>
        <Container>
          <Row className="my-96">
            <Col lg={12} xs={4} className="mb-lg-5 p-lg-0 p-3">
              <a className="text-decoration-none" href="#">
                <div className="bg-orange box2-1 d-flex flex-column justify-content-center align-items-center">
                  <div className="text-white text2-1 d-none d-lg-block">
                    BARK & BIJOU 官網購物線上購物指南
                  </div>
                  <div className="text-white text2-1 d-block d-lg-none text-center">
                    線上購物指南
                  </div>
                  <div className="text-white d-lg-flex d-none g-70">
                    <i className="bi bi-truck fs-80"></i>
                    <i className="bi bi-cash-coin fs-80"></i>
                    <i className="bi bi-box-seam fs-80"></i>
                    <i className="bi bi-cart-check fs-80"></i>
                  </div>
                </div>
              </a>
            </Col>

            <Col lg={6} xs={4} className="ps-lg-0 p-3">
              <a className="text-decoration-none" href="#">
                <div className="box2-2 bg-gray">
                  <div className="d-flex d-lg-block align-items-center justify-content-center">
                    <div className="mb-lg-14 text-orange text2-2">
                      線上購買 門市自取
                    </div>
                    <div className="text-orange2 text2-3 d-none d-lg-block">
                      服務升級 實體店面取貨 免運費
                    </div>
                  </div>
                  <div className="text-end box2-3 d-none d-lg-block">
                    <div className="box2-4 position-relative">
                      <img
                        src="/images/Dog Sit.png"
                        alt=""
                        className="position-absolute"
                      />
                      <img
                        src="/images/Traveler.png"
                        alt=""
                        className="position-absolute"
                      />
                      <img
                        src="/images/Shop.png"
                        alt=""
                        className="position-absolute"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Col>

            <Col lg={6} xs={4} className="pe-lg-0 p-3">
              <a className="text-decoration-none" href="#">
                <div className="box2-5 d-flex d-lg-block justify-content-center align-items-center">
                  <div className="mb-14 text-orange text2-4 d-none d-lg-block">
                    \ 消費滿1,500元 享免運費 /
                  </div>
                  <div className="text-orange2 text2-5 d-none d-lg-block">
                    大型物品配送說明
                  </div>
                  <div className="text-orange2 text2-5 d-block d-lg-none">
                    大型物品配送
                  </div>
                  <div className="d-none d-lg-flex box2-7 position-relative">
                    <div className="box2-6 position-relative">
                      <img src="/images/Truck.png" alt="" />
                    </div>
                    <div className="box2-8">
                      <img
                        src="/images/Handle With Care.png"
                        alt=""
                        className="position-absolute"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
