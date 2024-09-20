import bioImg from '@/app/bio-img.jpg'
import Image from 'next/image'
import instagram from '@/app/assets/icons/instagram.svg'
import github from '@/app/assets/icons/github.svg'

export const Content = () => {
  return (
    <div className='h-full p-4 pt-16 bg-[#383230] text-neutral-100 flex flex-col'>
      <div className='max-w-[600px]'>

        <div className='flex-1 flex flex-col gap-6'>
          <div className='flex justify-between'>
            <div className='w-[100px]'>
              <Image src={bioImg} alt="" className='rounded-full' />
            </div>
            <div className='flex gap-4 self-end'>
              <a href="https://instagram.com/gigashrimpdv" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="" />
              </a>
              <a href="https://github.com/shrimpmode" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="" />
              </a>
            </div>
          </div>
          <div>
            <div className='text-2xl'>
              Julio Cesar Silva
            </div>
            <div>
              Software Engineer
            </div>
          </div>

          <div className='text-justify'>
            I am a software engineer working remotely from Lima, Peru.
            The technologies I am most comfortable with lately are React, Django, Typescript and Python.
          </div>

          <div className='text-justify'>
            I have worked at startups and software consulting companies. Other technologies I have worked with are Vue, Nuxt, Next, Node.
          </div>

          <div>
            When not coding, I enjoy going for walks🚶, playing games 🎮, and watching shows 🎥.
          </div>

        </div>



        <div className='mt-4'>
          <div className='text-2xl mb-2'>
            Education
          </div>
          <div className='text-sm'>
            <span className='font-semibold'> 2014-2018 </span>  BSc Computer Science, Universidad Nacional de Ingenieria, Lima, Peru.
          </div>
          <div className='text-sm'>
            <span className='font-semibold'> 2012-2013 </span> Physics Engineering, Universidad Nacional de Ingenieria, Lima, Peru.
          </div>
        </div>
      </div>
    </div>
  )
}
