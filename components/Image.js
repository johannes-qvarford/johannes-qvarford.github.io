import NextImage from "next/image"

const myLoader = ({ src }) => {
  return `${src}`
}

export default function Image(props) {
  return <NextImage loader={myLoader} {...props} />
}