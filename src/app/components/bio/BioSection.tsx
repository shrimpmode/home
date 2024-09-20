import { Section } from "@/app/components/section/Section";
import { LeftSection } from "@/app/components/section/LeftSection";
import { Content } from "@/app/components/bio/Content";

export const BioSection = () => {
  return (
    <Section
      leftSection={
        <LeftSection
          bg='#C9E4DE'
          title={<div className='text-neutral-900'>Bio</div>}
        />
      }
    >
      <Content />
    </Section>
  )
}
