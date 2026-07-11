<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <router-link to="/demo" class="text-sm text-gray-500 hover:text-gray-700 transition">← Demo</router-link>
    <h1 class="text-3xl font-bold mt-2 mb-2">UI コンポーネント</h1>
    <p class="text-gray-600 mb-12">ボタン・バッジ・カード・アラート・フォームパーツのサンプル集です。</p>

    <!-- ボタン -->
    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">ボタン</h2>
      <div class="flex flex-wrap gap-3">
        <button class="px-5 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition">Primary</button>
        <button class="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition">Secondary</button>
        <button class="px-5 py-2 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition">Outline</button>
        <button class="px-5 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-400 transition">Danger</button>
        <button class="px-5 py-2 bg-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed" disabled>Disabled</button>
      </div>
    </div>

    <!-- バッジ -->
    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">バッジ</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">New</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Success</span>
        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Warning</span>
        <span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Error</span>
        <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Default</span>
      </div>
    </div>

    <!-- カード -->
    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">カード</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="card in cards" :key="card.label" class="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
          <div :class="`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center mb-3 ${card.text} font-bold`">{{ card.label }}</div>
          <h3 class="font-semibold mb-1">カードタイトル</h3>
          <p class="text-sm text-gray-600">サンプルのカードコンポーネントです。ホバーで影が付きます。</p>
        </div>
      </div>
    </div>

    <!-- アラート -->
    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">アラート</h2>
      <div class="space-y-3">
        <div v-for="alert in alerts" :key="alert.icon" :class="`flex gap-3 p-4 ${alert.bg} border ${alert.border} rounded-lg ${alert.text} text-sm`">
          <span class="shrink-0">{{ alert.icon }}</span><p>{{ alert.message }}</p>
        </div>
      </div>
    </div>

    <!-- フォームパーツ -->
    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">フォームパーツ</h2>
      <div class="max-w-md space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">テキスト入力</label>
          <input type="text" placeholder="入力してください" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">セレクトボックス</label>
          <select class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white">
            <option>選択してください</option>
            <option>オプション 1</option>
            <option>オプション 2</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="check1" class="w-4 h-4 accent-gray-900" />
          <label for="check1" class="text-sm text-gray-700">チェックボックス</label>
        </div>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="radio" class="accent-gray-900" /> ラジオ A</label>
          <label class="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="radio" class="accent-gray-900" /> ラジオ B</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { label: 'A', bg: 'bg-blue-100', text: 'text-blue-600' },
  { label: 'B', bg: 'bg-green-100', text: 'text-green-600' },
  { label: 'C', bg: 'bg-purple-100', text: 'text-purple-600' },
]
const alerts = [
  { icon: 'ℹ️', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', message: '情報メッセージのサンプルです。' },
  { icon: '✅', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', message: '成功メッセージのサンプルです。' },
  { icon: '⚠️', bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', message: '警告メッセージのサンプルです。' },
  { icon: '❌', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', message: 'エラーメッセージのサンプルです。' },
]
</script>
