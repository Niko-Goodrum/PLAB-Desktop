<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import styles from './style.module.scss'
import Search from "@/components/search/search.vue"
import Xmark from "@/components/icons/xmark.vue"
import { useProfileStore } from "@/stores/portfolio/profile.store"

const store = useProfileStore()
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
                !store.stack.includes(item)
        )
        : []
)

const addStack = (item: string) => {
  store.stack.push(item)
  search.value = ''
}

const removeStack = (item: string) => {
  store.stack = store.stack.filter((t) => t !== item)
}
</script>

<template>
  <div :class="styles.container">
    <p :class="styles.title">기술 스택 · 역량</p>
    <div :class="styles.wrapper">
      <div :class="styles.haveSkill">
        <h3 :class="styles.title">보유 기술 스택 및 역량</h3>
      </div>

      <div :class="styles.skill_container">
        <div :class="styles.inputWrapper">
          <Search
              v-model="search"
              placeholder="기술 스택, 직무 역량 등을 검색해 보세요"
          />
        </div>

        <!-- 검색된 기술 -->
        <div :class="styles.section">
          <p :class="styles.sectionTitle">검색된 기술</p>
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

        <!-- 선택된 기술 -->
        <div :class="styles.section">
          <p :class="styles.sectionTitle">선택된 기술</p>
          <div :class="styles.tagList">
            <template v-if="store.stack.length">
              <span
                  v-for="item in store.stack"
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