import { motion } from "framer-motion";
import { MapPin, Church, Wine } from "lucide-react";

export default function EventoDireccion() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E9]">
      {/* textura de papel */}
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

      <div className="relative z-10 mx-auto w-full max-w-[760px] px-6 py-20 sm:px-12 sm:py-28">

        {/* EUCALIPTO SUPERIOR DERECHO */}
        <motion.img
          src="/eucalipto-superior.png"
          alt=""
          initial={{
            opacity: 0,
            x: 30,
            rotate: 255,
            scaleX: -1,
          }}
          whileInView={{
            opacity: 0.55,
            x: 0,
            rotate: 255,
            scaleX: -1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[-70px]
            w-[390px]
            max-w-none
            select-none
            sm:right-[-190px]
            sm:w-[470px]
          "
        />


        {/* =========================
            SEPARADOR
        ========================== */}
        <div className="flex items-center justify-center sm:my-24">
          <span className="h-px w-20 bg-[#9C9A8B]/45 sm:w-28" />

          <span className="mx-4 text-[10px] text-[#78806A]">
            ♥
          </span>

          <span className="h-px w-20 bg-[#9C9A8B]/45 sm:w-28" />
        </div>

        {/* =========================
            RECEPCIÓN
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center my-20"
        >
          <div className="mb-5 flex justify-center">
            <Wine
              strokeWidth={1.2}
              className="h-8 w-8 text-[#65705A]"
            />
          </div>

          <p
            className="
              font-['Playfair_Display']
              text-[11px]
              uppercase
              tracking-[0.32em]
              text-[#65705A]
              sm:text-[12px]
            "
          >
            Recepción
          </p>

          <h2
            className="
              mt-4
              font-['Playfair_Display']
              text-[24px]
              font-normal
              leading-snug
              text-[#343A2C]
              sm:text-[30px]
            "
          >
            Margo Social Club
          </h2>

          <div className="mx-auto mt-5 h-px w-14 bg-[#9C9A8B]/50" />

          <p
            className="
              mt-5
              font-['Playfair_Display']
              text-[15px]
              uppercase
              tracking-[0.18em]
              text-[#343A2C]
              sm:text-[17px]
            "
          >
            6:30 PM
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-[410px]
              font-['Playfair_Display']
              text-[11px]
              leading-[1.9]
              tracking-[0.05em]
              text-[#5C6252]
              sm:text-[13px]
            "
          >
            La Marina Corredor Turístico Gastronómico, Av. Marina #2209, frente Muelle 6, Marina Mazatlán, 82103 Mazatlán, Sin.
          </p>

          <a
            href="https://maps.app.goo.gl/uSajTAwJPWD75CWM8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              gap-2
              border
              border-[#68715A]
              bg-[#68715A]
              px-7
              py-3
              font-['Playfair_Display']
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[#F7F3E9]
              transition
              duration-300
              hover:bg-transparent
              hover:text-[#68715A]
            "
          >
            <MapPin size={14} strokeWidth={1.5} />

            Ver ubicación
          </a>
        </motion.div>

        {/* EUCALIPTO INFERIOR IZQUIERDO */}
        <motion.img
          src="/eucalipto-superior.png"
          alt=""
          initial={{
            opacity: 0,
            x: -30,
            rotate: 70,
          }}
          whileInView={{
            opacity: 0.5,
            x: 0,
            rotate: 70,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            pointer-events-none
            absolute
            bottom-[-120px]
            left-[-190px]
            w-[400px]
            max-w-none
            select-none
            sm:left-[-210px]
            sm:w-[490px]
          "
        />
      </div>
    </section>
  );
}