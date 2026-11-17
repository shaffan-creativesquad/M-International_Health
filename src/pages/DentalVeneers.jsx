import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs, Cta } from '../components/Blocks'

export default function DentalVeneers() {
  return (
    <>
      <Seo
        title="Dental Veneers in China | Coordinated Dental Care | M International Health"
        description="Dental veneers in China with licensed partner clinics. Consultation, visits, interpreter, hotel and transfers coordinated around your travel dates by M."
        path="/dental-veneers"
      />

      <section className="page-hero lattice">
        <div className="container">
          <Crumbs
            items={[
              ['Treatments', null],
              ['Dental Veneers', null],
            ]}
          />
          <span className="eyebrow" style={{ color: 'var(--red)' }}>
            Cosmetic dentistry
          </span>
          <h1>
            Dental veneers in China, <em>planned around you.</em>
          </h1>
          <p className="lead">
            From your first consultation to your final fitting, we coordinate clinic visits, interpreters and
            your stay, so the whole trip runs on one plan.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/free-consultation">
              Get My Personalised Plan
            </Link>
            <Link className="btn ghost" to="/travel-dental">
              See a dental trip
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split wide-left">
          <div>
            <div className="ph" style={{ minHeight: '300px', marginBottom: '40px' }}>
              <span>Photo: partner clinic, supplied by M</span>
            </div>
            <h2 style={{ marginBottom: '24px' }}>What we coordinate</h2>
            <ul className="check-list cols">
              <li>Clinic shortlist and introductions</li>
              <li>Consultation and visit scheduling</li>
              <li>Interpreter at every appointment</li>
              <li>Hotel near the clinic</li>
              <li>Airport and clinic transfers</li>
              <li>Follow up support at home</li>
            </ul>
          </div>
          <div>
            <EnquiryForm
              name="veneers"
              title="Get your personalised plan"
              dark
              interest="dental-veneers"
              compact
            />
            <p className="form-note">Treatment decisions are made by your chosen licensed dentist.</p>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
