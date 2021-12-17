---
layout: post
title: Interactive Water Shader with a Deformable Mesh
date: 2017-09-12 00:00:00 +0300
description: An interactive stylized fluid animation that uses a deformable mesh and shaders
img: ezgif-7-6909cf87b3ec.gif # Add image post (optional)
tags: # add tag
---
Checkout a playable demo!
Controls: Use the arrow keys or WASD keys to move the purple sphere around. You can also click on the water with the mouse cursor to deform it.
<p align="center">
  <div>
    <iframe id="waterDemo"
        width="1200"
        height="800"
        src="https://julia-melgare.github.io/interactive-water-demo">
    </iframe>
  </div>  
</p>

This application was developed for the Computer Animation discipline of the Msc course in Computer Science at PUCRS. It combines a deformable mesh that is able to interact with rigid bodies alongside a water shader with vertex displacement. 

For more details regarding the implementation and experiments executed, check out the [technical report](https://github.com/Julia-Melgare/Deformable-Water/blob/master/Report.pdf).

![example2](https://github.com/Julia-Melgare/Deformable-Water/raw/master/Gifs/light-obj.gif)![example2](https://github.com/Julia-Melgare/Deformable-Water/raw/master/Gifs/heavy-obj.gif)

The deformable mesh was implemented based on [Catlike Coding's tutorial](https://catlikecoding.com/unity/tutorials/mesh-deformation/) and the ripples were added by following [Minions Art's tutorial](https://www.patreon.com/posts/24192529).

Source code available on [GitHub](https://github.com/Julia-Melgare/Deformable-Water/).
