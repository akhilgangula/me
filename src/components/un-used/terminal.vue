<template>
  <div class="terminal-wrapper">
    <div class="terminal-header">
      <i class="far fa-times-circle fa-sm"></i>
      <span class="terminal-text">Terminal</span>
    </div>
    <div class="terminal-body">
      <div class="terminal-context">
        <div class="terminal-root">
          <div class="entry">
            agangula $ > cat histroy.txt
            <resume-displayer></resume-displayer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.far {
  margin-left: 10px;
  color: red;
  background: red;
  border-radius: 25px;
}

.far:hover {
  color: white;
}
.terminal-root {
  color: var(--bg-color);
  font-size: 17px;
}

pre {
  font-family: Arial, Helvetica, sans-serif;
}
.entry {
  overflow-y: scroll;
  position: relative;
}
.terminal-wrapper {
  border: 1px solid var(--font-color);
  height: 75%;
  width: 70%;
  position: absolute;
  top: 10%;
  margin-left: 15%;
  margin-right: 15%;
  background: var(--bg-color-secondary);
  border-radius: 15px 15px 15px 15px;
}
.terminal-header {
  border-bottom: 1px solid var(--font-color);
  background: var(--terminal);
  border-radius: 15px 15px 0 0;
}

.terminal-context {
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.terminal-body {
  height: 100%;
  width: 100%;
  overflow: scroll;
  position: absolute;
}
</style>

<script>
import ResumeDisplayer from "@/components/resumeDisplayer.vue";
export default {
  components: {
    ResumeDisplayer
  }
};
</script>
