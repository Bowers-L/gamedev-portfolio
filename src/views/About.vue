<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        My name is <strong>Logan Bowers</strong>, a pupil of the programming arts and an aspiring game developer.
        You can check out the games I've worked on <router-link to="/game-projects">here</router-link>.
      </div>



      <div>
        <br>
        My game development journey began my sophomore year of high school. I was taking Intro to Digital Technology, which was the required starting
        course for the Computer Science pathway. This was where I first learned programming through web development. We were creating portfolio websites
        (much like this one) using raw HTML/CSS. For whatever reason, we didn't really learn to code in the class, so I decided to learn Javascript by making
        a Brick Breaker game. While I have hardly touched Javascript or Web Development since, it was a good introduction to the programming logic and constructs that I 
        would reinforce in the years that folowed.
      </div>

      <div>
        <br>
        I wanted to make something more substantial, however, so I learned Python over the Winter break and experimented a bit with the Pygame module. I created a few more small projects during this time, such as 
        a Snake game and some animations. With my newfound knowledge of Python, I returned to the class the following Spring and was intrigued to find that we would spend the entire semester working in 
        MIT's Scratch learning to "code" (but, ya know, without the code). It's actually pretty interesting the things you can create given a limited toolset. By the end of it all, I had created a clone 
        of Microsoft style Solitare using Drag and Drop blocks (of my own volition, of course), and it was probably the most painful game development project I've worked on to date. 
      </div>

      <div>
        <br>
        Throughout the rest of High School, I would essentially use game development as an excuse to learn programming. Although I would occasionally mess around with game engines, I didn't 
        really learn Unity until it became necessary for later projects in college. During summers, I worked on a graphics engine using OpenGL. Although I spent a lot of this time following tutorials online,
        I was fascinated to discover the frameworks that modern game engines are built off of (and I also picked up on the basics of C++ during this time). 
      </div>

      <div>
        <br>
        During college, my perspective on game development transformed considerably as I found a network of like-minded people in the form of the Georgia Tech
        College of Computing VGDev club. I got to meet so many new people with impressive skillsets in areas of game development that I was less familiar with at the time, such as
        3D-modelling, texturing, 2D/3D art, level design, sound design, production, and more. During my time in Fall 2021 leading my own game, Beam, I got to dive into some of these
        fields myself (particularly level design). Unfortunately, the need to manage a team through all aspects of the game meant that I couldn't dedicate all of my time to programming,
        but it was worth it (probably, hopefully). 
      </div>
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