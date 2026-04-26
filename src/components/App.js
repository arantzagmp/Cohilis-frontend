import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Hero from "./Hero";
import Certifications from "./Certifications";
import About from "./About";
import Services from "./Services";
import CTA from "./CTA";

import RecoleccionTransporte from "../pages/RecoleccionTransporte";
import Acopio from "../pages/Acopio";
import LineaDeTransporte from "../pages/LineaDeTransporte";
import Permisos from "../pages/Permisos";
import Contactanos from "../pages/Contactanos";
import DatosEnviados from "../pages/DatosEnviados";

import serviceRecoleccion from "../images/services/service-recoleccion-icon.png";
import serviceAcopio from "../images/services/service-acopio-icon.png";
import serviceDestinoFinal from "../images/services/service-destino-final-icon.png";

const services = [
  {
    id: 1,
    title: "Recolección y transporte",
    link: "/recoleccion-y-transporte",
    icon: serviceRecoleccion,
    iconAlt: "Icono de recolección y transporte",
  },
  {
    id: 2,
    title: "Acopio",
    link: "/acopio",
    icon: serviceAcopio,
    iconAlt: "Icono de acopio",
  },
  {
    id: 3,
    title: "Línea de transporte",
    link: "/linea-de-transporte",
    icon: serviceDestinoFinal,
    iconAlt: "Icono de línea de transporte",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <About />
      <Services services={services} />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recoleccion-y-transporte"
          element={<RecoleccionTransporte />}
        />
        <Route path="/acopio" element={<Acopio />} />
        <Route path="/linea-de-transporte" element={<LineaDeTransporte />} />
        <Route path="/permisos" element={<Permisos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/datos-enviados" element={<DatosEnviados />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;