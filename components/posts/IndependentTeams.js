import { Fragment } from "react"

const post = {
  component: Component,
  metadata: {
    title: "Independent Teams",
    slug: "independent-teams",
    date: "2020-09-13"
  }
}

export default post

function Component() {
  return <Fragment>
    <h3>In the beginning</h3>

    <p>When working at a certain company I&apos;ve come to appreciate the importance of independent teams. When I started working in 2017 we effectively had a monolith codebase - the code division between the teams was not obvious and you commonly had to touch other team&apos;s code to get work done.</p>

    <p>We had an initial &quot;micro service&quot; architecture, but it suffered from the same problems. The division of services among teams was not one-to-one, and several services were shared by multiple teams. The services shared a database and a helper library. The services used in-memory caches that had to be held up-to-date.</p>

    <p>In order to make any improvements bigger than a single endpoint you had to bring it up on a weekly meeting with other teams because it would indirectly affect them.</p>

    <p>You could not release your changes independently. Even if your changes were low risk, they had to be released with other teams&apos; code in the same release, so every release was effectively high-risk. If there was a problem with one part of the deploy, all of it had to be rolled back.</p>

    <p>Brand-specific changes were developed by a single team. DBAs, QA, UX, UI and DEV-OPS were all different teams. There was a lot of cross-coordination to get a single feature released.</p>

    <p>There was no clear idea of when and for what reason it was appropriate to create a micro service. e.g. an incident occurred where an idea micro service was sketched out in a ticket, which then almost made it to production without the original author being informed. The micro service was scrapped in the end.</p>

    <h3>The vision</h3>

    <p>Six months later, a stronger architectural vision was perpetuated. Domain-driven development would be used when designing micro services. We held meetings where we discussed bounded contexts and what business capability each new micro service would provide. More importantly, each context would be owned by a single team.</p>

    <p>This made it much easier to develop features independently of other teams. At best, a single feature only required work by a single team. The micro services could now be improved and deployed independently of each other.</p>

    <p>Members of QA and DEV-OPS are now dedicated to different teams in addition to their normal duties. Each team now provides their own frontend. Technologies were introduced to enable teams to do more work that previously required help from DEV-OPS.</p>

    <h3>My situation</h3>

    <p>As a developer that leaned towards architecture, I got the opportunity to improve my team&apos;s architecture, and also part of the overall architecture.</p>

    <p>I introduced a new temporary structure in the monolith for writing, and organizing testable code and tests. My team had split into three, and I tried my best to convince them and other teams of the value of writing team-independent code. This did not always work, and we still held company-wide meetings where we discussed the temporary monolith structure.</p>

    <p>The work towards micro services was a more significant improvement. In the beginning we made some mistakes of how to divide work between the three teams. In the middle of 2018 I wrote a high-level design of our bounded contexts that has stood the test of time, aside from a few minor changes.</p>

    <h3>Lessons</h3>

    <p>Micro services introduced their own issues, but the increase in productivity was staggering. It might&apos;ve been possible to use a monolith app that imported plugins instead of dividing the domain across micro services. This would however not provide independent failures, it would balloon the size of the app, and require that all plugins use the same versions of external libraries. In the end, I think it was the right choice for the company to walk this path.</p>
  </Fragment>
}

