'use client'
import { useState } from 'react'
import styles from './member-Info.module.scss'
import BtnCustom from '../../_components/BtnCustom/layout'
import Image from 'next/image'

export default function InfoPage() {
  const [formData, setFormData] = useState({
    username: '林小旻',
    gender: 'male',
    email: 'xiaomin.l@example.com',
    phone: '0912345678',
    birthday: '1990-01-01',
  })

  const [preview, setPreview] = useState('/member/member_images/user-img.svg')
  const [avatarFile, setAvatarFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAvatarFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleRemovePhoto = () => {
    setAvatarFile(null)
    setPreview('/member/member_images/user-img.svg')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('送出資料:', formData, avatarFile)
  }

  const [activeGender, setActiveGender] = useState(formData.gender)

  const handleGenderChange = (gender) => {
    setActiveGender(gender)
    setFormData((prev) => ({ ...prev, gender })) // 同時更新 formData 的 gender
  }

  return (
    <>
      <div className={`${styles.eventTitle} d-flex align-items-center`}>
        會員基本資料
      </div>
      <div className={`${styles.block} p-4 mt-lg-3`}>
        <form className="member-profile-form" onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col-12 col-lg-6 order-1 order-lg-0">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  使用者名稱
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="請輸入您的名稱"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 d-flex flex-column justify-content-center">
                <label className="form-label d-block">性別</label>
                <div className="d-flex justify-content-center gap-3">
                  <div className="w-50">
                    <button
                      type="button"
                      className={`${styles.btnRadio} btn w-100 ${activeGender === 'male' ? styles.active : ''}`}
                      onClick={() => handleGenderChange('male')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleGenderChange('male')
                        }
                      }}
                      tabIndex={0} // 使其可聚焦
                    >
                      男生
                    </button>
                  </div>
                  <div className="w-50">
                    <button
                      type="button"
                      className={`${styles.btnRadio} btn w-100 ${activeGender === 'female' ? styles.active : ''}`}
                      onClick={() => handleGenderChange('female')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleGenderChange('female')
                        }
                      }}
                      tabIndex={0} // 使其可聚焦
                    >
                      女生
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  手機號碼
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="09xxxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="birthday" className="form-label">
                  生日（選填）
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 頭貼區 */}
            <div className="d-flex justify-content-between align-items-center flex-column col-12 col-lg-6 order-0 order-lg-1 mb-3 mb-lg-0">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div
                  className={`rounded-circle border-3 overflow-hidden d-flex justify-content-center align-items-center ${styles.memberImg}`}
                >
                  <Image
                    src={preview}
                    alt="使用者頭貼"
                    className="object-fit-cover h-100 w-100"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="mt-3 d-flex gap-2">
                  <button
                    type="button"
                    className={`fs-6 ${styles.btnImg1}`}
                    onClick={() =>
                      document.getElementById('upload-img').click()
                    }
                  >
                    上傳頭貼
                  </button>
                  <button
                    type="button"
                    className={`fs-6 ${styles.btnImg2}`}
                    onClick={handleRemovePhoto}
                  >
                    移除照片
                  </button>
                </div>

                <input
                  type="file"
                  id="upload-img"
                  accept="image/*"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </div>

              <div className="d-none d-lg-flex justify-content-center text-center">
                <BtnCustom>儲存資料</BtnCustom>
              </div>
            </div>
          </div>

          <div className="d-flex d-lg-none justify-content-center text-center">
            <BtnCustom>儲存資料</BtnCustom>
          </div>
        </form>
      </div>
    </>
  )
}
