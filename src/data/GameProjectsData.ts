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
    Play the game <a href=https://l-cpp.itch.io/beam target="_blank">here!</a>
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

    <div class="notice">
    Play the game <a href=https://abnormal202.itch.io/beatdown target="_blank">here</a>
    </div>
    

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/BeatDown/BeatDownGameplay1.webp" alt="BeatDown Gameplay" />
    <img class="pc-screenshot" src="img/projects/BeatDown/BeatDownGameplay2.webp" alt="BeatDown Gameplay" />
    </div>
    `, "#5a78af"),
    new ProjectData("gunne monke", "Agent Gunne", "img/projects/project-3-icon.jpg", `
    <div class="paragraph">
        <strong>Agent Gunne</strong> (or <strong>Gunne Monke</strong>) is a game I worked on as part of the Game Design class (CS 4455) at Georgia Tech. 
        The game was designed and developed in the span of 6 weeks. I would consider this my first real experience creating a full 3D game with Unity, and it helped
        shape my experiences creating Unity games later on. 
    </div>

    <div class = "paragraph">
    Project Info:

    <ul>
    <li>Genre: 3D Combat Adventure/Souls-like</li>
    <li>Engine: Unity/C#</li>
    <li>Team Size: 5</li>
    <li>Contribution: Player Controller, Combat, Animations, Enemy AI</li>
    <li>Timeframe: Spring 2021</li>
    </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/sNdpHVezyng" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        During the development of this game, I designed and implemented the combat system, as well as rigging the player's animations 
        using state machines. I was heavily inspired by the Dark Souls series of games when designing the combat and 
        got to experience first hand the interconnectedness between animation and balanced gameplay. I spent time tweaking animation
        speeds/durations as well as hitbox sizes and active hitbox/hurtbox windows to achieve a better balance. I noticed early on that
        it was easy for the player to "tank" hits and get through all the combat by mashing buttons, so I also implemented a stamina
        system as well as a stagger system. The stagger system (known as "poise" in the Souls games) ensures that the player gets punished 
        with a stagger animation if they get hit too many times. 
        <br>
        The main mechanic of the game's boss, "Hugh Mann", pushes the player back and causes them to fall whenever they get hit. This was achieved by
        adding additional states to the player's state machine as well as adding a behaviour script that applies a force pointing away from the hitbox of the boss. 
    </div>

    <div class="notice">
    Source code available for download <a href=https://github.com/Bowers-L/BondMonke target="_blank">here!</a>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/AgentGunne/AgentGunneGameplay1.png" alt="Agent Gunne Gameplay" />
        <img class="pc-screenshot" src="img/projects/AgentGunne/AgentGunneGameplay2.png" alt="Agent Gunne Gameplay" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "One Way Out", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>One Way Out</strong> was developed entirely in C and runs on the GBA. The game was playtested and 
    demoed through the Virtual Boy Advance - M (VBAM) emulator.
    </div>
    
    <div class = "paragraph">
    Project Info:

    <ul>
    <li>Genre: 2D Escape Room/Metroid-like</li>
    <li>Engine: Custom C, GBA</li>
    <li>Team Size: Individual</li>
    <li>Contribution: Everything</li>
    <li>Timeframe: Spring 2020</li>
    </ul>
    </div>

    <div class="notice">
    Source code available for download <a href=https://github.com/Bowers-L/OneWayOut-GBA-Final-Project- target="_blank">here!</a>
    </div>

    <div class = "paragraph">
        Due to the limited hardware as well as the technology of the time, space is significantly
        limited on the GBA compared to modern systems. The GBA also does not have a dedicated OS, so memory management was
        a definite consideration. 
        <br>
        Part of the challenge in developing this game was fitting the map of the game world into the 
        limitations of the Video Memory (VRAM). The GBA only allows up to a 512x512 pixel background, which is split into 4 256x256 pixel screenblocks. In order
        to create the illusion of a map that is larger than 512x512, screenblocks need to be loaded into the VRAM periodically offscreen
        based on the position of the player's camera. Loading these screenblocks seamlessly requires a technique called DMA, which uses dedicated
        hardware to quickly copy one section of memory to another. This process is significantly faster than using coded loops since it offloads
        work from the CPU and uses fewer context switches.
        <br> 
        Another challenge in the GBA is sound. The GBA has two dedicated sound channels. In order to play a sound in one of the channels, the sound needs
        to be continuously sampled at a rate relative to the processor speed. This is achieved by using DMA to continuously feed samples of the sound into a 
        dedicated memory slot that the speaker can read at the rate of the processor. In order to ensure that this happens, a hardware timer is set to trigger an interrupt at intervals
        based on the sampling frequency, which then allows the DMA to feed the next sample to the specified channel. 
        <br>
        Overall, creating a metroid style game within the confines of the GBA required multiple programming solutions to get done. In hindsight, I recognized multiple
        areas in game design and level design that could be improved, such as the ending section. This gave me an appreciation for the flexibility that modern engines
        provide in allowing developers to focus on design decisions over implementation details. 
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Doggy Disk", "img/projects/project-5-icon.webp", `
    <div class="paragraph">
        <strong>Doggy Disk</strong> is a game that was developed as part of the Georgia Tech VGDev Summer Game Jam.
    </div>
    
    <ul>
    <li>Genre: 2D Tower Defense</li>
    <li>Engine: Unity/C#</li>
    <li>Team Size: 5</li>
    <li>Contribution: Tower Design and Programming</li>
    <li>Timeframe: Summer 2021</li>
    </ul>
    </div>

    <div class="paragraph">

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