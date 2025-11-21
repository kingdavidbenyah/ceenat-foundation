"use client";

import { useState, FormEvent } from "react";
import Button from "./ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Your message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // TODO: hook up to backend or email service
      console.log("Contact form submitted", form);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full shadow shadow-sm border border-gray-4 rounded-[16px] gap-4 p-6 bg-white">
      <h3 className="text-[16px] md:text-xl font-bold">Send us a message</h3>
      <p className="text-sm text-gray-600">
        Have a question, suggestion, or want to partner with us? Fill out the
        form below and we will get back to you.
      </p>
      <form
        className="flex flex-col gap-4 mt-2"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`w-full rounded-[12px] border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:border-primary-default focus:ring-primary-default ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-800">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-[12px] border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:border-primary-default focus:ring-primary-default ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-800"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            className={`w-full rounded-[12px] border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:border-primary-default focus:ring-primary-default ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="How can we help?"
          />
          {errors.subject && (
            <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`min-h-[120px] w-full rounded-[12px] border px-3 py-2 text-sm outline-none bg-white resize-none focus:ring-2 focus:border-primary-default focus:ring-primary-default ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your message here"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit + status */}
        <div className="mt-2 flex flex-col gap-2">
          <Button
            type="submit"
            text={isSubmitting ? "Sending..." : "Send Message"}
            variant="default"
            disabled={isSubmitting}
          />
          {submitted && (
            <p className="text-xs text-green-600">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
