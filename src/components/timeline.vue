<template>
  <div class="wrapper">
    <div class="container">
      <time-log
        v-for="(entry,index) in Profile"
        :key="entry.Company"
        :side="index%2==0 ? 'timeline-block-left' : 'timeline-block-right'"
        :date="entry.StartDate===undefined? entry.EndDate : entry.StartDate + ' to ' + entry.EndDate"
        :org="entry.Company"
        :description="entry.Description"
		:location="entry.Location"
		:designation="entry.Designation"
		:type="entry.type"
      />
    </div>
  </div>
</template>
<script>
import TimeLog from "./timeLog";
import Profile from "@/assets/resume.json";
export default {
  components: {
    TimeLog
  },
  data: function() {
    return {
      Profile
    };
  }
};
</script>
<style scoped>
.wrapper {
  cursor: default;
  margin: 0;
  margin-top: 5%;
  padding: 30px 0;
  font-family: "Roboto", sans-serif;
  height: 100%;
  width: 100%;
  overflow: scroll;
  position: absolute;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
}

.container {
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  margin-bottom: 200px;
  position: relative;
  overflow: hidden;
}

.container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  height: 100%;
  background: #ccd1d9;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .container:before {
    left: 8px;
    width: 2px;
  }
}
</style>