<template>
  <div style="text-align: center; font-family: sans-serif">
    <h1>APP2!!! {{ title }}</h1>
    <p>APP2!!! {{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
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