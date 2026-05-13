// トップナビゲーション — sticky配置、モバイルではハンバーガーメニューに切り替え
"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* TODO: 名前が決まったら YOURNAME を変更 */}
        <Link href="/" className={styles.logo} onClick={close}>
          YOURNAME
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <Link href="#works" className={styles.link} onClick={close}>
            Works
          </Link>
          <Link href="#story" className={styles.link} onClick={close}>
            Story
          </Link>
          <Link href="#about" className={styles.link} onClick={close}>
            About
          </Link>
          <Link href="#contact" className={styles.contactBtn} onClick={close}>
            Contact
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
