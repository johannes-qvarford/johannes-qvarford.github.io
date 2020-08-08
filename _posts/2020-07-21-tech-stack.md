---
layout: post
title: Tech Stack
date: '2020-07-21'
style: tech-stack
test:
    test1: 'hello'

backendColumns:

stacks:
    static:
        backend:
            implementation:
                "Language": None
                "Database": None
                "Framework Libraries": None
                "Database Libraries": None
                "Api Libraries": None
                "Other Libraries": None
                "Build Tools": None
                "Conformance": None
            testing:
                "Test Runner": None     
                "Test Coverage": None
                "Tests as Documentation": None
                "Mocking": None
                "Integration Testing": None
        frontend:
            implementation:
                "Scripting Language": Javascript
                "Styling Language": SCSS
                "Markup Language": HTML
                "Framework Libraries": Jekyll
                "Api Libraries": None
                "State Management Libraries": None
                "Other Libraries": None
                "Build Tools": Jekyll
                "Scripting Conformance": None
                "Styling Conformance": None
            testing:
                "Test Runner": None
                "Test Coverage": None
                "Tests as Documentation": None
                "Mocking": None
                "Integration Testing": None
        infrastructure:
            "End2End Testing": None
            "Version Control System": Git
            "Version Control Platform": Github
            "Continuous Integration Platform": Github
            "Documentation Platform": Github Pages
            "Deployment Platform": Github Pages
    dynamic:
        backend:
            implementation:
                "Language": Javascript
                "Database": Postgres
                "Framework Libraries": Express
                "Database Libraries": node-postgres, node-pg-migrate
                "Api Libraries": OpenApi Generator
                "Other Libraries": None
                "Build Tools": yarn
                "Conformance": eslint(AirBnB)
            testing:
                "Test Runner": jest     
                "Test Coverage": jest
                "Tests as Documentation": None
                "Mocking": jest
                "Integration Testing": supertest
        frontend:
            implementation:
                "Scripting Language": Javascript
                "Styling Language": CSS
                "Markup Language": JSX
                "Framework Libraries": React
                "Api Libraries": Fetch
                "State Management Libraries": Redux Toolkit
                "Other Libraries": lodash, date-fns
                "Build Tools": yarn, gatsby.js
                "Scripting Conformance": eslint(AirBnB)
                "Styling Conformance": stylelint(stylelint-config-standard, stylelint-config-rational-order)
            testing:
                "Test Runner": jest
                "Test Coverage": jest
                "Tests as Documentation": None
                "Mocking": jest
                "Integration Testing": msw, testing-library/react
        infrastructure:
            "End2End Testing": Cypress
            "Version Control System": Git
            "Version Control Platform": Github
            "Continuous Integration Platform": Github Actions
            "Documentation Platform": Github Pages
            "Deployment Platform": Azure (ARM Template)
    microService:
        backend:
            implementation:
                "Language": Kotlin
                "Database": Postgres
                "Framework Libraries": Quarkus
                "Database Libraries": JooQ, Flyway
                "Api Libraries": OpenApi Generator (JAX-RS server stub, MicroProfile/Rest-easy client)
                "Other Libraries": MapStruct
                "Build Tools": Gradle
                "Conformance": Klint+detekt
            testing:
                "Test Runner": JUnit5     
                "Test Coverage": Jacoco
                "Tests as Documentation": OpenApi spec/Pact
                "Mocking": Mockito
                "Integration Testing": Rest-Assured+TestContainers+Pact
        frontend:
            implementation:
                "Scripting Language": Typescript
                "Styling Language": CSS
                "Markup Language": JSX
                "Framework Libraries": React
                "Api Libraries": Fetch
                "State Management Libraries": Redux Toolkit
                "Other Libraries": lodash, date-fns
                "Build Tools": yarn, gatsby.js
                "Scripting Conformance": eslint(AirBnB)
                "Styling Conformance": stylelint(stylelint-config-standard, stylelint-config-rational-order)
            testing:
                "Test Runner": jest
                "Test Coverage": jest
                "Tests as Documentation": None
                "Mocking": jest
                "Integration Testing": msw, testing-library/react

        infrastructure:
            "End2End Testing": Selenide
            "Version Control System": Git
            "Version Control Platform": Github
            "Continuous Integration Platform": Github Actions
            "Documentation Platform": Github Pages
            "Deployment Platform": Azure (ARM Template)
---

## Introduction

Historically, I haven't considered the idea of deciding on a tech stack.
This is mostly due to the fact that I've worked in a lot of different environments that I didn't get the time to settle in with.

Nowadays, I have a better idea on how I want to work.
I've come to love XP, and I want to be able to deliver value quickly, to appreciating customers, without compromising on internal software quality.

The article will cover the attributes that I value in my tech stacks, and a list of stacks that I prefer for different kinds of products.
I'm a web developer, first and foremost, so I will not talk about stacks for embedded real-time systems or desktop applications e.g.

## What makes a good tech stack?

### Metrics

I will go through the 4 key metrics from the [Accelerate](https://itrevolution.com/book/accelerate/) book
and bring up tech stack attributes that that I believe can improve them.

#### Deployment Frequency

There is little point in being able deploy frequently if the tech stack makes it hard or impossible to do.
Deployment has to be automated to achieve this.

You should be able to structure the code so that it's easy to change business logic without changing the infrastructure. And you should be able to satisfy the stakeholder that requested the change without having to change
at lot of code that might affect other stakeholders.
You should be able to structure code with low coupling and high cohesion, so that the area to change is easy to find.

This means that frameworks that enforce a certain file structure and causes unnecessary coupling between business logic and infrastructure are undesirable.
Some frameworks provide conventions that can be overridden. This can mean that long-lasting projects becomes less convenient to work with (because scaffolding tools don't understand your conventions) and the conventions are less familiar to people who are experienced with the framework. Both short-term and long-term project convenience is considered, but long-term convenience is preferred as it provide a more stable development cycle.

The programming language should provide suitable abstractions that can be used to remove much of the semantic code duplication.
Such languages usually give inspiration to libraries that cover some of the utility functionality that you would've had to write yourself otherwise.

#### Lead Time for Change

The most important thing to improve this metric is to have fully automated regression tests.
The time it takes to write regression tests more than make up for it in how fast and reliable they are execute compared to manual tests that has to run for every deployment.

End-to-end tests are a must, but each test can take a long time to execute, and some scenarios are hard to replicate.
A test pyramid should be used, with many more unit tests than end-to-end tests, with integration tests being somewhere in the middle.
A tech stack should allow for unit and integration tests, and be flexible enough that you can test on many different levels of the pyramid based on the needs of the product.

#### Mean-Time to Recovery

The Tech stack should allow for detection of problems quickly and allow you to rollback a deployment.

#### Change-Failure Rate

It should be hard to introduce a regression, which should've been caught by the tests.
It's important that business requirements can be easily translated to tests with minimum risk conversion errors.

### Familiarity vs Freedom

Certain Tech Stacks have very strong conventions and language limitations.

This is useful when it comes to hiring people, since it gives rise to more shared knowledge that doesn't have to be learned by people that are already familiar with the tech stack.
It also makes it hard for rogue employees to write complex code that becomes more difficult to maintain once that person leaves the organization.

The degree of familiarity vs freedom in a tech stack can often be traced back to the programming language culture. The culture influences what libraries gets written, how big they become, the granularity of the options they offer, how many alternatives gets written, and how much competition there is among the alternatives.

I appreciate familiarity over freedom for the most part. A product should have the ability to grow and be refactored over time, which requires a degree of freedom. It's also important that familiarity doesn't gives rise to semantic duplication just to keep the amount of language features down.

### Ecosystem

In order to develop an application, you probably want more than just a compiler.

You want a good debugger, build tools and libraries, with good documentation, how-to guides and tutorials.
You want to be able to find information about these things quickly and not get side-tracked by outdated and irrelevant information.

A young tech stack with a lot of hype behind it will not have a problem with outdated information, since there isn't a lot of old information. At the same time, everything is this kind of ecosystem is unstable, and may change frequently or significantly. It can take time and effort to keep up with the pace while dodging bugs that are naturally introduced when there are a lot of changes in the tools and libraries.

If a tech stack is older, then hopefully it will keep some of the hype up.
Otherwise, it can be hard to convince new programmers to use the stack, and modern, useful ideas might not be integrated into the language, at least not at a fast pace.

No tech stack will keep its' hype once it becomes mature, but I feel like these stacks are the most trustworthy to bet on if they keep some of the hype.

### Development Environment

It's a plus if a tech stack works on the 3 major operating systems: Windows, OS X and Linux.

It's a must that it works on Linux at least, in case Linux contains will be used to deploy the application, which has become increasingly common.
Linux servers are also cheaper to build/rent, and more customizable than Windows servers as well.


## Kinds of applications

### Static Website

This is a website that doesn't serve dynamic content -  i.e. no "backend" is needed.

Easier to reason about, good for blogs, and cheap to host.

### Dynamic Website

A website that can serve dynamic content.

May eventually become very large. It's important to refactor these websites over time so they can be divided into
libraries, micro frontends and/or micro services if desirable.

### Micro Service/Frontend

A part of a greater application that fulfills some domain-specific purpose.

Micro services and frontends are usually not alone, or at least not for long.
It's important to be able to quickly create new ones, and avoid duplicating api contract details between client and server.

## Stacks

Below I will present my preference for the kinds of applications presented in this article.

### Static Website

#### Backend

<dl>
{% for column in page.stacks.static.backend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in page.stacks.static.backend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

#### Frontend

<dl>
{% for column in page.stacks.static.frontend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in page.stacks.static.frontend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

#### Infrastructure

<dl>
{% for column in page.stacks.static.infrastructure %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

### Dynamic Website

#### Backend

<dl>
{% for column in page.stacks.dynamic.backend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in page.stacks.dynamic.backend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

#### Frontend

<dl>
{% for column in page.stacks.dynamic.frontend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in page.stacks.dynamic.frontend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

#### Infrastructure

<dl>
{% for column in page.stacks.dynamic.infrastructure %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

### Micro Service/Frontend

#### Backend

<dl>
{% for column in page.stacks.microService.backend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in page.stacks.microService.backend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

#### Frontend

<dl>
{% for column in page.stacks.microService.frontend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in page.stacks.microService.frontend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

#### Infrastructure

<dl>
{% for column in page.stacks.microService.infrastructure %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

TODO: Present dynamic website stack

TODO: Present micro service stack

TODO: Explain commonalities and differences

TODO: Summary

### 