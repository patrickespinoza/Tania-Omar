import { motion } from "framer-motion";
import { Gift, ExternalLink } from "lucide-react";

export default function MesaDeRegalos() {
  const regalos = [
    {
      nombre: "Liverpool",
      descripcion: "Mesa de regalos",
      enlace: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60027007",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F3E9]">
      {/* TEXTURA DE PAPEL */}
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

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[720px]
          w-full
          max-w-[760px]
          flex-col
          items-center
          justify-center
          px-6
          py-24
          text-center
          sm:px-12
          sm:py-28
        "
      >
        {/* EUCALIPTO SUPERIOR */}
        <motion.img
          src="/eucalipto.png"
          alt=""
          initial={{
            opacity: 0,
            x: -30,
            rotate: 20,
          }}
          whileInView={{
            opacity: 0.5,
            x: 0,
            rotate: 20,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            pointer-events-none
            absolute
            left-[-190px]
            top-[-100px]
            w-[410px]
            max-w-none
            select-none
            sm:left-[-210px]
            sm:w-[500px]
          "
        />

        {/* CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 w-full"
        >
          <div className="flex justify-center">
            <Gift
              size={34}
              strokeWidth={1.1}
              className="text-[#68715A]"
            />
          </div>

          <p
            className="
              mt-5
              font-['Playfair_Display']
              text-[11px]
              uppercase
              tracking-[0.40em]
              text-[#68715A]
              sm:text-[12px]
            "
          >
            Un detalle especial
          </p>

          <h2
            style={{
              fontFamily: '"Dancing Script", cursive',
            }}
            className="
              mt-4
              text-[50px]
              font-medium
              leading-none
              text-[#343A2C]
              sm:text-[64px]
            "
          >
            Mesa de regalos
          </h2>

          {/* SEPARADOR */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#9C9A8B]/55" />

            <span className="text-[9px] text-[#78806A]">
              ♥
            </span>

            <span className="h-px w-14 bg-[#9C9A8B]/55" />
          </div>

          {/* TEXTO */}
          <p
            className="
              mx-auto
              mt-7
              max-w-[430px]
              font-['Playfair_Display']
              text-[11px]
              leading-[1.9]
              tracking-[0.06em]
              text-[#5C6252]
              sm:text-[13px]
            "
          >
            Tu presencia es nuestro mejor regalo.
<br />
Si deseas tener un detalle con nosotros,
hemos preparado las siguientes opciones.
<br />
También contaremos con lluvia de sobres,
para quienes deseen obsequiarnos un detalle en efectivo.
          </p>

          {/* OPCIONES */}
          <div
            className="
              mx-auto
              mt-12
              flex
              max-w-[470px]
              flex-col
              gap-5
            "
          >
            {regalos.map((regalo, index) => (
              <motion.a
                key={regalo.nombre}
                href={regalo.enlace}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border
                  border-[#818774]/45
                  bg-[#F7F3E9]/70
                  px-6
                  py-5
                  transition
                  duration-300
                  hover:bg-[#68715A]
                "
              >
                <div className="text-left">
                  <p
                    className="
                      font-['Playfair_Display']
                      text-[15px]
                      uppercase
                      tracking-[0.18em]
                      text-[#343A2C]
                      transition
                      group-hover:text-[#F7F3E9]
                      sm:text-[17px]
                    "
                  >
                    {regalo.nombre}
                  </p>

                  <p
                    className="
                      mt-1
                      font-['Playfair_Display']
                      text-[10px]
                      tracking-[0.08em]
                      text-[#68715A]
                      transition
                      group-hover:text-[#F7F3E9]/80
                      sm:text-[11px]
                    "
                  >
                    {regalo.descripcion}
                  </p>
                </div>

                <ExternalLink
                  size={18}
                  strokeWidth={1.2}
                  className="
                    text-[#68715A]
                    transition
                    group-hover:text-[#F7F3E9]
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* NOTA FINAL */}
          <div className="mx-auto mt-14 max-w-[390px]">
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
              Gracias por ser parte
              <br />
              de nuestra historia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}