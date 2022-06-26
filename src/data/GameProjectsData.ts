import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("slider", "Featured Project: Slider", "img/projects/Slider-icon.PNG", 
    `
    <div class="paragraph">
        (Note: This is an ongoing project, so the information here will likely get updated in the future)
    </div>
    <div class="paragraph">
     <strong>Slider</strong> is a game originally developed by <a href="https://randomerz.itch.io/" target="_blank">Daniel Carr</a> as part of the 2021 GMTK Game Jam in the summer. It is a 2D Top-Down take on the Puzzle genre. The original game featured a 3x3 <a href="http://www.aiai.ed.ac.uk/~gwickler/eightpuzzle-inf.html">eight puzzle</a> game world in which the player collected
     tiles that represented different parts of the world and could manipulate the world using a special UI that mimicked an eight puzzle layout. <br>
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
        I joined the development team at the start of 2022 as it was pitched to the Georgia Tech VGDev club. The goal is to create 8 additional areas of comparable length to the original game with a
    cohesive gameplay, visual, and story arc for each. I was primarily responsible for the creation of gameplay systems and puzzles in the "Caves" and "Factory" areas, which involved implementing custom lighting, AI, and graph algorithms, as well as maintaining a growing codebase.<br><br>

    When I first joined the team, there was already an established codebase with about 50 scripts at the time, so I had to get used some of the systems already in the game. I find that
    one of the best ways to get used to a new codebase is by interacting with the code itself. Change one or two lines of code and see how that affects the whole system. Another way is by fixing
    simple bugs, as well as refactoring parts of the code to achieve better quality.<br><br>
    
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

    Overall, I gained a ton of experience working on this project that I've barely even scratched the surface of, and it has been a remarkable journey to work with such a talented team of develoeprs. 
</div>


    `, "#23bd69", "first"),
    new ProjectData("beam", "A project I led: Beam", "img/projects/Beam-icon.PNG", 
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

        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/Beam/BeamGameplay1.png" alt="Gameplay of Beam"/>
            <img class="pc-screenshot" src="img/projects/Beam/BeamGameplay2.png" alt="Gameplay of Beam" />
        </div>
        Overall, I gained an intuitive understanding of what makes a game fun (specifically in the puzzle genre). It is important to create simple mechanics with a complex ceiling and to construct the environment in a way 
        that restricts player choice just enough to allow for creative problem solving. The biggest challenge for the team and myself was definitely making levels that are the right amount of difficult while still being fun to solve.
        Nonetheless, it was a rewarding experience, and I definitely learned a thing or two about design that I can use to make even better games in the future. 

    </div>


    `, "#23bd69", "second"),
    new ProjectData("beatdown", "BeatDown", "img/projects/Beatdown-icon.png", `
    <div class="paragraph">
        <strong>BeatDown</strong> is a 2D rhythm game led by <a href="https://www.drewbusch.com/">Drew Busch</a> and developed in Spring 2021 as part of the VGDev Club at Georgia Tech. It has a unique game mechanic in that you are able to move
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
    new ProjectData("gunne monke", "Agent Gunne", "img/projects/GunneMonke-icon.jpg", `
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
    new ProjectData("project-4", "One Way Out", "img/projects/OneWayOut-icon.PNG", `
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
    new ProjectData("project-5", "Doggy Disk", "img/projects/DoggyDisk-icon.webp", `
    <div class="paragraph">
        <strong>Doggy Disk</strong> was developed in 48 hours as part of the Georgia Tech VGDev Summer Game Jam with the theme "All Around You".
    </div>
    
    <ul>
    <li>Genre: 2D Tower Defense</li>
    <li>Engine: Unity/C#</li>
    <li>Team Size: 5</li>
    <li>Contribution: Tower Design, Programming, and Visual Effects</li>
    <li>Timeframe: Summer 2021</li>
    </ul>
    </div>

    <div class="paragraph">
        During the ideation process, our team decided that we wanted to create a variation on the Tower Defense genre.
        We noticed that in some tower defense games, the player is given significantly less to do while the enemies attack 
        the towers. While most modern tower defenses allow the player to purchase towers during the levels, the major decisions
        are usually made between levels. We decided to subvert this idea by making the towers rotate in 3 levels with a central disk. 
        <br>
        My major contribution to the game came in the form of the tower programming as well as the visual effects for the towers. While the two 
        dog towers were relatively straightforward, the lighthouse tower (a tower that slows down enemies within a disk radius), required some more effort.
        My implementation involved programming a particle system to create a ring around the tower that programmatically extends outward. The main challenge was
        in syncing the VFX with the programmed area of effect.
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