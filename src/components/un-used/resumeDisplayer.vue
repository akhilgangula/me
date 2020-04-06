<template>
  <div>
    <pre v-if="status">{{getResume()}}</pre>
  </div>
</template>
<script>
import resume from "@/resume.json";
export default {
  data: function() {
    return {
      status: false
    };
  },
  methods: {
    getResume: function() {
      return JSON.stringify(resume, null, 10);
    },
    responseDelay: function() {
      setTimeout(() => {
        this.status = true;
      }, 1000);
    }
  },
  mounted: function() {
    this.responseDelay();
  }
};
</script>

<style scoped>

.string {
  color: green;
}
.number {
  color: darkorange;
}
.boolean {
  color: blue;
}
.null {
  color: magenta;
}
.key {
  color: red;
}
</style>