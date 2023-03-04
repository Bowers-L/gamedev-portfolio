import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("blood-favor", "Blood Favor", "img/projects/BloodFavor-icon.PNG", 
`
<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="vid/Blood_Favor_Promo_video.mp4" width="100%" height="100%" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div class = "paragraph">
Project Info:

<ul>
<li>Genre: 3D First Person Shooter; Roguelike</li>
<li>Engine: Unity/C#</li>
<li>Team Size: 60+</li>
<li>Contribution: Gameplay Systems Sublead, Tools Programmer, Procedural Generation</li>
<li>Timeframe: Fall 2022</li>
</ul>
</div>

<div class="notice">
Play a Demo of the game <a href=https://drive.google.com/drive/u/0/folders/1LXZSTCk6FtoOHlNmT2b0CPPvX6QOnHRe>Here</a>
</div>

<div class="paragraph">
 <strong>Blood Favor</strong> was developed and led by <a href=https://www.drewbusch.com/>Drew Busch</a> as part of VGDev's Fall 2022 Lineup.
 I was the gameplay systems sublead ("Technical Lead") for the project and was responsible for major parts of the procedural level generator system that the game depended on.<br><br>
</div>

<div class = "paragraph">
I was responsible for implementating the Blood Favor Level Generator (BFLG, pronounced BiFfeL Gee), and the accompanying Blood Favor Level Editor for Level Flows (BFLELF, pronounced BiFfeL ELF).
<br><br>

In addition, I created a document <a href=https://docs.google.com/document/d/1iWgXdkIWWc7WgB21o7b0cbR-UYOIgJ0AObaCWrbMUKk><strong>Here</strong></a> for aiding designers in using the BFLELF tool effectively: <br><br>
</div>
<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="gifs/10_06_BFLELF.gif" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="gifs/10_06_BFLG.gif" frameborder="0" width="50%" height="50%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div class = "paragraph">
Since Blood Favor is a Roguelike, the level layout for the game is procedurally generated (rooms are hand crafted). The algorithm
for generating levels is inspired by <a href="https://www.boristhebrave.com/2019/07/28/dungeon-generation-in-enter-the-gungeon/">Enter the Gungeon</a>. 
<br><br>

Essentially, each level is designed as a skeleton graph structure. Rooms are laid out one by one by traversing the graph structure DFS style and optionally
injecting extra or secret rooms branching from the root path. One of the difficulties in this approach is the use of "composites" to handle loops.
A separate algorithm (which I also implemented) traverses the graph and cuts out each loop as a composite. Rooms are connected into composites, 
and then composites are connected together to form the whole level.
</div>

<!--
<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="img/projects/BloodFavor/7.png" frameborder="0" width="30%" height="30%" allowfullscreen style="width:60%;height:60%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>

<div class="paragraph center">
    <div style="width:100%;height:0px;position:relative;padding-bottom:40%;">
        <iframe src="img/projects/BloodFavor/4.png" frameborder="0" width="30%" height="30%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
</div>
-->

</div>

`
, "#23bd69")