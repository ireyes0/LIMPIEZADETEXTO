// INTEGRANTES DEL EQUIPO
// Sebastian Badillo Romo
// Jose de Jesus Bernal Munoz
// Lazaro Roberto Luevano Serna
// Carlos Isaac Reyes Martinez

import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { test } from "./backend/controlador/clean.controlador.js";

dotenv.config();

mongoose.connect(process.env.urlbd)
  .then(() => console.log("Conectado a la base en MongoDB"))
  .catch((error) => console.error("Error conectando a MongoDB:", error));

const app = express();
app.use(express.json());
app.use(cors());

app.listen(4000, () => {
  console.log("Servidor escuchando en el puerto 4000");

  // Escribimos el texto para analizarlo y se guarda en la base de datos
  const texto = "PELICULAS - 1. La mejor película de los cuatro fantásticos ( y eso que las de 2005 me gustan) y una muy buena introducción al ucm. Espectacular visualmente y llena de corazón y exaltación de la familia. 2. Un asco de película sin sentido no tiene nada que ver spoiler:lo unico que entendí es que le iban a robar al bebé o algo asi. TIENDA - 1. La mochila es un producto de buena calidad y resistencia, con materiales duraderos y un diseño atractivo. Ofrece múltiples compartimientos que facilitan la organización de útiles escolares y otros objetos, además de ser impermeable. Su relación calidadprecio es destacable, siendo una opción recomendable para quienes buscan funcionalidad y espacio a un costo accesible. 2. La compré para mí hija ya que la ocupa para un viaje, le cabe bien la ropa que necesitará para 3 semanas(obviamente se va a estar repitiendo cambios y lavando la)y todavía le sobra un poco de espacio por lo que esperamos que sea de buena calidad los materiales para aguantar el dia a dia. FACEBOOK - Después de tanta espera, se ha confirmado que en agosto por fin tendremos novedades sobre la temporada 3 del anime. La revelación llegará en la edición #38 de la revista Weekly Shonen Jump. 2. Quise aplicar un poco de composición mas compleja y perspectiva en este dibujo, espero les guste tanto como a mi" 

  test(texto);
});
