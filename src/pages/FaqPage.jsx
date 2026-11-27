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
          text: 'No. M Global Health, Inc. is an international patient coordination service. We coordinate records, appointments, translation, and travel. Licensed healthcare professionals and medical institutions make all medical decisions and provide all treatment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the free consultation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It's a care coordination call about your goals, dates, and options. It isn't a medical consultation or diagnosis. It helps us understand your needs and recommend the right next step.",
        },
      },
      {
        '@type': 'Question',
        name: 'Which countries do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We support international patients from around the world seeking medical care in China, whether that's a written second opinion from home or a coordinated trip to China.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a second opinion without traveling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Our online medical second opinion is a written, records-based review by a specialist in China. There's no travel and no video visit, and you can share the written opinion with your own doctor.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a visa to visit China?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entry rules will vary according to your nationality and the purpose of your visit, and they are subject to change. Always check the most up-to-date requirements with the Chinese Embassy in your country before traveling to China.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will someone speak English with me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have a dedicated bilingual coordinator to support you throughout your trip, and we will have professional medical interpreting arranged for you for any appointments where that is required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a family member travel with me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Our international medical concierge can look after your companion's stay as well as yours, including accommodation and transfers.",
        },
      },
      {
        '@type': 'Question',
        name: 'How is pricing confirmed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You get a clear service plan and an estimate of the costs in writing before travel. The final treatment cost will be at the discretion of the hospital and will be confirmed by the hospital.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are travel and hotel costs included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Travel, accommodation, and local transport are all arranged via reputable partners and are shown in your estimated costs. You pay the hospital, treatment, and travel costs directly to the providers as part of your own out-of-pocket costs, separately from our service fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens after I return home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We'll help you to collect your reports and keep you in touch with your provider so that your healthcare in China continues seamlessly once you're back home.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I share my medical records safely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Please don't send your records via our enquiry form. Once we've agreed a service, we'll let you know precisely how you can send your records securely.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do my medical records need translating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not in all cases. We look at your records first to establish what needs translating and then provide a separate quote for our medical record translation services so you can make your decision prior to any translation taking place.',
        },
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ | Medical Care in China for Foreigners | M Global Health, Inc."
        description="Answers to common questions about medical care in China for foreigners: second opinions, visas, language support, pricing, records, companions, and how M's coordination works."
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
          <p className="lead">
            Everything you need to know about medical care in China for foreigners. Can't find your answer?
            Ask us in a free care coordination consultation.
          </p>
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
                  'No. M Global Health, Inc. is an international patient coordination service. We coordinate records, appointments, translation, and travel. Licensed healthcare professionals and medical institutions make all medical decisions and provide all treatment.',
                ],
                [
                  'What is the free consultation?',
                  "It's a care coordination call about your goals, dates, and options. It isn't a medical consultation or diagnosis. It helps us understand your needs and recommend the right next step.",
                ],
                [
                  'Which countries do you serve?',
                  "We support international patients from around the world seeking medical care in China, whether that's a written second opinion from home or a coordinated trip to China.",
                ],
                [
                  'Can I get a second opinion without traveling?',
                  "Yes. Our online medical second opinion is a written, records-based review by a specialist in China. There's no travel and no video visit, and you can share the written opinion with your own doctor.",
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
                  'Entry rules will vary according to your nationality and the purpose of your visit, and they are subject to change. Always check the most up-to-date requirements with the Chinese Embassy in your country before traveling to China.',
                ],
                [
                  'Will someone speak English with me?',
                  'Yes, we have a dedicated bilingual coordinator to support you throughout your trip, and we will have professional medical interpreting arranged for you for any appointments where that is required.',
                ],
                [
                  'Can a family member travel with me?',
                  "Yes. Our international medical concierge can look after your companion's stay as well as yours, including accommodation and transfers.",
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
                  'You get a clear service plan and an estimate of the costs in writing before travel. The final treatment cost will be at the discretion of the hospital and will be confirmed by the hospital.',
                ],
                [
                  'Are travel and hotel costs included?',
                  'Travel, accommodation, and local transport are all arranged via reputable partners and are shown in your estimated costs. You pay the hospital, treatment, and travel costs directly to the providers as part of your own out-of-pocket costs, separately from our service fees.',
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
                  "We'll help you to collect your reports and keep you in touch with your provider so that your healthcare in China continues seamlessly once you're back home.",
                ],
                [
                  'How do I share my medical records safely?',
                  "Please don't send your records via our enquiry form. Once we've agreed a service, we'll let you know precisely how you can send your records securely.",
                ],
                [
                  'Do my medical records need translating?',
                  'Not in all cases. We look at your records first to establish what needs translating and then provide a separate quote for our medical record translation services so you can make your decision prior to any translation taking place.',
                ],
              ]}
            />
          </div>
        </div>
      </section>

      <Cta
        title="Still have a question?"
        text="Ask our care coordination team about medical care in China for foreigners. We reply within one business day."
      />
    </>
  )
}
