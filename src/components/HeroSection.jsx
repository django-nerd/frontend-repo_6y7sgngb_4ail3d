import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient tint + vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/10 to-zinc-950/80" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm tracking-widest text-blue-300/80">CITTÀ • ARTE • ESPERIENZE</p>
        <h1 className="font-geist-sans text-4xl font-semibold leading-tight md:text-6xl">
          Esplora le bellezze artistiche della città
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300 md:text-lg">
          Un viaggio interattivo tra architetture, sculture e piazze iconiche. Muoviti nella scena 3D e scopri le storie che hanno plasmato l'anima urbana.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#storie"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Inizia lo storytelling
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#poi"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Punti di interesse
          </a>
        </div>
      </div>
    </section>
  );
}
