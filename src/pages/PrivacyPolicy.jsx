import Seo from '../components/Seo'
import { Crumbs } from '../components/Blocks'
import { openCookieSettings } from '../lib/site'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | M Global Health, Inc."
        description="How M Global Health, Inc. collects, uses and protects personal information."
        path="/privacy-policy"
      />

      <section className="section">
        <div className="container legal">
          <Crumbs items={[['Privacy Policy', null]]} />
          <h1 style={{ fontSize: '2.6rem', marginBottom: '24px' }}>Privacy Policy</h1>
          <div className="template-note">
            <b>Template for review.</b> This text is a starting structure only. It must be reviewed and
            approved by M Global Health, Inc. and its legal adviser before the site goes live, including the
            items in [square brackets].
          </div>
          <p>
            <b>Last updated:</b> [date]
          </p>
          <h2>Who we are</h2>
          <p>
            M Global Health, Inc. ("M", "we", "us") is a private concierge and care coordination
            service. Contact: [privacy email].
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>
              Details you give us through our forms: name, email, phone or WhatsApp number, country, the
              service you are interested in, preferred travel dates and any message you send.
            </li>
            <li>
              Information you choose to share later during care coordination, which may include health
              information. We only collect this with your explicit consent.
            </li>
            <li>Website usage data collected through cookies, only where you have agreed to them.</li>
          </ul>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and coordinate your care journey.</li>
            <li>
              To share relevant details with healthcare providers and travel partners you choose, with your
              consent.
            </li>
            <li>
              To improve our website and measure our advertising, where you have accepted analytics and
              advertising cookies.
            </li>
          </ul>
          <h2>Legal basis</h2>
          <p>
            [To be confirmed by M's legal adviser, including the basis for processing data of visitors from
            the United Kingdom and the European Union under the UK GDPR and EU GDPR, and explicit consent for
            any health information.]
          </p>
          <h2>Sharing your information</h2>
          <p>
            We share information only with healthcare providers and travel partners involved in your care
            journey, with your consent, and with service providers that help us run our business, such as
            website hosting, email and analytics. We do not sell personal information.
          </p>
          <h2>International transfers</h2>
          <p>
            [Describe how information is transferred between Europe, the United States and China, and the
            safeguards used.]
          </p>
          <h2>How long we keep information</h2>
          <p>[Retention periods to be confirmed.]</p>
          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, delete or restrict the use
            of your information, to withdraw consent and to complain to your local data protection authority.
            Contact us at [privacy email] to make a request.
          </p>
          <h2>Cookies</h2>
          <p>
            We use essential cookies to run this site. Analytics and advertising cookies, including Google
            Analytics, Google Ads and Meta Pixel, are used only if you accept them. You can change your choice
            at any time through{' '}
            <a href="#" onClick={openCookieSettings}>
              Cookie settings
            </a>
            .
          </p>
          <h2>Contact</h2>
          <p>[privacy email]</p>
        </div>
      </section>
    </>
  )
}
