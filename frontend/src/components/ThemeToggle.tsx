import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      data-tooltip={isDark ? "Modo claro" : "Modo escuro"}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          {isDark ? <Moon size={15} /> : <Sun size={15} />}
        </span>
      </span>
    </button>
  );
}
