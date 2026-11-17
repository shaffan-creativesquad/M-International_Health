import Seo from '../components/Seo'
import { Crumbs, Cta, Faq } from '../components/Blocks'

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does M provide medical treatment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. M International Health is a healthcare navigation and care coordination service. Treatment is provided by independent licensed healthcare providers in China. We coordinate everything around your care and do not give medical advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the free consultation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a care coordination consultation about your goals, preferred dates and options, and how we can help. It is not a medical consultation or a diagnosis.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which countries do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We currently focus on patients travelling from the United Kingdom, Ireland and the Netherlands, and welcome enquiries from other European countries.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a visa to visit China?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Under China's current visa-free policy, citizens of the UK, Ireland and the Netherlands can visit for up to 30 days without a visa. Entry rules can change, so always check the latest requirements with the Chinese embassy before you book.",
        },
      },
      {
        '@type': 'Question',
        name: 'Will someone speak English with me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We arrange interpreter support for your appointments, and our care coordination team communicates with you in English.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a family member travel with me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We can plan accommodation and transport for a companion alongside your own itinerary.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is pricing confirmed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Treatment prices are set by your chosen provider. You receive a clear quote and itinerary before you book flights, so you know what is included.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are travel and hotel costs included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your quote sets out exactly which travel and accommodation services are included, so there are no surprises later.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens after I return home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help you collect your reports and stay connected with your provider for follow up questions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I share my medical records safely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After your consultation, your care coordination team explains how to share records securely. Please do not send detailed medical information through the website form.',
        },
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ | Medical Travel to China Questions Answered | M International Health"
        description="Answers to common questions about medical travel to China: visas, language support, pricing, safety, companions, aftercare and how M's care coordination works."
        path="/faq"
        schema={SCHEMA}
      />

      <section className="page-hero lattice">
        <div className="container">
          <Crumbs items={[['FAQ', null]]} />
          <span className="eyebrow">FAQ</span>
          <h1>
            Questions, <em>answered.</em>
          </h1>
          <p className="lead">Can't find what you need? Ask us in a free care coordination consultation.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="faq-group" style={{ marginTop: '0' }}>
            <h2>About M</h2>
            <Faq
              items={[
                [
                  'Does M provide medical treatment?',
                  'No. M International Health is a healthcare navigation and care coordination service. Treatment is provided by independent licensed healthcare providers in China. We coordinate everything around your care and do not give medical advice.',
                ],
                [
                  'What is the free consultation?',
                  'It is a care coordination consultation about your goals, preferred dates and options, and how we can help. It is not a medical consultation or a diagnosis.',
                ],
                [
                  'Which countries do you serve?',
                  'We currently focus on patients travelling from the United Kingdom, Ireland and the Netherlands, and welcome enquiries from other European countries.',
                ],
              ]}
            />
          </div>
          <div className="faq-group">
            <h2>Planning your trip</h2>
            <Faq
              items={[
                [
                  'Do I need a visa to visit China?',
                  "Under China's current visa-free policy, citizens of the UK, Ireland and the Netherlands can visit for up to 30 days without a visa. Entry rules can change, so always check the latest requirements with the Chinese embassy before you book.",
                ],
                [
                  'Will someone speak English with me?',
                  'Yes. We arrange interpreter support for your appointments, and our care coordination team communicates with you in English.',
                ],
                [
                  'Can a family member travel with me?',
                  'Yes. We can plan accommodation and transport for a companion alongside your own itinerary.',
                ],
              ]}
            />
          </div>
          <div className="faq-group">
            <h2>Quotes and pricing</h2>
            <Faq
              items={[
                [
                  'How is pricing confirmed?',
                  'Treatment prices are set by your chosen provider. You receive a clear quote and itinerary before you book flights, so you know what is included.',
                ],
                [
                  'Are travel and hotel costs included?',
                  'Your quote sets out exactly which travel and accommodation services are included, so there are no surprises later.',
                ],
              ]}
            />
          </div>
          <div className="faq-group">
            <h2>Aftercare and records</h2>
            <Faq
              items={[
                [
                  'What happens after I return home?',
                  'We help you collect your reports and stay connected with your provider for follow up questions.',
                ],
                [
                  'How do I share my medical records safely?',
                  'After your consultation, your care coordination team explains how to share records securely. Please do not send detailed medical information through the website form.',
                ],
              ]}
            />
          </div>
        </div>
      </section>
      <Cta
        title="Still have a question?"
        text="Ask our care coordination team. We reply within one business day."
      />
    </>
  )
}
