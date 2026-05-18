// ヒーローセクション — ファーストビュー、大見出し・タグ・CTAボタン
import Link from "next/link";
import styles from "./Hero.module.css";

const tags = ["AI活用", "企画・立案", "マーケティング", "コンテンツ制作", "お笑い / 表現"];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Humor <span className={styles.accent}>×</span> Logic <span className={styles.accent}>×</span> AI.
        </h1>
        <p className={styles.subheading}>
          ビジネスの現場に、新しい発想と視点を持ち込む人材
        </p>
        <p className={styles.description}>
          お笑い芸人として3年間培った人の感情を動かす力<br />
          マーケティング業務で身につけた論理的思考力／分析力<br />
          そして創作を通じてAIを学んできた実行力<br />
          <br />
          人間ならではの発想力・ユーモアを活かしてAI時代に適応する価値を提供します。
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
