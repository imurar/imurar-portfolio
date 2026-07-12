<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <h1 class="text-3xl font-bold mb-2">Demo</h1>
    <p class="text-gray-600 mb-12">HTML / CSS / JavaScript で実装したコンポーネント・ツールのサンプルです。</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <router-link v-for="demo in demos" :key="demo.to" :to="demo.to"
        class="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition group">
        <div class="text-3xl mb-3">{{ demo.icon }}</div>
        <h2 class="text-lg font-bold mb-1 group-hover:text-gray-600 transition">{{ demo.title }}</h2>
        <p class="text-sm text-gray-500">{{ demo.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const demos = [
  { to: '/demo/ui', icon: '🎨', title: 'UI コンポーネント', description: 'ボタン・バッジ・カード・アラート・フォームパーツのサンプル集' },
  { to: '/demo/animation', icon: '✨', title: 'CSS アニメーション', description: 'フェードイン・スライド・ホバーエフェクト・ローディングのデモ' },
  { to: '/demo/counter', icon: '📝', title: '文字数カウンター', description: 'リアルタイムで文字数・行数・残り文字数を表示するツール' },
  { to: '/demo/todo', icon: '✅', title: 'ToDoリスト', description: 'タスクの追加・完了・削除・フィルタリングができるアプリ' },
  { to: '/demo/safe-area', icon: '📱', title: 'セーフエリア対応', description: 'スマートフォンのセーフエリアのカラー・透明度をカスタマイズするデモ' },
]
</script>
