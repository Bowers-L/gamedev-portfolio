<template>
  <div class = "container-centered">

    <div style="margin-bottom: 30px">
        <h1 style="text-align: center">Greetings!</h1> 
        <h2 style="text-align: center">My name is <b>Logan Bowers</b>.</h2>
        <h2 style="text-align: center">I am a Software Engineer, Game Developer, and Graphics/Game Engine Programmer</h2>
    </div>

    <div>
      <h3 style="text-align: center">I've cultivated experience and passion in game development through 
      4 month game project development cycles centered around college semesters broken up into 3 week milestone sprints.
      </h3>

      <h3 style="text-align: center">
      Professionally, I tend to gravitate towards roles that require a deep understanding of complex systems or algorithms,
      as well as improving code architecture. Typically in game dev, these are graphics/core engine positions.
      </h3>
    </div>

    <div class="project-list">
        <h1 style="text-align: center">Featured Projects</h1>
        <ProjectsList v-bind:projects="projects"/>
    </div>

    <div>
        <h2 style="text-align: center"><b>Check out my full list of <router-link to="/game-projects">Games</router-link> and <router-link to="/game-jams">Game Jams</router-link>, <br>
        as well as <router-link to="/engineless">Game Engine and Graphics Projects</router-link></b></h2>
    </div>

    <h3 style="text-align: center"><b>"Let your ambition be unmatched, <br>
    but let your demeanor be calm and precise."</b></h3>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import homeProjectsData from "@/data/HomeProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: homeProjectsData,
    };
  },
});
</script>

<style>
    .container-centered {
        display: flexbox;
        justify-content: center;
        padding: 10px;
        background-color:rgba(0.5, 0.5, 0.5, 0.5);
    }

    .project-list {
      padding-top: 5%;
      padding-left: 15%;
      padding-right: 15%;
      padding-bottom: 5%;
    }
</style>