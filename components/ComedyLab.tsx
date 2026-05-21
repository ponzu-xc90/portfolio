"use client";

import { useState } from "react";
import styles from "./ComedyLab.module.css";

const slides = [
  {
    id: 1,
    title: "お笑いの構造・理論",
    pages: ["/images/comedy-lab/slide-01.svg"],
  },
  {
    id: 2,
    title: "フリの理論",
    pages: [
      "/images/comedy-lab/slide-02-p1.svg",
      "/images/comedy-lab/slide-02-p2.svg",
      "/images/comedy-lab/slide-02-p3.svg",
    ],
  },
];

export default function ComedyLab() {
  const [activeSlide, setActiveSlide] = useState<(typeof slides)[0] | null>(null);

  return (
    <section id="comedy-lab" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>04 / Comedy Lab</p>
          <h2 className={styles.title}>Comedy Lab</h2>
          <p className={styles.subtitle}>
            お笑い芸人として活動する中で、笑いの構造を独自に研究・言語化してきました。その一部をご紹介します。
          </p>
        </header>

        <div className={styles.grid}>
          {slides.map((slide) => (
            <button
              key={slide.id}
              className={styles.card}
              onClick={() => setActiveSlide(slide)}
              aria-label={`${slide.title}を開く`}
            >
              <div className={styles.thumbnailArea}>
                <img
                  src={slide.pages[0]}
                  alt={`${slide.title} 1ページ目`}
                  className={styles.thumbnail}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeSlide && (
        <div
          className={styles.overlay}
          onClick={() => setActiveSlide(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeSlide.title}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{activeSlide.title}</span>
              <button
                className={styles.closeButton}
                onClick={() => setActiveSlide(null)}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              {activeSlide.pages.map((page, i) => (
                <img
                  key={i}
                  src={page}
                  alt={`${activeSlide.title} ${i + 1}ページ目`}
                  className={styles.modalPage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
