import ProjectData from '@/data/ProjectData.ts'

export default new ProjectData("doggy-disk", "Doggy Disk", "img/projects/DoggyDisk-icon.webp", `
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