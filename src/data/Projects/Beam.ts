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
    <br>
    I wanted to create an environment in which my team could come up with interesting level ideas and quickly iterate on the designs to create challenging, but fair levels. In order to 
    accomplish this, I outlined a suggested pipeline for creating levels:
    <ul>
    <li>Concept Design- Come up with the general mechanics/concept that the level will test.</li>
    <li>Mockup - Draw a top-down view of what the level with look like, including the solution.</li>
    <li>Greybox - Block out the important level geometry in Unity (we used ProBuilder for this)</li>
    <li>Playtest - Make sure the level is beatable. Look for alternative solutions.</li>
    <li>Analyze/Modify - Make changes to the level based on feedback from playtesting. Do more playtesting/modifications if necessary.</li>
    <li>Polish - Clean up the geometry. Add textures, lighting, narration, etc.</li>
    </ul>
    Playtesting during development was essential for gauging how difficult the puzzles were and how balanced the player felt compared to their environment. 
    If the player's abilities were too powerful, then it would be hard to come up with intriguing puzzles without them feeling forced. 
    For example, originally, objects would retain their momentum when the beam was released, however this became too powerful, so the momentum needed to be capped in order
    to prevent players from throwing cubes across the map and immediately swapping to them. Another way to restrict the player's movement was to add special types of glass that prevented the player from using specific beam types.

    <br>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Beam/BeamGameplay1.png" alt="Gameplay of Beam"/>
        <img class="pc-screenshot" src="img/projects/Beam/BeamGameplay2.png" alt="Gameplay of Beam" />
    </div>
    Overall, I gained an intuitive understanding of what makes a game fun (specifically in the puzzle genre). It is important to create simple mechanics with a complex ceiling and to construct the environment in a way 
    that restricts player choice just enough to allow for creative problem solving. The biggest challenge for the team and myself was definitely making levels that are the right amount of difficult while still being fun to solve.
    Nonetheless, it was a rewarding experience, and I definitely learned a thing or two about design that I can use to make even better games in the future. 

</div>


`, "#23bd69")