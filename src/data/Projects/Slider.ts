import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("slider", "Featured Project: Slider", "img/projects/Slider-icon.PNG", 
`
<div class="paragraph">
 <strong>Slider</strong> is a game originally developed by <a href="https://randomerz.itch.io/" target="_blank">Daniel Carr</a> as part of the 2021 GMTK Game Jam in the summer. It placed 16th out of thousands of entries in the jam. The original game featured a 2D top-down game world in which the player
 collected special tiles representing different parts of the world and could manipulate them using a special UI that mimicked a 3x3 eight puzzle layout.<br>
</div>

<div class = "paragraph">
Project Info:

<ul>
<li>Genre: 2D Top Down Puzzle Exploration</li>
<li>Engine: Unity/C#</li>
<li>Team Size: 30+</li>
<li>Contribution: Gameplay Programmer, AI, Shader Engineer, Design</li>
<li>Timeframe: Spring 2022 to Present</li>
</ul>
</div>

<div class="notice">
Slider is an ongoing game in development with a planned Steam release this summer! <a href=https://store.steampowered.com/app/1916890/Slider/ target="_blank">Steam Link</a><br>
Play the game jam version <a href=https://randomerz.itch.io/slider-jam target="_blank">here</a><br>

</div>

<div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/8ePF3Jkcga4" frameborder="0" allowfullscreen></iframe>
</div>

<div class="paragraph">
    The game was pitched to the Georgia Tech VGDev club in January 2022, which is when I joined the development team as a programmer. The current project aims to release a fun exploration game on steam with 9 polished and playable areas, equating to about 5+ hours of content.<br><br>

    I was responsible for the development of multiple systems and tools in the game, including a move queue system with interrupts, 
    dynamic lighting, custom pathfinding in a 2d Tilemap, AI behaviour and steering using Behaviour Trees, NPC Dialogue system with events, 
    and an electricity system that used a dynamic graph structure. In addition to all of these systems, I helped refactor and debug a growing codebase 
    and worked with a group of excellent game designers, programmers, and artists to deliver a polished and thoughtful gameplay experience.
</ddiv>

<div class="paragraph">
When I first joined the team, there was already an established codebase with about 50 scripts at the time, so I had to get used some of the systems already in the game. I find that
one of the best ways to get used to a new codebase is by interacting with the code itself. Change one or two lines of code and see how that affects the whole system. Another way is by fixing
simple bugs, as well as refactoring parts of the code to make it more readable, maintainable, and extendable.<br><br>

One of the key systems that I worked on extensively at first was the UI for the slider puzzle (aka the "Artifact UI"). In the original jam game, moves had to be made on the UI one at a time. However,
for the full game, we wanted interacting with the UI to be more seamless and intuitive. There was already a queueing system in its infancy at the time, however, the system was quite buggy in that tiles could be made
to move diagonally, pass through other tiles, etc. (among other issues). Additionally, since different areas had different mechanics for how tiles behaved (for example, one area had tiles rotating in 2x2s, and another
had them sliding around 2048 style) the system had to be extendible to accomodate these mechanics. By the time I finished overhauling these issues, I had a pretty solid understanding of the core systems the game
depended on.<br><br>
</div>

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/dt6ld4" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

<div class="paragraph">

    Moving forward I started to specialize in developing systems for specific areas. One of these systems was the power system seen in the Factory area. I needed to model the flow of electricity
    between various objects such as power sources, wires, doors, buttons, etc. In order to do this, I created an ElectricalNode base that stores neighbor references to adjancent nodes, creating a graph structure
    in which the neighbors of each node represent edges in a graph. Each node has a state in that it can be either powered or not. I wanted to create an effiecent system under which 
    any change (such as a button being pressed, lever being switched etc.) was immediately relayed to the other nodes. In order to accomplish this, I devised an algorithm where each
    node would keep track of a ref counter representing the number of possible paths to a power source, as well as list of previous node pointers that, when followed, will create a path
    from the node to each power source. It was especially tricky to handle cases in which nodes or edges could be added on a whim (see the case below in which a conductive
    object connects various points on a wire), but by keeping track of each path and updating the internal state correctly, these cases were relatively simple to handle
    and could be debugged efficiently. 

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="vid/FactoryConductionPuzzle.mp4" frameborder="0" width="50%" height="50%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

Overall, I gained a ton of experience working on this project that I've barely even scratched the surface of, and it has been a remarkable journey to work with such a talented team of developers. 
</div>


`, "#23bd69")