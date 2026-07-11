<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <router-link to="/demo" class="text-sm text-gray-500 hover:text-gray-700 transition">← Demo</router-link>
    <h1 class="text-3xl font-bold mt-2 mb-2">CSS アニメーション</h1>
    <p class="text-gray-600 mb-12">フェードイン・スライド・ホバーエフェクト・ローディングのデモです。</p>

    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">フェードイン</h2>
      <div class="flex flex-wrap gap-4">
        <div class="w-24 h-24 bg-blue-400 rounded-xl animate-fade"></div>
        <div class="w-24 h-24 bg-green-400 rounded-xl animate-fade" style="animation-delay: 0.2s"></div>
        <div class="w-24 h-24 bg-purple-400 rounded-xl animate-fade" style="animation-delay: 0.4s"></div>
      </div>
    </div>

    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">スライドイン</h2>
      <div class="space-y-3 overflow-hidden">
        <div class="h-12 bg-gray-900 text-white rounded-lg flex items-center px-4 font-medium animate-slide-left">← 左からスライド</div>
        <div class="h-12 bg-gray-700 text-white rounded-lg flex items-center px-4 font-medium animate-slide-right" style="animation-delay: 0.2s">右からスライド →</div>
      </div>
    </div>

    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">ホバーエフェクト</h2>
      <div class="flex flex-wrap gap-4">
        <div class="w-28 h-28 bg-blue-500 rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white text-sm font-medium">スケール</div>
        <div class="w-28 h-28 bg-green-500 rounded-xl cursor-pointer hover:rotate-12 transition-transform duration-300 flex items-center justify-center text-white text-sm font-medium">回転</div>
        <div class="w-28 h-28 bg-purple-500 rounded-xl cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-white text-sm font-medium">浮き上がり</div>
        <div class="w-28 h-28 bg-gray-800 rounded-xl cursor-pointer hover:bg-orange-500 transition-colors duration-500 flex items-center justify-center text-white text-sm font-medium">色変化</div>
      </div>
    </div>

    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">ローディング</h2>
      <div class="flex flex-wrap items-center gap-8">
        <div class="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
        <div class="flex gap-1">
          <div class="w-3 h-3 bg-gray-900 rounded-full animate-bounce" style="animation-delay: 0s"></div>
          <div class="w-3 h-3 bg-gray-900 rounded-full animate-bounce" style="animation-delay: 0.15s"></div>
          <div class="w-3 h-3 bg-gray-900 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
        </div>
        <div class="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-gray-900 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">パルス・点滅</h2>
      <div class="flex flex-wrap items-center gap-6">
        <div class="relative">
          <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">ON</div>
          <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>
        <div class="px-5 py-2 bg-red-500 text-white rounded-lg font-medium animate-pulse">重要なお知らせ</div>
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-60px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}
.animate-fade { opacity: 0; animation: fadeIn 0.8s ease forwards; }
.animate-slide-left { opacity: 0; animation: slideLeft 0.6s ease forwards; }
.animate-slide-right { opacity: 0; animation: slideRight 0.6s ease forwards; }
.animate-progress { animation: progress 2s ease-in-out infinite; }
</style>
