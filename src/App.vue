<template>
  <div class="flex flex-col min-h-screen bg-white text-gray-900">
    <!-- ナビゲーション -->
    <header class="bg-gray-900 text-white shadow sticky top-0 z-50">
      <nav class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold hover:text-gray-300 transition">imurar</router-link>
        <ul class="flex gap-4 md:gap-8 text-sm md:text-base">
          <li><router-link to="/" class="hover:text-gray-300 transition" active-class="text-white" exact-active-class="text-gray-300">Home</router-link></li>
          <li><router-link to="/projects" class="hover:text-gray-300 transition" active-class="text-gray-300">Projects</router-link></li>
          <li class="hidden sm:block"><router-link to="/demo" class="hover:text-gray-300 transition" active-class="text-gray-300">Demo</router-link></li>
          <li><router-link to="/contact" class="hover:text-gray-300 transition" active-class="text-gray-300">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- メインコンテンツ -->
    <router-view />

    <!-- フッター -->
    <footer class="bg-gray-900 text-white text-center py-6 mt-12">
      <p>&copy; 2026 imurar. All rights reserved.</p>
    </footer>
  </div>
</template>
