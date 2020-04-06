<template>
  <div class="timeline-block" :class="side">
    <div class="marker"></div>
    <div class="timeline-content">
      <div>
      <div class="date">{{date}}</div>
      <div>
        <span class="org">{{org}}</span> @
        <span class="location">{{location}}</span>
      </div>
      <div>
        <span v-if="type==='work'">as </span>
        <span class="designation">{{designation}}</span>
      </div>
      <div class="description">{{description}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["side", "date", "org", "description", "location", "designation","type"]
};
</script>

<style scoped>
h1 span {
  font-weight: 600;
}
.wrapper:hover {

  color: var(--font-color);

}
.timeline-block {
  width: -webkit-calc(50% + 8px);
  width: -moz-calc(50% + 8px);
  width: calc(50% + 8px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  clear: both;
}
.location {
  font-size: 25px;
}
.designation {
  font-size: 20px;
}
.timeline-block-right {
  float: right;
}

.timeline-block-left {
  float: left;
  direction: rtl;
}

.marker {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--secondary-color);
  background: var(--secondary-color);
  margin-top: 10px;
  z-index: 1;
}

.timeline-content {
  width: 95%;
  padding: 0 15px;
  color: #666;
  line-height: 2em;
}

.timeline-content .date {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 35px;

  font-weight: bolder;
}

.timeline-content span {
  font-size: 20px;
  color: #a4a4a4;
}

.timeline-content p {
  font-size: 18px;
  line-height: 1.5em;
  word-spacing: 1px;
  color: #888;
}
.timeline-block .location:hover {
  color: var(--font-color);
}

.timeline-block .designation:hover {
  color: var(--font-color);
}
.timeline-block .org:hover {
  color: var(--font-color);
}
.timeline-block .date:hover {
  color: var(--font-color);
}
.timeline-block .description:hover {
  color: var(--font-color);
}

@media screen and (max-width: 768px) {
  .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline-block-right {
    float: none;
  }

  .timeline-block-left {
    float: none;
    direction: ltr;
  }
}
</style>