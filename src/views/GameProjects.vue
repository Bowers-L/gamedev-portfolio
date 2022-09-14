<template>
  <div>

    <div style="margin-bottom: 30px;">
        <h1>Greetings!</h1> 
        
        <h3>My name is <strong>Logan Bowers</strong>. I am a software engineer who makes games. I primarily specialize in gameplay and tools engineering, but also have experience 
        programming graphics, shaders, AI, and UI. I am really excited to show you my website, and I hope you enjoy your stay here!</h3><br>

        <h3>Feel free to check out the projects I've worked on below. I'll still be here when you get back.</h3>
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
