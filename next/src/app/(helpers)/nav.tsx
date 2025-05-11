import Link from "next/link";

const LINK_STYLE = "p-25"

export const NavBar = () => 
    <nav className="inline-block p-3">
        <Link className={LINK_STYLE} href={'/'}>Home</Link>
        <Link className={LINK_STYLE} href={'/prefetch_table'}>Prefetch</Link>
        <Link className={LINK_STYLE} href={'/client_table'}>Client</Link>
    </nav>
