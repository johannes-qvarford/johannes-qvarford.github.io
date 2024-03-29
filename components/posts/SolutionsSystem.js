import { Fragment } from "react"
import Link from "next/link"
import ProjectSummary from "./components/ProjectSummary"
import styles from "./css/one-image-article.module.css"

const post = {
  component: Component,
  metadata: {
    title: "Solutions System",
    slug: "solutions-system",
    date: "2017-11-25"
  }
}

export default post

function Component() {
  return <Fragment>
    <div className={styles.titleImages}>
      <img src="/assets/solutions-skovde.png" title="Solutions Skövde logo" alt="two braces within a circle forming an s within their empty space." />
    </div>

    <ProjectSummary languages={["C#", "Powershell", "Javascript"]} year={2017} group="Solutions Skövde" groupType="Company" />

    <h3>Introduction</h3>

    <p>Solutions System is a framework I developed for quickly creating new apps for one of our clients.
      It uses a loosely coupled plugin system to allow for app uniformity and flexibility while preventing package bloat.
      It&apos;s written in C# and distributed as nuget packages.
      The tools for creating new apps are written in Javascript and Powershell, and Chocolatey is used for tool installation.</p>

    <h3>Purpose</h3>

    <p>We developed a lot of small apps for our client over time, but at one point we realized that it was infeasible to continue as usual.
      The problems were numerous:</p>

    <ul>
      <li><p>Every app looked different. Since there was no one established way to implement certain features, they were implemented differently. This made it hard to maintain them, as a developer had to be familiar with a particular app to effectively debug and extend it.</p></li>
      <li><p>Improvements didn&apos;t propagate to previously developed  apps. Since each app was different from the other, it was hard and time consuming to propagate improvements and bug fixes back to older apps. Because of this, not a lot of them were propagated at all, increasing the feature gap and overall difference between different apps.</p></li>
      <li><p>Creating new apps were time consuming and error prone. Every app included a lot of boilerplate, and the only way to speed up the app creation process was to copy paste projects and perform solution wide renames, which didn&apos;t always work correctly. Creating a project in our version control repository wasn&apos;t a problem, but adding IIS sites and apps sometimes went wrong, leading to hours of debugging.</p></li>
    </ul>


    <p>This might have been fine if we developed relatively few projects that didn&apos;t need continuous maintenance, but for our purposes it was a disaster.</p>

    <h3>Early stages</h3>

    <p>We initially tried to solve the problem with half-baked solutions.
      The initial nuget packages were built as we went along, didn&apos;t follow strong enough conventions, and all packages ultimately depended on each other while still giving little room for flexibility of the http request pipeline.
      It was decided that I should make a dedicated effort to build a system that would stand the test of time.</p>

    <h3>The system</h3>

    <p>The solution that I devised was the Solutions System (SS), a web development framework layered upon aspnet core.
      The system uses plugins to specify functionality, such as which classes to register for dependency injection,
      and what steps to inject into the http request pipeline and where.
      Plugins can depend on other plugins, and are resolved recursively.</p>

    <p>Plugins can also have options, and a plugin&apos;s options can be combined or overwritten by the app or other plugins.
      The database plugin e.g. can take a list of Entity Framework DbContext types, load their connection strings, register them for dependency injection and migrate them.
      A plugin for a certain database would just indicate that it wanted to add its own DbContext to the database plugin&apos;s options.</p>

    <p>A main plugin was written that bundled things like authorization, email, logging and options that most apps needed.
      If the main plugin didn&apos;t suit a certain app, the app could use extra plugins, or an alternative bundle plugin could&apos;ve been developed that met its needs better.</p>

    <h3>Libraries</h3>

    <p>Libraries were organized based on dependencies, purpose and feature.
      You had extension (Ext) libraries that simple extended a few types from a library, and then you had service (Serv) libraries that included interfaces and classes that could be dependency injected.
      Database (Db) libraries included Entity Framework classes to create database apis and plugin (Plug) libraries used Serv and Db libraries to create plugins.</p>

    <p>There were a lot of different libraries to keep track off, so to stop apps from having long confusing lists of dependencies, that complexity was moved to a msbuild props file that all projects referenced.
      They just indicated what they wanted to use, like Bricknode Foundation System (BFS) integration or Ratsit integration, and the props file figured out what packages were needed.
      It was still a manual process to copy paste the props file whenever it was updated, but it was better than the alternative of having to look through every app&apos;s csproj file.</p>

    <h3>Tools</h3>

    <p>Since many new developers were working for our client, we needed to be able to setup their development environment quickly and allow them to create new apps easily.
      I developed tools to solve this problem.</p>

    <p>The tools were written in Powershell because they used some Windows specific functionality, and Javascript because there was a good project generator package available on npm, but not on nuget.
      All a user had to do to create an app was to give a basic name to the project, give a title and subtitle, indicate what IIS site/app to create, and what url the project should be reachable from.
      Once the project was created, they could add and remove plugins however they felt like and be ready to publish instantly.</p>

    <h3>Downsides</h3>

    <p>The system worked better than expected, but there were still some minor problems with it.</p>

    <p>The system makes it easier to create common apps with smaller amounts of code, but there is a lot to learn on top of having to learn aspnet core.
      Setting up the development environment sometimes causes problems too.</p>

    <p>The props file is not propagated automatically which could&apos;ve been solved by downloading it and replacing the old file on checkout and commit.
      Alternatively, the file could be uploaded as a nuget package and referred to through an Import element with an SDK attribute.
      Read more about it in <Link href="https://github.com/Microsoft/msbuild/issues/1493">MSBuild 15 Sdk Design</Link>.
      Using both Powershell and Javascript was unfortunate, but there was no immediate solutions available for dotnet project generation.</p>

    <p>On second though, most things could&apos;ve been solved with a web app that creates the version control project, IIS apps and sites, and lets the developer download a zip file containing the newly created project.
      The web app cannot setup the developer&apos;s development environment, but it can generate a scaled down Powershell script that does.</p>

    <p>Certain common patterns started to emerge in apps to do simple things, and that should probably have been abstracted, even if it would&apos;ve introduced redundancies in the system.</p>
  </Fragment>
}

