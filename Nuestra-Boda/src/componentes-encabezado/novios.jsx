import { motion } from "framer-motion";

export default function Presentacion() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E9]">
      {/* textura de papel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
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

      <div className="relative z-10 mx-auto w-full max-w-[760px]">
        {/* ================================
            FRASE DE INVITACIÓN
        ================================= */}
        <div className="relative px-7 pb-10 pt-14 sm:px-12 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-[480px] text-center"
          >
            <p
              className="
                font-['Playfair_Display']
                text-[11px]
                uppercase
                leading-[1.9]
                tracking-[0.12em]
                text-[#343A2C]
                sm:text-[13px]
              "
            >
              Sean sus vidas tan unidas en amor que,
              <br />
              Lleguen a ser como una sola alma; y asi,
              <br />
              nada en el mundo podra separarlos
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#9C9A8B]/50" />

              <span className="text-[13px] text-[#78806A]">
                <p>Mateo 19:6</p>
                ♥
              </span>

              <span className="h-px w-12 bg-[#9C9A8B]/50" />
            </div>
          </motion.div>
        </div>


        {/* ================================
            NOMBRES TANIA & OMAR
        ================================= */}
        <div className="relative flex min-h-[570px] items-center justify-center px-5 sm:min-h-[680px]">
          {/* eucalipto derecho */}
          <motion.img
            src="/eucalipto.png"
            alt=""
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 0.72, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="
              pointer-events-none
              absolute
              right-[-200px]
              top-[10px]
              w-[430px]
              max-w-none
              rotate-[25deg]
              select-none
              sm:right-[-235px]
              sm:w-[520px]
              scale-x-[-1]
            "
            style={{
              rotate: "100deg scaleX(-1)",
              
            }}
          />

          {/* eucalipto inferior izquierdo */}
          <motion.img
            src="/eucalipto.png"
            alt=""
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 0.66, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-[-225px]
              w-[430px]
              max-w-none
              -rotate-[80deg]
              select-none
              sm:left-[-245px]
              sm:w-[520px]
            "
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <h2
             style={{ fontFamily: '"Great Vibes", cursive' }}
              className="
                font-['Great_Vibes']
                text-[70px]
                font-normal
                leading-[0.95]
                text-[#343A2C]
                sm:text-[92px]
                lg:text-[104px]
              "
            >
              Tania
            </h2>

            <span
             style={{ fontFamily: '"Dancing Script", cursive' }}
              className="
                my-2
                font-['Great_Vibes']
                text-[38px]
                text-[#4F5741]
                sm:text-[46px]
              "
            >
              &amp;
            </span>

            <h2
             style={{ fontFamily: '"Great Vibes", cursive' }}
              className="
                font-['Great_Vibes']
                text-[70px]
                font-normal
                leading-[0.95]
                text-[#343A2C]
                sm:text-[92px]
                lg:text-[104px]
              "
            >
              Omar
            </h2>

            <p
              className="
                mt-12
                max-w-[320px]
                font-['Playfair_Display']
                text-[10px]
                uppercase
                leading-[1.9]
                tracking-[0.24em]
                text-[#4F5741]
                sm:text-[12px]
              "
            >
              Tenemos el honor de invitarte
              <br />
              a celebrar nuestra boda
            </p>
          </motion.div>
        </div>

        {/* ================================
            FECHA
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="px-7 pb-20 pt-5 text-center sm:px-14 sm:pb-24"
        >
          <p
            className="
              mb-5
              font-['Playfair_Display']
              text-[13px]
              uppercase
              tracking-[0.28em]
              text-[#343A2C]
              sm:text-[15px]
            "
          >
            Noviembre
          </p>

          <div className="mx-auto flex max-w-[390px] items-center justify-center">
            {/* día semana */}
            <div className="flex flex-1 items-center justify-end">
              <span className="mr-4 h-px w-full max-w-[85px] bg-[#777A6C]/70" />

              <p
                className="
                  font-['Playfair_Display']
                  text-[10px]
                  uppercase
                  tracking-[0.20em]
                  text-[#343A2C]
                  sm:text-[12px]
                "
              >
                Sabado
              </p>
            </div>

            {/* número */}
            <div className="px-4 sm:px-7">
              <span
                className="
                  font-['Playfair_Display']
                  text-[76px]
                  font-normal
                  leading-none
                  text-[#343A2C]
                  sm:text-[94px]
                "
              >
                7
              </span>
            </div>

            {/* año */}
            <div className="flex flex-1 items-center">
              <p
                className="
                  font-['Playfair_Display']
                  text-[10px]
                  tracking-[0.20em]
                  text-[#343A2C]
                  sm:text-[12px]
                "
              >
                2026
              </p>

              <span className="ml-4 h-px w-full max-w-[85px] bg-[#777A6C]/70" />
            </div>
          </div>

          {/* adorno inferior */}
          <div className="mt-7 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="text-[19px] text-[#78806A]">
                ❧
              </span>

              <span className="text-[9px] text-[#78806A]">
                ♥
              </span>

              <span className="scale-x-[-1] text-[19px] text-[#78806A]">
                ❧
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}