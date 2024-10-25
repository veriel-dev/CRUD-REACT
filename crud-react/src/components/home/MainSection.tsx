import { FaqSection } from "./FaqSection"
import { FeatureSection } from "./FeatureSection"
import { HeroBanner } from "./HeroBanner"


export const MainSection = () => {
    return (
        <main className="container mx-auto px-6 pt-16 pb-24">
            <HeroBanner />
            <FeatureSection />
            <FaqSection />
        </main>
    )
}
