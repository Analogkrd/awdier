import { useTranslations } from 'next-intl';
import React from 'react'
import { FaBullseye, FaEye } from 'react-icons/fa';

export default function MissionVision() {
      const b = useTranslations("BusinessDetails");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-7xl mx-auto p-4">
          <div className="bg-white p-6 shadow-md rounded-lg">
              <FaEye className="text-5xl text-secondary  mx-auto" />
        <h2 className="text-xl font-semibold py-3 pb-5 text-center text-primary">{b("mission")}</h2>
        <p className="text-gray-600 text-center">{b("missionText")}</p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <FaBullseye className="text-5xl text-secondary  mx-auto" />
        <h2 className="text-xl font-semibold py-3 pb-5 text-center text-primary">
          {b("vision")}
        </h2>
        <p className="text-gray-600 text-center">{b("visionText")}</p>
      </div>
    </div>
  );
}
