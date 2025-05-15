'use client'

import Image from 'next/image'

import Pagination from "./_components/pagination/Pagination.jsx"
import ProductCard from "./_components/card/ProductCard.jsx"
import CategorySlider from "./_components/categorySlider/CategorySlider.jsx"
import SidebarFilter from './_components/sidebarFilter/SidebarFilter.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_styles/Page.module.scss'
import section1Styles from './_styles/product-section1.module.scss'
import section2Styles from './_styles/product-section2.module.scss'




export default function ProductPage() {
  return (
    <>
      <div className={styles.productPage}>
        <div className={section1Styles.productBanner}>
          <img src="/product-img/productBanner.png" alt="banner" />
        </div>
        <main className={styles.main}>
          {/* 第一部分 */}
          <section className={section1Styles.categoryHeader}>
            {/* 左邊 */}
            <div className={section1Styles.pageHeading}>
              <div className={section1Styles.categoryTitle}>
                <div className={section1Styles.categoryTitleContainer}>
                  <span className={section1Styles.line}></span>
                  <div className={section1Styles.categoryTitleText}>free stitch Food</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#505050" />
                  </svg>
                </div>
              </div>

              {/* 麵包屑 */}
              <nav className={section1Styles.breadcrumbNav} aria-label="breadcrumb">
                <ol>
                  <li><a href="#">HOME</a></li>
                  <li>
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
                  </li>
                  <li><a href="#">Products</a></li>
                  <li>
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
                        d="M4.60576 13.4569C4.56211 13.4133 4.52748 13.3616 4.50385 13.3047C4.48022 13.2477 4.46805 13.1867 4.46805 13.125C4.46805 13.0634 4.48022 13.0023 4.50385 12.9454C4.52748 12.8884 4.56211 12.8367 4.60576 12.7931L9.89983 7.50002L4.60576 2.20689C4.51775 2.11887 4.4683 1.9995 4.4683 1.87502C4.4683 1.75054 4.51775 1.63116 4.60576 1.54314C4.69378 1.45512 4.81316 1.40568 4.93764 1.40568C5.06212 1.40568 5.1815 1.45512 5.26952 1.54314L10.8945 7.16814C10.9382 7.21169 10.9728 7.26341 10.9964 7.32036C11.0201 7.37731 11.0322 7.43836 11.0322 7.50002C11.0322 7.56167 11.0201 7.62273 10.9964 7.67967C10.9728 7.73662 10.9382 7.78835 10.8945 7.83189L5.26951 13.4569C5.22597 13.5005 5.17424 13.5352 5.11729 13.5588C5.06035 13.5824 4.9993 13.5946 4.93764 13.5946C4.87598 13.5946 4.81493 13.5824 4.75798 13.5588C4.70103 13.5352 4.64931 13.5005 4.60576 13.4569Z"
                        fill="#505050"
                      />
                    </svg>
                  </li>
                  <li><a href="#">Food | Dry Dog Food</a></li>
                </ol>
              </nav>
            </div>

            {/* 右邊 */}
            <CategorySlider />
          </section>

          {/* 第二部分 */}
          <section className={section2Styles.section2}>
            <aside className={section2Styles.productSidebar}>
              <div className={section2Styles.sidebarTextContainer}>
                <div className={section2Styles.sidebarTextProduct}>Product</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <circle cx="7.5" cy="7.5" r="7.5" fill="#505050" />
                </svg>
              </div>
              <SidebarFilter />
            </aside>

            <div className={section2Styles.productList}>
              <div className={section2Styles.listFilter}>
                <div className={section2Styles.listFilterText}>1-24 items |</div>

                <select className={section2Styles.mobileCategorySelect} defaultValue="">
                  <option value="" disabled>篩選</option>
                  <option value="food">Food</option>
                  <option value="can">Can</option>
                  <option value="snack">Snack</option>
                  <option value="bed">Bed</option>
                  <option value="bath">Bath</option>
                  <option value="toy">Toy</option>
                  <option value="cloth">Cloth</option>
                  <option value="collar">Collar</option>
                  <option value="accessory">Accessory</option>
                </select>

                <select className={section2Styles.customSelect} defaultValue="latest">
                  <option value="latest">最新上架</option>
                  <option value="popular">人氣排序</option>
                  <option value="price_low">價格低到高</option>
                  <option value="price_high">價格高到低</option>
                </select>
              </div>

              <div className={section2Styles.cardGroup}>
                <ProductCard
                  image="./product-img/product3.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product4.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500" />
                <ProductCard
                  image="./product-img/product1.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product2.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product3.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product4.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500" />
                <ProductCard
                  image="./product-img/product1.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product2.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product3.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product4.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500" />
                <ProductCard
                  image="./product-img/product1.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
                <ProductCard
                  image="./product-img/product2.png"
                  name="好食·金屬寵器台｜冷冽黑 & 云白 M"
                  price="NT$3,500"
                />
              </div>
            </div>
          </section>
          <Pagination />
        </main>
      </div>
    </>
  )
}
