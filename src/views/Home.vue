<template>
  <div class = "container-centered">

    <div style="margin-bottom: 30px">
        <h1 style="text-align: center">Greetings!</h1> 
        
        <h3 style="text-align: center">My name is <b>Logan Bowers</b>. I am a software engineer who makes games.</h3><br>

        <h1 style="text-align: center">Featured Projects</h1>
    </div>

    <div class="project-list">
        <ProjectsList v-bind:projects="projects"/>
    </div>

    <div>
        <h2 style="text-align: center"><b>Check out my full list of <router-link to="/game-projects">Projects</router-link></b></h2>
    </div>

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
      padding-top: 40px;
      padding-left: 150px;
      padding-right: 150px;
      padding-bottom: 40px;
    }
</style>