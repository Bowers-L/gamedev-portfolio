<template>
  <div>
    
    <h1>Resume</h1>

    <div style="margin-top:20px; margin-bottom:20px;">
      <h3><a class="download-link" href="d/LoganBowersResume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Click here to download my full resume as a PDF</a></h3>
      <div style="clear:both"></div>
    </div>

    <div class="row">

      <div class = "column">
        <div style="clear:both"></div>

  
        <h2>Summary</h2> 
        <h4><b>Logan Bowers</b></h4>
        <i>Game Developer motivated to create simple/communicable solutions to complex problems.</i>
        <ul>
        <li>loganmbowers@gmail.com</li>
        <li>(404) 384-1028 (mobile)</li>
        </ul>



        <h2>Education</h2>

        <h3>Georgia Institute of Technology</h3>
        <h4>Fall 2019-Present</h4>
        <ul>
          <li>BSMS Program for Computer Science</li>
          <li>Pursuing B.S. in Computer Science Fall 2022 Graduation</li>
          <li>Media and Modeling/Simulation Threads</li>
          <li>Pursuing M.S. in Computer Science (Graphics) Fall 2023 Graduation</li>
          <li>4.0 current GPA</li>
          <li>VGDev Member/Lead</li>
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

        </div>

        <div class="skill-set">
          <h3>Other</h3>
          <SkillRate name="FL Studio" :rate="4" />
          <SkillRate name="Aseprite" :rate="4" />
          <SkillRate name="Photoshop" :rate="3" />
          <SkillRate name="Blender" :rate="2" />
        </div>
        <div style="clear:both" />

      </div> <!-- column --> 

      <div class = "column">

        <h2>Work Experience and Affiliations</h2>

        <h3>Scientific Software Developer Intern</h3>
        <h4>Stellar Science Ltd Co</h4>
        <h4>Summer 2021</h4>
        <br>
        <div>
          I worked at Stellar Science throughout the Summer of 2021 on project IDASS. 
          During the internship, I maintained and debugged various image processing and UI functionalities such as pose estimation, image filtering, and temperature estimation.
          I also worked on an image batch processor and its corresponding UI. Overall, I gained a lot of experience working in a large scale C++ codebase and got to pair-program with experts in the fields of Computer Science, Math, and Physics.
        </div>

        <div class="tech-stack">C++, graphics, git, Agile, ...</div>

        <h3>Project Lead</h3>
        <h4>VGDev</h4>
        <h4>Fall 2019-Present, Led game during Fall 2021</h4>
        <br>
        <div>
          I have been in VGDev since Fall 2019. 
          VGDev is a student-led organization at Georgia Tech that provides resources and opportunities for students to work on games and supports students who choose to pursue game development as a career.
          During Fall 2021, I served as project lead for the game Beam, which is a 3D puzzle game. I was responsible for managing tasks across the 
          team and organizing weekly meetings, as well as providing weekly status updates to the larger organization.
        </div>
          
        <h2>Besides all that...</h2>
        <div>
          <h3>I ❤️ Gaming</h3>
          <div>This is an obvious one, but sometimes you just have to enjoy the fruits of others who partake in your craft in order to achieve a higher appretiation for it.
          I've played games from a wide variety of genres from AAA to indie titles. Some of my favorite games include Overwatch, Dark Souls (all of them), Undertale, Hollow Knight, Celeste, Ori, Guitar Hero, Various Puzzle Games (Portal, The Talos Principle, The Witness), and of course, Tetris.
          
          </div>

          <h3>I 🧡 Music</h3>
          <div>
            I played Piano through all of grade school (that's 12 years!), as well as Trumpet for 8 years. I really like playing classical pieces on the Piano, as well as improvising my own melodies. I also did marching band and concert band throughout High School as a trumpet player, and was a part of the 
            Georgia Tech Marching Band during Fall 2019, which was an exhilerating experience.<br><br>
            
            I also enjoy composing music, especially creating epic piano covers of game or film music. More recently, I've been working in FL Studio to remake parts of the Undertale soundtrack as well as write music for VGDev games.<br>
          </div>

          <h3>I 💛 Sports</h3>
          <div>While I am not terribly dilligent about following sports teams, I do enjoy watching/playing some sports from time to time. I especially enjoy Tennis, Ping-Pong, Racquetball, and any other sport that involves bouncing balls back and forth.</div>

          <h3>I 💚 People</h3>
          <div>I like seeing where other people come from, where they are in their life, and how I can contribute in a meaningful way to their journey. We are all the main characters of our own stories, but sometimes letting yourself
          be the side character can be both humbling and rewarding.
          </div>
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