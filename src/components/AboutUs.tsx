import React from 'react';
import { CHOREOGRAPHERS, AWARDS } from '../data/danceData';
import { Heart, Sparkles, Trophy, ShieldCheck, Star, Users, Music } from 'lucide-react';

interface AboutUsProps {
  isDarkMode: boolean;
}

export const AboutUs: React.FC<AboutUsProps> = ({ isDarkMode }) => {
  const values = [
    {
      icon: Heart,
      title: 'Strast prema plesu',
      description: 'Ples nije samo pokret tijela, već autentičan jezik emocija, slobode i osobnog izraza svakog plesača.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      icon: ShieldCheck,
      title: 'Vrhunska pedagogija',
      description: 'Naši treneri su diplomirani plesni pedagozi i aktivni izvođači s dugogodišnjim iskustvom rada s djecom i mladima.',
      color: 'text-teal-400',
      border: 'border-teal-500/30'
    },
    {
      icon: Users,
      title: 'Prijateljstvo i zajednica',
      description: 'Gradimo podržavajuće okruženje u kojem se svatko osjeća prihvaćeno, motivirano i dijelom Roxanne obitelji.',
      color: 'text-sky-400',
      border: 'border-sky-500/30'
    },
    {
      icon: Trophy,
      title: 'Izvrsnost na sceni',
      description: 'Pripremamo plesače za kazališne predstave, festivale i međunarodna natjecanja uz najviše scenske standarde.',
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    }
  ];

  return (
    <section id="o-nama" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Upoznaj našu priču</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Više od plesnog kluba — <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              mi smo Roxanne obitelj
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Osnovani s vizijom stvaranja prostora u kojem svaki pojedinac kroz umjetnost plesa razvija svoje tijelo, um i samopouzdanje.
          </p>
        </div>

        {/* Story & Philosophy Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] group">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80"
                alt="Plesna grupa Roxanne plesačice na sceni"
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30">
                <p className="text-sm font-medium text-slate-200 italic mb-2">
                  "Ples je skriveni jezik duše. Kada plešemo, ne pomičemo samo udove — stvaramo prostor gdje riječi postaju suvišne."
                </p>
                <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold">
                  <span>Ema Horvat, osnivačica</span>
                  <span>Od 2008. godine</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Naš put: Od lokalne dvorane do europskih pozornica
            </h3>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Plesna grupa Roxanne djeluje već više od 16 godina kao sinonim za inovativnost u plesnoj umjetnosti. Kroz naše dvorane prošlo je više od 2.000 plesača, od kojih su mnogi danas profesionalni izvođači, treneri i koreografi.
            </p>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Njegujemo raznolikost plesnih stilova: od klasičnih temelja i modernog jazza, preko fluidnog suvremenog plesa, do energičnog hip hopa i scenskog show dancea. Za svakog polaznika kreiramo individualni put napretka.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-cyan-500/20">
                <div className="text-2xl font-black text-cyan-400 font-heading">100%</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Stručno vodstvo s diplomama kineziologije i baletnih akademija</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-teal-500/20">
                <div className="text-2xl font-black text-teal-400 font-heading">3 Dvorane</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Profesionalni Harlequin plesni podovi & vrhunski zvučni sustavi</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-cyan-500/50'
                    : 'bg-white hover:bg-cyan-50/50 border-slate-200 hover:border-cyan-400 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-cyan-950/80 border ${v.border} flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]`}>
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h4 className="text-lg font-bold font-heading mb-2 text-slate-900 dark:text-white">
                  {v.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Choreographers & Mentors Team */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Upoznaj naš trenerski & koreografski tim
            </h3>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Iskusni mentori koji prenose znanje s puno strpljenja, stručnosti i nepresušne energije.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHOREOGRAPHERS.map((choreographer) => (
              <div
                key={choreographer.id}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
                    : 'bg-white border-slate-200 hover:border-cyan-300'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={choreographer.image}
                    alt={choreographer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                    {choreographer.experience}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-lg font-bold text-white font-heading">
                      {choreographer.name}
                    </h4>
                    <p className="text-xs text-cyan-300 font-medium">
                      {choreographer.role}
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {choreographer.bio}
                  </p>

                  <div className="pt-2 border-t border-slate-700/40">
                    <div className="text-[11px] font-semibold text-slate-400 mb-1.5">Specijalnosti:</div>
                    <div className="flex flex-wrap gap-1">
                      {choreographer.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-900"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Bar */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-teal-950/60 border border-cyan-500/30 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Trophy className="w-4 h-4" />
                <span>Naši rezultati govore za nas</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Nedavna priznanja & pobjede na prvenstvima
              </h4>
            </div>
            <a
              href="#galerija"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition whitespace-nowrap self-start md:self-auto"
            >
              Pogledaj galeriju natjecanja →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AWARDS.map((award) => (
              <div
                key={award.id}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-400">{award.year}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {award.category}
                  </span>
                </div>
                <div className="font-bold text-sm text-white">{award.competition}</div>
                <div className="text-xs text-teal-300 font-semibold">{award.place}</div>
                <div className="text-[11px] text-slate-400 italic truncate">
                  Koreografija: {award.choreography}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
