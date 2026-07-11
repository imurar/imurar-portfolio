<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <router-link to="/demo" class="text-sm text-gray-500 hover:text-gray-700 transition">← Demo</router-link>
    <h1 class="text-3xl font-bold mt-2 mb-2">文字数カウンター</h1>
    <p class="text-gray-600 mb-12">リアルタイムで文字数・行数・残り文字数を表示するツールです。</p>

    <div class="max-w-lg border border-gray-200 rounded-xl p-6">
      <textarea v-model="text" rows="6" placeholder="テキストを入力してください..."
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none mb-4"></textarea>

      <div class="grid grid-cols-3 gap-3 mb-4">
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <div class="text-2xl font-bold text-gray-900">{{ countAll }}</div>
          <div class="text-xs text-gray-500 mt-1">文字数（全体）</div>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <div class="text-2xl font-bold text-gray-900">{{ countNoSpace }}</div>
          <div class="text-xs text-gray-500 mt-1">文字数（空白除く）</div>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <div class="text-2xl font-bold text-gray-900">{{ countLines }}</div>
          <div class="text-xs text-gray-500 mt-1">行数</div>
        </div>
      </div>

      <div class="flex gap-3">
        <div class="flex-1">
          <label class="text-xs text-gray-500 mb-1 block">上限文字数</label>
          <input v-model.number="limit" type="number" min="1"
            class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800" />
        </div>
        <div class="flex-1">
          <label class="text-xs text-gray-500 mb-1 block">残り文字数</label>
          <div :class="`border rounded-lg px-3 py-1.5 text-sm font-bold bg-gray-50 ${remainingClass}`">{{ remaining }}</div>
        </div>
      </div>

      <button @click="text = ''"
        class="mt-4 w-full py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition">
        クリア
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const text = ref('')
const limit = ref(140)

const countAll = computed(() => text.value.length)
const countNoSpace = computed(() => text.value.replace(/\s/g, '').length)
const countLines = computed(() => text.value === '' ? 0 : text.value.split('\n').length)
const remaining = computed(() => limit.value - countAll.value)
const remainingClass = computed(() => {
  if (remaining.value < 0) return 'border-red-400 text-red-600'
  if (remaining.value <= 20) return 'border-yellow-400 text-yellow-600'
  return 'border-gray-200 text-gray-900'
})
</script>
