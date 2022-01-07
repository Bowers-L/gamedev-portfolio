<template>
  <div>
    
    <h1>Resume</h1>

    <div style="margin-top:20px; margin-bottom:20px;">
      <a class="download-link" href="d/LoganBowersResume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Click here to download my full resume as a PDF</a>
      <div style="clear:both"></div>
    </div>

    <div class="row">

      <div class = "column">
        <div style="clear:both"></div>

  
        <h2>Summary</h2> 
        <h4><b>Logan Bowers</b></h4>
        <i>Game developer with a flexible skillset and a passion for solving complex problems.</i>
        <ul>
        <li>loganmbowers@gmail.com</li>
        <li>(404) 384-1028 (mobile)</li>
        </ul>



        <h2>Education</h2>

        <h3>Georgia Institute of Technology</h3>
        <h4>Fall 2019-Present</h4>
        <ul>
          <li>Pursuing B.S. in Computer Science (Threads: Media and Modeling/Simulation)</li>
          <li>Minor in Robotics</li>
          <li>May 2023 Graduation</li>
          <li>4.0 current GPA</li>
        </ul>

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

      </div> <!-- column --> 

      <div class = "column">

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

      </div>  <!-- column -->

    </div> <!-- full content -->
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

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
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