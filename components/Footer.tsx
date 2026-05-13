// フッター — ダークネイビー背景、転職中アピールとお問い合わせCTA
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {/* TODO: 名前が決まったら YOURNAME を変更 */}
          <span className={styles.logo}>YOURNAME</span>
          <span className={styles.tagline}>
            現在転職活動中 — マーケ・企画系ポジション
          </span>
        </div>
        {/* TODO: お問い合わせ先のメールアドレスを設定 */}
        <a href="mailto:TODO@example.com" className={styles.contactBtn}>
          お問い合わせ →
        </a>
      </div>
    </footer>
  );
}
