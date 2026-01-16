import React, { useState, useEffect } from 'react';
import { Share2, MapPin, Calendar, Clock, Backpack, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSearchParams, useParams } from 'react-router-dom';

const RichardBirthdayApp = () => {
  const [guestName, setGuestName] = useState('Abenteurer');
  const [hasSworn, setHasSworn] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkInDone, setCheckInDone] = useState(false);

  const [searchParams] = useSearchParams();
  const { slug } = useParams();

  // 1. URL Parameter auslesen (NFC Logik)
  useEffect(() => {
    const name = searchParams.get('guest') || slug;
    const adminMode = searchParams.get('admin');

    if (name) setGuestName(name);
    if (adminMode === 'true') {
      setIsAdmin(true);
      // Simulierter Check-In Sound & Effekt für die Tür
      // Small delay to ensure render
      setTimeout(() => handleCheckIn(), 100);
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchParams, slug]);

  const handleCheckIn = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setCheckInDone(true);
  };

  const playSound = (type: 'success' | 'fail') => {
    const audio = new Audio(type === 'success'
      ? 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3' // Summit Bell
      : 'https://assets.mixkit.co/active_storage/sfx/131/131-preview.mp3'  // Boing
    );
    audio.play();
  };

  if (isAdmin && checkInDone) {
    return (
      <div className="min-h-screen bg-green-500 flex flex-col items-center justify-center p-6 text-white text-center">
        <Trophy size={100} className="mb-6 animate-bounce" />
        <h1 className="text-4xl font-black mb-4">EINTRITT GESTATTET!</h1>
        <p className="text-2xl font-bold uppercase tracking-widest">VIP GAST: {guestName}</p>
        <button onClick={() => setCheckInDone(false)} className="mt-8 bg-white text-green-600 px-6 py-2 rounded-full font-bold">Nächster Gast</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-orange-500">

      {/* 2. Kletter-Fortschrittsbalken */}
      <div className="fixed top-0 left-0 w-full h-3 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 relative transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-[-10px] bg-orange-500 rounded-full p-1 shadow-lg">
            🧗
          </div>
        </div>
      </div>

      {/* 3. Hero Section */}
      <header className="relative pt-20 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-20 text-9xl font-black italic">10</div>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-orange-500 mb-4 animate-pulse">
          ACHTUNG<br/>KLETTER-ALARM!
        </h1>
        <p className="text-xl font-bold uppercase tracking-widest text-blue-400">
          Richard wird 10 & lädt dich ein!
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-6 space-y-12 pb-24">

        {/* Personalisiertes Video / Begrüßung */}
        <section className="bg-slate-800 rounded-3xl p-6 border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <h2 className="text-2xl font-bold mb-4">Hey <span className="text-orange-500">{guestName}</span>! 👋</h2>
          <div className="aspect-video bg-black rounded-xl mb-4 flex items-center justify-center overflow-hidden relative group">
            <p className="text-slate-500">[Hier Richards Video einbetten]</p>
            <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center group-hover:bg-transparent transition-all">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">▶️</div>
            </div>
          </div>
          <p className="italic text-slate-300 text-center">"Bist du bereit, die Wand zu bezwingen?"</p>
        </section>

        {/* Die Fakten */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-2xl">
            <Calendar className="text-orange-500" />
            <div><p className="text-xs text-slate-400 uppercase">Wann</p><p className="font-bold">Samstag, 14. Juni</p></div>
          </div>
          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-2xl">
            <Clock className="text-orange-500" />
            <div><p className="text-xs text-slate-400 uppercase">Uhrzeit</p><p className="font-bold">14:00 - 17:00 Uhr</p></div>
          </div>
          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-2xl md:col-span-2 text-blue-400 border border-blue-500/30">
            <MapPin size={30} />
            <div><p className="text-xs uppercase opacity-70">Wo</p><p className="font-bold">Boulderhalle "Der Gipfelstürmer", Kletterweg 1</p></div>
          </div>
        </section>

        {/* Kletter-Schwur */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-400 p-1 rounded-3xl">
          <div className="bg-slate-900 rounded-[22px] p-6 text-center">
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Der Große Kletter-Schwur</h3>
            <p className="text-slate-300 mb-6 italic leading-relaxed">
              "Ich, {guestName}, schwöre feierlich: Ich werde die Wände rocken,
              Richard anfeuern und danach mindestens 3 Stücke Pizza verdrücken!"
            </p>
            <label className="flex items-center justify-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-6 h-6 rounded border-orange-500 text-orange-500 focus:ring-orange-500 bg-slate-800"
                onChange={(e) => setHasSworn(e.target.checked)}
              />
              <span className="font-bold uppercase text-sm group-hover:text-orange-500 transition-colors">ICH SCHWÖRE ES!</span>
            </label>
          </div>
        </section>

        {/* RSVP Buttons */}
        <section className="flex flex-col gap-4">
          <button
            disabled={!hasSworn}
            onClick={() => { setRsvpStatus('yes'); playSound('success'); confetti(); }}
            className={`py-6 rounded-2xl font-black text-xl uppercase tracking-tighter transition-all transform active:scale-95 ${hasSworn ? 'bg-lime-500 hover:bg-lime-400 shadow-[0_10px_0_rgb(74,222,128)] translate-y-[-4px]' : 'bg-slate-700 opacity-50 cursor-not-allowed'}`}
          >
            Ich bin dabei! 🧗‍♂️
          </button>
          <button
            onClick={() => { setRsvpStatus('no'); playSound('fail'); }}
            className="py-4 text-slate-400 font-bold hover:text-red-400 transition-colors"
          >
            Bin wohl ein Feigling 😉 (Absagen)
          </button>
        </section>

      </main>
    </div>
  );
};

export default RichardBirthdayApp;
