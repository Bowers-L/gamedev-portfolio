import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("beam", "A project I led: Beam", "img/projects/Beam-logo.png", 
`
<div class="paragraph">
 <strong>Beam</strong> is a 3D first person puzzle game developed in Fall 2021 by the Georgia Tech VGDev club. I came up with the initial design and prototype, pitched the game to 
 the club, and was the project lead during development. 
</div>

<div class = "paragraph">
Project Info:

<ul>
<li>Genre: 3D First Person Puzzle</li>
<li>Engine: Unity/C#</li>
<li>Team Size: 6</li>
<li>Contribution: Project Lead, Level Designer, Programmer, VFX Artist</li>
<li>Timeframe: Fall 2021</li>
</ul>
</div>

<div class="notice">
Play the game <a href=https://l-cpp.itch.io/beam target="_blank">here!</a>
</div>

<div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/Mg_dVNZKB9U?autoplay=1" frameborder="0" allowfullscreen></iframe>
</div>

<div class="paragraph">
    The primary puzzle mechanics of Beam are, of course, the Beams. The grab beam allows the user to control an object within line of sight. However, the catch is that the 
    length of the beam must be constant while in use, meaning that the player can not contract or extend the beam. The swap beam then allows the user to swap places with an object.
    <br><br>
</div>

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="gifs/10_07_Beams.gif" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="gifs/10_07_Glass.gif" frameborder="0" width="50%" height="50%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="gifs/10_07_MovingPlatforms.gif" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div>
    I wanted to create an environment in which my team could come up with interesting level ideas and quickly iterate on the designs to create challenging, but fair levels. In order to 
    accomplish this, I outlined a suggested pipeline for creating levels:
    <ul>
    <li><b>Concept Design</b>- Come up with the general mechanics/concept that the level will test.</li>
    <li><b>Mockup</b> - Draw a top-down view of what the level with look like, including the solution.</li>
    <li><b>Greybox</b> - Block out the important level geometry in Unity (we used ProBuilder for this)</li>
    <li><b>Playtest</b> - Make sure the level is beatable. Look for alternative solutions.</li>
    <li><b>Analyze/Modify</b> - Make changes to the level based on feedback from playtesting. Do more playtesting/modifications if necessary.</li>
    <li><b>Polish</b> - Clean up the geometry. Add textures, lighting, narration, etc.</li>
    </ul>
    Playtesting during development was essential for gauging how difficult the puzzles were and how balanced the player felt compared to their environment. <br><br>

    One of the biggest challenges was creating puzzles that didn't softlock. In the end, we implemented a strategy used by other puzzle 
    games such as <a href=https://store.steampowered.com/app/257510/The_Talos_Principle><b>The Talos Principle</b></a> and <a href=https://store.steampowered.com/app/736260/Baba_Is_You><b>Baba is You</b></a>, which
    is to have a dedicated reset button to reset the level at any time.

    <br><br>

    Overall, I gained an intuitive understanding of what makes a game fun (specifically in the puzzle genre). It is important to create simple mechanics with a complex ceiling and to construct the environment in a way 
    that restricts player choice just enough to allow for creative problem solving. The biggest challenge for the team and myself was definitely making levels that are the right amount of difficult while still being fun to solve.
    <br><br>
    
    Nonetheless, it was a rewarding experience, and I definitely learned a thing or two about design that I can use to make even better games in the future. 

</div>


`, "#23bd69")