import React from 'react';
import { ArrowUpRight, Instagram, Map } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="font-geist-sans text-2xl font-semibold md:text-3xl">
              Pronto a scoprire la città dal vivo?
            </h3>
            <p className="mt-2 max-w-xl text-zinc-300">
              Percorsi guidati, laboratori e visite tematiche per appassionati di arte e architettura.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Prenota un tour
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur hover:bg-white/10"
            >
              Mappa interattiva
              <Map className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} ArteCittà • Tutti i diritti riservati</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contatti</a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
