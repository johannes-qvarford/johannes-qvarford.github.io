import { Fragment } from "react"
import Link from "next/link"
import ProjectSummary from "./components/ProjectSummary"
import styles from "./css/BricknodeFinancialModule.module.css"

const post = {
  component: Component,
  metadata: {
    title: "Bricknode Financial Module",
    slug: "bricknode-financial-module",
    date: "2017-11-25"
  }
}

export default post

function Component() {
  return <Fragment>
    <div className={styles.titleImages}>
      <img src="/assets/bricknode.png" title="Bricknode logo" alt="Three v-shaped blocks of different colors loosely fitting together." />
    </div>

    <ProjectSummary languages={["C#", "Typescript", "T-SQL"]} year={2016} yearEnd={2017} group="Solutions Skövde" groupType="Company" />

    <h3>Introduction</h3>

    <p>In the fall of 2016 we were approached by Bricknode to help them build a financial module for a customer of theirs.
      Three developers from Solutions Skövde including me were tasked with building the frontend and backend of the module.
      The module was partly an enhancement to Bricknode Financial System (BFS), and a frontend for office workers to manage financial assets, including a custom access control system.</p>

    <h3>In the beginning</h3>

    <p>Before the project officially began, I wrote a blueprint for what technologies we would use and how code would be organized.
      I did this to make sure that we didn&apos;t do things in widely different ways. Some choices turned out to be good, while others weren&apos;t.
      It especially made things hard for one of the developers when it came to code organization because of some over-abstractions.
      Since only one of the programmers wrote the frontend and the other wrote the backend, I definitely could&apos;ve revised it earlier.
      Towards the end, both of the programmers had come up with their own conventions that still adhered to most of the blueprint.
      I was very excited to use som very new technology, but because of that we ran into problems that were hard to find solutions to on the internet.</p>

    <h3>As a lead</h3>

    <p>During the project, I was tasked with managing the other programmers as a lead: delegating work, reviewing code and writing documentation.
      I also communicated directly with our contact person at Bricknode so that I understood what had to be implemented.
      It worked pretty smoothly, but what we found out during the course of the project was that my role as mediator was necessary at the time.
      However, it would&apos;ve been preferable if all developers could&apos;ve worked on both the frontend and the backend and spoke directly to our contact person.
      We also noticed that work on the backend was completed much faster than the frontend, so I sometimes had to jump in to fill in the gap.</p>

    <h3>As a programmer</h3>

    <p>I developed a few things myself during the project. After 4 months our initial contract ended, and only I continued working on the project on our side because they couldn&apos;t afford all of us.
      I implemented a few basic resource management pages, including one for managing a shareholder&apos;s orders.
      I also designed a small system for abstracting CRUD controller classes on the backend to reduce boilerplate and simplify testing.
      We used aspnet core on the backend and Angular on the frontend. I only had a little bit of experience with Angular beforehand, so this project really made me understand how to use it.</p>

    <h3>Conclusion</h3>

    <p>The project continued after we stopped working on it, and I got the impression that they were satisfied with our work.
      Aside from some blunders in the original blueprint, I still think I did a good job. They must&apos;ve felt so too, since they wanted me to continue working.
      This wasn&apos;t the first time I was a lead, but it put into perspective on how important it can be to organize the workload so that no one is left twiddling their thumbs.
      It also taught me to be more flexible when it came to programming conventions, so that people don&apos;t feel as forced to follow rules they don&apos;t agree with.
      I learned a lot about Angular, and by using a bleeding edge version of dotnet core, it made me more aware of how important it is to use tested technologies.</p>

  </Fragment>
}

