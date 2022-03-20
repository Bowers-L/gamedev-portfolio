<template>
  <div>

    <div style="margin-bottom: 30px;">
        <h1>Greetings!</h1> My name is <strong>Logan Bowers</strong>, a pupil of the programming arts and game developer. While I have engaged
        in many fields of game development, my primary interests and experience are in gameplay/graphics programming and game design.

        You can check out the projects I've worked on below!
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!--
    <h2>Programming Philosophy</h2>
    My programming design philosophy is 3-fold: extensibility, maintainability, readability.<br>
    I strive to create extendible solutions by using design principles such as <a href=https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design>SOLID</a>
    in conjunction with my own experience and judgment. I actively seek out and employ new strategies whenever possible to simplify solutions.
    -->
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
