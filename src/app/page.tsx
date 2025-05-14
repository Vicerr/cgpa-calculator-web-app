import Link from "next/link"

export default function Home() {
    return (
        <>
            <p>navigaite to this route</p>
            <Link href="session/1">go to first session</Link>
        </>
    )
}
