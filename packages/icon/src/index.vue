<template>
  <!-- 这里我是直接传的最后一位，如果跟其他保持一致，可以传整个名称  d-icon-name -->
  <i :class="`hl-icon-${name}`"></i>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HlIcon",
  props: {
    name: String,
  },
});
</script>
