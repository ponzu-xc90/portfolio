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
  "お笑い芸人として3年間活動",
  "デジタルマーケティング運用に従事",
  "現在転職活動中（マーケ・企画系ポジション）",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>04 / About</p>
          <h2 className={styles.title}>About me.</h2>
        </header>

        <div className={styles.columns}>
          <div className={styles.left}>
            {/* TODO: 名前が決まったら "Your Name" を変更 */}
            <h3 className={styles.name}>Your Name</h3>
            <p className={styles.bio}>
              お笑い芸人として活動しながら、AIを活用したWebサービス・アプリの開発を独学で行っています。笑いの感覚とAIを掛け合わせた、他にない視点でモノを作ることが好きです。現在はマーケ・企画系職種での転職活動中。
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
