<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <h1 class="text-3xl font-bold mb-2">Projects</h1>
    <p class="text-gray-600 mb-12">これまでに携わった主なプロジェクトです。</p>

    <!-- メインプロジェクト -->
    <div class="space-y-8 mb-16">
      <div v-for="project in projects" :key="project.title"
        class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <span :class="`text-xs font-semibold px-3 py-1 rounded-full ${project.typeColor}`">{{ project.type }}</span>
        </div>
        <p class="text-sm text-gray-500 mb-3">{{ project.company }} ・ {{ project.period }}</p>
        <p class="text-gray-700 mb-4">{{ project.description }}</p>
        <ul class="mb-4 space-y-1">
          <li v-for="item in project.achievements" :key="item" class="text-gray-700 text-sm flex gap-2">
            <span class="text-gray-400 shrink-0">▸</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <div class="flex flex-wrap gap-2">
          <span v-for="t in project.tech" :key="t"
            class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{{ t }}</span>
        </div>
      </div>
    </div>

    <!-- 過去経験 -->
    <div>
      <h2 class="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">その他の経験</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="exp in prevExperience" :key="exp.title"
          class="border border-gray-200 rounded-lg p-4">
          <h3 class="font-semibold mb-1">{{ exp.title }}</h3>
          <p class="text-sm text-gray-500 mb-3">{{ exp.company }} ・ {{ exp.period }}</p>
          <div class="flex flex-wrap gap-1">
            <span v-for="t in exp.tech" :key="t"
              class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Android 券売機システム（新規開発）',
    company: '飲食店向けシステム開発会社',
    period: '2025年10月 〜 現在',
    type: '0ベース新規開発',
    typeColor: 'bg-blue-100 text-blue-800',
    description: '飲食店向けAndroidタブレット設置型セルフオーダー券売機システム。フロントエンドからバックエンド・インフラまでフルスタックで担当。約10店舗に展開中。',
    achievements: [
      'Kotlinによる Androidアプリ開発（MVVM設計）',
      '現金決済・タッチ決済・チケット印刷のハードウェア連携',
      'Node.js / Express による CMS・POS連携 API 設計・実装',
      'マルチテナント設計（Company → Branch → User 階層）',
      'AWS EC2 本番・STG 環境をゼロから構築・CI/CD 自動デプロイ',
    ],
    tech: ['Kotlin', 'Node.js', 'Express', 'MongoDB', 'AWS EC2', 'S3', 'Docker', 'Bitbucket Pipelines'],
  },
  {
    title: 'テーブルオーダーシステム（保守・改修）',
    company: '飲食店向けシステム開発会社',
    period: '2025年10月 〜 現在',
    type: '保守・機能改修',
    typeColor: 'bg-green-100 text-green-800',
    description: '飲食店向け QR コードテーブルオーダーシステム。約 120 店舗展開中のシステムで、Node.js v12 → v24 へのメジャーバージョンアップと機能改修を担当。',
    achievements: [
      'Node.js v12 → v24 メジャーバージョンアップ（破壊的変更対応）',
      'Socket.IO v4 / Mongoose 8 / AWS SDK v3 移行対応',
      'Amazon DocumentDB への MongoDB 移行（TLS/SSL 対応）',
      'ステージング環境構築・systemd 移行',
    ],
    tech: ['Node.js', 'Socket.IO', 'MongoDB', 'AWS DocumentDB', 'Express', 'Pug'],
  },
  {
    title: 'POS システム外部連動機能開発',
    company: '飲食店向けシステム開発会社',
    period: '2025年10月 〜 現在',
    type: '機能追加',
    typeColor: 'bg-purple-100 text-purple-800',
    description: 'VB.NET 製飲食店向け POS システムへの外部 API 連動機能を実装。Android 券売機・テーブルオーダーとのリアルタイム連携を実現。',
    achievements: [
      '売上データ取得・メニュー同期・割引同期 API 連携（OAuth2）',
      '卓管理・メニュー同期・Socket.IO イベント配信（HTTP Digest 認証）',
      'TLS 1.2 セキュア通信対応',
    ],
    tech: ['VB.NET', '.NET Framework', 'OAuth2', 'HTTP Digest', 'TLS 1.2'],
  },
]

const prevExperience = [
  { title: 'Windows 11 移行に伴うシステム改修', company: 'SES 企業（前職）', period: '2025年6月 〜 2025年9月', tech: ['ClassicASP', 'JavaScript', 'VBScript', 'VBA', 'SQL Server'] },
  { title: '不動産向け社内業務システム開発・保守', company: 'SES 企業（前職）', period: '2024年6月 〜 2025年5月', tech: ['PHP', 'CakePHP', 'Oracle', 'PL/SQL', 'jQuery'] },
  { title: '共済システム改修・テスト', company: 'SES 企業（前職）', period: '2023年12月 〜 2024年5月', tech: ['NEXACRO', 'SQL Server', 'Git'] },
  { title: '社内業務効率化ツール開発・保守', company: '自動車メーカー（社内SE）', period: '2022年4月 〜 2023年7月', tech: ['VBA', 'Excel'] },
]
</script>
