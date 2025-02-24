"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => alert("Message Sent!");

  return (
    <motion.section
      className="py-16  bg-gray-100 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-primary mb-8">{t("formText")}</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="relative">
            <input
              {...register("name", { required: true })}
              placeholder={t("name")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none shadow-sm transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{t("NameError")}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder={t("email")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none shadow-sm transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{t("EmailError")}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            {...register("message", { required: true })}
            placeholder={t("message")}
            className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none shadow-sm transition-all resize-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{t("MessageError")}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-secondary text-white rounded-lg font-semibold shadow-md transition-all hover:shadow-lg hover:bg-opacity-90"
        >
          {t("sendButton")}
        </button>
      </form>
    </motion.section>
  );
}
