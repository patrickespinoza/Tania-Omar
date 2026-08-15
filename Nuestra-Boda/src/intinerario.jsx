import React from "react";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Presentacion from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import EventoDireccion from "./componentes-encabezado/ubicacion";
import ItinerarioTimeline from "./componentes-encabezado/itinerario2";
import MesaDeRegalos from "./componentes-encabezado/MesaRegalos";

export default function Itinerario() {

  return (
    <div>


      <Presentacion />

      <EventoDireccion/>

      <Vestimenta />

      <ItinerarioTimeline/>

      <MesaDeRegalos/>

      <ConfirmacionAsistencia/>
    </div>
  );
}