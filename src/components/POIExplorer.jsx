import React, { useState } from 'react';
import { MapPin, Landmark, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const POIS = [
  {
    id: 'duomo',
    name: 'Duomo Centrale',
    type: 'Architettura',
    icon: Landmark,
    description:
      'Una cattedrale rinascimentale celebre per la sua cupola e i bassorilievi che raccontano miti cittadini.',
    modelUrl:
      'https://sketchfab.com/models/7w7pQm8E2q6c7q9m8l0/embed',
  },
  {
    id: 'museo',
    name: 'Museo Civico',
    type: 'Museo',
    icon: Building2,
    description:
      "Sale espositive che attraversano secoli di arti visive: dai mosaici alle avanguardie contemporanee.",
    modelUrl:
      'https://sketchfab.com/models/7w7pQm8E2q6c7q9m8l1/embed',
  },
  {
    id: 'piazza',
    name: 'Piazza delle Arti',
    type: 'Spazio Pubblico',
    icon: MapPin,
    description:
      'Un anfiteatro urbano in cui sculture e installazioni dialogano con la vita quotidiana.',
    modelUrl:
      'https://sketchfab.com/models/7w7pQm8E2q6c7q9m8l2/embed',
  },
];

export default function POIExplorer() {
  const [active, setActive] = useState(POIS[0]);

  return (
    <section id="poi" className="relative bg-zinc-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-geist-sans text-3xl font-semibold md:text-4xl">
            Punti di interesse 3D
          </h2>
          <p className="mt-3 text-zinc-300">
            Esplora modelli 3D semplificati per comprendere volumi, assi prospettici e dettagli architettonici.
          </p>

          <ul className="mt-8 space-y-3">
            {POIS.map((p) => {
              const Icon = p.icon;
              const isActive = active.id === p.id;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => setActive(p)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
                      isActive
                        ? 'border-blue-500/60 bg-blue-500/10'
                        : 'border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-zinc-400">{p.type}</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/*
                  Using Sketchfab embeds as stand-ins for 3D models.
                  In production, replace with your own models or viewer.
                */}
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    title={active.name}
                    className="h-full w-full"
                    src={active.modelUrl}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium">{active.name}</h3>
                  <p className="mt-1 text-zinc-300">{active.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
