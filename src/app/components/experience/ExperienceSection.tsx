import { Section } from "@/app/components/section/Section";
import { LeftSection } from "@/app/components/section/LeftSection";
import { Content } from "@/app/components/experience/Content";

export const ExperienceSection = () => {
  return (
    <div className='h-screen' id='experience'>
      <Section leftSection={
        <LeftSection bg='#C6DEF1' title={<div className="text-neutral-800">Experience.</div>} />
      }>
        <Content />
      </Section>
    </div>
  )
}
