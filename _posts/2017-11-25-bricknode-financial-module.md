---
layout: post
date: 2017-11-25
title: Bricknode Financial Module
last_modified_at: 2020-08-29
style: bricknode-financial-module
---

<div class="title-images">
    <img src="/assets/bricknode.png" title="Bricknode logo" alt="Three v-shaped blocks of different colors loosely fitting together." />
</div>


<div class="project-summary">
    <div class="project-summary-language">Languages: C#, Typescript, T-SQL</div>
    <div class="project-summary-period">Years: 2016-2017</div>
    <div class="project-summary-group">Company: Solutions Skövde</div>
</div>


### Introduction

In the fall of 2016 we were approached by Bricknode to help them build a financial module for a customer of theirs.
Three developers from Solutions Skövde including me were tasked with building the frontend and backend of the module.
The module was partly an enhancement to Bricknode Financial System (BFS), and a frontend for office workers to manage financial assets, including a custom access control system.

### In the beginning

Before the project officially began, I wrote a blueprint for what technologies we would use and how code would be organized.
I did this to make sure that we didn't do things in widely different ways. Some choices turned out to be good, while others weren't.
It especially made things hard for one of the developers when it came to code organization because of some over-abstractions.
Since only one of the programmers wrote the frontend and the other wrote the backend, I definitely could've revised it earlier.
Towards the end, both of the programmers had come up with their own conventions that still adhered to most of the blueprint.
I was very excited to use som very new technology, but because of that we ran into problems that were hard to find solutions to on the internet.

### As a lead

During the project, I was tasked with managing the other programmers as a lead: delegating work, reviewing code and writing documentation.
I also communicated directly with our contact person at Bricknode so that I understood what had to be implemented.
It worked pretty smoothly, but what we found out during the course of the project was that my role as mediator was necessary at the time.
However, it would've been preferable if all developers could've worked on both the frontend and the backend and spoke directly to our contact person.
We also noticed that work on the backend was completed much faster than the frontend, so I sometimes had to jump in to fill in the gap.

### As a programmer

I developed a few things myself during the project. After 4 months our initial contract ended, and only I continued working on the project on our side because they couldn't afford all of us.
I implemented a few basic resource management pages, including one for managing a shareholder's orders.
I also designed a small system for abstracting CRUD controller classes on the backend to reduce boilerplate and simplify testing.
We used aspnet core on the backend and Angular on the frontend. I only had a little bit of experience with Angular beforehand, so this project really made me understand how to use it.

### Conclusion

The project continued after we stopped working on it, and I got the impression that they were satisfied with our work.
Aside from some blunders in the original blueprint, I still think I did a good job. They must've felt so too, since they wanted me to continue working.
This wasn't the first time I was a lead, but it put into perspective on how important it can be to organize the workload so that no one is left twiddling their thumbs.
It also taught me to be more flexible when it came to programming conventions, so that people don't feel as forced to follow rules they don't agree with.
I learned a lot about Angular, and by using a bleeding edge version of dotnet core, it made me more aware of how important it is to use tested technologies.
