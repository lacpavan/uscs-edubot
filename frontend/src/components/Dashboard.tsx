import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Search, Sparkles, X } from "lucide-react";
import type { ReactNode } from "react";
import type { Topic } from "../data/types";
import { TopicCard } from "./TopicCard";
import { ThemeToggle } from "./ThemeToggle";
import robot from "../assets/edu-robot.png";

interface DashboardProps {
  topics: Topic[];
  activeTopicId: string;
  loading: boolean;
  error: string;
  onSelect: (topicId: string) => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  mobileAssistant?: ReactNode;
}

export function Dashboard({
  topics,
  activeTopicId,
  loading,
  error,
  onSelect,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchQueryChange,
  theme,
  onToggleTheme,
  mobileAssistant,
}: DashboardProps) {
  const showSkeleton = loading && topics.length === 0;

  return (
    <main className="dashboard" id="temas">
      {/* Seletor de tema no topo direito do painel de temas */}
      <div className="dashboard-header-controls">
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>

      <motion.section
        className="hero-copy"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="hero-header-row">
          <div className="hero-title-group">
            <motion.img
              src={robot}
              alt="Mascote EduBot"
              className="hero-mascot-head"
              decoding="async"
              draggable={false}
              animate={{ y: [0, -3, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h1>Como posso te ajudar hoje? 👋</h1>
          </div>
        </div>
        <p>
          Clique em um tema abaixo para falar com o <strong>EduBot!</strong>
        </p>
      </motion.section>

      {mobileAssistant && <div className="mobile-assistant-slot">{mobileAssistant}</div>}

      {/* Seção de Busca e Categorias */}
      <section className="search-filter-section">
        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar temas (ex: Provas, EAD, Biblioteca)..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            aria-label="Pesquisar temas acadêmicos"
          />
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => onSearchQueryChange("")}
              type="button"
              aria-label="Limpar pesquisa"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="category-scroll" aria-label="Categorias de temas">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-pill ${selectedCategory === category ? "is-active" : ""}`}
              onClick={() => onSelectCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {error && (
        <motion.div
          className="error-banner"
          role="alert"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={18} />
          {error}
        </motion.div>
      )}

      {/* Grid de temas com animações de reordenação */}
      <section className="topics-grid" aria-label="Temas do EduBot">
        <AnimatePresence mode="popLayout">
          {showSkeleton
            ? Array.from({ length: 16 }).map((_, index) => (
                <div className="topic-skeleton" key={index}>
                  <span />
                  <strong />
                  <em />
                </div>
              ))
            : topics.map((topic, index) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  index={index}
                  isActive={activeTopicId === topic.id}
                  onSelect={onSelect}
                />
              ))}
        </AnimatePresence>
      </section>

      {/* Estado Vazio */}
      {!showSkeleton && topics.length === 0 && (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="empty-illustration">
            <Sparkles size={40} className="empty-sparkle-icon" />
          </div>
          <h3>Nenhum tema encontrado</h3>
          <p>
            Não encontramos resultados para sua pesquisa. Tente usar outras palavras-chave ou limpe os filtros.
          </p>
          <button
            className="clear-search-btn"
            onClick={() => {
              onSearchQueryChange("");
              onSelectCategory("Todos");
            }}
            type="button"
          >
            Limpar filtros
          </button>
        </motion.div>
      )}
    </main>
  );
}
