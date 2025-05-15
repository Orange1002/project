'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './BreadcrumbNav1.module.scss'


export default function BreadcrumbNav() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  // 組成每個項目的資料：[{ label: 'Products', href: '/products' }, ...]
  const items = segments.map((seg, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    // 自動轉換顯示文字（可擴充）
    const label = decodeURIComponent(seg).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return { label, href }
  })

  // 加入首頁
  const allItems = [{ label: 'HOME', href: '/' }, ...items]

  return (
    <nav className={styles['breadcrumb-nav']} aria-label="breadcrumb">
      <ol>
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          return (
            <li key={index}>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <>
                  <Link href={item.href}>{item.label}</Link>
                  <ChevronIcon />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.10576 13.4569C5.06211 13.4133 5.02748 13.3616 5.00385 13.3047C4.98022 13.2477 4.96805 13.1867 4.96805 13.125C4.96805 13.0634 4.98022 13.0023 5.00385 12.9454C5.02748 12.8884 5.06211 12.8367 5.10576 12.7931L10.3998 7.50002L5.10576 2.20689C5.01775 2.11887 4.9683 1.9995 4.9683 1.87502C4.9683 1.75054 5.01775 1.63116 5.10576 1.54314C5.19378 1.45512 5.31316 1.40568 5.43764 1.40568C5.56212 1.40568 5.6815 1.45512 5.76952 1.54314L11.3945 7.16814C11.4382 7.21169 11.4728 7.26341 11.4964 7.32036C11.5201 7.37731 11.5322 7.43836 11.5322 7.50002C11.5322 7.56167 11.5201 7.62273 11.4964 7.67967C11.4728 7.73662 11.4382 7.78835 11.3945 7.83189L5.76951 13.4569C5.72597 13.5005 5.67424 13.5352 5.61729 13.5588C5.56035 13.5824 5.4993 13.5946 5.43764 13.5946C5.37598 13.5946 5.31493 13.5824 5.25798 13.5588C5.20103 13.5352 5.14931 13.5005 5.10576 13.4569Z"
        fill="#505050"
      />
    </svg>
  )
}
