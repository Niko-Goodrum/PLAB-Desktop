import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useThemeStore = defineStore("theme", () => {
    const theme = ref<"light" | "dark">("light")

    watch(theme, (newTheme) => {
        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)
    }, { immediate: true })

    function toggleTheme() {
        theme.value = theme.value === "light" ? "dark" : "light"
    }

    function initTheme() {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null
        theme.value = saved ?? "light"
    }

    return { theme, toggleTheme, initTheme }
})