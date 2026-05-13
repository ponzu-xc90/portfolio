// Storyセクション — 3つの強みを白背景カードで紹介
import styles from "./Story.module.css";

const items = [
  {
    number: "01",
    title: "企画・ゼロイチ力",
    description:
      "お笑いの現場でネタ・コント・企画をゼロから作り続けた経験。アイデアを形にするスピードが強み。",
  },
  {
    number: "02",
    title: "AI活用の実行力",
    description:
      "Claude・ChatGPTを使い、実際に動くWebサービスを複数制作。ツールを使いこなして成果を出せる。",
  },
  {
    number: "03",
    title: "人を動かす表現力",
    description:
      "笑いの現場で磨いた『伝わる言葉・構成・タイミング』の感覚。マーケ・企画の現場で直接活きる。",
  },
];

export default function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>03 / Story</p>
          <h2 className={styles.title}>Why me.</h2>
          <p className={styles.subtitle}>3つの強みで、ビジネスの現場に貢献します</p>
        </header>

        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.number} className={styles.card}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
