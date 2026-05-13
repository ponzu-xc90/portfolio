// ヒーローセクション — ファーストビュー、大見出し・タグ・CTAボタン
import Link from "next/link";
import styles from "./Hero.module.css";

const tags = ["AI活用", "企画・立案", "マーケティング", "コンテンツ制作", "お笑い / 表現"];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Marketing <span className={styles.accent}>×</span> AI.
        </h1>
        <p className={styles.subheading}>
          お笑い×AI活用ができる、マーケ・企画人材
        </p>
        <p className={styles.description}>
          お笑い芸人として培った企画力・ゼロイチで形にする力・人を動かす表現力と、AIを活用したWebサービス制作の実績を持つビジネス人材です。アイデアを実際に動くものとして、素早く届けることが得意です。
        </p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <Link href="#works" className={styles.cta}>
          Works を見る →
        </Link>
      </div>
    </section>
  );
}
