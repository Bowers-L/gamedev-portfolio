<template>
  <div class = "container-centered">

    <div style="margin-bottom: 30px">
        <h1 style="text-align: center">Greetings!</h1> 
        <h2 style="text-align: center">My name is <b>Logan Bowers</b>.</h2>
        <h2 style="text-align: center">I am a Game Developer, Graphics Programmer, and Software Engineer.</h2>

        <h3 style = "text-align: center">
          I have touched nearly every technical aspect of game programming, including:</h3>
         <h3 style="text-align: center"><b>Graphics, Gameplay, Design Tools, Engines, Animation, Tech Art, AI, and Audio.</b></h3>
        <br>
        <h1 style="text-align: center">Featured Projects</h1>
    </div>

    <div class="project-list">
        <ProjectsList v-bind:projects="projects"/>
    </div>

    <div>
        <h2 style="text-align: center"><b>Check out my full list of <router-link to="/game-projects">Games</router-link> and <router-link to="/game-jams">Game Jams</router-link>, <br>
        as well as <router-link to="/engineless">Game Engine and Graphics Projects</router-link></b></h2>
    </div>

    <h3 style="text-align: center"><b>"Let your ambition be unmatched, and your passion relentless, <br>
    but let your actions be calm and precise."</b></h3>

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