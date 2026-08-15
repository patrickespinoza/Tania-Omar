import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Music2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function Musica() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);

  // ============================================
  // REPRODUCIR
  // ============================================

  const reproducirMusica = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    audio
      .play()
      .then(() => {
        setReproduciendo(true);
        setMostrarModal(false);
      })
      .catch((error) => {
        console.error("Error al reproducir:", error);
      });
  };

  // ============================================
  // CONTINUAR SIN MÚSICA
  // ============================================

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    setReproduciendo(false);
    setMostrarModal(false);
  };

  // ============================================
  // PAUSAR / REANUDAR
  // ============================================

  const toggleMusica = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.45;

      audio
        .play()
        .then(() => {
          setReproduciendo(true);
        })
        .catch((error) => {
          console.error("Error al reproducir:", error);
        });
    } else {
      audio.pause();
      setReproduciendo(false);
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        loop
      />

      {/* ============================================
          MODAL
      ============================================ */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-[#343A2C]/75
              px-5
              backdrop-blur-[3px]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                relative
                w-full
                max-w-[390px]
                overflow-hidden
                bg-[#F7F3E9]
                px-7
                py-12
                text-center
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
  

              <div className="relative z-10">

                {/* ICONO */}
                <div
                  className="
                    mx-auto
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#68715A]/40
                  "
                >
                  <Music2
                    size={29}
                    strokeWidth={1.1}
                    className="text-[#68715A]"
                  />
                </div>

                {/* NOMBRES */}
                <p
                  className="
                    mt-6
                    font-['Playfair_Display']
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#68715A]
                  "
                >
                  Tania & Omar
                </p>

                {/* TÍTULO */}
                <h2
                  style={{
                    fontFamily: '"Dancing Script", cursive',
                  }}
                  className="
                    mt-4
                    text-[46px]
                    text-[#343A2C]
                  "
                >
                  Nuestra canción
                </h2>

                {/* SEPARADOR */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span className="h-px w-12 bg-[#9C9A8B]/55" />

                  <span className="text-[8px] text-[#78806A]">
                    ♥
                  </span>

                  <span className="h-px w-12 bg-[#9C9A8B]/55" />
                </div>

                {/* TEXTO */}
                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-[280px]
                    font-['Playfair_Display']
                    text-[11px]
                    leading-[1.9]
                    text-[#5C6252]
                  "
                >
                  Hemos elegido una canción especial
                  para acompañarte mientras recorres
                  nuestra invitación.
                </p>

                {/* REPRODUCIR */}
                <button
                  type="button"
                  onClick={reproducirMusica}
                  className="
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    border
                    border-[#68715A]
                    bg-[#68715A]
                    px-5
                    py-4
                    font-['Playfair_Display']
                    text-[10px]
                    uppercase
                    tracking-[0.20em]
                    text-[#F7F3E9]
                    transition
                    duration-300
                    hover:bg-[#59624D]
                  "
                >
                  <Volume2
                    size={16}
                    strokeWidth={1.4}
                  />

                  Reproducir música
                </button>

                {/* SIN MÚSICA */}
                <button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    border
                    border-[#68715A]/50
                    bg-transparent
                    px-5
                    py-4
                    font-['Playfair_Display']
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-[#68715A]
                  "
                >
                  <VolumeX
                    size={15}
                    strokeWidth={1.3}
                  />

                  Continuar sin música
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================
          BOTÓN FLOTANTE
      ============================================ */}

      {!mostrarModal && (
        <motion.button
          type="button"
          onClick={toggleMusica}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            fixed
            bottom-5
            right-5
            z-[9999]
            flex
            h-[56px]
            w-[56px]
            items-center
            justify-center
            rounded-full
            border
            border-[#68715A]/50
            bg-[#F7F3E9]
            text-[#68715A]
            shadow-[0_5px_20px_rgba(52,58,44,0.18)]

            sm:bottom-7
            sm:right-7
          "
        >
          {reproduciendo ? (
            <Pause
              size={21}
              strokeWidth={1.4}
            />
          ) : (
            <Play
              size={21}
              strokeWidth={1.4}
            />
          )}
        </motion.button>
      )}
    </>
  );
}