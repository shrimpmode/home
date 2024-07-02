type SectionProps = {
    children: React.ReactNode
    leftSection: React.ReactNode
}
export const Section = ({
                            leftSection,
                            children }: SectionProps) => {

    return (
        <section className='h-screen w-screen flex'>
            <div className='flex-1 hidden md:block'>
                {leftSection}
            </div>
            <div className='flex-1'>
                {children}
            </div>
        </section>
    )
}