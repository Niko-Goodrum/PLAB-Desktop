<script setup lang="ts">
import { ref, computed } from 'vue'

interface Option {
  label: string
  value: string
}

const props = defineProps<{
  options: Option[]
  label?: string
}>();

const selected = ref<Option | null>(null)
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: Option) => {
  selected.value = option
  isOpen.value = false
}

const visibleOptions = computed(() => props.options.slice(0, 5))
</script>

<template>
  <div class="select-field">
    <label v-if="props.label" class="label">{{ props.label }}</label>
    <div class="dropdown" @click="toggleDropdown">
      <span class="selected">
        {{ selected?.label || 'Select Your Text' }}
      </span>
      <span class="arrow">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    <div v-if="isOpen" class="dropdown-list">
      <div
          v-for="option in visibleOptions"
          :key="option.value"
          :class="['dropdown-item', { selected: selected?.value === option.value }]"
          @click.stop="selectOption(option)"
      >
        {{ option.label }}
      </div>
      <div v-if="props.options.length > 5" class="dropdown-scroll">
        <div
            v-for="option in props.options.slice(5)"
            :key="option.value"
            :class="['dropdown-item', { selected: selected?.value === option.value }]"
            @click.stop="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-field {
  width: 260px;
  font-family: sans-serif;
}

.label {
  font-weight: bold;
  margin-bottom: 6px;
  display: inline-block;
}

.dropdown {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: #fff;
}

.selected {
  color: #888;
}

.arrow {
  font-size: 12px;
}

.dropdown-list {
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  max-height: 220px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #eee;
}

.dropdown-item.selected {
  background-color: #ddd8fb;
  font-weight: bold;
}

.dropdown-scroll {
  max-height: 120px;
  overflow-y: auto;
}
</style>