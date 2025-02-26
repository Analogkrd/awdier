import { useTranslations } from 'next-intl';
import React from 'react'

interface Journey {
    id: number,
    year: string,
    event: string
}
export default function OurJourney() {
    const t = useTranslations('OurJourney');
    const journey = t.raw('list');
  return (
    <section className="py-16 bg-white text-center rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-primary mb-8">{t('title')}</h2>
      <div className="border-l-4 border-green-500 ml-4 ">
        {journey.map((milestone: Journey, index:number) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold text-green-600">
              {milestone.year}
            </h3>
            <p className="text-gray-700">{milestone.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
