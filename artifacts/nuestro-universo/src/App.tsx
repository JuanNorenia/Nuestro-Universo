import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ChevronDown, ChevronUp, Volume2, VolumeX, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { discoveries, gallery, memories, notes, timeline, universoConfig } from '@/data/universo';

const queryClient = new QueryClient();
const stars = Array.from({ length: 58 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  delay: `${(index % 7) * 0.4}s`,
}));

type MemoryDetail = {
  id: string;
  title: string;
  caption: string;
  tone: string;
  glow: string;
};

function MotionReveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.72, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Entry({ onEnter }: { onEnter: () => void }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className="entry-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.8 }}>
      <div className="entry-orbit" aria-hidden="true" />
      <div className="entry-inner">
        <div className="eyebrow">un mensaje para {universoConfig.recipientName}</div>
        <motion.h1 className="display" initial={reduced ? false : { opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }}>
          Nuestro<br /><em className="serif-italic">Universo</em>
        </motion.h1>
        <p>Hay un lugar que existe solo cuando estamos los dos. Entra despacio. Lo hice para ti.</p>
         <button className="enter-button" data-testid="button-enter-universe" onClick={onEnter}>Entrar a nuestro universo</button>
      </div>
    </motion.div>
  );
}

function Stars() {
  return <div aria-hidden="true">{stars.map((star, index) => <span key={index} className="star" style={{ left: star.left, top: star.top, animationDelay: star.delay }} />)}</div>;
}

function AppHome() {
  const [entered, setEntered] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [volume, setVolume] = useState(0.42);
  const [openDiscovery, setOpenDiscovery] = useState<string | null>(null);
  const [discoveryVisit, setDiscoveryVisit] = useState(0);
  const [openNote, setOpenNote] = useState<string | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<MemoryDetail | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const tick = () => {
      const start = new Date(universoConfig.firstDate).getTime();
      const elapsed = Math.max(0, Date.now() - start);
      const seconds = Math.floor(elapsed / 1000);
      setCount({ days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 });
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(universoConfig.soundtrack.src);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }
    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      audioRef.current.play().then(() => setSoundOn(true)).catch(() => setSoundOn(false));
    }
  };

  const handleEnter = () => {
    setEntered(true);
    toggleSound();
  };

  const handleVolumeChange = (nextVolume: number) => {
    setVolume(nextVolume);
    if (audioRef.current) audioRef.current.volume = nextVolume;
  };

  const selectedDiscovery = discoveries.find((item) => item.id === openDiscovery);

  return (
    <div className="universe-page">
      <Stars />
      <div className="space-grid" aria-hidden="true" />
       <AnimatePresence>{!entered && <Entry onEnter={handleEnter} />}</AnimatePresence>

      <header className={`site-nav container-wide ${hasScrolled ? 'is-scrolled' : ''}`}>
        <a className="wordmark" href="#top" data-testid="link-wordmark">nuestro<span>·</span>universo</a>
        <nav className="nav-links" aria-label="Secciones principales">
          <a href="#recuerdos" data-testid="link-memories">recuerdos</a>
          <a href="#carta" data-testid="link-letter">carta</a>
          <a href="#tiempo" data-testid="link-counter">tiempo</a>
        </nav>
         <button className="sound-button" onClick={toggleSound} data-testid="button-toggle-sound" aria-pressed={soundOn}>
          {soundOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
          <span>{soundOn ? 'sonando' : 'sonido'}</span><span className={`sound-icon ${soundOn ? 'on' : ''}`} />
        </button>
         <label className="volume-control">
           <span className="sr-only">Volumen</span>
           <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => handleVolumeChange(Number(event.target.value))} aria-label="Volumen de la canción" />
         </label>
      </header>

      <main id="top">
        <section className="hero container-wide" aria-labelledby="hero-title">
          <div className="hero-copy">
            <MotionReveal>
              <div className="eyebrow">una geografía inventada · 01</div>
              <h1 id="hero-title" className="display">Tú y yo,<br /><em className="serif-italic">en órbita.</em></h1>
              <p className="hero-lede">Este sitio no tiene dirección. Flota en algún punto entre aquella tarde, todas las que faltan y la certeza de que contigo cualquier lugar puede sentirse como casa.</p>
              <div className="scroll-cue"><ArrowDown size={14} /> explora sin prisa</div>
            </MotionReveal>
          </div>
          <motion.div className="orbital-world" aria-label="Una pequeña ilustración de nuestro planeta" initial={{ opacity: 0, rotate: -6 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.4, delay: .25 }}>
            <div className="planet"><div className="planet-garden" /></div>
            <span className="orbit-dot one" /><span className="orbit-dot two" /><span className="orbit-dot three" />
          </motion.div>
          <div className="hero-stamp" aria-hidden="true"><span>hecho<br />a mano<br />para ti</span></div>
        </section>

        <section className="section discovery-section container-wide" id="explora" aria-labelledby="discovery-title">
          <div className="discovery-layout">
            <MotionReveal className="discovery-intro">
              <div className="eyebrow">el mapa no existe · 02</div>
              <h2 id="discovery-title" className="section-title display">Hay cosas<br /><em className="serif-italic">escondidas.</em></h2>
              <div className="tiny-rule" /><p>Haz clic en los puntos de luz. Algunas verdades solo aparecen cuando una se toma el tiempo de buscarlas.</p>
            </MotionReveal>
            <MotionReveal delay={.1}>
              <div className="discovery-field" role="group" aria-label="Mapa interactivo de descubrimientos">
                {discoveries.map((discovery) => (
                  <button key={discovery.id} className={`discovery-node node-${discovery.id} ${openDiscovery === discovery.id ? 'active' : ''}`} style={{ left: discovery.x, top: discovery.y }} onClick={() => { setOpenDiscovery(discovery.id); setDiscoveryVisit((visit) => visit + 1); }} data-testid={`button-discovery-${discovery.id}`}>
                    <span className="node-dot" /><span className="node-label">{discovery.label}</span>
                  </button>
                ))}
                {selectedDiscovery && (
                  <motion.div
                    key={`${selectedDiscovery.id}-${discoveryVisit}`}
                    className={`discovery-traveler traveler-${selectedDiscovery.id}`}
                    initial={{ left: '50%', top: '50%', opacity: 0, scale: .25 }}
                    animate={{ left: selectedDiscovery.x, top: selectedDiscovery.y, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.25, ease: [0.2, 0.75, 0.25, 1] }}
                    aria-hidden="true"
                  >
                    <span className="traveler-planet" />
                  </motion.div>
                )}
                <AnimatePresence mode="wait">
                  <motion.div key={openDiscovery ?? 'empty'} className="discovery-reveal" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    {selectedDiscovery ? (
                      <div className="discovery-reveal-content">
                        <span className={`discovery-preview preview-${selectedDiscovery.id}`} aria-hidden="true"><span /></span>
                        <div>
                          <span className="planet-arrived">has llegado a {selectedDiscovery.label}</span>
                          <p>{selectedDiscovery.text}</p>
                        </div>
                      </div>
                    ) : (
                      'Elige una estrella para encontrar un secreto.'
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </MotionReveal>
          </div>
        </section>

        <div className="story-band" aria-label="Una frase para recordar"><div className="container-wide story-band-inner"><p>“Qué raro y bonito que, entre tantas personas, nos hayamos encontrado.”</p><span>nota al margen · siempre tú</span></div></div>

        <section className="section container-wide" id="recuerdos" aria-labelledby="memory-title">
          <MotionReveal className="section-header"><div><div className="eyebrow">archivo de verano · 03</div><h2 id="memory-title" className="section-title display">Pequeñas<br /><em className="serif-italic">eternidades.</em></h2></div><p className="section-note">No guardé las fotos. Guardé cómo se sentían. Pasa el dedo para volver a entrar.</p></MotionReveal>
          <div className="memory-marquee" data-testid="memory-list">
            {memories.map((memory) => (
              <button className="memory-piece" key={memory.id} onClick={() => setSelectedMemory(memory)} data-testid={`button-memory-${memory.id}`}>
                <div className="memory-art" style={{ '--tone': memory.tone, '--glow': memory.glow } as CSSProperties}><div className="memory-silhouette" /><span className="memory-caption"><span className="memory-index">{memory.id} / archivo</span>{memory.title}</span></div>
                <p>{memory.caption}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section timeline-section" aria-labelledby="timeline-title">
          <div className="container-wide">
            <MotionReveal className="section-header"><div><div className="eyebrow">constelación de momentos · 04</div><h2 id="timeline-title" className="section-title display">Lo que nos<br /><em className="serif-italic">trajo aquí.</em></h2></div><p className="section-note">Una línea imperfecta para una historia que todavía está escribiéndose.</p></MotionReveal>
            <div className="timeline">{timeline.map((entry, index) => <MotionReveal key={entry.title} delay={index * .08} className="timeline-entry"><span className="timeline-dot" /><div className="timeline-date">{entry.date}</div><div className="timeline-copy"><h3>{entry.title}</h3><p>{entry.text}</p></div></MotionReveal>)}</div>
          </div>
        </section>

        <section className="section gallery-section container-wide" aria-labelledby="gallery-title">
          <MotionReveal className="section-header"><div><div className="eyebrow">postales que no envié · 05</div><h2 id="gallery-title" className="section-title display">La luz<br /><em className="serif-italic">se parece a ti.</em></h2></div><p className="section-note">Un álbum provisional. Aquí van las imágenes que faltan por revelar.</p></MotionReveal>
          <div className="gallery-grid">{gallery.map((item) => <button key={item.id} className="gallery-item" style={{ '--gallery-bg': item.background, '--gallery-accent': item.accent } as CSSProperties} onClick={() => setSelectedMemory({ id: item.id, title: item.label, caption: 'una imagen esperando su momento', tone: item.background, glow: item.accent })} data-testid={`button-gallery-${item.id}`}><span className="gallery-art" /><span className="gallery-label">{item.label}</span></button>)}</div>
        </section>

        <section className="section notes-section" aria-labelledby="notes-title">
          <div className="container-wide notes-layout">
            <MotionReveal className="notes-intro"><div className="eyebrow">abrir cuando quieras · 06</div><h2 id="notes-title" className="display">Notas para<br /><em className="serif-italic">tus días.</em></h2><p>Algunas cosas no necesitan una ocasión. Puedes volver a abrirlas cuando el día pida un poquito de magia.</p></MotionReveal>
            <div className="notes-stack">{notes.map((note) => <MotionReveal key={note.id}><div className="note-item"><button className="note-trigger" onClick={() => setOpenNote(openNote === note.id ? null : note.id)} aria-expanded={openNote === note.id} data-testid={`button-note-${note.id}`}><span>{note.title}</span>{openNote === note.id ? <ChevronUp size={17} /> : <ChevronDown size={17} />}</button><AnimatePresence>{openNote === note.id && <motion.div className="note-body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{note.body}</motion.div>}</AnimatePresence></div></MotionReveal>)}</div>
          </div>
        </section>

        <section className="letter-section" id="carta" aria-labelledby="letter-title">
          <MotionReveal className="letter"><div className="eyebrow" style={{ color: '#a36f70' }}>para leer despacio · 07</div><h2 id="letter-title">Querida<br />{universoConfig.recipientName},</h2>{universoConfig.letter.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="signature">con amor,<br />{universoConfig.senderName}</div></MotionReveal>
        </section>

        <section className="counter-section" id="tiempo" aria-labelledby="counter-title">
          <div className="container-wide"><div className="counter-intro"><div><div className="eyebrow">tiempo de nosotros · 08</div><h2 id="counter-title" className="section-title display">Desde aquel<br /><em className="serif-italic">día.</em></h2></div><p className="counter-note">El contador empieza en {universoConfig.firstDateLabel.toLowerCase()}. No cuenta lo importante, pero nos recuerda que sigue pasando.</p></div>
            <div className="counter-grid" aria-label="Tiempo transcurrido" data-testid="relationship-counter">{([['days', 'días'], ['hours', 'horas'], ['minutes', 'minutos'], ['seconds', 'segundos']] as const).map(([key, label]) => <div className="counter-cell" key={key}><span className="counter-number" data-testid={`counter-${key}`}>{String(count[key]).padStart(2, '0')}</span><span className="counter-label">{label}</span></div>)}</div>
          </div>
        </section>

        <section className="ending" aria-labelledby="ending-title">
          <MotionReveal><div className="eyebrow">fin del mapa · por ahora</div><h2 id="ending-title" className="display">Nos vemos<br /><em className="serif-italic">en casa.</em></h2><p>El universo es enorme. Qué bien que el nuestro quepa en una mirada.</p></MotionReveal>
          <div className="footer-line">hecho con tiempo · para {universoConfig.recipientName} · {new Date().getFullYear()}</div>
        </section>
      </main>

      <AnimatePresence>{selectedMemory && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Detalle del recuerdo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMemory(null)}>
        <motion.div className="lightbox-inner" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} onClick={(event) => event.stopPropagation()}>
          <button className="close-button" onClick={() => setSelectedMemory(null)} aria-label="Cerrar recuerdo" data-testid="button-close-memory"><X size={16} /></button>
          <div className="lightbox-art" style={{ '--tone': selectedMemory.tone, '--glow': selectedMemory.glow } as CSSProperties} /><h3>{selectedMemory.title}</h3><p>{selectedMemory.caption}</p>
        </motion.div>
      </motion.div>}</AnimatePresence>
    </div>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={AppHome} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;