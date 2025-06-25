<script setup lang="ts">
import { ref, onMounted } from "vue";
import styles from "./style.module.scss";

import Bold from "@/components/icons/bold.vue";
import BulletedList from "@/components/icons/list/bulletedList.vue";
import NumberList from "@/components/icons/list/numberList.vue";

const props = defineProps<{
  modelValue: string;
  label?: string;
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const editorRef = ref<HTMLDivElement | null>(null);

const insertAtCaret = (text: string) => {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return;

  const range = sel.getRangeAt(0);
  range.deleteContents();

  const node = document.createTextNode(text);
  range.insertNode(node);

  const newRange = document.createRange();
  newRange.setStart(node, 2);
  newRange.setEnd(node, 2);
  sel.removeAllRanges();
  sel.addRange(newRange);
};

const wrapOrInsertMarkdownBold = () => {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;

  const range = sel.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText) {
    const newNode = document.createTextNode(`**${selectedText}**`);
    range.deleteContents();
    range.insertNode(newNode);
  } else {
    insertAtCaret("****");
  }

  updateModel();
};

const exec = (command: string) => {
  document.execCommand(command, false);
  updateModel();
};

const handleInput = () => {
  updateModel();
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.metaKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    wrapOrInsertMarkdownBold();
  }

  if (e.key === " " && editorRef.value) {
    const sel = window.getSelection();
    if (!sel || !sel.anchorNode) return;

    const node = sel.anchorNode;
    const parent = node.parentElement ?? editorRef.value;
    const text = parent.textContent?.trim() ?? "";

    if (text === "-") {
      e.preventDefault();
      parent.textContent = "";
      exec("insertUnorderedList");
    } else if (/^\d+\.$/.test(text)) {
      e.preventDefault();
      parent.textContent = "";
      exec("insertOrderedList");
    }
  }
};

const updateModel = () => {
  if (editorRef.value) {
    emit("update:modelValue", editorRef.value.innerText);
  }
};

onMounted(() => {
  if (editorRef.value) {
    editorRef.value.innerText = props.modelValue;
    editorRef.value.addEventListener("input", handleInput);
  }
});
</script>

<template>
  <div :class="styles.container">
    <p>{{ props.label || "자기소개" }}</p>
    <div :class="styles.editorWrapper">
      <div :class="styles.toolbar">
        <button @click="wrapOrInsertMarkdownBold">
          <Bold />
        </button>
        <span>|</span>
        <button @click="exec('insertUnorderedList')">
          <BulletedList />
        </button>
        <button @click="exec('insertOrderedList')">
          <NumberList />
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