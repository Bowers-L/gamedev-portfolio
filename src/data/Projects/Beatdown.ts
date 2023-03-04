import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("beatdown", "BeatDown", "img/projects/Beatdown-icon.png", `
<div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/8H40PtNLm68" frameborder="0" allowfullscreen></iframe>
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

<div class="notice">
Play the game <a href=https://abnormal202.itch.io/beatdown target="_blank">here</a>
</div>

<div class="paragraph">
    <strong>BeatDown</strong> is a 2D rhythm game led by <a href="https://www.drewbusch.com/">Drew Busch</a> and developed in Spring 2021 as part of the VGDev Club at Georgia Tech. It has a unique game mechanic in that you are able to move
    a player shape along a stage grid each time you hit the beat. The game features a charge mechanic that allows you to crush opponents, as well as powerups and ultimates. 
</div>

<div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/BeatDown/BeatDownGameplay1.webp" alt="BeatDown Gameplay" />
    <img class="pc-screenshot" src="img/projects/BeatDown/BeatDownGameplay2.webp" alt="BeatDown Gameplay" />
</div>

<div class="paragraph">
    My primary contribution to BeatDown was the design/implementation of the ultimate system. I wanted to design the system such that it incentivizes optimal gameplay while 
    feeling balanced. The player gains an amount of ultimate charge by moving in conjunction with the beat, however, the player can also gain bonus charge by maintaining note streaks
    and by killing opposing players. The player is also awarded more charge for "moving" rather than "charging". This incentivizes the player to move around the map more rather than waiting in
    one corner. By giving each individual shape a different ultimate, the player is awarded a variety in playstyle based on their character choice. For example, the circle is incentivized to follow
    other players closely since it's ultimate decimates players in its immediate vicinity, whereas the square wants to use powerups to limit other players' space and snipe them from farther away.
    <br><br>
    In terms of implementation, I took advantage of Unity's Scriptable Objects to easily tune values for balance purposes. I also used object oriented design to create separate coroutines for each ultimate
    while providing an interface to the main player scripts. 
</div>
`, "#5a78af")