import Link from "next/link";

export const Header = () => {
    return (
        <header className='fixed right-0 p-4 text-neutral-50'>
            <nav>
                <ul className='flex gap-4'>
                    <li>
                        <Link href='/'>Bio</Link>
                    </li>
                    <li>
                        <Link href='experience'>Experience</Link>
                    </li>
                    <li>
                        <Link href='projects'>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}