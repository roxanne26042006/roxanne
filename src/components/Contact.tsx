import React, { useState } from 'react';
import { FAQ_LIST } from '../data/danceData';
import { Sparkles, MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 800);
  };

  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Povežimo se</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Kontaktirajte nas &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              posjetite naš studio
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Tu smo za sva vaša pitanja vezana uz upise, termine, privatne satove ili suradnje.
          </p>
        </div>

        {/* Contact Info & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Direct Info & Map Showcase */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className={`p-8 rounded-3xl border backdrop-blur-md space-y-6 ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Plesni Studio Roxanne
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Lokacija dvorana:</div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      Glavna plesna avenija 14, 10000 Zagreb
                    </div>
                    <div className="text-xs text-cyan-400 mt-0.5">Osiguran besplatan parking za članove</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Telefon / WhatsApp:</div>
                    <a
                      href="tel:+385912345678"
                      className="font-medium text-slate-900 dark:text-slate-100 hover:text-cyan-400 transition"
                    >
                      +385 (0)91 234 5678
                    </a>
                    <div className="text-xs text-slate-400 mt-0.5">Dostupni smo radnim danom 14:00 - 21:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">E-mail:</div>
                    <a
                      href="mailto:info@plesnagrupa-roxanne.hr"
                      className="font-medium text-slate-900 dark:text-slate-100 hover:text-cyan-400 transition"
                    >
                      info@plesnagrupa-roxanne.hr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Radno vrijeme studija:</div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      Pon – Pet: 16:30 – 22:00 <br />
                      Subota: 09:30 – 14:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Mockup */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 h-52 group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Lokacija plesnog studija Roxanne"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.8)] mb-2 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-white font-bold text-sm font-heading">Studio Roxanne Zagreb</div>
                <div className="text-xs text-cyan-300">Blizina tramvajske i autobusne stanice</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMessage}
              className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl space-y-6 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  Pošaljite nam brzi upit
                </h3>
              </div>

              {sentSuccess && (
                <div className="p-4 rounded-xl bg-teal-950/70 border border-teal-500 text-teal-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Vaša poruka je uspješno poslana! Odgovorit ćemo vam u najkraćem roku.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Vaše ime *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ime i prezime"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Vaš E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@adresa.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Tema upita
                </label>
                <input
                  type="text"
                  placeholder="Npr. Informacije o probnom treningu, audicije..."
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Vaša poruka *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Napišite nam što vas zanima..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.45)] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSending ? (
                  <span>Slanje...</span>
                ) : (
                  <>
                    <span>Pošalji poruku</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Često postavljana pitanja (FAQ)
            </h3>
            <p className="text-xs text-slate-400">
              Odgovori na najčešća pitanja roditelja i novih plesača
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-cyan-500/50 bg-slate-900/90 shadow-lg'
                      : isDarkMode
                      ? 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                      : 'border-slate-200 bg-white hover:border-cyan-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
