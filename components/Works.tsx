// Worksセクション — AIを活用して制作したWebサービスのカードグリッド
import Image from "next/image";
import styles from "./Works.module.css";

type Work = {
  title: string;
  image: string;
  category: string;
  description: string;
  url: string;
};

const works: Work[] = [
  {
    title: "お菊神社",
    image: "/works/okiku.png",
    category: "Web App",
    description:
      "おみくじアプリが作れたら友達に自慢できると思い、AIを使って勢いで制作。コーディング未経験からChatGPT×Google AI Studioを組み合わせ、Vercelで公開まで完結させた1作目。",
    url: "https://okiku-omikuji-ponzus-projects-900a8ab4.vercel.app/",
  },
  {
    title: "飯コン",
    image: "/works/meshicon.png",
    category: "Web App",
    description:
      "お腹は空いてるのに何食べたいかわからない、そんな自分の悩みをそのままアプリにした。外食ルートなら実際の店舗とおすすめメニューまで、自炊ルートなら料理名から調理方法まで丁寧に提案。自炊・外食の分岐や質問数の調整など、使い勝手にもこだわって作った2作目。",
    url: "https://meshicon-ponzus-projects-900a8ab4.vercel.app/",
  },
  {
    title: "お菊のベネズエラ分析",
    image: "/works/venezuela.png",
    category: "Website",
    description:
      "WBCを熱中して見ていたけど、対戦相手のベネズエラ代表の選手データをまとめているサイトがなかったから自分で作った。ただAIに任せたデータ収集で推定値が混入してしまい、試合を見ながら誤りに気づくという失敗も。「作って気づいた」が一番の学びだった。",
    url: "https://venezuela-wbc-git-claude-dating-028db2-ponzus-projects-900a8ab4.vercel.app/",
  },
  {
    title: "めんどくさい彼ゲーム",
    image: "/works/lovegame.png",
    category: "Web Game",
    description:
      "若い女性向けに恋愛シミュレーションゲームを作ったらバズるんじゃないかと思って制作。チャット形式で気軽に遊べる設計にしつつ、理不尽な展開だらけの高難易度にすることで「無理ゲー」として話題になることを狙った。",
    url: "https://ponzu-xc90.github.io/love_simulation/",
  },
  {
    title: "日本代表観戦ガイド2026",
    image: "/works/worldcup.png",
    category: "Website",
    description:
      "W杯が楽しみなのに細かい選手データがまとまっているサイトがなかったから自分で作ることにした。ベネズエラ分析サイトでのデータ誤りの反省を活かし、データ取得できない場合は明示・別手段で再取得・それでも無理なら手動収集という方針を自分で決めて運用。ChatGPTのディープリサーチとClaude Codeを組み合わせてデータ収集・開発を実施。現在も更新中。",
    url: "https://worldcup-japan-2026.vercel.app/",
  },
];

export default function Works() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>02 / Works</p>
          <h2 className={styles.title}>AI Projects</h2>
          <p className={styles.subtitle}>AIを活用して制作したWebサービス・プロダクト</p>
        </header>

        <ul className={styles.grid}>
          {works.map((work) => (
            <li key={work.title} className={styles.card}>
              <div className={styles.thumbnail}>
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.body}>
                <span className={styles.category}>{work.category}</span>
                <h3 className={styles.cardTitle}>{work.title}</h3>
                <p className={styles.desc}>{work.description}</p>
                <a
                  href={work.url}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サイトを見る →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
