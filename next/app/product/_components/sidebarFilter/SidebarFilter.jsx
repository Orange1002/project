import { useState } from 'react'
import section2Styles from './sidebarFilter.module.scss'

export default function SidebarFilter() {
    const [isFoodOpen, setIsFoodOpen] = useState(true)

    return (
        <>
            <nav className={section2Styles.productFilterNav}>
                <ul>
                    {/* 主分類：Food */}
                    <li className={`${section2Styles.hasSub} ${isFoodOpen ? section2Styles.active : ''}`}>
                        <button
                            className={section2Styles.categoryToggle}
                            onClick={() => setIsFoodOpen((prev) => !prev)}
                            type="button"
                        >
                            Food
                            {isFoodOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="1" viewBox="0 0 11 1" fill="none">
                                    <rect width="11" height="1" fill="#505050" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <rect y="5" width="11" height="1" fill="#505050" />
                                    <rect x="5" width="1" height="11" fill="#505050" />
                                </svg>
                            )}
                        </button>
                    </li>

                    {/* 子分類：Food */}
                    {isFoodOpen && (
                        <ul className={section2Styles.subCategoryFood}>
                            <li className={section2Styles.active}>
                                <a href="#">
                                    <div>Dry Dog Food</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Can</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Snack</div>
                                </a>
                            </li>
                        </ul>
                    )}

                    {/* 其他分類 */}
                    <li className={section2Styles.otherProduct}>
                        <a href="#"><div>Bed</div></a>
                    </li>
                    <li className={section2Styles.otherProduct}>
                        <a href="#"><div>Bath</div></a>
                    </li>
                    <li className={section2Styles.otherProduct}>
                        <a href="#"><div>Toy</div></a>
                    </li>
                    <li className={section2Styles.otherProduct}>
                        <a href="#"><div>Cloth</div></a>
                    </li>
                    <li className={section2Styles.otherProduct}>
                        <a href="#"><div>Collar</div></a>
                    </li>

                    {/* Course */}
                    <li className={`${section2Styles.hasSub} ${section2Styles.noGap}`}>
                        <button className={section2Styles.categoryToggle}>
                            Course
                            {/* 之後可以放 */}
                        </button>
                    </li>

                    {/* Pet Sitter */}
                    <li className={`${section2Styles.hasSub} ${section2Styles.noGap}`}>
                        <button className={section2Styles.categoryToggle}>
                            Pet Sitter
                            {/* 之後可以放 */}
                        </button>
                    </li>
                </ul>
            </nav>

            <form className={section2Styles.priceFilter}>
                <div className={section2Styles.priceFilterContainer}>
                    <div className={section2Styles.priceTitle}>價格區間</div>

                    <div className={section2Styles.priceRange}>
                        <input type="number" placeholder="最低" />

                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                            <path d="M6 11.6666C6 11.476 6.07243 11.2932 6.20136 11.1584C6.3303 11.0236 6.50516 10.9479 6.6875 10.9479H16.3125C16.4948 10.9479 16.6697 11.0236 16.7986 11.1584C16.9276 11.2932 17 11.476 17 11.6666C17 11.8573 16.9276 12.0401 16.7986 12.1749C16.6697 12.3097 16.4948 12.3854 16.3125 12.3854H6.6875C6.50516 12.3854 6.3303 12.3097 6.20136 12.1749C6.07243 12.0401 6 11.8573 6 11.6666Z" fill="black" />
                        </svg>

                        <input type="number" placeholder="最高" />
                    </div>

                    <div className={section2Styles.priceNote}>
                        (原始區間：<span className={section2Styles.priceRangeNote}>NT$0–NT$99,999</span>)
                    </div>

                    <div className={section2Styles.priceSubmitContainer}>
                        <button type="submit" className={section2Styles.priceSubmitBtn}>篩選</button>
                    </div>
                </div>
            </form>
        </>
    )
}