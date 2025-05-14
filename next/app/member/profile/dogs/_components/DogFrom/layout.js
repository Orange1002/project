'use client'
import { useState, useEffect } from 'react'
import styles from './layout.module.css'
import Image from 'next/image'

export default function DogForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
    description: '',
    photo: null,
    preview: '/member/dogs_images/default-dog.png',
    ...initialData,
  })

  useEffect(() => {
    if (initialData.photo && typeof initialData.photo === 'string') {
      setFormData((prev) => ({ ...prev, preview: initialData.photo }))
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
        preview: URL.createObjectURL(file),
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.imagePreview}>
        <Image
          src={formData.preview}
          alt="狗狗照片"
          width={200}
          height={200}
          className="your-custom-class"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">上傳狗狗照片</label>
        <input
          type="file"
          className="form-control"
          onChange={handleFileChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">名字</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">年齡</label>
        <input
          type="text"
          className="form-control"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">品種</label>
        <input
          type="text"
          className="form-control"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">介紹</label>
        <textarea
          className="form-control"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className={`${styles.button} btn btn-primary`}>
        儲存
      </button>
    </form>
  )
}
