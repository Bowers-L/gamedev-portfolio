<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Logan Bowers</strong>, an aspiring game developer.
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">games</router-link>.</div>
    </div>

    <div class="photo">
      <img id = "avatar" src="img/PicturesOfLogan/Logan.jpg" alt="Avatar of Logan" width="300px"/> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

#avatar {
  border-radius: 50%;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>