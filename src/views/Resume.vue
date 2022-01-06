<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Logan Bowers</strong>, a former Delta Force operative with lots of experience, lots of training and huge muscles.
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a monk job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img id = "resume-photo" src="img/PicturesOfLogan/Logan_Avalon.jpg" alt="Photo of Logan"/>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="Java" :rate="5" />
        <SkillRate name="Python" :rate="4" />
        <SkillRate name="GLSL" :rate="3" />
        <SkillRate name="HLSL" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Engines</h3>
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Java Processing" :rate="4" />
        <SkillRate name="Unreal Engine 4" :rate="3" />
        <SkillRate name="Game Maker" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Tools</h3>
        <SkillRate name="Git (CL)" :rate="5" />
        <SkillRate name="Trello/Codecks" :rate="4" />
        <SkillRate name="Open GL" :rate="4" />
        <SkillRate name="Blender" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Georgia Institute of Technology (Fall 2019-Present)</h3>
      <h4>Pursuing B.S. in Computer Science (Threads: Media and Modeling/Simulation) with a minor in Robotics. 
      May 2023 Graduation (4.0 current GPA).
      </h4>

      <h2>Languages</h2>

      <h3>American</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

      <h3>That's it</h3>
      <div>Who needs another language when you speak American?</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

#resume-photo {
  border-radius: 50%;
  width: 350px;
}


@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>