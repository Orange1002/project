'use client'

import Image from 'next/image'
import styles from './layout.module.css'
import { useRouter } from 'next/navigation'

export default function DogCard({ dog, onDelete }) {
  const router = useRouter()

  return (
    <div className={`${styles.card} card`}>
      <div className="position-relative">
        <Image
          src={dog.image || '/member/dogs_images/default-dog.png'}
          alt={dog.name}
          width={300}
          height={200}
          className="card-img-top object-fit-cover"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{dog.name}</h5>
        <p className="card-text">{dog.description}</p>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            onClick={() => router.push(`/dogs/edit/${dog.id}`)}
          >
            編輯
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(dog.id)}
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  )
}
