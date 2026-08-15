import { motion } from "framer-motion";

/* =========================================
   PORTADA — TANIA & OMAR
   Inspirada en la referencia botánica
========================================= */

const palette = {
  ivory: "#F7F3E9",
  ivorySoft: "#FBF8F1",
  sage: "#A7AC94",
  olive: "#4F5741",
  darkOlive: "#343A2C",
  line: "#9C9A8B",
};

export default function Portada() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F3E9]
      "
    >
      {/* ========================================
          TEXTURA DE PAPEL
      ======================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.20]
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
          backgroundSize: "11px 11px, 13px 13px",
        }}
      />

      {/* ========================================
          CONTENEDOR PRINCIPAL
      ======================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[760px]
        "
      >
        {/* ========================================
            PARTE SUPERIOR
        ======================================== */}
        <div
          className="
            relative
            flex
            min-h-[560px]
            flex-col
            items-center
            justify-end
            px-7
            pb-10
            pt-32
            sm:min-h-[650px]
            sm:px-12
            sm:pb-14
            sm:pt-40
            lg:min-h-[700px]
            lg:px-16
          "
        >
          {/* ========================================
              EUCALIPTO SUPERIOR
          ======================================== */}
          <motion.img
            src="/eucalipto.png"
            alt=""
            initial={{
              opacity: 0,
              x: -30,
              y: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              left-[-45px]
              top-[-20px]
              z-0
              w-[360px]
              max-w-none
              select-none
              opacity-90
              sm:left-[-50px]
              sm:top-[-28px]
              sm:w-[470px]
              lg:left-[-70px]
              lg:w-[560px]
            "
          />

          {/* ========================================
              FRASE BÍBLICA
          ======================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              relative
              z-10
              mb-12
              max-w-[310px]
              text-center
              sm:mb-14
              sm:max-w-[380px]
            "
          >
            <p
              className="
                font-['Playfair_Display']
                text-[11px]
                uppercase
                leading-[1.85]
                tracking-[0.10em]
                text-[#343A2C]
                sm:text-[13px]
              "
            >
              “Que el amor que celebramos sea la luz:
              <br />
              que ilumine nuestros dias, la fuerza que;
              <br />
              nos sostenga en las dificultades y la alegria que multiplique cada bendicion.”
            </p>
          </motion.div>

          {/* ========================================
              MONOGRAMA T | O
          ======================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
            }}
            className="
              relative
              z-10
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                font-['Playfair_Display']
                text-[74px]
                font-normal
                leading-none
                text-[#343A2C]
                sm:text-[92px]
                lg:text-[105px]
              "
            >
              T
            </span>

            <span
              className="
                mx-5
                h-[76px]
                w-px
                bg-[#777A6C]
                sm:mx-7
                sm:h-[92px]
                lg:h-[105px]
              "
            />

            <span
              className="
                font-['Playfair_Display']
                text-[74px]
                font-normal
                leading-none
                text-[#343A2C]
                sm:text-[92px]
                lg:text-[105px]
              "
            >
              O
            </span>
          </motion.div>

          {/* ========================================
              NUESTRA BODA
          ======================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="
              relative
              z-10
              mt-8
              flex
              flex-col
              items-center
            "
          >
            <p
              className="
                font-['Playfair_Display']
                text-[13px]
                uppercase
                tracking-[0.42em]
                text-[#343A2C]
                sm:text-[15px]
              "
            >
              Nuestra Boda
            </p>

            {/* línea decorativa */}
            <div className="mt-4 flex items-center gap-3">
              <span
                className="
                  block
                  h-px
                  w-12
                  bg-[#9C9A8B]/60
                  sm:w-16
                "
              />

              <span
                className="
                  text-[10px]
                  text-[#78806A]
                "
              >
                ♥
              </span>

              <span
                className="
                  block
                  h-px
                  w-12
                  bg-[#9C9A8B]/60
                  sm:w-16
                "
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================
            FOTOGRAFÍA PRINCIPAL
        ======================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.3,
          }}
          className="
            relative
            w-full
          "
        >
          {/* borde superior orgánico */}
          <div
            className="
              absolute
              left-0
              top-[-20px]
              z-20
              h-[42px]
              w-full
            "
            style={{
              background: palette.ivory,
              clipPath: `
                polygon(
                  0% 0%,
                  4% 32%,
                  8% 12%,
                  13% 30%,
                  18% 8%,
                  23% 28%,
                  29% 14%,
                  34% 35%,
                  39% 10%,
                  45% 31%,
                  51% 13%,
                  57% 34%,
                  63% 12%,
                  69% 29%,
                  75% 9%,
                  81% 31%,
                  87% 13%,
                  93% 32%,
                  100% 8%,
                  100% 0%
                )
              `,
            }}
          />

          <img
            src="/portada.jpg"
            alt="Tania y Omar"
            className="
              h-[540px]
              w-full
              object-cover
              object-center
              sm:h-[680px]
              lg:h-[760px]
            "
          />

          {/* degradado inferior muy ligero */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[90px]
              bg-gradient-to-t
              from-[#F7F3E9]/20
              to-transparent
            "
          />
        </motion.div>

        {/* ========================================
            BORDE INFERIOR RASGADO
            prepara transición a siguiente sección
        ======================================== */}
        <div
          className="
            relative
            z-20
            mt-[-24px]
            h-[48px]
            w-full
            bg-[#F7F3E9]
          "
          style={{
            clipPath: `
              polygon(
                0% 40%,
                5% 18%,
                10% 34%,
                15% 14%,
                20% 32%,
                26% 16%,
                32% 38%,
                38% 15%,
                44% 33%,
                50% 12%,
                56% 36%,
                62% 17%,
                68% 31%,
                74% 11%,
                80% 35%,
                86% 15%,
                92% 32%,
                100% 12%,
                100% 100%,
                0% 100%
              )
            `,
          }}
        />
      </div>
    </section>
  );
}