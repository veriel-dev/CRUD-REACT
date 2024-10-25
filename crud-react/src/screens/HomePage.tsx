import { MainSection, Navigation, Footer } from "../components"


export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b bg-gray-900">
            <Navigation />
            <MainSection />
            <Footer />
        </div>
    )
}
