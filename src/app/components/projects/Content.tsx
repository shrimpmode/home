import Image from "next/image"
import github from '@/app/assets/icons/github.svg'

export const ProjectsContent = () => {
  return (
    <div className="p-4 h-full bg-[#383230] text-neutral-100 pt-16">
      <ul className="">

        <li className="mb-8">
          <div className="">
            <div className="flex gap-4">
              This Project <a href="https://github.com/shrimpmode/home" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="" />
              </a>
            </div>
            <div>
              Link: <a
                className="text-blue-500"
                href="https://home-nu-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                https://home-nu-six.vercel.app/
              </a>
            </div>
          </div>

        </li>
      </ul>
    </div>
  )
}
