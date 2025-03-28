import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });

    // Apply the theme to <html> tag
    document.documentElement.setAttribute("data-theme", theme);

    console.log("Current Theme in Zustand:", theme);
    console.log("LocalStorage Theme:", localStorage.getItem("chat-theme"));
  },
}));

// Ensure the theme is set on initial load
document.documentElement.setAttribute("data-theme", localStorage.getItem("chat-theme") || "coffee");
