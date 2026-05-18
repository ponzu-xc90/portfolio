// Aboutセクション — 自己紹介と経歴の2カラムレイアウト
import styles from "./About.module.css";

const tools = [
  "Claude",
  "Claude Code",
  "ChatGPT",
  "Google AI Studio",
  "Vercel",
  "GitHub",
];

const career = [
  "立命館大学卒業",
  "新卒でデジタルマーケティング会社にて1年8ヶ月従事",
  "お笑い芸人として約3年間活動",
  "現在転職活動中（マーケ・企画系ポジション）",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>05 / About</p>
          <h2 className={styles.title}>About me.</h2>
        </header>

        <div className={styles.columns}>
          <div className={styles.left}>
            <h3 className={styles.name}>菊地　秀平</h3>
            <p className={styles.bio}>
              滋賀県出身の28歳。<br />
              お笑いからアニメ・アイドルまで幅広いコンテンツを守備範囲とする。<br />
              趣味は情報分析能力を活かした少額投資の競馬・バス釣り。<br />
              特技は広い視野と危機察知能力を活かした安全運転。
            </p>
            <ul className={styles.tools}>
              {tools.map((tool) => (
                <li key={tool} className={styles.tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <h4 className={styles.careerHeading}>経歴</h4>
            <ul className={styles.careerList}>
              {career.map((item) => (
                <li key={item} className={styles.careerItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
