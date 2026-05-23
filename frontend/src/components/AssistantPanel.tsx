import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Loader2, Sparkles, X } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";
import robot from "../assets/edu-robot.png";
import type { Topic } from "../data/types";

interface AssistantPanelProps {
  selectedTopic: Topic | null;
  answer: string;
  loading: boolean;
  isBottomSheetOpen: boolean;
  onCloseBottomSheet: () => void;
}

const DEFAULT_WELCOME_MESSAGE =
  "Precisa de ajuda com o Portal do Aluno ou Calendário? Escolha um dos temas! 🗓️";

export const AssistantPanel = forwardRef<HTMLElement, AssistantPanelProps>(
  function AssistantPanel(
    {
      selectedTopic,
      answer,
      loading,
      isBottomSheetOpen,
      onCloseBottomSheet,
    },
    ref
  ) {
    const hasSelection = Boolean(selectedTopic);

    const [isSpeaking, setIsSpeaking] = useState(false);

    // Guarda o áudio atual para conseguir pausar quando trocar de card
    const audioRef = useRef<HTMLAudioElement | null>(null);


    useEffect(() => {
      if (!selectedTopic) {
        setIsSpeaking(false);
        audioRef.current?.pause();
        audioRef.current = null;
        return;
      }

      /*
        =========================
        ÁUDIO DIFERENTE POR CARD
        =========================

        O áudio será carregado pelo ID do card.

        Exemplo:
        selectedTopic.id = "biblioteca"

        O arquivo precisa estar em:
        frontend/public/audios/biblioteca.mp3

        IMPORTANTE:
        O nome do arquivo .mp3 deve ser exatamente igual ao id do card.
      */
      const audio = new Audio(`/audios/${selectedTopic.id}.mp3`);

      // Para o áudio anterior, caso outro card tenha sido clicado
      audioRef.current?.pause();

      // Salva o novo áudio como áudio atual
      audioRef.current = audio;

      /*
        =========================
        ATIVA O GIF
        =========================

        Enquanto o áudio toca:
        isSpeaking = true
        aparece: /edubot-falando.gif
      */
      setIsSpeaking(true);

      /*
        =========================
        QUANDO O ÁUDIO TERMINAR
        =========================

        O robô volta para a imagem estática.
        Ele NÃO some da tela.
      */
      audio.onended = () => {
        setIsSpeaking(false);
      };

      // Se o áudio não existir ou der erro, volta para imagem parada
      audio.onerror = () => {
        setIsSpeaking(false);
      };

      // Inicia o áudio
      audio.play().catch(() => {
        setIsSpeaking(false);
      });

      // Limpeza ao trocar de card ou desmontar o componente
      return () => {
        audio.pause();
        audio.onended = null;
        audio.onerror = null;
      };
    }, [selectedTopic?.id]);

    return (
      <>
        <AnimatePresence>
          {isBottomSheetOpen && (
            <motion.div
              className="assistant-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseBottomSheet}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        <motion.aside
          className={`assistant-panel ${isBottomSheetOpen ? "is-open" : ""}`}
          id="assistente"
          ref={ref}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div
            className="bottom-sheet-handle"
            onClick={onCloseBottomSheet}
            aria-hidden="true"
          />

          <button
            className="bottom-sheet-close"
            onClick={onCloseBottomSheet}
            type="button"
            aria-label="Fechar assistente"
          >
            <X size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic?.id || "welcome"}
              className="speech-bubble"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {hasSelection && selectedTopic ? (
                <>
                  <span className="bubble-kicker">
                    <Sparkles size={14} />
                    {selectedTopic.category}
                  </span>

                  <strong>{selectedTopic.title}</strong>

                  <span>{loading ? "Carregando informações..." : answer}</span>

                  <p className="topic-detail">{selectedTopic.detail}</p>
                </>
              ) : (
                <>
                  <span className="bubble-kicker">
                    <Sparkles size={14} />
                    Assistente USCS
                  </span>

                  <strong>Bem-vindo ao EduBot!</strong>

                  <span>{DEFAULT_WELCOME_MESSAGE}</span>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="robot-stage"
            aria-hidden="true"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            <span className="robot-glow" />

            {/*
              =========================
              TROCA PNG ↔ GIF
              =========================
            */}
            <motion.img
              src={isSpeaking ? "/edubot-falando.gif" : robot}
              alt="EduBot"
              className={`robot-image ${isSpeaking ? "is-speaking" : ""}`}
              decoding="async"
              draggable={false}
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {hasSelection && selectedTopic ? (
              <motion.div
                key={selectedTopic.id}
                className="assistant-action-card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3 }}
              >
                <span>Link oficial</span>

                {selectedTopic.link ? (
                  <a
                    className="primary-action"
                    href={selectedTopic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {loading ? (
                      <Loader2 className="spin" size={18} />
                    ) : (
                      selectedTopic.actionLabel
                    )}

                    {!loading && <ArrowUpRight size={17} />}
                  </a>
                ) : (
                  <p className="pending-link">
                    Link pendente no documento Word.
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="ready"
                className="assistant-status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="status-dot" />
                EduBot pronto — escolha um tema para começar
              </motion.div>
            )}
          </AnimatePresence>
        </motion.aside>
      </>
    );
  }
);
