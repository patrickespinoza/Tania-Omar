import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

/* =====================================================
   ICONO PERSONALIZADO — VESTIDO
===================================================== */
function DressIcon({ size = 52, color = "#68715A" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* tirante izquierdo */}
      <path
        d="M25 7C25 7 27 12 28.5 17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* tirante derecho */}
      <path
        d="M39 7C39 7 37 12 35.5 17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* escote */}
      <path
        d="M28.5 17C29.5 19 30.5 20.5 32 21.5C33.5 20.5 34.5 19 35.5 17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* cuerpo izquierdo */}
      <path
        d="M28.5 17C28 23 26.5 27.5 24 32"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* cuerpo derecho */}
      <path
        d="M35.5 17C36 23 37.5 27.5 40 32"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* cintura */}
      <path
        d="M24 32C28.5 33 35.5 33 40 32"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* falda izquierda */}
      <path
        d="M24 32C22 40 17 54 10 68"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* falda derecha */}
      <path
        d="M40 32C42 40 47 54 54 68"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* parte inferior */}
      <path
        d="M10 68C21 71 43 71 54 68"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* pliegues */}
      <path
        d="M27 34C25 46 22 57 20 68"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      />

      <path
        d="M32 34V69"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.45"
      />

      <path
        d="M37 34C39 46 42 57 44 68"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/* =====================================================
   VESTIMENTA — TANIA & OMAR
===================================================== */

export default function Vestimenta() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E9]">

      {/* =============================================
          TEXTURA DE PAPEL
      ============================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
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

      {/* =============================================
          CONTENEDOR PRINCIPAL
      ============================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[700px]
          w-full
          max-w-[760px]
          flex-col
          items-center
          justify-center
          px-6
          py-24
          text-center

          sm:min-h-[780px]
          sm:px-12
          sm:py-28
        "
      >

        {/* =============================================
            EUCALIPTO SUPERIOR IZQUIERDO
        ============================================== */}
        <motion.img
          src="/eucalipto.png"
          alt=""
          initial={{
            opacity: 0,
            x: -30,
            rotate: 25,
          }}
          whileInView={{
            opacity: 0.52,
            x: 0,
            rotate: 25,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[-85px]
            w-[390px]
            max-w-none
            select-none

            sm:left-[-200px]
            sm:w-[470px]
          "
        />

        {/* =============================================
            EUCALIPTO INFERIOR DERECHO
        ============================================== */}
        <motion.img
          src="/eucalipto-superior.png"
          alt=""
          initial={{
            opacity: 0,
            x: 30,
            rotate: 205,
            scaleX: -1,
          }}
          whileInView={{
            opacity: 0.46,
            x: 0,
            rotate: 205,
            scaleX: -1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[-120px]
            right-[-190px]
            w-[400px]
            max-w-none
            select-none

            sm:right-[-210px]
            sm:w-[480px]
          "
        />

        {/* =============================================
            CONTENIDO
        ============================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="relative z-10 w-full"
        >


          {/* =============================================
              TÍTULO CURSIVO
          ============================================== */}
          <h2
            style={{
              fontFamily: '"Dancing Script", cursive',
            }}
            className="
              mt-5
              text-[48px]
              font-medium
              leading-[1]
              text-[#343A2C]

              sm:text-[61px]
            "
          >
            Código de vestimenta
          </h2>

          {/* =============================================
              SEPARADOR
          ============================================== */}
          <div className="mt-7 flex items-center justify-center gap-4">

            <span className="h-px w-14 bg-[#9C9A8B]/60" />

            <span className="text-[9px] text-[#78806A]">
              ♥
            </span>

            <span className="h-px w-14 bg-[#9C9A8B]/60" />

          </div>

          {/* =============================================
              FORMAL
          ============================================== */}
          <p
            className="
              mt-8
              font-['Playfair_Display']
              text-[18px]
              uppercase
              tracking-[0.30em]
              text-[#343A2C]

              sm:text-[21px]
            "
          >
            Formal
          </p>


          {/* =============================================
              MUJERES / HOMBRES
          ============================================== */}
          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-[470px]
              grid-cols-2
              gap-5

              sm:gap-10
            "
          >

            {/* =============================================
                MUJERES
            ============================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="flex flex-col items-center"
            >

              {/* círculo */}
              <div
                className="
                  flex
                  h-[90px]
                  w-[90px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#818774]/40

                  sm:h-[100px]
                  sm:w-[100px]
                "
              >
                <DressIcon
                  size={57}
                  color="#68715A"
                />
              </div>

              <p
                className="
                  mt-5
                  font-['Playfair_Display']
                  text-[11px]
                  uppercase
                  tracking-[0.20em]
                  text-[#343A2C]

                  sm:text-[12px]
                "
              >
                Mujeres
              </p>


            </motion.div>

            {/* =============================================
                HOMBRES
            ============================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="flex flex-col items-center"
            >

              {/* círculo */}
              <div
                className="
                  flex
                  h-[90px]
                  w-[90px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#818774]/40

                  sm:h-[100px]
                  sm:w-[100px]
                "
              >
                <Shirt
                  size={43}
                  strokeWidth={1}
                  className="text-[#68715A]"
                />
              </div>

              <p
                className="
                  mt-5
                  font-['Playfair_Display']
                  text-[11px]
                  uppercase
                  tracking-[0.20em]
                  text-[#343A2C]

                  sm:text-[12px]
                "
              >
                Hombres
              </p>

            </motion.div>

          </div>

          {/* =============================================
              NOTA INFERIOR
          ============================================== */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              mx-auto
              mt-14
              max-w-[430px]
            "
          >
            <div className="mx-auto mb-5 h-px w-16 bg-[#9C9A8B]/45" />

            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
              }}
              className="
                text-[25px]
                leading-[1.35]
                text-[#68715A]

                sm:text-[29px]
              "
            >
              Gracias por acompañarnos
              <br />
              con tu mejor sonrisa.
            </p>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}