<template>
  <div style="margin-bottom: 80px;">
    
    <h1>Something About Me</h1>
    <div class="column">

    <div>
      So you want to learn more about me? Well then, I hope I don't disappoint.
    </div><br>

    <div>
      I am a BSMS Computer Science student game-dev at Georgia Tech. I will graduate with a Bachelors in Computer Science in December 2022 and plan to graduate with a Masters in December 2023.
      In between classes, I am an active member of the VGDev (Video Game Development) club, where I lead and contribute to games, primarily as a programmer. I aim to employ best software engineering
      practices, while navigating the volatile, but exciting world of game development.
    </div><br>

    <div>
      I believe in growth through connection. I strive to learn something new from every person I meet and every experience I encounter. 
      I understand the delicate balance between deep, focused work and being open to new perspectives by being attentive and listening to other people. 
      It is this balance that shapes every action I take both in the professional world and outside of it. 
    </div><br>

    <div>
      As a software engineer and a game developer, I take the time to learn how to do things the right way, and have become a reliable asset on the teams I have worked on. 
      I value sensibility and simplicity, and strive to adopt techniques, styles, and practices that make it as easy as possible for people to work with me. 
      My programming style has 3 pillars: readability, extendibility, and maintainability, and I pull from methodologies such as “clean code”, SOLID, DRY, Object-Oriented Design Patterns, etc. in order to enhance this style. 
      By adopting this mindset, I observed an increase in team satisfaction, as well as the ability to maintain, debug, and add new features to large projects.
    </div><br>

    <div>
      While in college, I’ve worked with teams of people from various technical and non-technical backgrounds such as programmers, artists, designers, composers, and producers among others.
      During Fall 2021, I got to lead a team of developers to bring my own game to life, Beam. This was an exhillerating experience, as I got the chance to develop better project management skills alongside other team
      leads. The most recent and most ambitious project I’m working on right now is Slider, a game that is getting released in Fall 2022 on Steam! I became a primary contributor and leader of the programming effort on the team, and It was really exciting to see how far I’d come in just a few short years!
      I really enjoy learning from other people and seeing all the great things we can accomplish together.
    </div><br>



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
