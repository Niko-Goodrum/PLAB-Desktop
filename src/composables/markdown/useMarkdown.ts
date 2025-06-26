import { ref, onMounted } from "vue";

export const useWordmark = (
    props: { modelValue: string },
    emit: (event: "update:modelValue", value: string) => void
) => {
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

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.metaKey && e.key.toLowerCase() === "b") {
            e.preventDefault();
            wrapOrInsertMarkdownBold();
        }
    };

    const updateModel = () => {
        if (!editorRef.value) return;
        const html = editorRef.value.innerHTML;

        const processed = html
            .replace(/<div><br><\/div>/g, '\n')
            .replace(/<div>/g, '')
            .replace(/<\/div>/g, '\n')
            .replace(/<br>/g, '\n')
            .replace(/&nbsp;/g, ' ')
            .replace(/<[^>]+>/g, '')
            .replace(/\n{2,}/g, '\n');

        emit("update:modelValue", processed.trim());
    };

    onMounted(() => {
        if (editorRef.value) {
            editorRef.value.innerHTML = props.modelValue || "<div><br></div>";
            editorRef.value.addEventListener("input", updateModel);
        }
    });

    return {
        editorRef,
        wrapOrInsertMarkdownBold,
        handleKeydown,
    };
};