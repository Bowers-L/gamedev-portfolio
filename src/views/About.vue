<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="column">
      <div>
        My name is <strong>Logan Bowers</strong>, a pupil of the programming arts and game developer.
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
        but it was definitely worth it (I think). 
      </div>
    </div>

    <div class="column">
      <div class="photo">
        <img class = "portrait" src="img/PicturesOfLogan/Logan_Avalon.jpg" alt="Avatar of Logan" width="300px"/> 
      </div>
    </div>
    
    <!--
    <div class="gallery">
        <div class="gallery-item item-3x4">
            <img class="thumb placeholder" src="https://codeconvey.com/Tutorials/global-images/image-1.jpg" data-src="https://codeconvey.com/Tutorials/global-images/image-1.jpg" data-image="https://codeconvey.com/Tutorials/global-images/image-1.jpg" data-title="Photo by Daniel J. Schwarz (1)" alt="Photo by Daniel J. Schwarz" width="300px">
            <div class="caption"><span>Caption 1</span></div>
        </div>
 
        <div class="gallery-item item-4x3">
            <img class="thumb placeholder" src="https://codeconvey.com/Tutorials/global-images/image-2.jpg" data-src="https://codeconvey.com/Tutorials/global-images/image-2.jpg" data-image="https://codeconvey.com/Tutorials/global-images/image-2.jpg" data-title="Photo by Daniel J. Schwarz (2)" alt="Photo by Daniel J. Schwarz" width="300px">
            <div class="caption"><span>Caption 2</span></div>
        </div>
 
        <div class="gallery-item item-3x4">
            <img class="thumb placeholder" src="https://codeconvey.com/Tutorials/global-images/image-3.jpg" data-src="https://codeconvey.com/Tutorials/global-images/image-3.jpg" data-image="https://codeconvey.com/Tutorials/global-images/image-3.jpg" data-title="Photo by Daniel J. Schwarz (3)" alt="Photo by Daniel J. Schwarz" width="300px">
            <div class="caption"><span>Caption 3</span></div>
        </div>
 
        <div class="gallery-item item-4x3">
            <img class="thumb placeholder" src="https://codeconvey.com/Tutorials/global-images/image-4.jpg" data-src="https://codeconvey.com/Tutorials/global-images/image-4.jpg" data-image="https://codeconvey.com/Tutorials/global-images/image-4.jpg" data-title="Photo by Daniel J. Schwarz (4)" alt="Photo by Daniel J. Schwarz" width="300px">
            <div class="caption"><span>Caption 4</span></div>
        </div>
    </div>
    -->

    <div style="clear:both"></div>
  </div>
</template>

<!--<script src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>-->
<!--<script src = '../js/gallery.js'></script>-->



<style scoped>
.paragraph {
  display: inline-block;
  max-width: 700px;
  margin-bottom: 20px;
}

.column {
  float: left;
  width: 50%;
}

.photos {
  display: inline-block;
  margin-left: 20px;
  vertical-align: top;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

.portrait {
  border-radius: 50%;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  flex: 1 1 auto;
  flex-basis: 175px;
  margin: .5em;
  max-width: 530px;
  max-height: 300px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.gallery-item::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.5 13.75C4.5 8.64137 8.64137 4.5 13.75 4.5C18.8586 4.5 23 8.64137 23 13.75C23 18.8586 18.8586 23 13.75 23C8.64137 23 4.5 18.8586 4.5 13.75ZM13.75 0C6.15609 0 0 6.15609 0 13.75C0 21.3439 6.15609 27.5 13.75 27.5C16.3774 27.5 18.8327 26.7631 20.9205 25.4846L30.4906 35.0547C31.7509 36.3151 33.7944 36.3151 35.0547 35.0547C36.3151 33.7944 36.3151 31.7509 35.0547 30.4906L25.4846 20.9205C26.7631 18.8327 27.5 16.3774 27.5 13.75C27.5 6.15609 21.3439 0 13.75 0Z' fill='white'/%3E%3C/svg%3E");
  background-position: center;
  background-size: 1.85rem;
  background-repeat: no-repeat;
  transition: opacity 250ms;
  z-index: 10;
}
.gallery-item .caption {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em 0;
  line-height: 1em;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateY(4em);
  transition: transform 250ms;
  z-index: 20;
}
.gallery-item .caption span {
  display: inline-block;
  max-width: calc(100% - 2em);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

gallery-item:hover .thumb {
  transform: scale(1.05);
}
@media (hover: hover) {
  .gallery-item:hover::after {
    opacity: 1;
  }
  .gallery-item:hover .caption {
    transform: translateY(0);
  }
}
.gallery-item .thumb {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: unset;
  text-align: center;
  background-color: #333;
  transition: filter 500ms, transform 500ms;
}
.ie-fix .gallery-item .thumb {
  width: auto;
}

.lightbox {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
}

.lightbox-wrapper {
  display: none;
  background-color: #2e2e35;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.lightbox .lightbox-slides-wrapper {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}

/* Header styles */

.lightbox .lightbox-header {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1em;
  font-weight: 600;
  text-align: center;
}
.lightbox .lightbox-header > * {
  opacity: .75;
}

/* lightbox-close */

.lightbox .lightbox-close {
  position: relative;
  height: 1.85rem;
  width: 1.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
}
.lightbox .lightbox-close::before, .lightbox .lightbox-close::after {
  position: absolute;
  content: "";
  height: 4px;
  width: 80%;
  background-color: #fff;
}
.lightbox .lightbox-close::before {
  transform: rotate(-45deg);
}
.lightbox .lightbox-close::after {
  transform: rotate(45deg);
}
.lightbox .lightbox-close:hover {
  opacity: 1;
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
