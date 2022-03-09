import Layout from "../components/Layout"
import Recommendation from "../components/Recommendation"
import styles from "./recommendations.module.css"

const recs = [
  {
    "name": "Breaking systems into modules",
    "link": "https://www.tedinski.com/2018/08/14/modularity.html",
    "review": "A good overview of how you can describe modules in terms of incoming/public/private dependencies, public abstraction and private implementation.\nIt argues that making the smallest possible modules isn't always desirable because then you increase complexity in the dependency graph between modules.\n"
  },
  {
    "name": "All advice comes from a context",
    "link": "https://www.tedinski.com/2018/06/19/all-advice-has-context.html",
    "review": "Taking rules to their logical extremes seldom leads to good code.\nThe article brings up the problems with fads and how most advice doesn't apply 100% of the time.\nThe question remains on how to teach junior programmers this, since it can take a lot of time to internalize very loose rules.\n"
  },
  {
    "name": "Data as a mediator between computation and state",
    "link": "https://www.tedinski.com/2018/08/28/using-data-to-mutate-state.html",
    "review": "Mutations can be described as actions (data) which can make systems easier to test, and can make it easier to introduce changes to cross-cutting concerns.\n"
  },
  {
    "name": "Deconstructing SOLID design principles",
    "link": "https://www.tedinski.com/2019/04/02/solid-critique.html",
    "review": "SOLID principles are mostly relevant on system boundaries, yet people advocate for using them everywhere.\n"
  },
  {
    "name": "Deconstructing the \"Unix philosophy\"",
    "link": "https://www.tedinski.com/2018/05/08/case-study-unix-philosophy.html",
    "review": "The article covers the advantages of \"text as a universal interface\" and the composability of unix commands.\nIt also brings up that the division of commands may make sense from a developer point of view,\nbut interactive users are more task-oriented.\nThey don't want to have to cobble together often non-reusable shell scripts for the kind of tasks they are interested in.\nIt also contrasts \"text as a universal interface\" with \"object as a universal interface\" from PowerShell.\n"
  },
  {
    "name": "Design duality and the expression problem",
    "link": "https://www.tedinski.com/2018/02/27/the-expression-problem.html",
    "review": "APIs can be categorized based on if they guarantee extensibility through additional variants, operations or neither.\nWhatever extensibility category is promised disables adding internal changes in that category without breaking contracts.\nADTs makes the fewest amount of guarantees and therefor enables the greatest internal flexibility if that is desired.\n"
  },
  {
    "name": "Epigrams in Programming",
    "link": "https://cpsc.yale.edu/epigrams-programming",
    "review": "Some fun ideas to think about. My favorite is \"A LISP programmer knows the value of everything, but the cost of nothing.\"\nIt highlights that building extensible solutions in programming often involves disregarding runtime efficiency to a certain degree.\nA very static program can be written very efficiently, but it may not be easy to evolve it in the direction that stakeholders need it to without rewrites.\n"
  },
  {
    "name": "Patterns vs. Higher Order Functions",
    "link": "https://www.cs.oberlin.edu/~jwalker/langDesign/OO_vs_Fun/notes.html",
    "review": "Patterns and higher-order functions are two concepts used to describe the same underlying concept in functional programming and object-oriented programming.\n"
  },
  {
    "name": "Parse, don't validate",
    "link": "https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/",
    "review": "Bake assumptions into your types to make invalid programs impossible to express.\ne.g. Rather than send a list around, and verifying that it contains at least one element as a pre-condition everywhere,\ncreate a at-least-one element list, and use it everywhere that needs the pre-condition.\n"
  },
  {
    "name": "Testing at the boundaries",
    "link": "https://www.tedinski.com/2019/03/19/testing-at-the-boundaries.html",
    "review": "The article brings up that when unit testing, it doesn't usually make sense to test every class in complete isolation.\nIt is also critical of how the TDD concept has been warped over the years and that it started out as much more reasonable.\n"
  },
  {
    "name": "Testing, induction, and mocks",
    "link": "https://www.tedinski.com/2018/10/09/relationship-induction-and-tests.html",
    "review": "A critical critique of mocking and how it should be a last resort.\nCode should be structured to make mocking next to unnecessary in unit tests.\n"
  },
  {
    "name": "Types are the basic tool of software design",
    "link": "https://www.tedinski.com/2018/12/05/types-as-design-tool.html",
    "review": "Functions with a high-level of generality can sometimes make the implementation hard to write incorrectly,\nsince an incorrect implementation would have to make assumptions that weren't part of the signature.\n"
  },
  {
    "name": "Refactoring: Improving the Design of Existing Code",
    "link": "https://martinfowler.com/books/refactoring.html",
    "review": "A good reference for how, why and when to do refactoring."
  },
  {
    "name": "Designing Data-Intensive Applications",
    "link": "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    "review": "This book goes over a lot of different alternatives to storing and managing data, and discussing their trade-offs in large systems with high performance requirements.\n"
  },
  {
    "name": "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "link": "https://www.dddcommunity.org/book/evans_2003/",
    "review": "This book opened my eyes to how programming fits into organizations and their needs.\nNot as something alien to be cornered off from the organization, but as something that should constantly be involved.\nIt showed me that creativity and empathy can be really important for a programmer.\n"
  },
  {
    "name": "Effective Java",
    "link": "https://www.oreilly.com/library/view/effective-java/9780134686097/",
    "review": "A book that really highlights that to get the most from a programming languages you need to consider its' features as part of greater whole.\nSome features are useful more often than others, and some have even become obsolete over time.\nSome patterns aren't explicit language features, but should be treated as if they were.\n"
  },
  {
    "name": "Extreme Programming Explained: Embrace Change, Second Edition",
    "link": "https://www.oreilly.com/library/view/extreme-programming-explained/0321278658/",
    "review": "This book gave me insight into how it is to truly work iteratively, and what a great concept that is.\nIt helped me take one step at a time when coding, instead of attempting to make enormous changes that were never really done and slow to test.\nIt also opened my eyes to why we write user stories, and how important users really are.\n"
  },
  {
    "name": "Large-Scale C++ Software Design",
    "link": "https://www.amazon.com/Large-Scale-Software-Design-John-Lakos/dp/0201633620",
    "review": "This book opened my eyes to how seemingly small design changes can reduce compile times for C++.\nIt also taught me the importance of designing maintainable APIs.\n"
  },
  {
    "name": "Java Concurrency in Practice",
    "link": "https://jcip.net/",
    "review": "A really great overview about the concurrency primitives available in Java.\nIt also shows the advantages of using immutable data structures for concurrency\ninstead of sharing mutable state.\n"
  },
  {
    "name": "Practical Object-Oriented Design, An Agile Primer Using Ruby",
    "link": "https://www.poodr.com/",
    "review": "This book presents a good example of how to structure object-oriented code, and how to deal with testing in dynamic languages.\n"
  },
  {
    "name": "Programming in Lua",
    "link": "https://www.lua.org/pil/",
    "review": "My first introduction to a dynamic programming languages.\nI was moved by how effortlessly the author introduced concepts and built on top of those concepts without bringing up to much at the same time.\nIt also got me to appreciate the implementation simplicity of Lua.\n"
  },
  {
    "name": "Mythical Man-Month, The: Essays on Software Engineering",
    "link": "https://www.oreilly.com/library/view/mythical-man-month-the/0201835959/",
    "review": "A good historical piece of issues that plagued programming in 19th century, and that mostly still exists today but in a different shape.\nThe <a href=\"https://en.wikipedia.org/wiki/Second-system_effect\">second system effect</a> still lead to tools today that bite off more than they can chew.\n"
  },
  {
    "name": "The Pragmatic Programmer",
    "link": "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    "review": "A goodie bag of advice around software development that every software developer should read.\n"
  },
  {
    "name": "99 Bottles of OOP",
    "link": "https://sandimetz.com/99bottles",
    "review": "A great book focused around teaching object-oriented design, how it relates to TDD, and how it's better to duplicate code than use the wrong abstraction.\n"
  },
  {
    "name": "Working Effectively with Legacy Code",
    "link": "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052",
    "review": "A great cookbook for ways to improve and make changes to legacy systems.\nHighlights the importance of automated testing to improve quality over time.\n"
  },
  {
    "name": "A Philosophy of Software Design",
    "link": "https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201",
    "review": "A code quality book that focuses a lot on improving the interfaces at system boundaries.\nHas an interesting take on the value of comments.\n"
  },
  {
    "name": "David Schmitz - 10 Tips for failing badly at Microservices",
    "link": "https://www.youtube.com/watch?v=r8mtXJh3hzM",
    "review": "A funny presentation about how certain decisions can hurt more than others in preventing successful adoption of microservices.\n"
  },
  {
    "name": "YOW! 2013 - The SOLID Design Principles Deconstructed",
    "link": "https://www.youtube.com/watch?v=tMW08JkFrBA",
    "review": "The SOLID design principles as we know them aren't that useful.\nThe author breaks them down and proposes alternatives.\n"
  },
  {
    "name": "Integrated Tests Are A Scam",
    "link": "https://www.youtube.com/watch?v=VDfX44fZoMc",
    "review": "A somewhat hyperbolic talk about how integration testing between systems often break, and should in many cases be replaced with contract testing.\n"
  },
  {
    "name": "CppCon 2014 - Data-Oriented Design and C++",
    "link": "https://www.youtube.com/watch?v=rX0ItVEVjHc",
    "review": "A very though-provoking presentation about data-oriented design and how it might be useful for high-performance application.\n"
  },
  {
    "name": "Ruby on Rails demo",
    "link": "https://www.youtube.com/watch?v=Gzj723LkRJY",
    "review": "A revolutionary presentation at the time about convention-over-configuration and how to quickly develop seemingly simple applications such as CRUD and blogs.\n"
  },
  {
    "name": "OOPSLA Conference: Growing a Language",
    "link": "https://www.youtube.com/watch?v=lw6TaiXzHAE",
    "review": "A presentation about how to develop the Java programming language in the future.\nIt argues that an overly small language may not be that useful to many people.\n"
  },
  {
    "name": "Why Isn't Functional Programming the Norm?",
    "link": "https://www.youtube.com/watch?v=QyJZzq0v7Z4",
    "review": "A presentation about the history of object-oriented programming and functional programming and how they diverged.\n"
  },
  {
    "name": "Every Clojure Talk Ever",
    "link": "https://www.youtube.com/watch?v=jlPaby7suOc",
    "review": "This is a pretty funny talk about hype-driven development in Clojure.\n"
  },
  {
    "name": "Building a psychologically safe workplace",
    "link": "https://www.youtube.com/watch?v=LhoLuui9gX8",
    "review": "It's important that people feel safe that they can bring up issues.\nIf not for moral reasons, then for the fact that otherwise people don't bring up problems.\nThose problems sometimes become really big, and we really want to solve them before that happens.\n"
  },
  {
    "name": "Programming is terrible — Lessons learned from a life wasted",
    "link": "https://www.youtube.com/watch?v=csyL9EC0S0c",
    "review": "A cynical presentation about a lot of different programming aspects, mostly related to social issues.\n"
  },
  {
    "name": "Functional Design Patterns",
    "link": "https://www.youtube.com/watch?v=srQt1NAHYC0",
    "review": "A very good presentation about functional programming concepts targeted towards programmers who know object-oriented programming.\n"
  }
]


export default function Recommendations() {
  return <Layout pageTitle="Recommendations">

    <article>
      <h2>Recommendations</h2>

      <h3>Introduction</h3>

      I really like programming, and everything surrounding programming.

      I listen to youtube videos and read a lot of articles and books, and though that I could share those who have
      affected me the most and in what way.


      <h3>List</h3>

      <table className={styles.recommendationList}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        {(recs.map(r => <Recommendation key={r.name} name={r.name} link={r.link} review={r.review} />))}
      </table>

    </article>
  </Layout>
}