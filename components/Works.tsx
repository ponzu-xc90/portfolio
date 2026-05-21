"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Works.module.css";

type Work = {
  title: string;
  image: string;
  tagline: string;
  description: string;
  intent: string;
  aim: string;
  ingenuity: string;
  aiTools: string[];
  reflection: string;
  url: string;
};

const works: Work[] = [
  {
    title: "お菊神社",
    image: "/works/okiku.png",
    tagline: "おみくじWebアプリ",
    description:
      "おみくじアプリが作れたら友達に自慢できると思い、AIを使って勢いで制作。コーディング未経験からChatGPT×Google AI Studioを組み合わせ、Vercelで公開まで完結させた1作目。",
    intent:
      "「とりあえず何かを作ってみて、友達に自慢したい」と思い、まずはシンプルな構成で気軽に試してもらえそうなおみくじアプリを制作しました。",
    aim: "くだらないおみくじを朝に引いてもらうことで、ほんの少しでも気分よく1日を始めてもらうことを狙いました。",
    ingenuity:
      "初めての制作で、本当に自分に作れるのかも分からなかったため、とにかくやってみるというスピード感を重視しました。複雑な機能は入れず、シンプルな内容にしました。",
    aiTools: ["ChatGPT", "Google AI Studio"],
    reflection:
      "プログラミングの知識が全くない自分でも、AIを活用することでWebアプリとして公開まで進められたことに衝撃を受けました。この制作をきっかけに、「他のアイデアも形にしてみたい」という気持ちが生まれ、AIへの知的好奇心が大きく高まりました。",
    url: "https://okiku-omikuji-ponzus-projects-900a8ab4.vercel.app/",
  },
  {
    title: "飯コン",
    image: "/works/meshicon.png",
    tagline: "夜ごはん提案アプリ",
    description:
      "「今夜なに食べよう？」という迷いに対して、感覚的な質問に答えるだけで夜ご飯の候補を提案する診断型アプリです。自炊・外食の両方に対応し、質問数も「ぱっと決める」「普通に決める」「熟考する」から選べるようにすることで、その日の気分や考えたい度合いに合わせて使える設計にしました。",
    intent:
      "2本目の制作だったため、せっかくなら実用性のあるものを作りたいと思い、どういうものを作るかという設計から始めました。「お腹は空いているが、何を食べたいかがはっきりしない」という自分自身の悩みをもとに、夜ご飯を提案するアプリとして内容を確立させました。",
    aim: "自分と同じように食事選びで迷う人はもちろん、普段は大きな悩みとして感じていない人にも、気軽に使える便利なツールとして興味を持ってもらえるのではないかと考えました。",
    ingenuity:
      "無料で運用したかったため、アプリ内にAIを実装せずに済むように設計しました。質問への回答をもとに候補を出すルールベースの仕組みにすることで、AI APIを使わなくても「自分に合った提案を受けている」と感じられる使用感を目指しました。",
    aiTools: ["Claude", "Claude Code"],
    reflection:
      "経験と知識がなかったため、質問と回答のロジックを設計することと、デザイン面の調整に時間を要しました。友人に使ってもらったフィードバックをもとに、料理や店名の提案に加えて、調理法やメニューの補足も追加で実装し、完成度を高めました。",
    url: "https://meshicon-ponzus-projects-900a8ab4.vercel.app/",
  },
  {
    title: "お菊のベネズエラ分析",
    image: "/works/venezuela.png",
    tagline: "WBC選手データまとめサイト",
    description:
      "2026年3月に開催された野球の国際大会「WBC（ワールド・ベースボール・クラシック）」に出場するベネズエラ代表について、選手情報をまとめた分析コンテンツです。選手ごとの基本情報、所属チーム、成績などを整理し、代表チーム全体の特徴や注目選手を確認できる構成になっています。",
    intent:
      "私自身かなりWBCを熱中して見ていて、各国の情報を調べていたのですが、本当に自分が知りたい情報がまとまっているWebサイトが存在しなかったため、「AIでデータを収集すれば自分で作れるのではないか？」と思い立ち制作し始めました。",
    aim: "完全に自分用に制作しましたが、データが豊富に集まった選手情報を確認しながら試合観戦ができれば、さらに試合を楽しめるのではないかと画策。",
    ingenuity:
      "ターゲットを想定したものではなく、完全に自分自身のみがターゲットだったので、わがままに自分が知りたい情報を見やすく整理しました。\n野球の成績と追加して人柄を感じられるようにその選手の趣味などの雑学も入れました。",
    aiTools: ["Claude", "Claude Code", "ChatGPT（Deep research）"],
    reflection:
      "試合を見ていてテレビに少し表示されるデータと異なる部分があり、細かく確認してみると所々数字のミスが発覚しました。後日、原因について調べてみると、データ収集の際に取得できなかった情報については「取得不可」とせずにAI側で推定値を算出しその数字を反映していたことが原因でした。AIを信用し過ぎないという教訓と同時に、依頼前にデータの取得方法について議論を事前にする必要があったということを学びました。",
    url: "https://venezuela-wbc-git-claude-dating-028db2-ponzus-projects-900a8ab4.vercel.app/",
  },
  {
    title: '拒否デート侍「ムリオ」',
    image: "/works/lovegame.png",
    tagline: "恋愛シミュレーションゲーム",
    description:
      "チャット形式で気軽に遊べる恋愛シミュレーションゲームです。ユーザーは選択肢を選んでメッセージを返信し、ムリオをデートに誘うことができればゲームクリアです。",
    intent:
      "何か次のコンテンツを作ろうと探していた際に、ふと大流行したMBTI診断を考えてみると、「診断系のコンテンツは実はロジックさえ組めば簡単にできるのは？」と考え、最初はターゲットを10〜20代の女性向けとした恋愛系の診断コンテンツの制作を画策しました。しかし、AIを活用して診断系コンテンツを作るという同じような発想をしている人が多くいたため、方向性を切り替え、「診断系と同様の選択肢を選んでいく構造」×「LINEと同様のチャット形式」で親しみやすさを重視した恋愛ゲームに決めました。",
    aim: "親しみやすさと同時に、「ウザさ」「理不尽感」を高めて、クリア難易度をかなり高くすることで話題性を呼ぶことを狙いとしました。",
    ingenuity:
      "話の流れからメッセージの文言まで、絶妙な「ウザさ」や「理不尽さ」はAIで表現するのは厳しいと感じたため、あえてAIを活用せずに自分で作成しました。\nなるべくチャット画面の親しみやすさを出すためにアイコンの表示の仕方やレスポンス速度など細かい点にもこだわりました。",
    aiTools: ["Claude", "Claude Code"],
    reflection:
      "制作前からターゲットを明確に企画し、完成まで至ったものの、実際にこのプロダクトをどのように広めるかという点を詰めきれておらず、結局、周囲の友人に共有する範囲にとどまりました。完成後に広め方を考えるのではなく、制作段階からSNSでの発信や事前告知など、話題化の仕込みを進めるべきだったと感じました。",
    url: "https://ponzu-xc90.github.io/love_simulation/",
  },
  {
    title: "日本代表観戦ガイド2026",
    image: "/works/worldcup.png",
    tagline: "W杯日本代表情報サイト",
    description:
      "2026年6月から開催されるサッカーワールドカップの観戦ガイドサイトです。日本代表を中心に、対戦国や強豪国の選手データ、チーム情報、戦術など、幅広い情報を掲載しています。",
    intent:
      "4年前から楽しみにしていたワールドカップを楽しむため、WBCの際と同様に分かりやすい情報サイトを作ろうと画策しました。",
    aim: "様々なデータを事前にもしくは観戦中に見ることで、より試合を楽しめるようにすることを狙いとしました。",
    ingenuity:
      "WBCのサイト制作の失敗を活かし、誤ったデータを掲載しないようにAIを通じて取得できる情報とできない情報を把握した上で自動と手動の使い分けを実施しました。\nまた、一般公開も視野に入れているため、スクレイピングに該当しないようデータの取得方法に注意を払いました。",
    aiTools: ["Claude", "Claude Code", "ChatGPT（Deep research）", "ChatGPT（画像生成）", "Codex"],
    reflection:
      "まだ制作途中ですが、これまでのそれぞれのプロダクト生成の経験を活かして制作できていると実感しています。\n制作範囲が広く、AIツールの使用上限に達することも多かったため、限られた使用枠の中で依頼の仕方や作業内容を工夫し、効率的に進める意識が高まりました。",
    url: "https://worldcup-japan-2026.vercel.app/",
  },
];

function WorkCard({ work }: { work: Work }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <li className={styles.card}>
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
        <p className={styles.tagline}>{work.tagline}</p>
        <h3 className={styles.cardTitle}>{work.title}</h3>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>概要</span>
          <p className={styles.desc}>{work.description}</p>
        </div>

        <div className={styles.cardFooter}>
          <button
            className={styles.toggleBtn}
            onClick={() => setModalOpen(true)}
          >
            詳細を見る ▼
          </button>
          <a
            href={work.url}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            サイトを見る →
          </a>
        </div>
      </div>

      {modalOpen && (
        <div
          className={styles.modal}
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${work.title}の詳細`}
        >
          <button
            className={styles.modalClose}
            onClick={() => setModalOpen(false)}
            aria-label="閉じる"
          >
            ✕
          </button>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <p className={styles.modalTagline}>{work.tagline}</p>
              <h3 className={styles.modalTitle}>{work.title}</h3>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>制作意図</span>
                <p className={styles.detailText}>{work.intent}</p>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>狙い</span>
                <p className={styles.detailText}>{work.aim}</p>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>工夫した点</span>
                <p className={styles.detailText}>{work.ingenuity}</p>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>AI活用</span>
                <ul className={styles.aiTagList}>
                  {work.aiTools.map((tool) => (
                    <li key={tool} className={styles.aiTag}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>振り返り</span>
                <p className={styles.detailText}>{work.reflection}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default function Works() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>03 / Works</p>
          <h2 className={styles.title}>AI Projects</h2>
          <p className={styles.subtitle}>
            ふと、「AIについて知らないとこのままじゃやばいかも…。」と思い始め、2025年12月からAIについて学び始め、独学でWebサービスやアプリの制作まで実行しました。
            <br />
            日常の違和感や興味を起点に、企画・構成・言語化・試作まで行った自主制作です。完成度だけでなく、どのような意図で考え、どう形にし、何を振り返ったのかを整理しています。
          </p>
        </header>

        <ul className={styles.grid}>
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </ul>
      </div>
    </section>
  );
}
