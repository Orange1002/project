// components/SitterCard.js
import Link from 'next/link'
import React from 'react'

export default function SitterCard({ sitter }) {
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img
          src={sitter.avatar_url || 'https://placehold.co/400x351'}
          className="card-img-top"
          alt="保母圖片"
        />
        <div className="card-body card-body-bg">
          <h5 className="card-title card-title-custom">{sitter.name}</h5>
          <p className="card-text text-danger card-text-custom">
            {sitter.short_intro}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              href={`/sitter/sitter-detail/${sitter.id}`}
              className="text-danger detail-link"
            >
              詳細介紹
            </Link>
            <div className="rounded-circle rating-circle">{sitter.rating}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
