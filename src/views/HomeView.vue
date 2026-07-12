<template>
  <!-- ヒーロー -->
  <section
    ref="heroSection"
    class="relative overflow-hidden flex flex-col items-center justify-center"
    style="min-height: 72vh; background-color: #000;"
  >
    <div ref="heroSymbols" class="relative w-full"></div>
    <div class="text-center pb-16 font-mono">
      <p class="text-base tracking-widest text-gray-300 uppercase">Full Stack Engineer</p>
      <p class="text-sm text-gray-500 mt-1 tracking-wider">Node.js · Kotlin · AWS</p>
    </div>
  </section>

  <!-- 実績 / Selected Works -->
  <section class="bg-gray-800 text-white py-20">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="mb-12">
        <h2 class="text-5xl font-light mb-2">Selected <span class="text-slate-400">Works</span></h2>
        <p class="text-gray-300">これまで制作・コーディングを担当したサイトの一部をご紹介します。</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white text-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Android 開発</h3>
            <p class="text-sm text-gray-600 mb-4">Kotlin を用いたネイティブ Android アプリケーション開発。実務での開発経験豊富。</p>
            <div class="text-xs text-gray-500">Role　Development</div>
          </div>
        </div>
        <div class="bg-white text-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">モバイルオーダー</h3>
            <p class="text-sm text-gray-600 mb-4">約120店舗展開中のシステム保守・改修。Node.js バージョンアップ、機能追加、AWS インフラ対応。</p>
            <div class="text-xs text-gray-500">Role　Backend / Infra</div>
          </div>
        </div>
        <div class="bg-white text-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div class="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">POS レジ開発</h3>
            <p class="text-sm text-gray-600 mb-4">POS レジシステムの開発。Windows/.NET での実装に対応。</p>
            <div class="text-xs text-gray-500">Role　Development</div>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <router-link to="/projects" class="text-slate-400 hover:text-slate-300 transition inline-flex items-center gap-2">
          すべてのプロジェクトを見る
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>

  <!-- About Me -->
  <section class="py-20">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <h2 class="text-5xl font-light mb-12">About <span class="text-slate-400">Me</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="flex justify-center">
          <img src="/images/profile.jpg" alt="プロフィール写真" class="w-64 h-64 rounded-full object-cover">
        </div>
        <div>
          <p class="text-gray-700 mb-4 leading-relaxed">確実な技術と丁寧なコミュニケーションで、クライアント様のプロジェクトをサポートしています。</p>
          <p class="text-gray-700 mb-4 leading-relaxed">HTML / CSS / JavaScript を用いたホームページ制作から、Node.js によるバックエンド開発、Kotlin Android アプリ開発、AWS インフラ構築まで、フルスタックで対応可能です。</p>
          <p class="text-gray-700 mb-6 leading-relaxed">品質の高いコードで、長期的な運用をサポートします。</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">Node.js</span>
            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">Kotlin</span>
            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">AWS</span>
            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">Vue.js</span>
            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">Docker</span>
            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">Git</span>
          </div>
          <div class="mt-6">
            <router-link to="/about" class="inline-flex items-center gap-2 text-slate-500 hover:text-slate-600 transition">
              詳しく見る
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- サービスメニュー -->
  <section class="bg-gray-900 text-white py-20">
    <div class="max-w-4xl mx-auto px-6 w-full">
      <h2 class="text-5xl font-light mb-2">Service <span class="text-slate-400">Menu</span></h2>
      <p class="text-gray-300 mb-12">提供しているサービスをご紹介します。</p>
      <div class="space-y-8">
        <div class="border-b border-gray-700 pb-8">
          <div class="flex gap-6">
            <span class="text-slate-400 text-3xl font-light">01</span>
            <div>
              <h3 class="text-2xl font-light mb-3">Frontend Development</h3>
              <p class="text-gray-400">HTML / CSS / JavaScript / Vue.js を用いたフロントエンド開発。デザインデータから実装まで対応します。</p>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-700 pb-8">
          <div class="flex gap-6">
            <span class="text-slate-400 text-3xl font-light">02</span>
            <div>
              <h3 class="text-2xl font-light mb-3">Backend Development</h3>
              <p class="text-gray-400">Node.js / Express / MongoDB を中心とした、スケーラブルなバックエンド開発。AWS での本番運用も対応。</p>
            </div>
          </div>
        </div>
        <div class="pb-8">
          <div class="flex gap-6">
            <span class="text-slate-400 text-3xl font-light">03</span>
            <div>
              <h3 class="text-2xl font-light mb-3">Mobile App Development</h3>
              <p class="text-gray-400">Kotlin / Android による、スマートフォンアプリケーション開発。バックエンド と の統合対応も可能。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- コンタクト -->
  <section class="py-20 bg-gray-100">
    <div class="max-w-2xl mx-auto px-6 w-full">
      <div class="bg-white rounded-lg p-12 text-center">
        <p class="text-gray-700 mb-4 leading-relaxed">案件のご相談やお気軽にお問い合わせください。</p>
        <p class="text-gray-700 mb-8 leading-relaxed">ホームページ制作から Web 開発まで、確実な技術でプロジェクトをサポートします。</p>
        <router-link to="/contact" class="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded transition">
          お問い合わせ
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroSection = ref(null)
const heroSymbols = ref(null)
let resizeTimer = null

function buildHero() {
  if (!heroSymbols.value || !heroSection.value) return
  heroSymbols.value.innerHTML = ''

  const sectionWidth = heroSection.value.offsetWidth
  const lines = ['CODE']
  const REF = 200
  const probe = document.createElement('canvas').getContext('2d')
  probe.font = `900 ${REF}px monospace`
  const maxLineW = Math.max(...lines.map(l => probe.measureText(l).width))
  const fontSize = Math.min(200, Math.floor(REF * (sectionWidth * 0.88) / maxLineW))
  const spacing = Math.max(7, Math.floor(fontSize / 16))
  const symbolSize = spacing + 1
  const lineH = Math.ceil(fontSize * 1.25)
  const lineGap = Math.floor(fontSize * 0.1)

  const offscreen = document.createElement('canvas')
  const ctx = offscreen.getContext('2d')
  if (!ctx) return

  ctx.font = `900 ${fontSize}px monospace`
  const lineWidths = lines.map(l => Math.ceil(ctx.measureText(l).width))
  const canvasW = Math.max(...lineWidths) + spacing * 2
  const canvasH = lineH * lines.length + lineGap * (lines.length - 1)

  offscreen.width = canvasW
  offscreen.height = canvasH
  ctx.font = `900 ${fontSize}px monospace`
  ctx.fillStyle = '#000'
  lines.forEach((line, i) => {
    const lx = Math.floor((canvasW - lineWidths[i]) / 2)
    ctx.fillText(line, lx, fontSize + i * (lineH + lineGap))
  })

  const data = ctx.getImageData(0, 0, canvasW, canvasH).data

  heroSymbols.value.style.height = `${canvasH}px`
  heroSymbols.value.style.position = 'relative'

  const offsetX = Math.max(0, (sectionWidth - canvasW) / 2)
  const fragment = document.createDocumentFragment()

  for (let y = 0; y < canvasH; y += spacing) {
    for (let x = 0; x < canvasW; x += spacing) {
      const i = (y * canvasW + x) * 4
      if (data[i + 3] > 100) {
        const span = document.createElement('span')
        span.textContent = '✻'
        const speed = (1.2 + Math.random() * 2).toFixed(2)
        const delay = -(Math.random() * 3).toFixed(2)
        const opacity = (0.6 + Math.random() * 0.4).toFixed(2)
        span.style.cssText = `
          position: absolute;
          left: ${offsetX + x}px;
          top: ${y}px;
          font-size: ${symbolSize}px;
          line-height: 1;
          color: #fff;
          opacity: ${opacity};
          will-change: transform;
          animation: symSpin ${speed}s linear infinite;
          animation-delay: ${delay}s;
        `
        fragment.appendChild(span)
      }
    }
  }

  heroSymbols.value.appendChild(fragment)
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(buildHero, 200)
}

onMounted(() => {
  buildHero()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  clearTimeout(resizeTimer)
})
</script>

<style>
@keyframes symSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
