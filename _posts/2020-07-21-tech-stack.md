---
layout: post
title: Tech Stack
date: '2020-07-21'
style: tech-stack
---

## Introduction

Historically, I haven't considered the idea of deciding on a tech stack.
This is mostly due to the fact that I've worked in a lot of different environments that I didn't get the time to settle in with.

Nowadays, I have a better idea on how I want to work.
I've come to love XP, and I want to be able to deliver value quickly, to appreciating customers, without compromising on internal software quality.

The article will cover the attributes that I value in my tech stacks, and a list of stacks that I prefer for different kinds of products.
I'm a web developer, first and foremost, so I will not talk about stacks for embedded real-time systems or desktop applications e.g.

## Metrics

I will go through the 4 key metrics from the [Accelerate](https://itrevolution.com/book/accelerate/) book
and bring up tech stack attributes that that I believe can improve them.

### Deployment Frequency

There is little point in being able deploy frequently if the tech stack makes it hard or impossible to do.
Deployment has to be automated to achieve this.

You should be able to structure the code so that it's easy to change business logic without changing the infrastructure. And you should be able to satisfy the stakeholder that requested the change without having to change
at lot of code that might affect other stakeholders.
You should be able to structure code with low coupling and high cohesion, so that the area to change is easy to find.

This means that frameworks that enforce a certain file structure and causes unnecessary coupling between business logic and infrastructure are undesirable.
Some frameworks provide conventions that can be overridden. This can mean that long-lasting projects becomes less convenient to work with (because scaffolding tools don't understand your conventions) and the conventions are less familiar to people who are experienced with the framework. Both short-term and long-term project convenience is considered, but long-term convenience is preferred as it provide a more stable development cycle.

The programming language should provide suitable abstractions that can be used to remove much of the semantic code duplication.
Such languages usually give inspiration to libraries that cover some of the utility functionality that you would've had to write yourself otherwise.

### Lead Time for Change

The most important thing to improve this metric is to have fully automated regression tests.
The time it takes to write regression tests more than make up for it in how fast and reliable they are execute compared to manual tests that has to run for every deployment.

End-to-end tests are a must, but each test can take a long time to execute, and some scenarios are hard to replicate.
A test pyramid should be used, with many more unit tests than end-to-end tests, with integration tests being somewhere in the middle.
A tech stack should allow for unit and integration tests, and be flexible enough that you can test on many different levels of the pyramid based on the needs of the product.

### Mean-Time to Recovery

The Tech stack should allow for detection of problems quickly and allow you to rollback a deployment.

### Change-Failure Rate

It should be hard to introduce a regression, which should've been caught by the tests.
It's important that business requirements can be easily translated to tests with minimum risk conversion errors.

## Familiarity vs Freedom

Certain Tech Stacks have very strong conventions and language limitations.

This is useful when it comes to hiring people, since it gives rise to more shared knowledge that doesn't have to be learned by people that are already familiar with the tech stack.
It also makes it hard for rogue employees to write complex code that becomes more difficult to maintain once that person leaves the organization.

The degree of familiarity vs freedom in a tech stack can often be traced back to the programming language culture. The culture influences what libraries gets written, how big they become, the granularity of the options they offer, how many alternatives gets written, and how much competition there is among the alternatives.

I appreciate familiarity over freedom for the most part. A product should have the ability to grow and be refactored over time, which requires a degree of freedom. It's also important that familiarity doesn't gives rise to semantic duplication just to keep the amount of language features down. 

TODO: Talk about development environment

TODO: Talk about hype

TODO: Explain the stack matrix

TODO: Explain the kinds of products

TODO: Present the matrix

TODO: Explain the matrix

TODO: Summary

### 