<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <h1 class="text-3xl font-bold mb-12">Profile</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 左側：空 -->
      <div class="md:order-2"></div>

      <!-- 右側：写真・基本情報・Links -->
      <div class="md:order-1 mx-auto w-full md:w-auto">
        <!-- プロフィール写真 -->
        <div class="flex justify-center mb-8">
          <div class="w-48 h-48">
            <img src="/images/profile.jpg" alt="プロフィール写真" class="w-full h-full object-cover rounded-full">
          </div>
        </div>

        <!-- 基本情報 -->
        <div class="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 class="text-2xl font-bold mb-6">基本情報</h2>
          <div class="space-y-4">
            <div>
              <p class="text-gray-600 text-sm">名前</p>
              <p class="text-lg font-semibold">井村りゅうき</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">年齢</p>
              <p class="text-lg font-semibold">26歳</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">居住地</p>
              <p class="text-lg font-semibold">神奈川県横浜市</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">職業</p>
              <p class="text-lg font-semibold">Web・Androidエンジニア</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">MBTI</p>
              <p class="text-lg font-semibold">ENFJ-A</p>
            </div>
          </div>
        </div>

        <!-- 趣味・興味 -->
        <div class="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 class="text-2xl font-bold mb-6">趣味・興味</h2>
          <div class="space-y-2">
            <p class="text-gray-700">読書</p>
            <p class="text-gray-700">スポーツ観戦</p>
            <p class="text-gray-700">食べ歩き</p>
          </div>
        </div>

        <!-- Links -->
        <div class="bg-gray-50 rounded-xl p-6 space-y-3">
          <h3 class="font-bold text-lg mb-4">Links</h3>
          <a href="https://github.com/imurar" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.914 1.209.092-.937.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.192 20 14.435 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
            </svg>
            GitHub
          </a>
          <a href="https://qiita.com/imurar" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="currentColor"/>
              <path d="M8 10C8 8.9 7.1 8 6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12C7.1 12 8 11.1 8 10Z" fill="white"/>
              <path d="M16 10C16 8.9 15.1 8 14 8C12.9 8 12 8.9 12 10C12 11.1 12.9 12 14 12C15.1 12 16 11.1 16 10Z" fill="white"/>
              <path d="M10 16C10 15.4 10.4 15 11 15H13C13.6 15 14 15.4 14 16C14 16.6 13.6 17 13 17H11C10.4 17 10 16.6 10 16Z" fill="white"/>
            </svg>
            Qiita
          </a>
          <a href="https://github.com/imurar/imurar.github.io" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-3 bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-lg transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.914 1.209.092-.937.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.192 20 14.435 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
            </svg>
            このHPのソースコード
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
