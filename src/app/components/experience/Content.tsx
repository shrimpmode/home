import data from './experience.json'

type Experience = {
  year: number
  current: boolean
  company: string
  position: string
  stack: string[]
}

export const Content = () => {


  return (
    <div className='h-full p-4 pt-16 bg-[#383230] text-neutral-100 flex flex-col gap-8 flex-1'>
      {data.experiences.map((experience: Experience) => (
        <div key={experience.company}>
          <div>
            <div className='text-md'>
              <span className='font-semibold mr-4'>
                {experience.year} {experience.current && " - Now"}
              </span>
              {experience.company}
            </div>
            <div className='text-sm'>
              {experience.position}
            </div>
          </div>
          <div className='text-sm mt-4'>
            Tech Stack: {experience.stack.join(", ")}
          </div>
        </div>

      ))}
    </div >
  )
}
