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
          text: 'No. For health services, M is a coordination and concierge service. Licensed healthcare professionals and medical institutions make all medical decisions and provide all treatment.',
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
          text: "Yes. Our concierge can look after your companion's stay as well as yours, including accommodation and transfers.",
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
        title="FAQ | M Global Health, Inc. | Your Private Concierge in China"
        description="Answers to common questions about M's Business, Lifestyle and Health services in China: concierge, business visits, lifestyle experiences, medical coordination, visas, language support and pricing."
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
            Everything you need to know about M's Business, Lifestyle and Health services in China. Can't
            find your answer? Ask us in a free consultation.
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
                  'What does M do?',
                  'M Global Health, Inc. is your private concierge in China — covering Business, Lifestyle and Health. We arrange executive business visits and industry connections, premium lifestyle and travel experiences, and healthcare coordination with licensed providers in China, all with a dedicated bilingual team.',
                ],
                [
                  'What is the free consultation?',
                  "It's a conversation about your goals, dates and priorities — whether that's a business visit, a lifestyle trip, healthcare, or a combination. It isn't a medical consultation or a sales call. It helps us understand what you need and recommend the right next step.",
                ],
                [
                  'Which countries do you serve?',
                  "We support visitors and patients from around the world. Whether you are coming to China for business, a lifestyle experience or medical care, we can arrange your trip end to end.",
                ],
                [
                  'Does M provide medical treatment?',
                  'No. For health services, M is a coordination and concierge service. Licensed healthcare professionals and medical institutions make all medical decisions and provide all treatment.',
                ],
              ]}
            />
          </div>
          <div className="faq-group">
            <h2>Business services</h2>
            <Faq
              items={[
                [
                  'What business services does M arrange?',
                  'We curate executive visits, factory tours, industry introductions and business connections across China. Everything is arranged to your brief — meetings, itinerary, transport and accommodation — so you can focus on the relationship, not the logistics.',
                ],
                [
                  'Can M arrange meetings and introductions in China?',
                  'Yes. We work with our local network to arrange relevant industry introductions, business visits and executive experiences tailored to your sector and objectives.',
                ],
                [
                  'Do you work with individual executives or companies?',
                  'Both. We work with individual business travellers and with companies sending teams to China. The itinerary, group size and priorities are always tailored to the brief.',
                ],
              ]}
            />
          </div>
          <div className="faq-group">
            <h2>Lifestyle services</h2>
            <Faq
              items={[
                [
                  'What lifestyle experiences does M arrange?',
                  'Private travel, premium hotels, fine dining reservations, cultural experiences, local guides and bespoke transportation — we arrange China at its very best, tailored to your interests and schedule.',
                ],
                [
                  'Can M arrange private dining or cultural experiences?',
                  'Yes. We can arrange private dining, guided cultural and historical visits, local market tours, day trips and exclusive experiences depending on your destination and interests.',
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
                  "Yes. Our concierge can look after your companion's stay as well as yours, including accommodation and transfers.",
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
        text="Ask our concierge team about Business, Lifestyle or Health in China. We reply within one business day."
      />
    </>
  )
}
