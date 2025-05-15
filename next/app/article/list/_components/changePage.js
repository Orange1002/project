import React from 'react'
import '../_style/list.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const ChangePage = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fa-solid fa-angles-left"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ChangePage
