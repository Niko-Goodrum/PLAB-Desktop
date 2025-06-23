<script setup lang="ts">
import { ref, onMounted } from "vue";
import styles from "./style.module.scss";
import Bold from "@/components/icons/bold.vue";
import BulletedList from "@/components/icons/list/bulletedList.vue";
import NumberList from "@/components/icons/list/numberList.vue";

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
};

const exec = (command: string) => {
  document.execCommand(command, false);
};

const handleInput = (e: Event) => {
  const el = e.target as HTMLDivElement;
  if (!el.innerHTML) el.innerHTML = "";
};

const handleKeydown = (e: KeyboardEvent) => {
  // 볼드 처리
  if (e.metaKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    wrapOrInsertMarkdownBold();
  }

  // 리스트
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

onMounted(() => {
  editorRef.value?.addEventListener("input", handleInput);
});
</script>

<template>
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
        data-placeholder="내용을 입력하세요"
    />
  </div>
</template>