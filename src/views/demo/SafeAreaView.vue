<template>
  <!-- Safe Area Demo Section -->
  <div
    :style="{
      minHeight: '100vh',
      backgroundColor: color,
      opacity: opacity / 100,
      paddingTop: 'max(20px, env(safe-area-inset-top))',
      paddingRight: 'max(20px, env(safe-area-inset-right))',
      paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
      paddingLeft: 'max(20px, env(safe-area-inset-left))',
    }"
    class="w-full transition-all duration-300 flex flex-col items-center justify-center"
  >
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">Safe Area Demo</h1>
        <p class="text-lg text-white mb-2">
          スマートフォンのセーフエリア
        </p>
        <p class="text-sm text-white opacity-90">
          iPhone のノッチ・Dynamic Island、Android の丸角を考慮
        </p>
        <p class="text-xs text-white opacity-75 mt-6">
          下にスクロールして色を変更してください ↓
        </p>
      </div>
  </div>

  <!-- Control Panel -->
  <div class="bg-gray-50 w-full">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-white rounded-xl shadow-md p-8">
        <h2 class="text-2xl font-bold mb-6">カスタマイズ</h2>

        <!-- Color Picker -->
        <div class="mb-8">
          <label class="block text-sm font-semibold text-gray-700 mb-3">背景色を選択</label>
          <div class="flex items-center gap-4">
            <input
              v-model="color"
              type="color"
              class="w-16 h-16 rounded-lg cursor-pointer border-2 border-gray-300"
            >
            <span class="text-lg font-mono text-gray-700">{{ color }}</span>
          </div>
        </div>

        <!-- Opacity Slider -->
        <div class="mb-8">
          <label class="block text-sm font-semibold text-gray-700 mb-3">
            透明度: {{ opacity }}%
          </label>
          <input
            v-model.number="opacity"
            type="range"
            min="0"
            max="100"
            step="5"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          >
          <div class="flex justify-between text-xs text-gray-500 mt-2">
            <span>0% (透明)</span>
            <span>100% (不透明)</span>
          </div>
        </div>

        <!-- Preset Colors -->
        <div class="mb-8">
          <label class="block text-sm font-semibold text-gray-700 mb-3">プリセット色</label>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="preset in presets"
              :key="preset.name"
              @click="selectPreset(preset)"
              class="px-4 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95 flex-1 min-w-max"
              :style="{ backgroundColor: preset.color }"
            >
              {{ preset.name }}
            </button>
          </div>
        </div>

        <!-- Code Display -->
        <div class="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
          <p class="text-gray-400 mb-2">// CSS の実装例</p>
          <p>safe-area-inset-top: {{ getSafeAreaCSS() }}</p>
          <p class="text-gray-500 mt-4">background-color: {{ color }};</p>
          <p class="text-gray-500">opacity: {{ (opacity / 100).toFixed(2) }};</p>
        </div>

        <!-- Info -->
        <div class="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p class="text-sm text-gray-700">
            <strong>ℹ️ セーフエリアについて：</strong><br>
            iPhone のノッチ、Dynamic Island、Android の丸角などの影響を受けない安全領域です。
            <code class="bg-gray-200 px-2 py-1 rounded text-xs">env(safe-area-inset-*)</code>
            CSS 関数を使用して、画面端の余白を自動計算します。
          </p>
        </div>
      </div>

      <!-- Device Preview Tips -->
      <div class="mt-8 bg-white rounded-xl shadow-md p-8">
        <h3 class="text-lg font-bold mb-4">動作確認のコツ</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>スマートフォンでの確認が最も効果的です（特に iPhone）</span>
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>Chrome DevTools でモバイルデバイスをシミュレートして確認できます</span>
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>回転（Portrait / Landscape）により、セーフエリアが動的に変わります</span>
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>透明度スライダーでグラデーション効果も実現可能です</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('#3498db')
const opacity = ref(100)

const presets = [
  { name: 'Blue', color: '#3498db' },
  { name: 'Green', color: '#27ae60' },
  { name: 'Purple', color: '#9b59b6' },
  { name: 'Red', color: '#e74c3c' },
  { name: 'Orange', color: '#e67e22' },
]

const selectPreset = (preset) => {
  color.value = preset.color
  opacity.value = 100
}

const getSafeAreaCSS = () => {
  return 'max(20px, env(safe-area-inset-top))'
}
</script>
