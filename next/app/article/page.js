'use client'

import useHeaderPhoto from './_components/headerPhoto.js'
import Breadcrumb from './_components/breadCrumb.js'
import Articlelist from './_components/aricleList.js'
import Buttonsearch from './_components/buttonSearch.js'
import Cardbig from './_components/card-1.js'
import Cardarea from './_components/card-s-area.js'
import CardSlider from './_components/eventSlider.js'
import EventCarousel from './_components/eventCarousel.js'
import VideoCard from './_components/videoCard.js'
import PetQA from './_components/petQASection.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './_style/article.scss'

const images = [
  '/article_img/d1e21f1a-4730-472b-8531-51b3c7b7890a.jpg',
  '/article_img/istockphoto-1300658241-612x612.jpg',
]

function ArticleHeaderPhoto() {
  const currentIndex = useHeaderPhoto(images.length)

  return (
    <>
      <div className="container-fluid desktop">
        <div className="headerphoto d-none d-sm-block">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`header-img-${index + 1}`}
              className={`w-100 ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="container desktop">
        <Breadcrumb />

        <div className="mt-5 row">
          <div className="col-2">
            <Articlelist />
          </div>

          <div className="col-10 mt-4">
            <Buttonsearch />
            <Cardbig />
            <div className="container">
              <Cardarea />
              <Cardarea />
              <Cardarea />
              <Cardarea />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button
                type="button"
                className="btn btn-primary c-s-btn pt-2 w-25"
              >
                更多文章
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-none d-xl-block mb-5">
          <CardSlider />
        </div>
      </div>
      <section className="desktop mt-5">
        <EventCarousel />
      </section>
      <div className="container desktop">
        <div className="row mt-5">
          <VideoCard
            videoUrl="https://www.youtube.com/embed/DY-UslXiLKI?si=bTNtx1IZdls1JwD7"
            title="6個方法，徹底防衛致命的寄生蟲 | 狗主人必看必懂的一集！"
          />
        </div>
        <PetQA />
      </div>

      {/* Mobile View */}
      <div className="container d-block d-xl-none main-mob mobile">
        <div className="row">
          <div className="col-12 category d-flex justify-content-start mt-5">
            <p className="ms-3">文章列表</p>
            <div className="d-flex me-4">
              <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
                <i className="fa-solid fa-chevron-right fw-fa"></i>
              </button>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className="d-flex gap-3">
              <button type="button" className="btn btn-primary c-s-btn pt-2">
                發文
              </button>
              <button type="button" className="btn btn-primary c-s-btn pt-2">
                修改
              </button>
            </div>
          </div>
          <div className="col-6 mt-5">
            <form className="d-flex card-search-m ms-auto gap-2" role="search">
              <div className="input-group">
                <input
                  className="form-control rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <div className="card card-s h-100">
              <img
                src="./article_img/8297dee2d3f3e92a18cca6191d35938d.jpg"
                className="card-img-top object-fit-cover"
                alt="..."
              />
              <div className="card-body d-flex align-items-center p-4">
                <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-chevron-right fw-fa"></i>
                </button>
                <p className="card-text card-s-p ps-3">
                  從手作料理開始，兼顧毛孩的健康與美味！
                </p>
                <div className="position-absolute bottom-0 end-0 p-3">
                  <i className="fa-regular fa-heart fa-fw card-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="btn btn-primary c-s-btn pt-2 ">
              更多文章
            </button>
          </div>
          <div className="col-12 category d-flex justify-content-start mt-5">
            <p className="ms-3">熱門文章</p>
            <div className="d-flex me-4">
              <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
                <i className="fa-solid fa-chevron-right fw-fa"></i>
              </button>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5 mb-5">
            <div className="card card-s h-100">
              <img
                src="./article_img/8297dee2d3f3e92a18cca6191d35938d.jpg"
                className="card-img-top object-fit-cover"
                alt="..."
              />
              <div className="card-body d-flex align-items-center p-4">
                <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-chevron-right fw-fa"></i>
                </button>
                <p className="card-text card-s-p ps-3">
                  從手作料理開始，兼顧毛孩的健康與美味！
                </p>
                <div className="position-absolute bottom-0 end-0 p-3">
                  <i className="fa-regular fa-heart fa-fw card-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 category d-flex justify-content-start mt-5">
            <p className="ms-3">最新活動</p>
            <div className="d-flex me-4">
              <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
                <i className="fa-solid fa-chevron-right fw-fa"></i>
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="event-card-group d-flex align-items-center flex-nowrap">
              <a className="event-card">
                <img src="./article_img/AIRBUGGY1 1.png" />
                <div className="event-card-content">春季_狗狗新裝上線!!</div>
              </a>
              <a className="event-card">
                <img src="./article_img/AIRBUGGY1 3.png" />
                <div className="event-card-content">達指定金額 運費$0元！</div>
              </a>
            </div>
          </div>
          <div className="col-12 category d-flex justify-content-start mt-5">
            <p className="ms-3">推薦影片</p>
            <div className="d-flex me-4">
              <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
                <i className="fa-solid fa-chevron-right fw-fa"></i>
              </button>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="d-flex justify-content-center">
              <div className="card mb-3 card-video">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/DY-UslXiLKI?si=bTNtx1IZdls1JwD7"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title">
                        6個方法，徹底防衛致命的寄生蟲 | 狗主人必看必懂的一集！
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 category d-flex justify-content-start mt-5">
            <p className="ms-3">寵物問答</p>
            <div className="d-flex me-4">
              <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
                <i className="fa-solid fa-chevron-right fw-fa"></i>
              </button>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="d-flex justify-content-center">
              <div className="card mb-5 border-none service">
                <div className="row g-0">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img
                      src="./article_img/channels4_profile.jpg"
                      className="img-fluid rounded-circle"
                      alt="客服專員 Roger"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body border-bottom mt-3">
                      <h3 className="card-title mb-5 mt-2">客服專員: Roger</h3>
                      <p className="card-text mt-4">
                        如何幫毛小孩整理毛髮？這我有經驗，我自己就是狗畜生
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleHeaderPhoto
