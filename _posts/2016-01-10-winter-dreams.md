---
layout: post
title: Winter Dreams
date: 2016-01-10
style: winter-dreams
---

<div class="title-images">
    <img src="/assets/winter-dreams.jpg?v={{site.time | date: '%s'}}" title="Title screen of the game - Winter Dreams" alt="A natively dressed women stares into the distance. The dark landscape is covered in snow and ice.  " />
</div>

### Project Summary

<div class="project-summary">
    <div class="project-summary-language">Language: C++</div>
    <div class="project-summary-period">Year: 2013</div>
    <div class="project-summary-group">Institution: HiS</div>
</div>

### Introduction

Winter Dreams is a game about a winter princess that gets trapped in her dreams, and has to escape by solving puzzles.
The game uses an isomorphic camera, and includes features such as
voiced dialogue with subtitles, cutscenes, shader lighting, dynamic footprints and Ukontrøll support.
It supports dynamic loading of levels, settings and entity type properties without recompilation.

A demo of the game was released in April 2013, and the source code for the demo can be found [here](https://github.com/johannes-qvarford/Winter-Dreams).
A trailer for the demo was also released [here](https://www.youtube.com/watch?v=A5969PjI02I&feature=youtu.be).

This was my first big collaborative project at the University of Skövde, and also my first major role as a lead programmer.
It was my responsibility to organize the other programmers, communicate between us and the other leads, as well as programming a large part of the game.

### As a Programmer

I was in charge of the level loading system, which was eventually expanded for loading settings and entity type properties.
We used Tiled to design levels, because it was the first best editor we could find that supported isomorphic 2D levels.
Tiled levels could be exported to JSON, so my first task was to use a library to parse the JSON, create the entities and tiles,
and finally run the game.

The game had many different entity types, so in order to handle the complexity of parsing the levels,
I created the so called Entity Registration System (ERS). The ERS tied every entity type to a name, and
a function for converting a serialized entity to an in-memory entity. When a serialized entity was found, its name was used to
lookup the correct conversion function and create the entity. So called Entity Registrations were used to register the entity type
at startup. By declaring a global Entity Registration with a name and a function, the entity type was registered as soon as the game started.
It's debateable if using global variables like this was a good idea; it sped up compilation time, as there was no need for a big
registration function that grew every time a new entity type was added, but at the same time it made the control flow less intuitive.

Compilation took a very long time on our school computers, and changing a single entity property's default value could result in a triple digit compilation time in seconds.
To speed up development, entity property default values and general settings were moved out of the source files, and into configuration files that
were loaded when the game started. We still had to reload the game, which started to take longer and longer towards the end of the project,
so it might've been fitting to continuously check for changes in the configuration files, and reload them as necessary during runtime.

In order to make it easier for designers to control gameplay flow, I implemented the Trigger Activation System (TAV). The TAV
tied every entity to a state, active or not and allowed them to be react to state changes. Different entities got triggered in different ways
and behaved differently when they were activate or not, which was implemented by us programmers. However, how the entities reacted when they
got triggered could be decided by the designers. For instance, we could program a trigger area that got triggered when its area
collided with the player, and we could also program an entity whose only goal is play some dialogue when it was activated.
The designers could then create different areas that activated different pieces of dialogue when each area got triggered.

I handled some smaller tasks as well, like implementing lights. The levels were dark, but contained several light sources scattered
across the level, and one surrounding the player. The radius and brightness of the light surround the player increased as
the player healed themselves and decreased as they took damage. The effect was implemented by using a pixelation shader,
and darkening pixels based on their distances to the light sources.

### As a Lead

I had been programming in high school, so at this point I had much more programming experience than the others.
As such, I felt that I had to teach the team how best to structure the code, documentation and handle version control.
It was tough to be doing everything at once, but I felt that I was best suited for all of the responsibilities. Maybe in a bigger project
I would feel the need to delegate the responsibility to avoid getting stressed out, but for this project it worked fine.
I was also lucky to have a talented programmer by my side who helped me brainstorm ideas and implement some of the more
more advanced parts of the game.

I failed as a leader when it came to dealing with one of the other programmers. The other programmer had concentration issues and
would disregard agreed upon task assignments and coding standards, which among other things caused me and the rest of the programmers
to grow hostile towards him. I didn't want to deal with him, so I gave him a big task hoping that it would keep him preoccupied
and out of my hair for a long time. However, due to my lack of leadership, I didn't push him hard enough to perform the task,
and it was delayed several weeks. I shouldn't have let my personal issues with the programmer risk the completion of the project.

Another programmer who was difficult for me to deal with had a different problem. He wasn't very good or enthusiastic about programming
and even stated outright that he would be switching his major the next semester. I tried to give him some simple tasks to perform
but it usually resulted in me showing him how to do most of the work. I don't blame him for not wanting to program, but it put me
in a difficult spot in deciding how he could contribute to the project. I could've given him even simpler tasks to perform, but
these would have to be artificially created, not out of need for the project and still take time to think of.
This would've at least have given him something to show to the teachers so he wouldn't have failed the course.
I could've also shown him how to do his assigned tasks, but this would've kept me occupied while I had my own things to do.
I could also have given him no tasks to perform, but this would've certainly made him fail the course, and I didn't want him to feel useless.

In the end, I gave him tasks, and showed him how to do those that he thought were too hard.
I still don't know the best way to handle the situation, to slow down the project or risk hurting his feelings.
I should've maybe talked with him and the teachers to get more input for what they felt was best, and based my decision on that.
It's also very different to make this decision in a school project, as opposed to a corporate one.
In a corporate project he would probably have been let go for not contributing enough, but the point of the school project was not to 100% simulate a corporate project.

### Summary

While it wasn't always easy, we managed to crank out a good demo with interesting features.
I learned a lot about how to effectively work in a group and how to use a lot of programming libraries.
I liked being a programming lead a lot, and I really enjoyed planning the project and overseeing the programmers' work, making sure they finished their tasks on time. Still, I sometimes struggled as a leader, and this project taught me more than anything, not to do half-measures.
I shouldn't have given tasks to the unmotivated programmer for the sake of giving tasks,
I should have consulted with the teachers, to at best be given a solution, and at worst be given input.
I also shouldn't have given the troubling programmer a task and then not checked up on how he was doing.
I carried these lessons with me, to my next project: Lunch Lady Simulator.