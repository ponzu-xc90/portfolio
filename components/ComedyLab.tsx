import styles from "./ComedyLab.module.css";

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
          <img
            src="/images/comedy-lab/slide-01.svg"
            alt="笑いの仕組み図①"
            style={{ width: "100%", maxWidth: "900px", height: "auto", display: "block", margin: "0 auto" }}
          />
        </div>
      </div>
    </section>
  );
}
