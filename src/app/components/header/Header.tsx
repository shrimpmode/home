import Link from "next/link";

export const Header = () => {
  return (
    <header className='fixed text-neutral-50 right-0'>
      <nav className="w-[50vw]">
        <div className="max-w-[600px] flex justify-end p-4">
          <ul className='flex gap-8'>
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
        </div>
      </nav>
    </header>
  )
}
