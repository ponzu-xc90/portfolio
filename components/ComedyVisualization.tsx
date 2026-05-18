"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ComedyVisualization.module.css";

type ComedyWork = {
  title: string;
  images: { src: string; alt: string }[];
  commentary: string;
};

const works: ComedyWork[] = [
  {
    title: "嫌な先生",
    images: [
      { src: "/images/comedy/teacher-1.png", alt: "嫌な先生 場面1" },
      { src: "/images/comedy/teacher-2.png", alt: "嫌な先生 場面2" },
    ],
    commentary:
      `「生徒から嫌われがちな先生は、どの瞬間に生まれるのか？」という疑問を起点にしたコントです。\n\n一般的にフレッシュで親しみやすいイメージがある教育実習生を、あえて最初から嫌な先生として登場させることで、イメージとのズレを笑いにしています。\n\n"ありそうで普通は見ない存在"を作ることで、学校あるあるを少し違う角度から見せることを意識しました。`,
  },
  {
    title: "最後の夏",
    images: [
      { src: "/images/comedy/last-summer.png", alt: "最後の夏 場面1" },
    ],
    commentary:
      "これまでの人生で集合写真等で最前列で寝転がったことがないことをふと小さなコンプレックスに感じ始め、どういう人物が寝転がれるのかを考えました。\n\nそこから派生し、「寝転がれる人は、甲子園出場を逃した直後の集合写真でも寝転がれるのか？」という極端な状況に広げて着想しました。",
  },
  {
    title: "魔法の代償",
    images: [
      { src: "/images/comedy/magic-cost-1.png", alt: "魔法の代償 場面1" },
      { src: "/images/comedy/magic-cost-2.png", alt: "魔法の代償 場面2" },
      { src: "/images/comedy/magic-cost-3.png", alt: "魔法の代償 場面3" },
    ],
    commentary:
      "前述の2つが日常の違和感や個人的な疑問を起点にしているのに対し、この作品はアニメやバトル漫画の定番展開から着想したものです。\n\nアイデアの種を探す中で、「自分を犠牲にして大技を出すシーン」に着目し、その犠牲が些細なものだったら良いズレが生まれるのではないかと考えました。",
  },
];

export default function ComedyVisualization() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section id="comedy" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>03 / Comedy Visualization</p>
          <h2 className={styles.title}>コントを漫画形式で見せる試み</h2>
          <p className={styles.subtitle}>
            お笑い活動で制作したコント台本の一部を、AI画像生成を使って漫画形式で表現しました。
            <br />
            コントの発想やキャラクター、設定の雰囲気を少しでもお伝えできればと思い、掲載しています。
          </p>
        </header>

        <ul className={styles.grid}>
          {works.map((work) => (
            <li key={work.title} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{work.title}</h3>

                <div className={styles.images}>
                  {work.images.map((img) => (
                    <button
                      key={img.src}
                      className={styles.imageWrapper}
                      onClick={() => openLightbox(img.src, img.alt)}
                      aria-label={`${img.alt}を拡大表示`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={900}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </button>
                  ))}
                </div>

                <div className={styles.commentary}>
                  <span className={styles.commentaryLabel}>解説</span>
                  <div className={styles.commentaryBody}>
                    {work.commentary.split("\n\n").map((para, i) => (
                      <p key={i} className={styles.commentaryPara}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {lightboxSrc && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="画像拡大表示"
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="閉じる"
          >
            ✕
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt={lightboxAlt}
              width={800}
              height={1200}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
