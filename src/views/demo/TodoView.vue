<template>
  <div class="max-w-4xl mx-auto px-6 py-12 w-full">
    <router-link to="/demo" class="text-sm text-gray-500 hover:text-gray-700 transition">← Demo</router-link>
    <h1 class="text-3xl font-bold mt-2 mb-2">ToDoリスト</h1>
    <p class="text-gray-600 mb-12">タスクの追加・完了・削除・フィルタリングができるアプリです。</p>

    <div class="max-w-lg border border-gray-200 rounded-xl p-6">
      <div class="flex gap-2 mb-4">
        <input v-model="newTask" @keydown.enter="addTodo" type="text" placeholder="タスクを入力..."
          class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800" />
        <button @click="addTodo"
          class="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition">追加</button>
      </div>

      <div class="flex gap-2 mb-4">
        <button v-for="f in filters" :key="f.value" @click="filter = f.value"
          :class="`px-3 py-1 text-sm rounded-full transition ${filter === f.value ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`">
          {{ f.label }}
        </button>
      </div>

      <ul class="space-y-2 mb-4 min-h-[60px]">
        <li v-if="filteredTodos.length === 0" class="text-sm text-gray-400 text-center py-4">タスクがありません</li>
        <li v-for="todo in filteredTodos" :key="todo.id"
          class="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition group">
          <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo.id)"
            class="w-4 h-4 accent-gray-900 cursor-pointer" />
          <span :class="`flex-1 text-sm ${todo.done ? 'line-through text-gray-400' : 'text-gray-800'}`">{{ todo.text }}</span>
          <button @click="deleteTodo(todo.id)"
            class="text-gray-300 hover:text-red-400 transition opacity-0 group-hover:opacity-100 text-lg leading-none">×</button>
        </li>
      </ul>

      <div class="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
        <span>{{ activeTodos }} 件のタスク</span>
        <button @click="clearDone" class="hover:text-red-500 transition">完了を削除</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const newTask = ref('')
const filter = ref('all')
const todos = ref([])
let nextId = 1

const filters = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'done', label: '完了' },
]

const filteredTodos = computed(() =>
  todos.value.filter(t =>
    filter.value === 'all' ? true : filter.value === 'done' ? t.done : !t.done
  )
)

const activeTodos = computed(() => todos.value.filter(t => !t.done).length)

function addTodo() {
  const text = newTask.value.trim()
  if (!text) return
  todos.value.push({ id: nextId++, text, done: false })
  newTask.value = ''
}

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id)
  if (todo) todo.done = !todo.done
}

function deleteTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}

function clearDone() {
  todos.value = todos.value.filter(t => !t.done)
}
</script>
