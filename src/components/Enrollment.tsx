import React, { useState, useEffect } from 'react';
import { DANCE_PROGRAMS } from '../data/danceData';
import { Sparkles, CheckCircle2, AlertCircle, Send, ArrowRight, ShieldCheck, Heart, User, Mail, Phone, Calendar } from 'lucide-react';

interface EnrollmentProps {
  isDarkMode: boolean;
  preselectedProgramId?: string;
}

export const Enrollment: React.FC<EnrollmentProps> = ({ isDarkMode, preselectedProgramId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    programId: preselectedProgramId || 'suvremeni-ples',
    experience: 'Početnik (bez prethodnog iskustva)',
    isTrialClass: false,
    hasFamilyMember: false,
    notes: '',
    gdprConsent: true,
  });

  useEffect(() => {
    if (preselectedProgramId) {
      if (preselectedProgramId === 'probni-sat') {
        setFormData((prev) => ({ ...prev, isTrialClass: true }));
      } else {
        setFormData((prev) => ({ ...prev, programId: preselectedProgramId }));
      }
    }
  }, [preselectedProgramId]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const selectedProgram = DANCE_PROGRAMS.find((p) => p.id === formData.programId) || DANCE_PROGRAMS[0];

  // Calculate pricing
  const basePrice = formData.isTrialClass ? 0 : selectedProgram.pricePerMonth;
  const finalPrice = formData.hasFamilyMember ? Math.round(basePrice * 0.9) : basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Molimo unesite vaše ime i prezime.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Molimo unesite valjanu e-mail adresu.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Molimo unesite kontakt broj telefona.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      programId: 'suvremeni-ples',
      experience: 'Početnik (bez prethodnog iskustva)',
      isTrialClass: false,
      hasFamilyMember: false,
      notes: '',
      gdprConsent: true,
    });
  };

  return (
    <section id="upisi" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Postani dio Roxanne obitelji</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Online Upisnica za{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              sezonu 2025/2026
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Ispunite brzi prijavni obrazac i osigurajte svoje mjesto. Za sve nove članove prvi probni sat je besplatan!
          </p>
        </div>

        {submitted ? (
          /* Confirmation Success State */
          <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-slate-900/90 border border-cyan-400/60 backdrop-blur-xl text-center space-y-6 shadow-2xl shadow-cyan-950/60 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 mx-auto flex items-center justify-center text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black font-heading text-white">
                Prijava uspješno zaprimljena!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Hvala ti, <strong className="text-cyan-300">{formData.fullName}</strong>! Tvoja upisnica za program{' '}
                <strong className="text-cyan-300">{selectedProgram.title}</strong> je zabilježena.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3 text-xs text-slate-300">
              <div className="font-bold text-cyan-400 text-sm">Što slijedi?</div>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                <li>Na e-mail <strong className="text-white">{formData.email}</strong> poslat ćemo ti potvrdu i detaljan raspored prvog sata.</li>
                <li>Naš tim će te kontaktirati putem telefona za potvrdu termina.</li>
                <li>Za prvi trening ponesi udobnu odjeću, tenisice/čarape i bocu vode.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition cursor-pointer"
            >
              Ispuni novu prijavu
            </button>
          </div>
        ) : (
          /* Enrollment Interactive Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Benefits & Summary Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`p-8 rounded-3xl border backdrop-blur-md ${
                isDarkMode
                  ? 'bg-slate-900/80 border-cyan-500/30 shadow-xl'
                  : 'bg-white border-slate-200 shadow-md'
              }`}>
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                  Zašto odabrati Roxanne?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-medium">Besplatan probni sat</strong>
                      <span className="text-xs text-slate-400">Dođite, upoznajte grupu i trenere bez ikakvih obveza.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-teal-950 text-teal-400 border border-teal-800 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-medium">Obiteljski popusti</strong>
                      <span className="text-xs text-slate-400">10% popusta za 2. člana obitelji, 20% za svakog sljedećeg.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 text-blue-400 border border-blue-800 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-medium">Plesne produkcije & Natjecanja</strong>
                      <span className="text-xs text-slate-400">Nastupi u kazalištu i sudjelovanje na festivalima tijekom godine.</span>
                    </div>
                  </div>
                </div>

                {/* Selected Program Quick Box */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Odabrani program:</div>
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">{selectedProgram.title}</div>
                      <div className="text-xs text-cyan-300">{selectedProgram.scheduleSnippet}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-cyan-400 font-heading">
                        {formData.isTrialClass ? '0 €' : `${finalPrice} €`}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {formData.isTrialClass ? 'Probni sat' : 'mjesečno'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Active Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl space-y-6 ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 shadow-2xl'
                    : 'bg-white border-slate-200 shadow-xl'
                }`}
              >
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/60 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name & Age */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Ime i prezime plesača *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Npr. Ana Marić"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Dob (godine) *
                    </label>
                    <input
                      type="number"
                      min="3"
                      max="85"
                      required
                      placeholder="Npr. 14"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      E-mail adresa *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tvoja.adresa@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Broj mobitela *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+385 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                {/* Program Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Odaberi plesni program *
                  </label>
                  <select
                    value={formData.programId}
                    onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition cursor-pointer"
                  >
                    {DANCE_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.title} ({prog.ageGroup}) — {prog.pricePerMonth} €/mj.
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dance Experience */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Prethodno plesno iskustvo:
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition cursor-pointer"
                  >
                    <option value="Početnik">Početnik (nemam prethodnog iskustva)</option>
                    <option value="1-2 godine">1 - 2 godine bavljenja plesom</option>
                    <option value="3+ godina">3+ godine bavljenja plesom / baletom</option>
                    <option value="Natjecatelj">Napredni / Natjecateljski plesač</option>
                  </select>
                </div>

                {/* Checkbox Options */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.isTrialClass}
                      onChange={(e) => setFormData({ ...formData, isTrialClass: e.target.checked })}
                      className="w-4 h-4 rounded accent-cyan-400 bg-slate-950 border-slate-700"
                    />
                    <span className="text-xs text-slate-200">
                      Prijavljujem se za <strong>besplatan probni sat</strong> (bez trenutne obveze plaćanja)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.hasFamilyMember}
                      onChange={(e) => setFormData({ ...formData, hasFamilyMember: e.target.checked })}
                      className="w-4 h-4 rounded accent-cyan-400 bg-slate-950 border-slate-700"
                    />
                    <span className="text-xs text-slate-200">
                      Imam člana obitelji koji je već upisan u Roxanne (ostvari 10% popusta)
                    </span>
                  </label>
                </div>

                {/* Additional Note */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Dodatna napomena ili pitanje (opcionalno):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Npr. preferirani dani, zdravstvene specifičnosti ili pitanja za trenere..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Slanje upisnice...</span>
                  ) : (
                    <>
                      <span>Potvrdi i pošalji upisnicu</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
