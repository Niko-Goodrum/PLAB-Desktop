<script setup lang="ts">
import styles from "./style.module.scss";
import Bold from "@/components/icons/bold.vue";
import { useWordmark } from "@/composables/markdown/useMarkdown";

const props = defineProps<{
  modelValue: string;
  label?: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const {
  editorRef,
  wrapOrInsertMarkdownBold,
  handleKeydown,
} = useWordmark(props, emit);
</script>

<template>
  <div :class="styles.container">
    <p>{{ props.label || "자기소개" }}</p>
    <div :class="styles.editorWrapper">
      <div :class="styles.toolbar">
        <button @click="wrapOrInsertMarkdownBold">
          <Bold />
        </button>
      </div>
      <div
          ref="editorRef"
          contenteditable="true"
          :class="styles.editor"
          @keydown="handleKeydown"
          :data-placeholder="props.placeholder || '내용을 입력하세요.'"
      />
    </div>
  </div>
</template>