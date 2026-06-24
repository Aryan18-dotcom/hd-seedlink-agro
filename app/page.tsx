import Loader from './Components/Loader'
import AboutSection from './Components/AboutSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import ServiceSection from './Components/ServiceSection'
import TeamSection from './Components/TeamSections'

const page = () => {
  return (
    <div className='min-h-screen bg-neutral-100'>
      <Loader />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page