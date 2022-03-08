import Link from "next/link";

export default function Recommendation({ name, link, review }) {
    return <tr>
        <td><Link href={link}>{name}</Link></td>
        <td>{review}</td>
    </tr>
}