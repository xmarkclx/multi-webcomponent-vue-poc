<template>
  <div style="text-align: center; font-family: sans-serif">
    <div v-if='type=="orv"'>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div v-if='type=="max"'>
      <app-2 v-bind="$props"/>
    </div>
  </div>
</template>

<script>
import App2 from './App2.vue';
export default {
  components: { App2 },
  props: {
    type: {
      type: String,
      default: "orv"
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>