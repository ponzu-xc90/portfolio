import Image from "next/image";
import styles from "./ComedyLab.module.css";

const slides = [
  { src: "/images/comedy-lab/slide-01.png", alt: "笑いの仕組み図①" },
];

export default function ComedyLab() {
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

        <div className={styles.slides}>
          {slides.map((slide) => (
            <div key={slide.src} className={styles.slideWrapper}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1800}
                height={1200}
                quality={100}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
