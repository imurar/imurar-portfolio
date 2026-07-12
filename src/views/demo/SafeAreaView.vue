<template>
  <!-- Safe Area Display (Sticky - Fixed at top) -->
  <div
    :style="{
      position: 'sticky',
      top: 0,
      minHeight: '200px',
      backgroundColor: getRgba(color, Math.min(opacity + 20, 100)),
      paddingTop: 'max(20px, env(safe-area-inset-top))',
      paddingRight: 'max(20px, env(safe-area-inset-right))',
      paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
      paddingLeft: 'max(20px, env(safe-area-inset-left))',
      zIndex: 10,
      WebkitBackdropFilter: 'blur(8px)',
    }"
    class="w-full transition-all duration-300 flex flex-col items-center justify-center relative"
  >
      <div class="text-center text-white">
        <p class="text-sm opacity-75">スマートフォンのセーフエリア</p>
        <p class="text-xs opacity-60 mt-1">下にスクロールして色を変更してください ↓</p>
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
            class="w-full h-2 rounded-lg appearance-none cursor-pointer"
            :style="{
              background: `linear-gradient(to right, ${color} 0%, ${color} ${opacity}%, #d1d5db ${opacity}%, #d1d5db 100%)`
            }"
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
          <p>padding-top: {{ getSafeAreaCSS() }};</p>
          <p class="text-gray-500 mt-4">background: {{ getRgba(color, opacity) }};</p>
        </div>

      </div>

      <!-- Usage Tips -->
      <div class="mt-8 bg-white rounded-xl shadow-md p-8">
        <h3 class="text-lg font-bold mb-4">使い方</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>色ピッカーか プリセット色ボタンで背景色を変更</span>
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>透明度スライダーで透明さを調整</span>
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>上のセーフエリアに反映される動作を確認</span>
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold">•</span>
            <span>実際のスマートフォンで確認するとノッチの回避動作がわかります</span>
          </li>
        </ul>
      </div>

      <!-- Scroll Indicator -->
      <div class="mt-8 bg-white rounded-xl shadow-md p-8 text-center border-2 border-blue-500">
        <h2 class="text-3xl font-bold text-blue-600 mb-2">ここまでスクロールしてください ↓</h2>
        <p class="text-gray-600">上のセーフエリアの表示がどのように変わるか確認してください</p>
      </div>

      <!-- Dummy Content -->
      <div class="mt-8 space-y-6">
        <div class="bg-white rounded-xl shadow-md p-8">
          <h3 class="text-xl font-bold mb-4">セーフエリアについて</h3>
          <p class="text-gray-700 mb-3">
            スマートフォンのノッチやDynamic Island、ステータスバーのせいで、
            コンテンツが隠れてしまうことがあります。セーフエリアは、そういった障害物を避けて
            安全にコンテンツを配置できる領域です。
          </p>
          <p class="text-gray-700">
            env() 関数を使うと、デバイスごとの違いを自動で吸収してくれるので、
            一つのコードで複数デバイスに対応できます。
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-8">
          <h3 class="text-xl font-bold mb-4">実装のコツ</h3>
          <p class="text-gray-700 mb-3">
            固定ヘッダーやナビゲーション、ボタンなど、画面の端に配置する要素には
            特にセーフエリアの配慮が重要です。ノッチやDynamic Islandに隠れてしまうと、
            ユーザーが操作できなくなってしまいます。
          </p>
          <p class="text-gray-700">
            env() の対応ブラウザは十分に広いので、今からでも取り入れて損はありません。
          </p>
        </div>
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
}

const getSafeAreaCSS = () => {
  return 'max(20px, env(safe-area-inset-top))'
}

const getRgba = (hex, opacityPercent) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacityPercent / 100})`
}
</script>
