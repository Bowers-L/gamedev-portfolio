import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("beam", "Beam", "img/projects/project-1-icon.png", 
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
    Download my game <a href=https://drive.google.com/drive/folders/1fqnLaA5cIK2XJ06ff5WT-_P3rH9fmU5q target="_blank">here!</a>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Mg_dVNZKB9U" frameborder="0" allowfullscreen></iframe>
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
        Overall, I gained an intuitive understanding of what makes a game fun (specifically in the puzzle genre). It is important to create simple mechanics with a complex ceiling and to construct the environment in a way 
        that restricts player choice just enough to allow for creative problem solving. The biggest challenge for the team and myself was definitely making levels that are the right amount of difficult while still being fun to solve.
        Nonetheless, it was a rewarding experience, and I definitely learned a thing or two about design that I can use to make even better games in the future. 

    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Beam/BeamGameplay1.png" alt="Gameplay of Beam"/>
        <img class="pc-screenshot" src="img/projects/Beam/BeamGameplay2.png" alt="Gameplay of Beam" />
    </div>
    `, "#23bd69", true),
    new ProjectData("beatdown", "BeatDown", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>BeatDown</strong> is a 2D rhythm game created in Spring 2021 as part of the VGDev Club at Georgia Tech. It has a unique game mechanic in that you are able to move
        a player shape along a stage grid each time you hit the beat. The game features a charge mechanic that allows you to crush opponents, as well as powerups and ultimates. 
    </div>

    <div class = "paragraph">
    Project Info:

    <ul>
    <li>Genre: 2D Rhythm/Top Down</li>
    <li>Engine: Unity/C#</li>
    <li>Team Size: 13</li>
    <li>Contribution: Programmer, Level Design</li>
    <li>Timeframe: Spring 2021</li>
    </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/8H40PtNLm68" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        My primary contribution to BeatDown was the design/implementation of the ultimate system. I wanted to design the system such that it incentivizes optimal gameplay while 
        feeling balanced. The player gains an amount of ultimate charge by moving in conjunction with the beat, however, the player can also gain bonus charge by maintaining note streaks
        and by killing opposing players. The player is also awarded more charge for "moving" rather than "charging". This incentivizes the player to move around the map more rather than waiting in
        one corner. By giving each individual shape a different ultimate, the player is awarded a variety in playstyle based on their character choice. For example, the circle is incentivized to follow
        other players closely since it's ultimate decimates players in its immediate vicinity, whereas the square wants to use powerups to limit other players' space and snipe them from farther away.
        <br>
        In terms of implementation, I took advantage of Unity's Scriptable Objects to easily tune values for balance purposes. I also used object oriented design to create separate coroutines for each ultimate
        while providing an interface to the main player scripts. 
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/BeatDown/BeatDownGameplay1.webp" alt="BeatDown Gameplay" />
    <img class="pc-screenshot" src="img/projects/BeatDown/BeatDownGameplay2.webp" alt="BeatDown Gameplay" />
    </div>
    `, "#5a78af"),
    new ProjectData("gunne monke", "Agent Gunne", "img/projects/project-3-icon.jpg", `
    <div class="paragraph">
        <strong>Agent Gunne</strong> (or <strong>Gunne Monke</strong>) is a game I worked on as part of the Game Design class (CS 4455) at Georgia Tech. 
    </div>

    <div class = "paragraph">
    Project Info:

    <ul>
    <li>Genre: 2D Rhythm/Top Down</li>
    <li>Engine: Unity/C#</li>
    <li>Team Size: 13</li>
    <li>Contribution: Programmer, Level Design</li>
    <li>Timeframe: Spring 2021</li>
    </ul>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/sNdpHVezyng" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/AgentGunne/AgentGunneGameplay1.png" alt="Agent Gunne Gameplay" />
        <img class="pc-screenshot" src="img/projects/AgentGunne/AgentGunneGameplay2.png" alt="Agent Gunne Gameplay" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "One Way Out", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Doggy Disk", "img/projects/project-5-icon.webp", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Doggy Disk is available to play on <a href="https://abnormal202.itch.io/doggy-disk" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/DoggyDisk/doggydisk2.webp" alt="Doggy Disk Gameplay" />
        <img class="pc-screenshot" src="img/projects/DoggyDisk/doggydisk3.webp" alt="Doggy Disk Gameplay" />
    </div>`, "#e48246")
];