import { LeftSection } from "../section/LeftSection"
import { Section } from "../section/Section"
import { ProjectsContent } from "./Content"

export const ProjectsSection = () => {
  return (
    <Section
      leftSection={
        <LeftSection
          bg='#D5DCEB'
          title={<div className='text-neutral-700'>Projects.</div>}
        />
      }
    >
      <ProjectsContent />
    </Section>

  )
}
