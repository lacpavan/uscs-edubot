import { useEffect, useMemo, useRef, useState } from "react";
import { getTopic, getTopics } from "./api";
import { AssistantPanel } from "./components/AssistantPanel";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import type { Topic } from "./data/types";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const savedTheme = safelyReadTheme();

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function safelyReadTheme() {
  try {
    return localStorage.getItem("edubot-theme");
  } catch {
    return null;
  }
}

function safelySaveTheme(theme: Theme) {
  try {
    localStorage.setItem("edubot-theme", theme);
  } catch {
    // The theme still works for the session when storage is unavailable.
  }
}

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);
  const mobileAssistantRef = useRef<HTMLElement | null>(null);
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);

  // Novos estados para pesquisa, categorias e Bottom Sheet mobile
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const activeTopicId = useMemo(() => selectedTopic?.id || "", [selectedTopic]);

  // Lista dinâmica de categorias coletadas dos tópicos
  const categories = useMemo(() => {
    const list = topics.map((t) => t.category);
    return ["Todos", ...Array.from(new Set(list))];
  }, [topics]);

  // Filtro de tópicos em tempo real
  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesCategory =
        selectedCategory === "Todos" || topic.category === selectedCategory;
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [topics, searchQuery, selectedCategory]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    safelySaveTheme(theme);
  }, [theme]);


  useEffect(() => {
    const welcomeAudio = new Audio("/boas-vindas.mp3");
    welcomeAudio.volume = 0.82;
    welcomeAudio.preload = "auto";
    welcomeAudioRef.current = welcomeAudio;

    let hasPlayedWelcome = false;

    const playWelcomeAudio = () => {
      if (hasPlayedWelcome) return;

      hasPlayedWelcome = true;
      welcomeAudio.currentTime = 0;
      welcomeAudio.play().catch(() => {
        hasPlayedWelcome = false;
      });
    };

    // Tenta tocar ao montar. Se o navegador bloquear autoplay, toca no primeiro clique/toque/tecla.
    playWelcomeAudio();

    window.addEventListener("pointerdown", playWelcomeAudio, { once: true });
    window.addEventListener("keydown", playWelcomeAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", playWelcomeAudio);
      window.removeEventListener("keydown", playWelcomeAudio);
      welcomeAudio.pause();
      welcomeAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    async function loadTopics() {
      setLoading(true);
      setError("");

      try {
        const data = await getTopics();
        setTopics(data);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Erro inesperado ao carregar os temas."
        );
      } finally {
        setLoading(false);
      }
    }

    loadTopics();
  }, []);

  async function handleSelect(topicId: string) {
    const clickAudio = new Audio("/click-robo.mp3");
    clickAudio.volume = 0.48;
    clickAudio.play().catch(() => {
      // O card continua funcionando mesmo se o navegador bloquear o efeito sonoro.
    });

    welcomeAudioRef.current?.pause();
    setLoading(true);
    setError("");

    try {
      const topic = await getTopic(topicId);
      setSelectedTopic(topic);
      setAnswer(topic.response);
      setIsBottomSheetOpen(true);

      if (window.innerWidth < 768) {
        window.requestAnimationFrame(() => {
          mobileAssistantRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    } catch (selectError) {
      setError(
        selectError instanceof Error
          ? selectError.message
          : "Não foi possível abrir esse tema."
      );
    } finally {
      setLoading(false);
    }
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  const desktopAssistantPanel = (
    <AssistantPanel
      selectedTopic={selectedTopic}
      answer={answer}
      loading={loading}
      isBottomSheetOpen={isBottomSheetOpen}
      onCloseBottomSheet={() => setIsBottomSheetOpen(false)}
    />
  );

  const mobileAssistantPanel = (
    <AssistantPanel
      ref={mobileAssistantRef}
      selectedTopic={selectedTopic}
      answer={answer}
      loading={loading}
      isBottomSheetOpen={isBottomSheetOpen}
      onCloseBottomSheet={() => setIsBottomSheetOpen(false)}
    />
  );

  return (
    <div className={`app-shell theme-${theme}`}>
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="ambient-orb ambient-orb-c" />
        <span className="particle particle-a" />
        <span className="particle particle-b" />
        <span className="particle particle-c" />
      </div>

      <div className="workspace">
        <Dashboard
          activeTopicId={activeTopicId}
          error={error}
          loading={loading}
          onSelect={handleSelect}
          topics={filteredTopics}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          theme={theme}
          onToggleTheme={toggleTheme}
          mobileAssistant={mobileAssistantPanel}
        />
        <Footer />
      </div>

      {desktopAssistantPanel}
    </div>
  );
}

export default App;
