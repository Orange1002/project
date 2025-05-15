import React, { useState } from 'react'
import '../_style/list.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fab-container position-fixed bottom-0 end-0 p-4 floating-button">
      {/* 發文按鈕 */}
      {isOpen && (
        <button className="btn mb-2 fab-option show" id="postBtn">
          <i className="fa-solid fa-paw fa-fw mt-1"></i> 我要發文
        </button>
      )}

      {/* 修改文章按鈕 */}
      {isOpen && (
        <button className="btn mb-2 fab-option show" id="editBtn">
          <i className="fa-solid fa-paw fa-fw mt-1"></i> 修改文章
        </button>
      )}

      {/* 主 FAB 按鈕 */}
      <button
        id="fabToggle"
        className="btn shadow fab-main text-white c-s-btn p-2"
        style={{ width: '160px', height: '40px' }}
        onClick={toggleMenu}
      >
        <div className="d-flex justify-content-center gap-1">
          <i className="fa-solid fa-paw fa-fw mt-1"></i>
          <p>{isOpen ? '關閉' : '編輯文章'}</p>
        </div>
      </button>
    </div>
  )
}

export default FloatingActionButton
