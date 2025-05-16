import React, { useState } from 'react'

function PostArticle() {
  const [previewSrc, setPreviewSrc] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewSrc(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewSrc(null)
    }
  }

  return (
    <div className="card shadow p-4 mt-5 post-art">
      <h2 className="mb-4">發表新文章</h2>

      <form>
        {/* 分類 */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            文章分類
          </label>
          <select className="form-select" id="category" required>
            <option value="">請選擇分類</option>
            <option value="營養與飲食">營養與飲食</option>
            <option value="行為與訓練">行為與訓練</option>
            <option value="健康與保健">健康與保健</option>
            <option value="戶外活動與探險">戶外活動與探險</option>
          </select>
        </div>

        {/* 內容 */}
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            文章內容
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            placeholder="輸入文章內容..."
            required
          ></textarea>
        </div>

        {/* 圖片 */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            上傳圖片
          </label>
          <input
            className="form-control"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {previewSrc && (
            <img
              src={previewSrc}
              alt="圖片預覽"
              className="preview-img mt-3"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          )}
        </div>

        <div className="d-flex justify-content-end">
          {/* 提交按鈕 */}
          <button type="submit" className="btn replay-btn">
            送出文章
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostArticle
