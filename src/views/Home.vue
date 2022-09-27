<template>
  <div class = "container-centered">

    <div style="margin-bottom: 30px">
        <h1 style="text-align: center">Greetings!</h1> 
        
        <h3 style="text-align: center">My name is <strong>Logan Bowers</strong>. I am a software engineer who makes games.</h3><br>

        <h2 style="text-align: center">Feel free to check out the projects I've worked on below. I'll still be here when you get back.</h2>
    </div>

    <div>
        <ProjectsList v-bind:projects="projects"/>
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
    }
</style>