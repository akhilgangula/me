<template>
  <div class="root">
    <div>
      <span v-for="star in score_slot" :key="star" class="fas fa-dot-circle checked"></span>
      <span v-for="star in unscored_slot" :key="star" class="fas fa-dot-circle "></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rating"],
  data: function() {
    return {
      score_slot: [1, 2, 3, 4, 5].splice(0, this.rating),
      unscored_slot: [1, 2, 3, 4, 5].splice(this.rating, 5)
    };
  }
};
</script>
<style scoped>
.fas {
  padding: 3px;

}
.checked {
  color: var(--font-color);
}

span {
  color: var(--secondary-color);
}

.skill {
  color: var(--font-color);
}

.skill-desc {
  margin-left: 1%;
  margin-right: 10%;
  color: var(--font-color);
  font-size: 30px;
}
</style>