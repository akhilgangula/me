<template>
  <div class="timeline-block" :class="side">
    <div class="marker"></div>
    <div class="timeline-content">
      <div class="date is-size-4 is-size-3-tablet">{{date}}</div>
      <div class="loc-org has-text-weight-semibold">
        <span class="org is-size-5 is-size-4-tablet">{{org}}</span> @
        <span class="location is-size-5 is-size-4-tablet">{{location}}</span>
      </div>
      <div class="is-size-6">
        <span v-if="type==='work'">as</span>
        <span
          class="designation has-text-weight-semibold is-size-6 is-size-5-tablet"
        >{{designation}}</span>
      </div>
      <div class="description is-size-6 is-size-4-tablet">{{description}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "side",
    "date",
    "org",
    "description",
    "location",
    "designation",
    "type"
  ]
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

  font-weight: bolder;
}

.timeline-content span {
  color: #a4a4a4;
}

.timeline-content p {
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

.description {
  line-height: 1.5em;
  color: var(--font-color);
}
.date {
  color: var(--font-color);
}
.loc-org {
  line-height: 1.2em;
}
/** Tablet and Ipad */
@media (min-width: 768px) and (max-width: 1024px) {
  .description {
    font-size: 2.5rem;
  }
  
  .loc-org {
    line-height: 2rem;
  }
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