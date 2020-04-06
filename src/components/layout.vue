<template>
  <div>
    <div class="full-width-page">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "layout"
};
</script>
<style >
.full-width-page {
  width: 100%;
  position: fixed;
  height: 100%;
}
</style>