import React from 'react';

const PetQASection = () => {
  return (
    <div className="row mt-5">
      <div className="category d-flex justify-content-between mt-5 mb-5">
        <p className="">寵物問答</p>
        <div className="d-flex me-4">
          <p className="more">Details</p>
          <button className="btn btn-link read-more rounded-circle d-flex justify-content-center align-items-center mt-1 ms-3">
            <i className="fa-solid fa-chevron-right fw-fa"></i>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <div className="card border-none service mt-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./article_img/channels4_profile.jpg"
                className="img-fluid rounded-circle"
                alt="客服專員 Roger"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body border-bottom pb-5">
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
  );
};

export default PetQASection;