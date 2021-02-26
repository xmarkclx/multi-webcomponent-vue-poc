
import wrap from "@vue/web-component-wrapper";
import Vue from "vue";
import App from "./App.vue";

const wrappedElement = wrap(Vue, App);

window.customElements.define("v-card", wrappedElement);