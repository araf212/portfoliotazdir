import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { ATHLETE_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 relative border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Direct Communication
            </span>
            <span className="text-green-500 text-sm font-serif font-black">05</span>
          </div>
          <h2
            id="contact-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            GET IN <span className="text-green-500">TOUCH</span>
          </h2>
          <p className="max-w-md text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
            Reach out for sports inquiries, cricket practice matches, community sports events, or general connections.
          </p>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className={`p-6 rounded-3xl border backdrop-blur-sm ${
              theme === 'dark' ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-black font-heading uppercase italic tracking-tight mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                Direct Athlete Line
              </h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Feel free to connect directly via email, phone, or meet up locally in Meherpur. Always excited to discuss sports, cricket practice, and athletic opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div
                id="contact-email-card"
                className={`p-5 rounded-3xl border transition-all backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-white/5 hover:border-white/10'
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${ATHLETE_INFO.email}`}
                        className={`text-xs sm:text-sm font-bold font-mono hover:text-green-400 transition-colors ${
                          theme === 'dark' ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        {ATHLETE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-email-btn"
                    type="button"
                    onClick={() => handleCopy(ATHLETE_INFO.email, 'email')}
                    title="Copy Email Address"
                    className={`p-2 sm:px-3 sm:py-2 rounded-xl border text-[10px] font-mono uppercase font-bold flex items-center gap-1 transition-colors ${
                      copiedField === 'email'
                        ? 'bg-green-500 text-black border-green-500'
                        : theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span className="hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div
                id="contact-phone-card"
                className={`p-5 rounded-3xl border transition-all backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-white/5 hover:border-white/10'
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${ATHLETE_INFO.phone}`}
                        className={`text-xs sm:text-sm font-bold font-mono hover:text-green-400 transition-colors ${
                          theme === 'dark' ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        {ATHLETE_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-phone-btn"
                    type="button"
                    onClick={() => handleCopy(ATHLETE_INFO.phone, 'phone')}
                    title="Copy Phone Number"
                    className={`p-2 sm:px-3 sm:py-2 rounded-xl border text-[10px] font-mono uppercase font-bold flex items-center gap-1 transition-colors ${
                      copiedField === 'phone'
                        ? 'bg-green-500 text-black border-green-500'
                        : theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span className="hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div
                id="contact-location-card"
                className={`p-5 rounded-3xl border transition-all backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-white/5 hover:border-white/10'
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                      Current Base
                    </span>
                    <span className={`text-xs sm:text-sm font-bold font-heading uppercase ${
                      theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {ATHLETE_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick response note */}
            <div className={`p-4 rounded-3xl border text-xs leading-relaxed ${
              theme === 'dark' ? 'bg-zinc-900/30 border-white/5 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600'
            }`}>
              <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-green-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Responsive & Ready</span>
              </div>
              Tazdir welcomes connections from fellow athletes, sports clubs, coaches, and college peers.
            </div>

          </div>

          {/* Right Column: Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-container"
              className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-sm shadow-xl ${
                theme === 'dark'
                  ? 'bg-zinc-900/40 border-white/5 shadow-black/40'
                  : 'bg-white border-zinc-200 shadow-zinc-200/50'
              }`}
            >
              <h3 className={`text-xl sm:text-2xl font-black font-heading uppercase italic tracking-tight mb-1.5 ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium">
                Fill out the form below to initiate communication.
              </p>

              {isSubmitted ? (
                /* Honest Success & Direct Communication Modal / Banner */
                <div
                  id="contact-submit-success"
                  className={`p-6 sm:p-8 rounded-3xl border text-center space-y-4 ${
                    theme === 'dark'
                      ? 'bg-zinc-950 border-green-500/30 text-zinc-300'
                      : 'bg-green-50 border-green-200 text-zinc-800'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-500 text-black flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg font-black font-heading uppercase italic text-green-500">
                    Message Prepared!
                  </h4>

                  <p className="text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-bold text-white">{formData.name}</span>!
                  </p>

                  <div className={`p-4 rounded-2xl text-xs text-left max-w-md mx-auto border ${
                    theme === 'dark' ? 'bg-zinc-900/80 border-white/5' : 'bg-white border-green-100'
                  }`}>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-green-400 mb-1">Direct Delivery Note:</p>
                    <p className="text-zinc-400 text-xs">
                      You can launch your email client immediately with your composed message:
                    </p>
                    <div className="mt-3">
                      <a
                        id="contact-mailto-action"
                        href={`mailto:${ATHLETE_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 transition-colors shadow-sm cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open In Email Client</span>
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className={`text-xs underline font-semibold transition-colors cursor-pointer ${
                      theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
                    }`}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2"
                      >
                        Your Name <span className="text-green-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Rahul Chowdhury"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition-colors outline-none ${
                          errors.name
                            ? 'border-rose-500 bg-rose-500/5'
                            : theme === 'dark'
                            ? 'bg-zinc-950 border-white/10 text-white placeholder-zinc-600 focus:border-green-500'
                            : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-green-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2"
                      >
                        Your Email <span className="text-green-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition-colors outline-none ${
                          errors.email
                            ? 'border-rose-500 bg-rose-500/5'
                            : theme === 'dark'
                            ? 'bg-zinc-950 border-white/10 text-white placeholder-zinc-600 focus:border-green-500'
                            : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-green-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2"
                    >
                      Subject <span className="text-green-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Cricket practice match inquiry"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition-colors outline-none ${
                        errors.subject
                          ? 'border-rose-500 bg-rose-500/5'
                          : theme === 'dark'
                          ? 'bg-zinc-950 border-white/10 text-white placeholder-zinc-600 focus:border-green-500'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-green-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2"
                    >
                      Your Message <span className="text-green-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border transition-colors outline-none resize-none ${
                        errors.message
                          ? 'border-rose-500 bg-rose-500/5'
                          : theme === 'dark'
                          ? 'bg-zinc-950 border-white/10 text-white placeholder-zinc-600 focus:border-green-500'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-green-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-black font-heading uppercase italic tracking-wider text-xs text-black bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
