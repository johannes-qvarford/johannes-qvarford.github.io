import { Fragment } from "react"
import ProjectSummary from "./components/ProjectSummary"

const post = {
  component: Component,
  metadata: {
    title: "A Case-Based Reasoning Approach to A Chess AI Using Shallow Similarity",
    slug: "case-based-reasoning",
    date: "2015-11-02"
  }
}

export default post

function Component() {
  return <Fragment>
    <h3>Abstract</h3>

    <p>Chess is a game that is often used to examine different techniques in AI.
      In this thesis, the following question is asked:
      &quot;Is it possible to develop an AI-agent whose decision making is based on the technique Case-based Reasoning (CBR) that uses shallow similarity, and plays better using case bases based on the better players?&quot;.
      An AI-agent has been developed that has played a number of games against itself using different case bases based on different players.
      After examining the results, it turned out that the AI-agent plays so bad that it almost never manages to win regardless of case base,
      which meant that it was not possible to grade them based on skill.
      It&apos;s could still be useful to examine if a CBR-based chess playing AI-agent could play chess with great skill.</p>

    <p>The whole <a href="http://urn.kb.se/resolve?urn=urn:nbn:se:his:diva-11049">thesis report</a> is available for download.</p>

    <ProjectSummary language="C#" year={2015} group="HiS"/>

    <h3>Programming Experience</h3>

    <p>This project was very interesting to work with because it gave me a chance to program in a more functional style than I&apos;ve previously been used to.
      Immutable Classes were written, and their public interfaces were severely restricted to the bare minimum, which made it harder to write bug ridden code.
      Almost everything chess related was unit tested, and I never even ran the program before all the tests passed.</p>

    <p>While this may have been working great in the beginning, I was soon faced with a performance problem, mostly related to unnecessary and expensive allocations of lists and boards.
      In order to fix the problem, I changed the representation and implementation of some classes without changing their public interfaces.
      This allowed me to test any changes I made, to make sure that I didn&apos;t introduce a bug.</p>

    <p>So, in the end I introduced mutability in order to solve the problem.
      However, that doesn&apos;t mean that it was a waste of time to program functionally at the start.</p>

    <ul>
      <li>The immutability caused the class interfaces to shrink, which sped up the initial testing process.</li>
      <li>Even if the initial implementation and representations where replaced, they were quick to develop, and led to clearer code.</li>
      <li>Due to the non-existence of mutable state-sharing, it was easy to scale the program to simulate multiple chess games in parallel using PLINQ.</li>
    </ul>

    <p>This experience has lead me to develop in a more functional style, and writing more unit tests.
      Unfortunately, sometimes the pros aren&apos;t worth it on short projects with rapidly changing requirements.
      It&apos;s important to be pragmatic, and use the right tool for the right job.</p>
  </Fragment>
}

