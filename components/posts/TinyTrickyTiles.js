import { Fragment } from "react"
import Link from "next/link"
import styles from "./css/one-image-article.module.css"
import ProjectSummary from "./components/ProjectSummary"

const post = {
  component: Component,
  metadata: {
    title: "Tiny Tricky Tiles",
    slug: "tiny-tricky-tiles",
    date: "2016-06-21"
  }
}

export default post

function Component() {
  return <Fragment>
    <div className={styles.titleImages}>
      <img src="/assets/tiny-tricky-tiles-512px.jpg" alt="4 differently colored blocks with cartoonish expressions stand next to the game's title." title="Promotional image for the game Tiny Tricky Tiles" />
    </div>

    <h3>Project Summary</h3>

    <ProjectSummary language="C#" year={2014} yearEnd={2015} group="Solutions Skövde" groupType="Company" />

    <h3>Introduction</h3>

    <p>Tiny Tricky Tiles is a unique puzzle game that relies on the player&apos;s pattern recognition skills.
      It was developed by Solutions Skövde, which was known as Deedly Games at the time. The team consisted of me as a programmer, <Link href="https://www.linkedin.com/profile/view?id=AC4AAAaTp8YBq1dBsESX9rpswYfeew0y2NJSDLs&authType=name&authToken=C7dL&trk=contacts-contacts-list-contact_name-0">Helena Granström</Link> as a graphical artist and <Link href="https://www.linkedin.com/in/alexander-karlsson-238913125">Alexander Karlsson</Link> as a programmer/designer.
      We developed the game on our spare time using Unity while studying at the University of Skövde (HiS) over the course of a year.</p>

    <p><Link href="https://play.google.com/store/apps/details?id=com.DeedlyGames.TinyTrickyTiles">Download the game from Google Play</Link> or <Link href="https://itunes.apple.com/se/app/tiny-tricky-tiles/id966125107?mt=8">download the game from the App Store</Link>.</p>

    <h3>Rules</h3>

    <p>Each puzzle consist of a rectangular game board with a group of tiles in widely different colors.
      The player is given a spare tile, which they can &quot;push&quot; into the board through a chosen row or column.
      The tile that gets pushed out of the board becomes the new spare tile. The player wins when all the tiles
      on the board are directly or indirectly connected to every other tile of the same color.</p>

    <h3>Programming Challenges</h3>

    <p>I joined Solutions Skövde right around the time when the team was finishing another game, by the name of Trashmania.</p>

    <p>What I noticed when I looked over the code was that there was no clear <Link href="https://en.wikipedia.org/wiki/Separation_of_concerns">Separation of Concerns</Link> between the game components. There was a big god object that handled some aspects of the game, but there were also a lot of smaller components. Not only did the god object directly manipulate the smaller components&apos; state, but the smaller components ALSO manipulated the god object&apos;s state. It was not clear where to put new functionality and it was hard to understand the execution flow.</p>

    <p>Another problem was that nothing in the game was unit tested, which meant that new features almost always introduced a lot of bugs.</p>

    <p>When we started working on Tiny Tricky Tiles, I wanted to avoid the mistakes performed in the development of Trashmania.
      I had read a lot about the <Link href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Model-View-Controller architecture</Link> and how it could be used for Separation of Concerns (SoC), and about how <Link href="https://en.wikipedia.org/wiki/Inversion_of_control">Inversion of Control</Link> could be used to easily test components.
      StrangeIoC was an IoC container with support for MVC in Unity, which meant we could kill two birds with one stone.</p>

    <p>StrangeIoC&apos;s IoC support was completely decoupled from Unity which should make it easier to test components.
      Game logic was performed using Commands, which resembled Controllers in MVC. Commands could be chained in sequence and run in parallel, and a failing command interrupted the entire chain. Commands were fired as a response from raised signals by views, which were activated by View components attached to Unity Game Objects. Commands propagated changes through mutations on shared injected components and through raised signals.</p>

    <h3>Result</h3>

    <p>I though that StrangeIoC was of great help at the beginning of the project - just being able to separate logical game state to the models and view state to the View components made the code much easier to comprehend for me.
      Not all game state was separated out of the View components though, and Unity-related code was placed in Commands which made it impossible to test them.
      Not that it would have mattered, because we didn&apos;t perform any testing at all.
      One reason for not testing was that a lot of the game logic was concerned with manipulating Game Objects, and it was too time consuming to mock a lot of the Unity functionality.
      Another reason was that writing tests would take lots of time, and since the spec changed frequently a lot of test code would&apos;ve been outdated in no time.</p>

    <p>Separating responsibilities into models, views and commands may have separated concerns more, but it also bloated the project with many files, made dependencies harder to track and control flow harder to understand.</p>

    <p>Usually in Unity when you needed to create a game component, let&apos;s say &quot;Bat&quot;, you would only need to create a &quot;BatBehavior&quot; class inheriting from MonoBehavior and attach it to a Bat game object.
      With StrangeIoC, you would create a BatView that handled collisions, updates and other unity callbacks and changes through a BatMediator which changed the BatView when receiving certain signals, and raised signals when the BatView encountered something.
      One or more bat-related commands may have to be created to react to the bat&apos;s actions, and these may need to be connected to some bat-related signals.</p>

    <p>At least twice the amount of files were needed to be created to implement a traditional Unity component, and it was difficult to understand the control flow because they were loosely coupled and only used signals to communicate.</p>

    <p>I hoped that StrangeIoC would solve a lot of our problems, but I had my head in the clouds during the project just hoping it would work.
      I didn&apos;t even consider how Alexander felt about it; he didn&apos;t understand what roles the different kinds of components played and
      thought that the framework was needlessly complicated.</p>

    <h3>Conclusion</h3>

    <p>The theories behind MVC and unit testing are all very useful on their own, but didn&apos;t prove to be of much use for use when developing Tiny Tricky Tiles.
      The StrangeIoC framework was to heavy weight and gave the code too low of a signal-to-noise ratio.
      Removing game logic from Unity MonoBehaviors can still be useful, and I believe we can benefit from a <Link href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel">Model-View-ViewModel</Link> separation, where
      some MonoBehaviors just contains view state, some contain view related logic, while models contains view independent state and logic.
      It wouldn&apos;t aid with IoC and testing, but I don&apos;t believe we will perform much unit testing on games in the future.</p>

  </Fragment>
}

