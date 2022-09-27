import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("one-way-out", "One Way Out", "img/projects/OneWayOut-icon.PNG", `
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

<div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/CL9VL75dLRQ" frameborder="0" allowfullscreen></iframe>
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
`, "#e80fb7")