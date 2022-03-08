import { Fragment } from "react";

export default function TechStackEntry({ name, stack }) {
  return <Fragment>
    <h5>Backend</h5>

    <dl>
      <Section section={stack.backend.implementation} />
      <Section section={stack.backend.testing} />
    </dl>

    <h5>Frontend</h5>

    <dl>
      <Section section={stack.frontend.implementation} />
      <Section section={stack.frontend.testing} />
    </dl>

    <h5>Infrastructure</h5>

    <dl>
      <Section section={stack.infrastructure} />
    </dl>

  </Fragment>
}

function Section({ section }) {
  return Object.entries(section).map(([category, value]) => {
    return <Row key={category} category={category} value={value} />
  })
}

function Row({ category, value }) {
  return <Fragment>
    <dt>{category}</dt>
    <dd>{value}</dd>
  </Fragment>
}