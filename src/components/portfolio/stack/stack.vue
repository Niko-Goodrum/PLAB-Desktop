<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import styles from './style.module.scss'
import Search from "@/components/portfolio/search/search.vue"
import Xmark from "@/components/icons/xmark.vue"

const props = defineProps<{
  modelValue: string[]
  label?: string
  showLabel?: boolean
  subLabel?: string
}>()

const emit = defineEmits(['update:modelValue'])

const showLabel = props.showLabel !== false
const search = ref('')
const techStackList = ref<string[]>([])

onMounted(async () => {
  const res = await fetch('/data/tech_stack_list.json')
  techStackList.value = await res.json()
})

const filteredList = computed(() =>
    search.value
        ? techStackList.value.filter(
            (item) =>
                item.toLowerCase().includes(search.value.toLowerCase()) &&
                !props.modelValue.includes(item)
        )
        : []
)

const addStack = (item: string) => {
  emit('update:modelValue', [...props.modelValue, item])
  search.value = ''
}

const removeStack = (item: string) => {
  emit(
      'update:modelValue',
      props.modelValue.filter((t) => t !== item)
  )
}
</script>

<template>
  <div :class="styles.container">
    <p v-if="showLabel" :class="styles.title">
      {{ props.label || "기술 스택 · 역량" }}
    </p>

    <div :class="styles.wrapper">
      <div :class="styles.haveSkill">
        <h3 :class="styles.title">
          {{ props.subLabel || "보유 기술 스택 및 역량" }}
        </h3>
      </div>

      <div :class="styles.skill_container">
        <div :class="styles.inputWrapper">
          <Search
              v-model="search"
              placeholder="기술 스택, 직무 역량 등을 검색해 보세요"
          />
        </div>

        <div :class="styles.section">
          <p :class="styles.searched">검색된 기술</p>
          <div :class="styles.tagList">
            <template v-if="filteredList.length">
              <button
                  v-for="item in filteredList"
                  :key="item"
                  :class="styles.tag"
                  @click="addStack(item)"
              >
                {{ item }}
              </button>
            </template>
            <template v-else>
              <p :class="styles.placeholder">검색 결과가 없습니다.</p>
            </template>
          </div>
        </div>

        <div :class="styles.section">
          <p :class="styles.sectionTitle">선택된 기술</p>
          <div :class="styles.tagList">
            <template v-if="props.modelValue.length">
              <span
                  v-for="item in props.modelValue"
                  :key="item"
                  :class="styles.selectedTag"
              >
                {{ item }}
                <button
                    :class="styles.remove"
                    @click="removeStack(item)"
                >
                  <Xmark color="staticWhite" />
                </button>
              </span>
            </template>
            <template v-else>
              <p :class="styles.placeholder">아직 선택된 기술이 없습니다.</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>