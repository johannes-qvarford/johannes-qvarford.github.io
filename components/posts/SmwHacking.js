import { Fragment } from "react"
import Link from "next/link"
import styles from "./css/SmwHacking.module.css"

const post = {
  component: Component,
  metadata: {
    title: "Super Mario World Hacking",
    slug: "smw-hacking",
    date: "2017-11-23"
  }
}

export default post

function Component() {
  return <Fragment>
    <div className={styles.titleImages}>
      <img src="/assets/kaizo-returns.png" title="In-game screenshot of the rom hack - Kaizo Returns" alt="Mario is on an airship armada. Bullet bills fire on a stormy night." />
      <img src="/assets/waluigis-treasure-hunt.png" title="Title screen of the Super Mario World rom hack - Waluigi&apos;s Treasure Hunt" alt="Gem stones surround the title. Mountains are seen in the distance on a starlit night." />
    </div>

    <p>Ever since I was a child, I&apos;ve wanted to program computer applications.
      When one of my video games stopped working, I swore that when I grew up, I would contribute to making good software.</p>

    <p>I first started writing code in junior high. Back then, I was making ROM hacks of Super Mario World.
      I quickly realized that the level editor was very limiting, so I started learning assembly for the SNES to program new enemies.
      I released demo versions for two rom hacks: Super Mario World: Kaizo Returns and Waluigi&apos;s Treasure Hunt.</p>

    <p>Feel free to download the <Link href="/assets/waluigis-treasure-hunt.ips">patch for Waluigi&apos;s Treasure Hunt</Link>.
      In order to play through it, you need a legal copy of a Super Mario World ROM and an SNES emulator like ZSNES.</p>

    <p>There is a <Link href="https://www.youtube.com/playlist?list=PL18DB9F871D181135">playthrough of New Super Mario World: Kaizo Returns</Link> by AuthenticZac available online.</p>
    <p>You can also watch a <Link href="https://www.youtube.com/watch?v=pyrkWtAfaJ0">test run of Waluigi&apos;s Treasure Hunt</Link> by FPZero.</p>

  </Fragment>
}

