import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("gunne monke", "Agent Gunne", "img/projects/GunneMonke-icon.jpg", `
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
`, "#383838")