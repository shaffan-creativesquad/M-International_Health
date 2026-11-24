import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TravelHealthCheckup from './pages/TravelHealthCheckup'
import MedicalTranslation from './pages/MedicalTranslation'
import CrossBorderCoordination from './pages/CrossBorderCoordination'
import ComplexCaseCoordination from './pages/ComplexCaseCoordination'
import HealthCheckups from './pages/HealthCheckups'
import DentalVeneers from './pages/DentalVeneers'
import MedicalTreatment from './pages/MedicalTreatment'
import HowItWorks from './pages/HowItWorks'
import Concierge from './pages/Concierge'
import About from './pages/About'
import FaqPage from './pages/FaqPage'
import FreeConsultation from './pages/FreeConsultation'
import ThankYou from './pages/ThankYou'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/travel-health-checkup" element={<TravelHealthCheckup />} />
        <Route path="/medical-translation" element={<MedicalTranslation />} />
        <Route path="/cross-border-coordination" element={<CrossBorderCoordination />} />
        <Route path="/complex-case-coordination" element={<ComplexCaseCoordination />} />
        <Route path="/health-checkups" element={<HealthCheckups />} />
        <Route path="/dental-veneers" element={<DentalVeneers />} />
        <Route path="/medical-treatment" element={<MedicalTreatment />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/free-consultation" element={<FreeConsultation />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
