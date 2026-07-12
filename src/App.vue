<template>
  <div class="flex flex-col min-h-screen bg-white text-gray-900">
    <!-- ナビゲーション -->
    <header class="bg-gray-900 text-white shadow sticky top-0 z-50">
      <nav class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold hover:text-gray-300 transition font-mono tracking-tight whitespace-nowrap">&lt; imurar /&gt;</router-link>

        <!-- PC メニュー -->
        <ul class="hidden md:flex gap-8 text-base">
          <li><router-link to="/" class="hover:text-gray-300 transition" active-class="text-white" exact-active-class="text-gray-300">Home</router-link></li>
          <li><router-link to="/profile" class="hover:text-gray-300 transition" active-class="text-gray-300">Profile</router-link></li>
          <li><router-link to="/projects" class="hover:text-gray-300 transition" active-class="text-gray-300">Projects</router-link></li>
          <li><router-link to="/demo" class="hover:text-gray-300 transition" active-class="text-gray-300">Demo</router-link></li>
          <li><router-link to="/contact" class="hover:text-gray-300 transition" active-class="text-gray-300">Contact</router-link></li>
        </ul>

        <!-- ハンバーガーボタン（スマホ） -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 hover:text-gray-300 transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <!-- スマホ メニュー -->
      <div v-show="isOpen" class="md:hidden bg-gray-800 border-t border-gray-700">
        <ul class="flex flex-col px-6 py-4 space-y-3 text-sm">
          <li><router-link to="/" class="block hover:text-gray-300 transition" @click="isOpen = false">Home</router-link></li>
          <li><router-link to="/profile" class="block hover:text-gray-300 transition" @click="isOpen = false">Profile</router-link></li>
          <li><router-link to="/projects" class="block hover:text-gray-300 transition" @click="isOpen = false">Projects</router-link></li>
          <li><router-link to="/demo" class="block hover:text-gray-300 transition" @click="isOpen = false">Demo</router-link></li>
          <li><router-link to="/contact" class="block hover:text-gray-300 transition" @click="isOpen = false">Contact</router-link></li>
        </ul>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <router-view />

    <!-- フッター -->
    <footer class="bg-gray-900 text-white text-center py-6 mt-12">
      <p>&copy; 2026 imurar. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
