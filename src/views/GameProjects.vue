<template>
  <div class="container">

    <div style="margin-bottom: 30px;">
        <h2>This is a list of all the projects I have worked on, whether currently or previously</h2>
    </div>

    <div style="margin-left: 50px;">
      <ProjectsList v-bind:projects="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
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
