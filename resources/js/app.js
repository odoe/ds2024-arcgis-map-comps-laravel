import "@arcgis/core/assets/esri/themes/dark/main.css";

import "./bootstrap";

import Alpine from "alpinejs";

import { defineCustomElements } from "@arcgis/map-components/dist/loader";

defineCustomElements(window);

window.Alpine = Alpine;

Alpine.start();
