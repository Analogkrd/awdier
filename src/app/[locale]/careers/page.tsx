"use client";

import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  competencies?: string[];
  kpis?: string[];
  email: string;
}

export default function CareersPage() {
  const t = useTranslations("Careers");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = t.raw("jobs");

  return (
    <>
      <Section section="Careers" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("intro")}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer border border-gray-100 hover:border-secondary transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <HiOutlineBriefcase className="text-2xl text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <HiOutlineLocationMarker className="text-lg" />
                <span>{job.location}</span>
              </div>

              <p className="text-gray-600 line-clamp-3">{job.description}</p>

              <button className="mt-4 text-secondary font-semibold hover:text-primary transition-colors">
                {t("viewDetails")} &rarr;
              </button>
            </motion.div>
          ))}
        </div>

        {/* Job Details Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-secondary text-white p-6 rounded-t-2xl">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
                  >
                    <IoMdClose />
                  </button>
                  <h2 className="text-2xl font-bold pr-8">{selectedJob.title}</h2>
                  <div className="flex items-center gap-2 mt-2 text-white/90">
                    <HiOutlineLocationMarker />
                    <span>{selectedJob.location}</span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-gray-700">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-secondary rounded-full"></span>
                      {t("responsibilities")}
                    </h3>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-secondary mt-1.5">&#8226;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-secondary rounded-full"></span>
                      {t("qualifications")}
                    </h3>
                    <ul className="space-y-2">
                      {selectedJob.qualifications.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-secondary mt-1.5">&#8226;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedJob.competencies && selectedJob.competencies.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-secondary rounded-full"></span>
                        {t("competencies")}
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.competencies.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-secondary mt-1.5">&#8226;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Apply Section */}
                  <div className="bg-gray-50 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {t("applyTitle")}
                    </h3>
                    <p className="text-gray-600 mb-4">{t("applyText")}</p>
                    <a
                      href={`mailto:${selectedJob.email}`}
                      className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
                    >
                      <HiOutlineMail className="text-xl" />
                      {selectedJob.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
