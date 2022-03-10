import { Fragment } from "react"
import Link from "next/link"

const post = {
  component: Component,
  metadata: {
    title: "How to be a good architect?",
    slug: "good-architect",
    date: "2022-03-10"
  }
}

export default post

function Component() {
  return <Fragment>
    <h3>Introduction</h3>

    <p>
      I&apos;ve been thinking lately about how to not just use architectural tactics in a vacuum, but also when to apply them and in what context.
      Different companies have their own issues and some may be more important than others, but I feel like it&apos;s good to have a heuristic for what to
      prioritize. Otherwise, you might focus on architectural aspects that ultimately don&apos;t matter.
    </p>

    <h3>Focus on the mission</h3>

    <p>
      Programming is primarily a means to an end - it&apos;s a way to solve problems in the real world as efficiently as possible, usually for an organization.
      A lot of software is never truly done, so &quot;efficiently&quot; doesn&apos;t just mean the initial development cost, but the cost of
      adding features over time, fixing bugs, training new hires, and keeping knowledge within the organization.
    </p>

    <p>
      You should ask the people in charge why they fund the technology at all - what would happen if all the technology was removed and all the tech-related employees quit?
      Why would it happen? The answer may start very general, but if you drill down you may find that some aspects of the technology is more important than others.
      This is a good starting point for what to focus on, at least initially.
    </p>

    <h3>Set aside your ego</h3>

    <p>
      Coming up with architectural ideas can be very fun, but it&apos;s easy to get attached to them.
      Once you do that, you may feel that critique of the idea becomes personal to you.
      Your attachment may mean that you don&apos;t feel comfortable with others implementing your solution, and you therefor decide to leave others in the dark.
    </p>

    <p>
      Your area of responsibility will probably outgrow how long you have ownership of it.
      Due to the <Link href="https://en.wikipedia.org/wiki/Bus_factor">bus factor</Link>, the knowledge of the architecture should be distributed among more people in the organization.
      You should talk with other architects to get insight from them, and accept the fact that you might be wrong sometimes.
    </p>

    <p>
      I&apos;m opposed to the idea that architecture is fully separated from software development.
      In general, the people who know most about a problem, and are the most invested in it
      are the people affected by it. <Link href="https://martinfowler.com/articles/scaling-architecture-conversationally.html">Scaling the Practice of Architecture, Conversationally</Link> provides a model for how to distribute architectural responsibility to where it makes most sense.
    </p>

    <p>
      Being a good architect means letting go, focusing on the mission, and inspiring other to do as well.
      Google found out that what makes good teams depends less on the individual members of the teams, but their <Link href="https://rework.withgoogle.com/blog/five-keys-to-a-successful-google-team/">shared culture.</Link>
    </p>

    <h3>Maintain stability</h3>

    <p>
      It can be tempting to focus on all the long-term improvements for the architecture,
      while forgetting that you are working on a real system, used by real people who are experiencing problems today.
    </p>

    <p>
      Focus on big wins when improving stability. If you have an issue in production that prevents users from performing essential operations, try to solve the immediate issue first.
      End users sometimes like features, but they always hate when existing features stop working.
      Target a base-line for stability - being able to detect when customers have issues and solving the most common issues quickly is essential.
      Long-term stability is achieved by relying on other architectural aspects.
    </p>

    <h3>Measure improvements</h3>

    <p>
      Improvement measurements can be considered both on it&apos;s own and the potential for improvements.
      In other words: &quot;Do end-users like the technology?&quot; and &quot;How prepared is the organization to improve the technology?&quot;
    </p>

    <h4>Do end-users like the technology?</h4>

    <p>
      There are a number of ways to measure how much end-users like your technology.
      You can either measure it qualitatively with personal interviews, or more quantitatively with questions whose results can be aggregated.
    </p>

    <p>
      Quantitative measurements may involve surveys, but you can also automatically gather metrics of how end-users use your products.
      You can test whether or not end-users like a given change by running an <Link href="https://en.wikipedia.org/wiki/A/B_testing">A/B test</Link> and measure how many users in control group A or B performed the desired action(s) as a result of the change.
      Having good monitoring is useful to discover design issues, but also to detect when critical bugs are introduced that prevent end-users from performing desired actions.
    </p>

    <h4>How prepared is the organization to improve the technology?</h4>

    <p>
      By monitoring the key metrics from the <Link href="https://www.oreilly.com/library/view/accelerate/9781457191435/">Accelerate Book</Link> and aiming to improve them,
      you become more result-driven. For reference, the key metrics are:
    </p>

    <ul>
      <li>Deployment Frequency</li>
      <li>Lead Time for Changes</li>
      <li>Mean Time to Recovery</li>
      <li>Change Failure Rate</li>
    </ul>

    <h3>Divide the technology</h3>

    <p>
      In order for a given technology to scale, you need to be able to divide it and talk about the parts individually.
      I recommend dividing the technology into different <Link href="https://www.domainlanguage.com/">organization domains</Link> based on what the technology is used for and can be used for.
      Different parts are more important than others, and the architecture should be built so that unimportant parts don&apos;t negatively affect the import ones.
      Advertising to end-users e.g. may be an important part of the technology, but it may be meaningless if the end-users cannot or aren&apos;t convinced to register accounts.
    </p>

    <h3>Putting it all together</h3>

    <p>
      Which of these aspect are more important to focus on that others?
    </p>
    <p>
      I feel like short-term stability is the most important one to focus on,
      especially if the lack of stability can cause a lot of distrust in end-users that can be hard or impossible to regain.
    </p>

    <p>
      The second most important aspect is the reality that you may only be a footnote in the history of the technology you are working on.
      Trust in others and multiply your footprint by inspiring them to become better architects.
    </p>

    <p>
      Learn what is most important to the organization, and once you know what that is, make sure you are able to measure that it&apos;s not getting worse over time.
    </p>

    <p>
      Once you know what is the most important part of the technology, isolate it from other parts that are not as important,
      and allow them to grow independently of each other.
    </p>
  </Fragment>
}
