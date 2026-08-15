import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  MessageCircle,
  Users,
  UserRound,
  Heart,
} from "lucide-react";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState("");

  // =====================================================
  // CONFIGURACIÓN
  // =====================================================

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxr-tebulpzxoZyOOhRHIzIRgH5WJQq2TyxJtcdM2_4BgWA9fGMqnT_kdBkJdllgQDj/exec";

  const WHATSAPP = "526699180201";

  // =====================================================
  // ENVIAR CONFIRMACIÓN
  // =====================================================

  const enviarConfirmacion = async () => {
    // ------------------------------
    // VALIDACIONES
    // ------------------------------

    if (!nombre.trim()) {
      setEstado("Por favor escribe tu nombre.");
      return;
    }

    if (!asistencia) {
      setEstado("Selecciona si asistirás.");
      return;
    }

    if (
      asistencia === "Sí" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setEstado(
        "Por favor indica cuántas personas asistirán."
      );
      return;
    }

    setEnviando(true);
    setEstado("");

    // ------------------------------
    // DATOS
    // ------------------------------

    const datos = {
      nombre: nombre.trim(),
      asistencia: asistencia,
      invitados:
        asistencia === "Sí"
          ? Number(invitados)
          : 0,
      mensaje: mensaje.trim(),
    };

    try {
      // =================================================
      // ENVIAR A GOOGLE SHEETS
      // =================================================

      await fetch(SCRIPT_URL, {
        method: "POST",

        /*
          text/plain evita el preflight de CORS
          con Google Apps Script.
        */
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },

        body: JSON.stringify(datos),
      });

      // =================================================
      // CONFIRMACIÓN
      // =================================================

      setEstado(
        "¡Gracias! Tu respuesta ha sido registrada."
      );

      // =================================================
      // MENSAJE DE WHATSAPP
      // =================================================

      let texto = "";

      if (asistencia === "Sí") {
        texto =
          `Hola, soy ${nombre.trim()}. ` +
          `Confirmo mi asistencia a la boda de Tania y Omar.\n\n` +
          `Número de personas: ${Number(invitados)}`;

        if (mensaje.trim()) {
          texto += `\n\nMensaje: ${mensaje.trim()}`;
        }
      } else {
        texto =
          `Hola, soy ${nombre.trim()}. ` +
          `Muchas gracias por la invitación. ` +
          `Lamentablemente no podré asistir a la boda de Tania y Omar.`;

        if (mensaje.trim()) {
          texto += `\n\nMensaje: ${mensaje.trim()}`;
        }
      }

      const textoWhatsapp =
        encodeURIComponent(texto);

      // Esperamos un poco para mostrar
      // el mensaje de confirmación
      setTimeout(() => {
        window.open(
          `https://wa.me/${WHATSAPP}?text=${textoWhatsapp}`,
          "_blank"
        );
      }, 500);
    } catch (error) {
      console.error(
        "Error al enviar confirmación:",
        error
      );

      setEstado(
        "No pudimos registrar la confirmación. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  // =====================================================
  // DISEÑO
  // =====================================================

  return (
    <section className="relative overflow-hidden bg-[#F7F3E9]">

      {/* =================================================
          TEXTURA DE PAPEL
      ================================================== */}

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

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[760px]
          px-6
          py-24
          sm:px-12
          sm:py-28
        "
      >

        {/* =================================================
            EUCALIPTO SUPERIOR
        ================================================== */}

        <motion.img
          src="/eucalipto-superior.png"
          alt=""
          initial={{
            opacity: 0,
            x: -30,
            rotate: 18,
          }}
          whileInView={{
            opacity: 0.48,
            x: 0,
            rotate: 18,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            absolute
            left-[-200px]
            top-[-100px]
            w-[420px]
            max-w-none
            select-none

            sm:left-[-220px]
            sm:w-[510px]
          "
        />

        {/* =================================================
            EUCALIPTO INFERIOR
        ================================================== */}

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
            opacity: 0.42,
            x: 0,
            rotate: 205,
            scaleX: -1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[-140px]
            right-[-210px]
            w-[430px]
            max-w-none
            select-none

            sm:right-[-230px]
            sm:w-[510px]
          "
        />

        {/* =================================================
            ENCABEZADO
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            z-10
            text-center
          "
        >

          <Heart
            size={30}
            strokeWidth={1.1}
            className="
              mx-auto
              text-[#68715A]
            "
          />

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
            Nos encantará contar contigo
          </p>

          <h2
            style={{
              fontFamily:
                '"Dancing Script", cursive',
            }}
            className="
              mt-4
              text-[49px]
              font-medium
              leading-none
              text-[#343A2C]

              sm:text-[63px]
            "
          >
            Confirma tu asistencia
          </h2>

          {/* SEPARADOR */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-14
                bg-[#9C9A8B]/55
              "
            />

            <span
              className="
                text-[9px]
                text-[#78806A]
              "
            >
              ♥
            </span>

            <span
              className="
                h-px
                w-14
                bg-[#9C9A8B]/55
              "
            />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-[430px]
              font-['Playfair_Display']
              text-[11px]
              leading-[1.9]
              tracking-[0.05em]
              text-[#5C6252]

              sm:text-[13px]
            "
          >
            Queremos compartir este día tan especial
            contigo.
            <br />
            Por favor confirma tu asistencia.
          </p>
        </motion.div>

        {/* =================================================
            FORMULARIO
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            relative
            z-10
            mx-auto
            mt-12
            max-w-[500px]
          "
        >

          {/* =================================================
              NOMBRE
          ================================================== */}

          <div>

            <label
              className="
                mb-2
                flex
                items-center
                gap-2
                font-['Playfair_Display']
                text-[10px]
                uppercase
                tracking-[0.20em]
                text-[#68715A]
              "
            >
              <UserRound
                size={14}
                strokeWidth={1.3}
              />

              Nombre
            </label>

            <input
              type="text"
              value={nombre}
              onChange={(e) =>
                setNombre(e.target.value)
              }
              placeholder="Escribe tu nombre"
              className="
                w-full
                border
                border-[#818774]/45
                bg-[#FBF8F1]/70
                px-4
                py-4
                font-['Playfair_Display']
                text-[13px]
                text-[#343A2C]
                outline-none
                transition
                placeholder:text-[#818774]/60
                focus:border-[#68715A]
              "
            />

          </div>

          {/* =================================================
              ASISTENCIA
          ================================================== */}

          <div className="mt-7">

            <p
              className="
                mb-3
                font-['Playfair_Display']
                text-[10px]
                uppercase
                tracking-[0.20em]
                text-[#68715A]
              "
            >
              ¿Podrás acompañarnos?
            </p>

            <div
              className="
                grid
                grid-cols-2
                gap-3
              "
            >

              {/* SÍ */}

              <button
                type="button"
                onClick={() => {
                  setAsistencia("Sí");

                  if (!invitados) {
                    setInvitados("1");
                  }

                  setEstado("");
                }}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  px-4
                  py-4
                  font-['Playfair_Display']
                  text-[11px]
                  uppercase
                  tracking-[0.16em]
                  transition
                  duration-300

                  ${
                    asistencia === "Sí"
                      ? "border-[#68715A] bg-[#68715A] text-[#F7F3E9]"
                      : "border-[#818774]/45 bg-transparent text-[#4F5741] hover:border-[#68715A]"
                  }
                `}
              >
                <Check
                  size={16}
                  strokeWidth={1.5}
                />

                Sí asistiré
              </button>

              {/* NO */}

              <button
                type="button"
                onClick={() => {
                  setAsistencia("No");
                  setInvitados("");
                  setEstado("");
                }}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  px-4
                  py-4
                  font-['Playfair_Display']
                  text-[11px]
                  uppercase
                  tracking-[0.16em]
                  transition
                  duration-300

                  ${
                    asistencia === "No"
                      ? "border-[#68715A] bg-[#68715A] text-[#F7F3E9]"
                      : "border-[#818774]/45 bg-transparent text-[#4F5741] hover:border-[#68715A]"
                  }
                `}
              >
                <X
                  size={16}
                  strokeWidth={1.5}
                />

                No podré
              </button>

            </div>

          </div>

          {/* =================================================
              NÚMERO DE PERSONAS
          ================================================== */}

          {asistencia === "Sí" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-7"
            >

              <label
                className="
                  mb-2
                  flex
                  items-center
                  gap-2
                  font-['Playfair_Display']
                  text-[10px]
                  uppercase
                  tracking-[0.20em]
                  text-[#68715A]
                "
              >
                <Users
                  size={14}
                  strokeWidth={1.3}
                />

                Número de personas que asistirán
              </label>

              <input
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                value={invitados}
                onChange={(e) => {
                  const valor =
                    e.target.value;

                  if (valor === "") {
                    setInvitados("");
                    return;
                  }

                  const numero =
                    Number(valor);

                  if (numero >= 1) {
                    setInvitados(valor);
                  }
                }}
                placeholder="Ej. 4"
                className="
                  w-full
                  border
                  border-[#818774]/45
                  bg-[#FBF8F1]/70
                  px-4
                  py-4
                  font-['Playfair_Display']
                  text-[13px]
                  text-[#343A2C]
                  outline-none
                  transition
                  placeholder:text-[#818774]/60
                  focus:border-[#68715A]
                "
              />

              <p
                className="
                  mt-2
                  font-['Playfair_Display']
                  text-[9px]
                  tracking-[0.04em]
                  text-[#68715A]/70
                "
              >
                Escribe el número total de personas
                que asistirán.
              </p>

            </motion.div>
          )}

          {/* =================================================
              MENSAJE
          ================================================== */}

          <div className="mt-7">

            <label
              className="
                mb-2
                block
                font-['Playfair_Display']
                text-[10px]
                uppercase
                tracking-[0.20em]
                text-[#68715A]
              "
            >
              Mensaje para los novios
            </label>

            <textarea
              value={mensaje}
              onChange={(e) =>
                setMensaje(e.target.value)
              }
              placeholder="Escribe un mensaje..."
              rows={4}
              className="
                w-full
                resize-none
                border
                border-[#818774]/45
                bg-[#FBF8F1]/70
                px-4
                py-4
                font-['Playfair_Display']
                text-[13px]
                leading-relaxed
                text-[#343A2C]
                outline-none
                transition
                placeholder:text-[#818774]/60
                focus:border-[#68715A]
              "
            />

          </div>

          {/* =================================================
              ESTADO
          ================================================== */}

          {estado && (
            <motion.p
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mt-6
                text-center
                font-['Playfair_Display']
                text-[11px]
                leading-relaxed
                text-[#68715A]
              "
            >
              {estado}
            </motion.p>
          )}

          {/* =================================================
              BOTÓN DE CONFIRMACIÓN
          ================================================== */}

          <div className="mt-8">

            <p
              className="
                mb-4
                text-center
                font-['Playfair_Display']
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#68715A]
              "
            >
              Envía tu confirmación
            </p>

            <button
              type="button"
              disabled={enviando}
              onClick={enviarConfirmacion}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                border
                border-[#68715A]
                bg-[#68715A]
                px-6
                py-4
                font-['Playfair_Display']
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#F7F3E9]
                transition
                duration-300
                hover:bg-[#59624D]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <MessageCircle
                size={17}
                strokeWidth={1.4}
              />

              {enviando
                ? "Enviando..."
                : "Confirmar asistencia"}
            </button>

          </div>

          {/* =================================================
              CIERRE
          ================================================== */}

          <div
            className="
              mx-auto
              mt-14
              max-w-[390px]
              text-center
            "
          >

            <div
              className="
                mx-auto
                mb-5
                h-px
                w-16
                bg-[#9C9A8B]/45
              "
            />

            <p
              style={{
                fontFamily:
                  '"Dancing Script", cursive',
              }}
              className="
                text-[25px]
                leading-[1.35]
                text-[#68715A]

                sm:text-[29px]
              "
            >
              Será un honor celebrar
              <br />
              este día contigo.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}