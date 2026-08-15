import { motion } from "framer-motion";
import {
  Church,
  Wine,
  UtensilsCrossed,
  Heart,
  Music2,
  CakeSlice,
  PartyPopper,
} from "lucide-react";

const eventos = [
  {
    hora: "6:30 PM",
    titulo: "Recepción",
    descripcion: "Bienvenida y celebración",
    icono: Wine,
  },
  {
    hora: "7:00 PM",
    titulo: "Ceremonia Civil",
    descripcion: "El inicio de nuestro para siempre",
    icono: Church,
  },
  {
    hora: "7:30 PM",
    titulo: "Vals",
    descripcion: "Baile especial",
    icono: Music2,
  },
  {
    hora: "8:00 PM",
    titulo: "Brindis",
    descripcion: "Por el amor y los nuevos comienzos",
    icono: Heart,
  },
  {
    hora: "8:30 PM",
    titulo: "Fiesta",
    descripcion: "Un momento para bailar",
    icono: PartyPopper,
  },
];

export default function ItinerarioTimeline() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#A8AE96]
        py-16
        sm:py-24
      "
    >
      {/* ==========================================
          HOJA
      =========================================== */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[760px]
        "
      >
        {/* ==========================================
            BORDE SUPERIOR DE PAPEL
        =========================================== */}
        <div
          className="
            relative
            z-20
            -mb-[2px]
            h-[45px]
            w-full
            bg-[#F7F3E9]
          "
          style={{
            clipPath: `
              polygon(
                0% 65%,
                3% 48%,
                6% 61%,
                9% 43%,
                12% 58%,
                15% 38%,
                18% 55%,
                21% 42%,
                24% 60%,
                28% 39%,
                31% 53%,
                34% 35%,
                37% 58%,
                40% 42%,
                43% 61%,
                46% 40%,
                49% 54%,
                52% 36%,
                55% 59%,
                58% 42%,
                61% 55%,
                64% 39%,
                67% 58%,
                70% 41%,
                73% 61%,
                76% 43%,
                79% 56%,
                82% 38%,
                85% 60%,
                88% 40%,
                91% 55%,
                94% 42%,
                97% 60%,
                100% 45%,
                100% 100%,
                0% 100%
              )
            `,
          }}
        />

        {/* ==========================================
            CUERPO DE LA HOJA
        =========================================== */}
        <div
          className="
            relative
            overflow-hidden
            bg-[#F7F3E9]
            px-5
            pb-24
            pt-16

            sm:px-10
            sm:pb-28
            sm:pt-20
          "
        >
          {/* textura */}
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
              backgroundSize: "11px 11px, 13px 13px",
            }}
          />

          {/* ==========================================
              EUCALIPTO SUPERIOR
          =========================================== */}
          <motion.img
            src="/eucalipto-superior.png"
            alt=""
            initial={{
              opacity: 0,
              x: 30,
              rotate: 250,
              scaleX: -1,
            }}
            whileInView={{
              opacity: 0.42,
              x: 0,
              rotate: 250,
              scaleX: -1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="
              pointer-events-none
              absolute
              right-[-195px]
              top-[-100px]
              w-[410px]
              max-w-none
              select-none

              sm:right-[-220px]
              sm:w-[500px]
            "
          />

          {/* ==========================================
              ENCABEZADO
          =========================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
              relative
              z-10
              text-center
            "
          >
            <p
              className="
                font-['Playfair_Display']
                text-[11px]
                uppercase
                tracking-[0.42em]
                text-[#68715A]

                sm:text-[12px]
              "
            >
              Nuestro día
            </p>

            <h2
              style={{
                fontFamily: '"Dancing Script", cursive',
              }}
              className="
                mt-5
                text-[52px]
                font-medium
                leading-none
                text-[#343A2C]

                sm:text-[64px]
              "
            >
              Itinerario
            </h2>

            <div
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span className="h-px w-14 bg-[#9C9A8B]/55" />

              <span className="text-[9px] text-[#78806A]">
                ♥
              </span>

              <span className="h-px w-14 bg-[#9C9A8B]/55" />
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-[380px]
                font-['Playfair_Display']
                text-[11px]
                leading-[1.9]
                tracking-[0.07em]
                text-[#5C6252]

                sm:text-[13px]
              "
            >
              Cada momento ha sido pensado para compartirlo contigo.
            </p>
          </motion.div>

          {/* ==========================================
              TIMELINE
          =========================================== */}
          <div
            className="
              relative
              z-10
              mx-auto
              mt-20
              max-w-[620px]

              sm:mt-24
            "
          >
            {/* línea vertical */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                bg-[#8B907E]/45
              "
            />

            {eventos.map((evento, index) => {
              const Icon = evento.icono;
              const izquierda = index % 2 === 0;

              return (
                <motion.div
                  key={`${evento.hora}-${evento.titulo}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                  }}
                  className="
                    relative
                    grid
                    min-h-[150px]
                    grid-cols-[1fr_54px_1fr]
                    items-center

                    sm:min-h-[170px]
                    sm:grid-cols-[1fr_70px_1fr]
                  "
                >
                  {/* IZQUIERDA */}
                  <div
                    className={`
                      pr-4
                      sm:pr-7

                      ${
                        izquierda
                          ? "text-right"
                          : "flex items-center justify-end"
                      }
                    `}
                  >
                    {izquierda ? (
                      <div>
                        <p
                          className="
                            font-['Playfair_Display']
                            text-[12px]
                            uppercase
                            tracking-[0.18em]
                            text-[#68715A]

                            sm:text-[14px]
                          "
                        >
                          {evento.hora}
                        </p>

                        <h3
                          className="
                            mt-2
                            font-['Playfair_Display']
                            text-[17px]
                            font-normal
                            text-[#343A2C]

                            sm:text-[20px]
                          "
                        >
                          {evento.titulo}
                        </h3>

                        <p
                          className="
                            ml-auto
                            mt-2
                            max-w-[170px]
                            font-['Playfair_Display']
                            text-[9px]
                            leading-[1.6]
                            text-[#5C6252]

                            sm:max-w-[210px]
                            sm:text-[11px]
                          "
                        >
                          {evento.descripcion}
                        </p>
                      </div>
                    ) : (
                      <span
                        className="
                          h-px
                          w-8
                          bg-[#9C9A8B]/40

                          sm:w-14
                        "
                      />
                    )}
                  </div>

                  {/* CENTRO */}
                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-[48px]
                        w-[48px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#79806A]/45
                        bg-[#F7F3E9]

                        sm:h-[56px]
                        sm:w-[56px]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.15}
                        className="text-[#68715A]"
                      />
                    </div>
                  </div>

                  {/* DERECHA */}
                  <div
                    className={`
                      pl-4
                      sm:pl-7

                      ${
                        !izquierda
                          ? "text-left"
                          : "flex items-center justify-start"
                      }
                    `}
                  >
                    {!izquierda ? (
                      <div>
                        <p
                          className="
                            font-['Playfair_Display']
                            text-[12px]
                            uppercase
                            tracking-[0.18em]
                            text-[#68715A]

                            sm:text-[14px]
                          "
                        >
                          {evento.hora}
                        </p>

                        <h3
                          className="
                            mt-2
                            font-['Playfair_Display']
                            text-[17px]
                            font-normal
                            text-[#343A2C]

                            sm:text-[20px]
                          "
                        >
                          {evento.titulo}
                        </h3>

                        <p
                          className="
                            mt-2
                            max-w-[170px]
                            font-['Playfair_Display']
                            text-[9px]
                            leading-[1.6]
                            text-[#5C6252]

                            sm:max-w-[210px]
                            sm:text-[11px]
                          "
                        >
                          {evento.descripcion}
                        </p>
                      </div>
                    ) : (
                      <span
                        className="
                          h-px
                          w-8
                          bg-[#9C9A8B]/40

                          sm:w-14
                        "
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ==========================================
              CIERRE
          =========================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              relative
              z-10
              mt-10
              text-center
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-12 bg-[#9C9A8B]/45" />

              <span className="text-[10px] text-[#78806A]">
                ♥
              </span>

              <span className="h-px w-12 bg-[#9C9A8B]/45" />
            </div>

            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
              }}
              className="
                mt-5
                text-[27px]
                text-[#68715A]

                sm:text-[31px]
              "
            >
              Celebremos juntos
            </p>
          </motion.div>

          {/* EUCALIPTO INFERIOR */}
          <motion.img
            src="/eucalipto-superior.png"
            alt=""
            initial={{
              opacity: 0,
              x: -30,
              rotate: 65,
            }}
            whileInView={{
              opacity: 0.38,
              x: 0,
              rotate: 65,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="
              pointer-events-none
              absolute
              bottom-[-150px]
              left-[-200px]
              w-[420px]
              max-w-none
              select-none

              sm:left-[-230px]
              sm:w-[510px]
            "
          />
        </div>

        {/* ==========================================
            BORDE INFERIOR DE PAPEL
        =========================================== */}
        <div
          className="
            relative
            z-20
            -mt-[2px]
            h-[48px]
            w-full
            bg-[#F7F3E9]
          "
          style={{
            clipPath: `
              polygon(
                0% 0%,
                100% 0%,
                100% 40%,
                97% 58%,
                94% 41%,
                91% 60%,
                88% 43%,
                85% 61%,
                82% 39%,
                79% 58%,
                76% 42%,
                73% 60%,
                70% 40%,
                67% 57%,
                64% 38%,
                61% 59%,
                58% 41%,
                55% 61%,
                52% 39%,
                49% 56%,
                46% 41%,
                43% 60%,
                40% 38%,
                37% 57%,
                34% 40%,
                31% 61%,
                28% 42%,
                25% 58%,
                22% 39%,
                19% 60%,
                16% 43%,
                13% 57%,
                10% 40%,
                7% 60%,
                4% 43%,
                0% 58%
              )
            `,
          }}
        />
      </div>
    </section>
  );
}