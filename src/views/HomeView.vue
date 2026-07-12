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

  <!-- コンテンツ -->
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <!-- スキル -->
    <section class="mb-16 mt-4">
      <h2 class="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Backend</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in ['Node.js', 'Express', 'PHP', 'Laravel', 'CakePHP', 'VB.NET']" :key="s"
              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{{ s }}</span>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Frontend / Mobile</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in ['Kotlin', 'Android', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vue.js']" :key="s"
              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{{ s }}</span>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Infra / Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in ['AWS', 'Docker', 'Git', 'CI/CD', 'MongoDB', 'MySQL']" :key="s"
              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{{ s }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- プロジェクト -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">Projects</h2>
      <div class="space-y-4">
        <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
          <div class="flex justify-between items-start gap-2 mb-2">
            <h3 class="font-bold">Android 券売機システム（新規開発）</h3>
            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full shrink-0">新規開発</span>
          </div>
          <p class="text-sm text-gray-600 mb-3">飲食店向けセルフオーダー券売機をフルスタックで開発。Kotlin Android アプリから Node.js CMS・AWS インフラまで一気通貫。</p>
          <div class="flex flex-wrap gap-1">
            <span v-for="t in ['Kotlin', 'Node.js', 'MongoDB', 'AWS', 'Docker']" :key="t"
              class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{{ t }}</span>
          </div>
        </div>
        <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
          <div class="flex justify-between items-start gap-2 mb-2">
            <h3 class="font-bold">モバイルオーダーシステム（保守・改修）</h3>
            <span class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full shrink-0">保守・改修</span>
          </div>
          <p class="text-sm text-gray-600 mb-3">約 120 店舗展開中のシステムで Node.js v12 → v24 へのメジャーバージョンアップと機能改修を担当。</p>
          <div class="flex flex-wrap gap-1">
            <span v-for="t in ['Node.js', 'Socket.IO', 'MongoDB', 'AWS DocumentDB']" :key="t"
              class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{{ t }}</span>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <router-link to="/projects" class="text-sm text-gray-500 hover:text-gray-800 transition underline underline-offset-4">
          すべてのプロジェクトを見る →
        </router-link>
      </div>
    </section>

    <!-- リンク -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">Links</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Profile -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex flex-col">
          <h3 class="text-sm font-semibold text-gray-600 mb-3">Profile</h3>
          <a href="https://github.com/imurar" target="_blank"
            class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition text-sm truncate">
            <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="truncate">github.com/imurar</span>
          </a>
        </div>
        <!-- Source Code -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex flex-col">
          <h3 class="text-sm font-semibold text-gray-600 mb-3">このHPのソースコード</h3>
          <a href="https://github.com/imurar/imurar.github.io" target="_blank"
            class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition text-sm truncate">
            <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="truncate">github.com/imurar/imurar.github.io</span>
          </a>
        </div>
        <!-- Qiita -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex flex-col">
          <h3 class="text-sm font-semibold text-gray-600 mb-3">Qiita</h3>
          <a href="https://qiita.com/imurar" target="_blank"
            class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition text-sm truncate">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="#55C500"/>
              <path d="M8 10C8 8.9 7.1 8 6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12C7.1 12 8 11.1 8 10Z" fill="white"/>
              <path d="M16 10C16 8.9 15.1 8 14 8C12.9 8 12 8.9 12 10C12 11.1 12.9 12 14 12C15.1 12 16 11.1 16 10Z" fill="white"/>
              <path d="M10 16C10 15.4 10.4 15 11 15H13C13.6 15 14 15.4 14 16C14 16.6 13.6 17 13 17H11C10.4 17 10 16.6 10 16Z" fill="white"/>
            </svg>
            <span class="truncate">qiita.com/imurar</span>
          </a>
        </div>
      </div>
    </section>
  </div>
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
