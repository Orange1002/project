'use client';


import useHeaderPhoto from './_components/headerPhoto.js';
import Breadcrumb from './_components/breadCrumb.js';
import Articlelist from './_components/aricleList.js';
import Buttonsearch from './_components/buttonSearch.js';
import Cardbig from './_components/card-1.js'
import Cardarea from './_components/card-s-area.js'
import CardSlider from './_components/eventSlider.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './_style/article.scss';


const images = [
  '/article_img/d1e21f1a-4730-472b-8531-51b3c7b7890a.jpg',
  '/article_img/istockphoto-1300658241-612x612.jpg',
];

function ArticleHeaderPhoto() {
  const currentIndex = useHeaderPhoto(images.length);

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

          <div className="col-10">
            <Buttonsearch />
            <Cardbig />
            <div className="container">
              <Cardarea />
              <Cardarea />
              <Cardarea />
              <Cardarea />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button type="button" className="btn btn-primary c-s-btn pt-2 w-25">
                更多文章
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-none d-xl-block">
          <CardSlider />
        </div>
      </div>
    </>
  );
}

export default ArticleHeaderPhoto;