import { Fragment } from "react"
import Link from "next/link"
import styles from "./css/one-image-article.module.css"
import ProjectSummary from "./components/ProjectSummary"

const post = {
  component: Component,
  metadata: {
    title: "Lunch Lady Simulator",
    slug: "lunch-lady-simulator",
    date: "2016-01-22"
  }
}

export default post

function Component() {
  return <Fragment>
    <div className={styles.titleImages}>
      <img src="/assets/lunch-lady-simulator-512px.jpg" alt="An angry lunch lady strikes an action pose. Tomato sauce and fire swirl in the background." title="Lunch Lady Simulator promotional image" />
    </div>

    <h3>Project Summary</h3>

    <ProjectSummary language="C#" year={2014} group="HiS" />

    <h3>Introduction</h3>

    <p>Lunch Lady Simulator is a comical physics based simulator about being a lunch lady.
      The goal of the game is to serve as many customers as possible while struggling with
      wonky yet entertaining controls. It draws heavy inspiration from Surgeon Simulator.</p>

    <p>The game features various physics based food items and tools, FMOD integrated music,
      voice acting and automatically generated customers.</p>

    <p>A demo of the game was finished in June 2014, and the source code can be found on the <Link href="https://github.com/johannes-qvarford/LunchLadySimulator">Lunch Lady Simulator Github repository</Link>.
      Lunch Lady Simulator is part of the <Link href="http://democreativity.com/games">Democreativity project game showcase</Link>, encouraging creative game development.
      The project was developed during the <Link href="http://www.his.se/om-oss/Utbildningar-och-amnen/Data-och-IT/Microsoft-Game-Camp-2014/">Microsoft Game Camp 2014 event</Link>
      &nbsp;which was a great opportunity for game developers to program towards various Microsoft devices.
      There&apos;s a <Link href="https://www.youtube.com/watch?v=TV94WJM8CO0">Lunch Lady Simulator playthrough</Link> available of the demo, by the youtuber DualDGaming.</p>

    <p>This project was a bit of a struggle, and I had to share the role of lead programmer throughout the project.
      As a lead, I had to organize the other programmers and communicate with the other leads.
      I was also the person responsible for handling input, arm physics and soup physics.</p>

    <h3>As a programmer</h3>

    <p>I was assigned to develop the main physical parts of the game. We were using Unity, which took care of a lot of the work,
      and allowed me to try out different strategies from a higher abstraction level. While it may normally have been good
      to let a designer string together a few physical components, the high demands of the design meant that the arms had to be hand coded.</p>

    <p>For example: The arms are so heavy that they, and any tools they are holding, should never be pushed by anything.
      At the same time, the arms shouldn&apos;t push the food items too far away when they touch, meaning that the arms both had a
      great mass (don&apos;t get pushed by anything) and a lighter mass (don&apos;t exert too much force) at the same time.</p>

    <p>Lunch Lady Simulator had a lot of different control schemes during development that needed to be tested and integrated into the game.
      There was a control scheme for keyboard, one for single player controller, one for co-op controller and one for Kinect.
      While another programmer handled Kinect programming, It was hard to manage all these different control schemes due to limitations
      in Unity. When checking if e.g. the player is moving their arm forward, you had to dynamically construct a string that specified
      the control scheme, and then check the key was down (on the keyboard) or the trigger was pressed down enough (on the controller).
      Given how well known and common this issue with Unity is, there was probably an asset available on the Asset Store that could&apos;ve
      helped us, but we ran on a 0 SEK budget without salary, and it wouldn&apos;t be fair to the other teams to gain such an advantage through monetary means.</p>

    <h3>As a lead</h3>

    <p>In the beginning of the project, I had high hopes. I was able to assign big tasks to the other programmers, and it looked like everyone would be occupied for a while.
      I was unfortunately wrong about that, and quickly discovered that the programmer who was supposed to do water physics, was unable too, partly because of limitations in Unity and performance constraints.
      Meanwhile, I was too occupied with the physics implementation to manage the team and while we all developed out parts of the game, we had not merged our work by week 4.
      That&apos;s when another programmer stepped in to take charge of the programmers, and he took over as a lead for the time being.</p>

    <p>Later in the project, he was often away implementing the Kinect support (the dev kits were in a different building) so I had to take over for him.
      By the end of the project, I was fully back in action as the lead programmer, even though it wasn&apos;t explicitly stated before the end of the project.</p>

    <p>To be honest, I was really stressed out during the project. I had just joined Deedly Games, and was working there on my spare time.
      Since I worked on the project for 40 hours a week and worked at Deedly Games for 20 hours a week, I did not have a single free day
      to relax.
      I probably shouldn&apos;t have handled the physics as well as taking on a lead role, as the physics consumed too much of my time, which should&apos;ve gone to managing the other programmers.
      I just felt at the time that the physics was the hardest and most time consuming task, and that we wouldn&apos;t have finished on time with a good result, if one of the other programmers handled it.
      I probably shouldn&apos;t have put soo much weight on my shoulders and just accepted that I couldn&apos;t put the well-being of the project over my own.</p>

    <h3>Summary</h3>

    <p>Despite bumps on the road, the project was finished on time and drew a big audience which really enjoyed it, particularly the co-op mode.
      I learned a lot about the features and limitations of Unity, as well as many game physics concepts and applications.
      Throughout the project I realized that I couldn&apos;t do everything and please everyone, and that I had to put myself before the project.
      Nowadays, I never do heavy crunches during longer periods of time, because I know that they can have a devastating effect.</p>
  </Fragment>
}

