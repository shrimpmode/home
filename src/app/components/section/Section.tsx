type SectionProps = {
  children: React.ReactNode
  leftSection: React.ReactNode
}
export const Section = ({
  leftSection,
  children }: SectionProps) => {

  return (
    <section className='h-screen w-screen flex'>
      {leftSection}
      <div className="hidden md:block flex-1">

      </div>
      <div className='flex-1 justify-end'>
        {children}
      </div>
    </section >
  )
}
