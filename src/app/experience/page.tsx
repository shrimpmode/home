import {BioSection} from "@/app/components/bio/BioSection";
import {ExperienceSection} from "@/app/components/experience/ExperienceSection";

export default function Home() {
    return (
        <main className="h-screen w-screen">
            <ExperienceSection key='experience-section' />
        </main>
    );
}