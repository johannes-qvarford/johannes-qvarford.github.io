import { Fragment } from "react"
import Link from "next/link"
import TechStackEntry from "./components/TechStackEntry"

const post = {
  component: Component,
  metadata: {
    title: "Tech Stack",
    slug: "tech-stack",
    date: "2020-07-21"
  }
}

const stacks = {
  "static": {
    "backend": {
      "implementation": {
        "Language": "None",
        "Database": "None",
        "Framework Libraries": "None",
        "Database Libraries": "None",
        "Api Libraries": "None",
        "Other Libraries": "None",
        "Build Tools": "None",
        "Conformance": "None"
      },
      "testing": {
        "Test Runner": "None",
        "Test Coverage": "None",
        "Tests as Documentation": "None",
        "Mocking": "None",
        "Integration Testing": "None"
      }
    },
    "frontend": {
      "implementation": {
        "Scripting Language": "Javascript",
        "Styling Language": "SCSS",
        "Markup Language": "HTML",
        "Framework Libraries": "Jekyll",
        "Api Libraries": "None",
        "State Management Libraries": "None",
        "Other Libraries": "None",
        "Build Tools": "Jekyll",
        "Scripting Conformance": "None",
        "Styling Conformance": "None"
      },
      "testing": {
        "Test Runner": "None",
        "Test Coverage": "None",
        "Tests as Documentation": "None",
        "Mocking": "None",
        "Integration Testing": "None"
      }
    },
    "infrastructure": {
      "End2End Testing": "None",
      "Version Control System": "Git",
      "Version Control Platform": "Github",
      "Continuous Integration Platform": "Github",
      "Documentation Platform": "Github Pages",
      "Deployment Platform": "Github Pages"
    }
  },
  "dynamic": {
    "backend": {
      "implementation": {
        "Language": "Javascript",
        "Database": "Postgres",
        "Framework Libraries": "Express",
        "Database Libraries": "node-postgres, node-pg-migrate",
        "Api Libraries": "OpenApi Generator",
        "Other Libraries": "None",
        "Build Tools": "yarn",
        "Conformance": "eslint(AirBnB)"
      },
      "testing": {
        "Test Runner": "jest",
        "Test Coverage": "jest",
        "Tests as Documentation": "None",
        "Mocking": "jest",
        "Integration Testing": "supertest"
      }
    },
    "frontend": {
      "implementation": {
        "Scripting Language": "Javascript",
        "Styling Language": "CSS",
        "Markup Language": "JSX",
        "Framework Libraries": "React",
        "Api Libraries": "Fetch",
        "State Management Libraries": "Redux Toolkit",
        "Other Libraries": "lodash, date-fns",
        "Build Tools": "yarn, gatsby.js",
        "Scripting Conformance": "eslint(AirBnB)",
        "Styling Conformance": "stylelint(stylelint-config-standard, stylelint-config-rational-order)"
      },
      "testing": {
        "Test Runner": "jest",
        "Test Coverage": "jest",
        "Tests as Documentation": "None",
        "Mocking": "jest",
        "Integration Testing": "msw, 'testing-library/react'"
      }
    },
    "infrastructure": {
      "End2End Testing": "Cypress",
      "Version Control System": "Git",
      "Version Control Platform": "Github",
      "Continuous Integration Platform": "Github Actions",
      "Documentation Platform": "Github Pages",
      "Deployment Platform": "Azure (ARM Template)"
    }
  },
  "microService": {
    "backend": {
      "implementation": {
        "Language": "Kotlin",
        "Database": "Postgres",
        "Framework Libraries": "Quarkus",
        "Database Libraries": "JooQ, Liquibase",
        "Api Libraries": "OpenApi Generator (JAX-RS server stub, MicroProfile+Rest-easy client)",
        "Other Libraries": "MapStruct, Immutables",
        "Build Tools": "Gradle",
        "Conformance": "Klint+detekt"
      },
      "testing": {
        "Test Runner": "JUnit5",
        "Test Coverage": "Jacoco",
        "Tests as Documentation": "OpenApi spec+Pact",
        "Mocking": "Mockito",
        "Integration Testing": "Rest-Assured+TestContainers+Pact"
      }
    },
    "frontend": {
      "implementation": {
        "Scripting Language": "Typescript",
        "Styling Language": "CSS",
        "Markup Language": "JSX",
        "Framework Libraries": "React",
        "Api Libraries": "Fetch",
        "State Management Libraries": "Redux Toolkit",
        "Other Libraries": "lodash, date-fns",
        "Build Tools": "yarn, gatsby.js",
        "Scripting Conformance": "eslint(AirBnB)",
        "Styling Conformance": "stylelint(stylelint-config-standard, stylelint-config-rational-order)"
      },
      "testing": {
        "Test Runner": "jest",
        "Test Coverage": "jest",
        "Tests as Documentation": "None",
        "Mocking": "jest",
        "Integration Testing": "msw, 'testing-library/react'"
      }
    },
    "infrastructure": {
      "End2End Testing": "Selenide",
      "Version Control System": "Git",
      "Version Control Platform": "Github",
      "Continuous Integration Platform": "Github Actions",
      "Documentation Platform": "Github Pages",
      "Deployment Platform": "Azure (ARM Template)"
    }
  }
}

export default post

function Component() {
  return <Fragment>
    <h3>Introduction</h3>

    <p>Historically, I haven&apos;t considered the idea of deciding on a tech stack.
      This is mostly due to the fact that I&apos;ve worked in a lot of different environments that I didn&apos;t get the time to settle in with.</p>

    <p>Nowadays, I have a better idea on how I want to work.
      I&apos;ve come to love XP, and I want to be able to deliver value quickly, to appreciating customers, without compromising on internal software quality.</p>

    <p>The article will cover the attributes that I value in my tech stacks, and a list of stacks that I prefer for different kinds of products.
      I&apos;m a web developer, first and foremost, so I will not talk about stacks for embedded real-time systems or desktop applications e.g.</p>

    <h3>What makes a good tech stack?</h3>

    <h4>Metrics</h4>

    <p>I will go through the 4 key metrics from the <Link href="https://itrevolution.com/book/accelerate/">Accelerate book</Link> and bring up tech stack attributes that that I believe can improve them.</p>

    <h5>Deployment Frequency</h5>

    <p>There is little point in being able deploy frequently if the tech stack makes it hard or impossible to do.
      Deployment has to be automated to achieve this.</p>

    <p>You should be able to structure the code so that it&apos;s easy to change business logic without changing the infrastructure. And you should be able to satisfy the stakeholder that requested the change without having to change
      at lot of code that might affect other stakeholders.
      You should be able to structure code with low coupling and high cohesion, so that the area to change is easy to change and easy find.</p>

    <p>This means that frameworks that enforce a certain file structure and causes unnecessary coupling between business logic and infrastructure are undesirable.
      Some frameworks provide conventions that can be overridden. This means that long-lasting projects may become less convenient to work with over time (because scaffolding tools don&apos;t understand your conventions) and the conventions are less familiar to people who are experienced with the framework. Both short-term and long-term project convenience is considered, but long-term convenience is preferred as it provide a more stable development cycle.</p>

    <p>The programming language should provide suitable abstractions that can be used to remove much of the semantic code duplication.
      Such languages usually give inspiration to libraries that cover some of the utility functionality that you would&apos;ve had to write yourself otherwise, saving maintenance time and effort.</p>

    <h5>Lead Time for Change</h5>

    <p>The most important thing to improve this metric is to have fully automated regression tests.
      The time it takes to write regression tests more than make up for it in how fast and reliable they are execute compared to manual tests that has to be performed for every deployment.</p>

    <p>End-to-end tests are a must, but each test can take a long time to execute, and some scenarios are hard to replicate.
      A test pyramid should be used, with many more unit tests than end-to-end tests, with integration tests being somewhere in the middle.
      A tech stack should allow for unit and integration tests, and be flexible enough that you can test on many different levels of the pyramid based on the needs of the product.</p>

    <h5>Mean-Time to Recovery</h5>

    <p>The tech stack should allow for detection of problems quickly and allow you to rollback a deployment.</p>

    <h5>Change-Failure Rate</h5>

    <p>It should be hard to introduce a regression, which should&apos;ve been caught by the tests.
      It&apos;s important that business requirements can be easily translated to tests with minimum risk conversion errors.</p>

    <h4>Familiarity vs Freedom</h4>

    <p>Certain tech stacks have very strong conventions and language limitations.</p>

    <p>This is useful when it comes to hiring, since it gives rise to more shared knowledge that doesn&apos;t have to be learned by people that are already familiar with the tech stack.
      It also makes it hard for rogue employees to write complex code that becomes more difficult to maintain once that person leaves the organization.</p>

    <p>The degree of familiarity vs freedom in a tech stack can often be traced back to the programming language culture. The culture influences what libraries gets written, how big they become, the granularity of the options they offer, how many alternatives gets written, and how much competition there is among the alternatives.</p>

    <p>I appreciate familiarity over freedom for the most part. A product should have the ability to grow and be refactored over time, which requires a degree of freedom. It&apos;s also important that familiarity doesn&apos;t gives rise to semantic duplication just to keep the amount of language features down.</p>

    <h4>Ecosystem</h4>

    <p>In order to develop an application, you probably want more than just a compiler.</p>

    <p>You want a good debugger, build tools and libraries, with good documentation, how-to guides and tutorials.
      You want to be able to find information about these things quickly and not get side-tracked by outdated and irrelevant information.</p>

    <p>A young tech stack with a lot of hype behind it will not have a problem with outdated information, since there isn&apos;t a lot of old information to begin with. At the same time, most things in this kind of ecosystem is unstable, and may change frequently or significantly. It can take time and effort to keep up with the pace while dodging bugs that are bound to be introduced when there are a lot of changes in the tools and libraries.</p>

    <p>As a tech stack gets older, it will hopefully keep some of the hype up.
      Otherwise, it can be hard to convince new programmers to use the stack. Some modern, useful ideas might not be integrated into the language, at least not at a fast pace.</p>

    <p>No tech stack will keep its&apos; hype once it becomes mature, but I feel like these stacks are the most trustworthy to bet on if they keep some of the hype.</p>

    <h4>Development Environment</h4>

    <p>It&apos;s a plus if a tech stack works on the 3 major operating systems: Windows, OS X and Linux.</p>

    <p>It&apos;s a must that it works on Linux at least, in case Linux containers will be used to deploy the application, which has become increasingly common.
      Linux servers are also cheaper to build/rent, easier to modify, and more customizable than Windows servers.</p>


    <h3>Kinds of applications</h3>

    <h4>Static Website</h4>

    <p>This is a website that doesn&apos;t serve dynamic content -  i.e. no &quot;backend&quot; is needed.</p>

    <p>Easier to reason about, good for blogs, and cheap to host.</p>

    <h4>Dynamic Website</h4>

    <p>A website that can serve dynamic content.</p>

    <p>May eventually become very large. It&apos;s important to refactor these websites over time so they can be divided into
      libraries, micro frontends and/or micro services if desirable.</p>

    <h4>Micro Service/Frontend</h4>

    <p>A part of a greater application that fulfills some domain-specific purpose.</p>

    <p>Micro services and frontends are usually not alone, or at least not for long.
      It&apos;s important to be able to quickly create new ones, and avoid duplicating api contract details between client and server.</p>


    <h3>Stacks</h3>

    <p>Below I will present my stack preferences for the kinds of applications presented in this article.</p>

    <h4>Static Website</h4>

    <TechStackEntry stack={stacks.static} />

    <h4>Dynamic Website</h4>

    <TechStackEntry stack={stacks.dynamic} />

    <h4>Micro Service/Frontend</h4>

    <TechStackEntry stack={stacks.microService} />

    <h3>Reasoning</h3>

    <h4>Static Website</h4>

    <p>When it comes to building a simple website, there is almost no reason to use pure HTML/CSS/JS.</p>

    <p>You&apos;re at least going to want to reduce the repetition of the common head and body layout,
      at which point you might as well generate the website.
      Using a dynamic webserver to serve static content just complicates things and makes hosting more expensive.</p>

    <p>Jekyll is among the better static site generators for how easy-to-use and extensible it is.
      It&apos;s also the static website generator of choice for GitHub Pages, which is a plus.</p>

    <h4>Dynamic Website</h4>

    <p>If you need to support user accounts and forms, then Jekyll will not be enough.</p>

    <p>Ruby on Rails was considered for the backend, but it felt more simple to use the same language on the frontend and the backend. Sails.js was considered for how similar it is to Ruby on Rails, but it has not seen that much activity and doesn&apos;t have a big community. Also, some of the things that was attractive about Ruby on Rails is not present, such as opinionated integration testing.</p>

    <p>React was chosen as the underlying rendering framework because it feels more stable in its&apos; niche.
      Angular competes more directly with Vue since they both primarily use a templating language instead of JSX.
      In my experience, it has been easier to integrate tool support for JSX rather than support for Vue&apos;s special .vue files.</p>

    <p>Jest was chosen for testing because it&apos;s opinionated when it comes to mocking.</p>

    <p>Gatsby.js was chosen over Next.js and Nuxt.js partially for its&apos; greater accessibility features.
      Blitz.js was considered since it&apos;s a fullstack framework that reduces friction between frontend and backend.
      However, it&apos;s a very young framework that I don&apos;t think is ready for production use.</p>


    <h4>Micro Service/Frontend</h4>

    <h5>Why not Node?</h5>

    <p>There are a number of reasons for jumping of the fullstack Javascript bandwagon.</p>

    <p>First, I think the JVM ecosystem is better for backend development than Node.</p>

    <p>Most libraries have higher cohesion with trusted groups of maintainers rather than single line libraries with individual maintainers.</p>

    <p>There is less friction in build tools: Maven and Gradle are the only serious options and they have commonly followed conventions.</p>

    <p>There is less friction in testing tools: JUnit dominates.</p>

    <p>It&apos;s easy to switch language without having to add separate plugins for bundling, execution and testing.</p>

    <p>The JVM ecosystem has stood the test of time, and shortcomings are being addressed at a fast rate.
      It will soon be hard to argue that Java is outdated.</p>

    <p>A website can start of with the Dynamic Website stack when small, and once it reaches a certain complexity it can be divided into micro services one at a time until the original website is just a shell that can easily be replaced.</p>

    <h5>Why everything else?</h5>

    <p>Java is absorbing useful features from other languages at an increasing rate.
      Java recently gained records and text blocks, and will eventually get value types and lightweight threads, making coroutines not as important in some scenarios. Given all this, why would you bet on Kotlin instead of Java?</p>

    <p>Kotlin was chosen over Java because it&apos;s similar enough while providing enough development productivity gains to offset the potential rewrite to Java in the future.
      There are tools for converting between the two, tests prevent accidental regressions, and small libraries / micro services / micro fragments prevent the need for a big rewrite.</p>

    <p>Quarkus was chosen over Spring Boot for the same reason. Spring Boot is currently not as easy to Google since there is a lot of old guides that don&apos;t use current best practices, which Spring Framework keeps backwards-compatibility for. It&apos;s also the case that Spring Boot uses runtime Dependency Injection and can&apos;t be statically compiled through GraalVM yet. You don&apos;t always value startup time over long-term runtime performance, but when you do, it&apos;s nice to have the option.
      This might change in the future, but for now, Quarkus shows no sign of slowing down.</p>

    <p>Liquibase was chosen over Flyway because it has more features without requiring a lot more configuration.</p>

    <p>The reason I prefer JooQ over JDBI is that they both allow you to write SQL, but JooQ offers more options while reducing the amount of POJOs you&apos;ll have to write by hand. Hibernate was also rejected because the object-relational mismatch solution it tries to provide does not make up for the increase in complexity. With Hibernate, there is a risk that you get stuck debugging for hours trying to perform some conceptually simple data modeling problem, which can make certain increments inexplicably take a lot of time. The much more simple abstraction provided by JooQ does not present the same risk.</p>

    <p>Gradle was preferred over Maven because of the speed of development and the ability to solve complicated build setups that are hard with Maven. Gradle requires a lot of care so that it doesn&apos;t become too hard to maintain though.</p>

    <p>Typescript was chosen over Javascript because it makes it easier for humans and tools to understand the design of the code. It requires more setup which isn&apos;t always necessary for a small app. It remains to be seen if Kotlin for Javascript will be worth using in the future.</p>

    <h4>Database</h4>

    <p>Postgres was chosen for data storage for its&apos; extensibility.
      It can store normalized relational data as well as documents effectively, while providing a very powerful query language.
      Its&apos; ability to define custom data types reduces the relational-object mismatch somewhat.
      Having explicit schemas makes it easier to make assertions about what data inconsistencies cannot exist, reduces the chance of introducing them, and doesn&apos;t require complicated migration scripts for semantically simple schema changes, such as column renaming.</p>

    <p>Different databases might be preferred depending on the kind of data that it needs to store.
      ACID-compliant databases are great because they offer you the opportunity to start with transactions and then move towards more complicated application-controlled optimistic locking if required for performance reasons.</p>

    <p>Caching is completely different. It should be performed as close to the client as possible. Redis is a good choice in a lot of cases.</p>

    <h4>Version Control</h4>

    <p>I liked Mercurial quite a lot a few years ago, but it has been losing too much market share to Git at this point.</p>

    <p>GitHub was chosen over GitLab because of developer familiarity rather than technical excellence.
      They are about on par when it comes to desired features though.</p>

    <p>GitLab is probably preferred if you need self-hosting.</p>

    <h4>Hosting</h4>

    <p>If you need anything beyond static website hosting, then I prefer Azure over AWS and GCS.
      AWS felt very unintuitive to use.
      GCS feels risky to rely on, given their track-record with abandoning services.</p>

    <p>Heroku gives off the impression that you might be stuck due to lack of flexibility in their offerings.</p>

    <p>Digital Ocean doesn&apos;t offer SaaS hosting.</p>


    <h3>Summary</h3>

    <p>As websites get more complicated, my preferences steer from Ruby static site rendering, to fullstack Node to frontend Node+backend JVM.
      It&apos;s important to use the right tool for the right job, and have a migration plan if the requirements change in such a way that a new tool is preferred. Use tools that work well together to produce small iterations and the productivity will come to you.</p>

    <p>If Ruby on Rails did not peter out during the last 10 years, I might&apos;ve included it in one of the stacks.
      Will Node and JVM still be useful and popular choices in the next 10 years?
      It remains to be seen which trends will continue, and what new trends will appear.</p>
  </Fragment>
}

