// フッター — ダークネイビー背景、転職中アピールとお問い合わせCTA
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>菊地　秀平</span>
          <span className={styles.tagline}>
            現在転職活動中 — マーケ・企画系ポジション
          </span>
        </div>
        <a href="mailto:falilv.xc90@gmail.com" className={styles.contactBtn}>
          お問い合わせ →
        </a>
      </div>
    </footer>
  );
}
