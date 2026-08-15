import { useEffect, useRef, useState } from "react";
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
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Volumen inicial
    audio.volume = 0.45;

    const handleCanPlay = () => {
      setCargado(true);
    };

    const handlePlay = () => {
      setReproduciendo(true);
    };

    const handlePause = () => {
      setReproduciendo(false);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  // ============================================
  // REPRODUCIR DESDE EL MODAL
  // ============================================

  const reproducirMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();

      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error(
        "No se pudo reproducir la música:",
        error
      );

      setMostrarModal(false);
    }
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
  // BOTÓN FLOTANTE
  // ============================================

  const toggleMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error(
        "Error al controlar la música:",
        error
      );
    }
  };

  return (
    <>
      {/* ============================================
          AUDIO
      ============================================= */}

      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
      />

      {/* ============================================
          VENTANA EMERGENTE
      ============================================= */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
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
            {/* ============================================
                TARJETA
            ============================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
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

                sm:px-10
                sm:py-14
              "
            >
              {/* ============================================
                  TEXTURA
              ============================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.16]
                "
                style={{
                  backgroundImage: `
                    radial-gradient(
                      circle at 20% 30%,
                      rgba(80,70,50,0.08) 0.5px,
                      transparent 0.7px
                    ),
                    radial-gradient(
                      circle at 70% 65%,
                      rgba(80,70,50,0.06) 0.5px,
                      transparent 0.8px
                    )
                  `,
                  backgroundSize:
                    "11px 11px, 13px 13px",
                }}
              />

              {/* ============================================
                  EUCALIPTO
              ============================================= */}

              <motion.img
                src="/eucalipto-superior.png"
                alt=""
                initial={{
                  opacity: 0,
                  x: -20,
                  rotate: 20,
                }}
                animate={{
                  opacity: 0.42,
                  x: 0,
                  rotate: 20,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                }}
                className="
                  pointer-events-none
                  absolute
                  left-[-130px]
                  top-[-85px]
                  w-[280px]
                  max-w-none
                  select-none
                "
              />

              <motion.img
                src="/eucalipto-superior.png"
                alt=""
                initial={{
                  opacity: 0,
                  x: 20,
                  rotate: 205,
                  scaleX: -1,
                }}
                animate={{
                  opacity: 0.32,
                  x: 0,
                  rotate: 205,
                  scaleX: -1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-[-100px]
                  right-[-145px]
                  w-[290px]
                  max-w-none
                  select-none
                "
              />

              {/* ============================================
                  CONTENIDO
              ============================================= */}

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

                {/* TEXTO PEQUEÑO */}

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
                  Tania &amp; Omar
                </p>

                {/* TÍTULO */}

                <h2
                  style={{
                    fontFamily:
                      '"Dancing Script", cursive',
                  }}
                  className="
                    mt-4
                    text-[43px]
                    font-medium
                    leading-none
                    text-[#343A2C]

                    sm:text-[49px]
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
                  <span
                    className="
                      h-px
                      w-12
                      bg-[#9C9A8B]/55
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      text-[#78806A]
                    "
                  >
                    ♥
                  </span>

                  <span
                    className="
                      h-px
                      w-12
                      bg-[#9C9A8B]/55
                    "
                  />
                </div>

                {/* DESCRIPCIÓN */}

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-[280px]
                    font-['Playfair_Display']
                    text-[11px]
                    leading-[1.9]
                    tracking-[0.05em]
                    text-[#5C6252]

                    sm:text-[12px]
                  "
                >
                  Hemos elegido una canción especial
                  para acompañarte mientras recorres
                  nuestra invitación.
                </p>

                {/* ============================================
                    REPRODUCIR
                ============================================= */}

                <button
                  type="button"
                  onClick={reproducirMusica}
                  disabled={!cargado}
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

                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  <Volume2
                    size={16}
                    strokeWidth={1.4}
                  />

                  {cargado
                    ? "Reproducir música"
                    : "Cargando música..."}
                </button>

                {/* ============================================
                    SIN MÚSICA
                ============================================= */}

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
                    transition
                    duration-300

                    hover:border-[#68715A]
                    hover:bg-[#68715A]/5
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
      ============================================= */}

      {!mostrarModal && (
        <motion.button
          type="button"
          onClick={toggleMusica}
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileTap={{
            scale: 0.92,
          }}
          aria-label={
            reproduciendo
              ? "Pausar música"
              : "Reproducir música"
          }
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
            bg-[#F7F3E9]/95
            text-[#68715A]
            shadow-[0_5px_20px_rgba(52,58,44,0.18)]
            backdrop-blur-sm
            transition
            duration-300

            hover:bg-[#68715A]
            hover:text-[#F7F3E9]

            sm:bottom-7
            sm:right-7
            sm:h-[62px]
            sm:w-[62px]
          "
        >
          {/* PULSO CUANDO ESTÁ SONANDO */}

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
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {reproduciendo ? (
            <Pause
              size={21}
              strokeWidth={1.4}
            />
          ) : (
            <Play
              size={21}
              strokeWidth={1.4}
              className="ml-[2px]"
            />
          )}
        </motion.button>
      )}
    </>
  );
}