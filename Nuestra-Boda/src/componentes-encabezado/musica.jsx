import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2, Pause, Play } from "lucide-react";

export default function Musica() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const handleCanPlay = () => {
      setCargado(true);
    };

    const handleEnded = () => {
      setReproduciendo(false);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (reproduciendo) {
        audio.pause();
        setReproduciendo(false);
      } else {
        await audio.play();
        setReproduciendo(true);
      }
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
      />

      {/* BOTÓN FLOTANTE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="
          fixed
          bottom-5
          right-5
          z-[9999]

          sm:bottom-7
          sm:right-7
        "
      >
        <button
          type="button"
          onClick={toggleMusica}
          disabled={!cargado}
          aria-label={
            reproduciendo
              ? "Pausar música"
              : "Reproducir música"
          }
          className="
            group
            relative
            flex
            h-[58px]
            w-[58px]
            items-center
            justify-center
            rounded-full
            border
            border-[#68715A]/50
            bg-[#F7F3E9]/95
            text-[#68715A]
            shadow-[0_5px_20px_rgba(52,58,44,0.15)]
            backdrop-blur-sm
            transition
            duration-300

            hover:bg-[#68715A]
            hover:text-[#F7F3E9]

            disabled:cursor-not-allowed
            disabled:opacity-50

            sm:h-[64px]
            sm:w-[64px]
          "
        >
          {/* ANILLO ANIMADO */}
          {reproduciendo && (
            <motion.span
              className="
                absolute
                inset-[-5px]
                rounded-full
                border
                border-[#68715A]/35
              "
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.15, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* ICONO */}
          {reproduciendo ? (
            <Pause
              size={22}
              strokeWidth={1.4}
            />
          ) : (
            <Play
              size={22}
              strokeWidth={1.4}
              className="ml-[2px]"
            />
          )}
        </button>

        {/* TEXTO */}
        <motion.div
          initial={{
            opacity: 0,
            x: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="
            absolute
            right-[70px]
            top-1/2
            hidden
            -translate-y-1/2
            whitespace-nowrap
            bg-[#F7F3E9]/90
            px-3
            py-2
            font-['Playfair_Display']
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-[#68715A]
            shadow-sm

            sm:block
          "
        >
          {reproduciendo
            ? "Nuestra canción"
            : "Reproducir música"}
        </motion.div>
      </motion.div>
    </>
  );
}