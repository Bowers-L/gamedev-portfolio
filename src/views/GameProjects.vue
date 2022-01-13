<template>
  <div>

    <div style="margin-bottom: 30px;">
        <h1>Hello!</h1> My name is <strong>Logan Bowers</strong>, a pupil of the programming arts and game developer. While I have engaged
        in many fields of game development, my primary interests and experience are in gameplay design, level design, and gameplay systems programming.
        You can check out the games I've worked on below!
    </div>

    <ProjectsList v-bind:projects="projects" />
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
