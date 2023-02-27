<template>
  <div class="container">

    <div style="margin-bottom: 30px;">
        <h3>These are games or graphics projects that I have made (mostly individually) without using a game engine!</h3>
    </div>

    <div style="margin-left: 50px;">
      <ProjectsList v-bind:projects="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameJams from "@/data/EnginelessData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameJams,
    };
  },
});
</script>

<style scoped>
  .container {
      display: flexbox;
      justify-content: center;
      padding: 10px;
      background-color:rgba(0.5, 0.5, 0.5, 0.5);
  }
</style>