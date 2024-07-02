import {Section} from "@/app/components/section/Section";
import {LeftSection} from "@/app/components/section/LeftSection";
import {Content} from "@/app/components/experience/Content";

export const ExperienceSection = () => {
    return (
        <div className='h-screen' id='experience'>
            <Section leftSection={
                <LeftSection bg='#E09132' title='Experience.' />
            }>
                <Content />
            </Section>
        </div>
    )
}