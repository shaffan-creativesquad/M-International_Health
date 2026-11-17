import { Link, useNavigate } from 'react-router-dom'
import { FORM_ENDPOINT, pushDataLayer } from '../lib/site'

const INTERESTS = [
  ['Health Checkup', 'health-checkup'],
  ['Dental Veneers', 'dental-veneers'],
  ['Medical Treatment', 'medical-treatment'],
  ['Not sure yet', 'not-sure'],
]

// Free care coordination consultation form.
// name: unique id prefix and the form_name sent to the dataLayer
// dark: dark card style, interest: preselected option, compact: hides the optional fields
export default function EnquiryForm({
  name,
  title = 'Get your personalised care plan',
  dark = false,
  interest,
  compact = false,
}) {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    const form = e.currentTarget
    if (!form.checkValidity()) return
    const picked = form.querySelector("input[name='interest']:checked")
    pushDataLayer({
      event: 'form_submit_enquiry',
      form_name: name,
      interest: picked ? picked.value : '',
      country: form.country ? form.country.value : '',
    })
    if (FORM_ENDPOINT.indexOf('YOUR_FORM_ENDPOINT') !== -1) {
      e.preventDefault()
      navigate('/thank-you')
    }
  }

  return (
    <div className={dark ? 'form-card dark-form' : 'form-card'}>
      <span className="eyebrow">Free care coordination consultation</span>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '22px' }}>{title}</h2>
      <form
        className="enquiry"
        data-form-name={name}
        action={FORM_ENDPOINT}
        method="post"
        onSubmit={onSubmit}
      >
        <div className="form-grid">
          <div className="field">
            <label htmlFor={`${name}-first`}>First name</label>
            <input id={`${name}-first`} name="first_name" type="text" autoComplete="given-name" required />
          </div>
          <div className="field">
            <label htmlFor={`${name}-last`}>Last name</label>
            <input id={`${name}-last`} name="last_name" type="text" autoComplete="family-name" required />
          </div>
          <div className="field">
            <label htmlFor={`${name}-email`}>Email</label>
            <input id={`${name}-email`} name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor={`${name}-country`}>Country</label>
            <select id={`${name}-country`} name="country" required defaultValue="">
              <option value="">Select</option>
              <option>United Kingdom</option>
              <option>Ireland</option>
              <option>Netherlands</option>
              <option>Other European country</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field full">
            <fieldset>
              <legend>I am interested in</legend>
              <div className="pills">
                {INTERESTS.map(([label, value]) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="interest"
                      value={value}
                      defaultChecked={value === interest}
                      required
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          {!compact && (
            <>
              <div className="field">
                <label htmlFor={`${name}-month`}>Preferred travel month</label>
                <input
                  id={`${name}-month`}
                  name="travel_month"
                  type="text"
                  placeholder="For example, March"
                />
              </div>
              <div className="field">
                <label htmlFor={`${name}-phone`}>Phone or WhatsApp (optional)</label>
                <input id={`${name}-phone`} name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field full">
                <label htmlFor={`${name}-msg`}>Tell us about your goals (optional)</label>
                <textarea
                  id={`${name}-msg`}
                  name="message"
                  placeholder="Please do not include detailed medical information here. We will ask for what we need, securely, later."
                ></textarea>
              </div>
            </>
          )}
          <div className="full consent">
            <input id={`${name}-consent`} name="consent" type="checkbox" value="yes" required />
            <label htmlFor={`${name}-consent`}>
              I agree that M International Health may contact me about my enquiry and process my details as
              described in the <Link to="/privacy-policy">Privacy Policy</Link>.
            </label>
          </div>
        </div>
        <button className="btn" type="submit">
          Request My Care Plan
        </button>
        <p className="form-note">
          This is a care coordination consultation about your goals, dates and options. It is not a medical
          consultation or diagnosis. We reply within one business day.
        </p>
      </form>
    </div>
  )
}
