import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chapters = [
  {
    id: 1,
    title: 'Le Origini',
    text:
      "Dalle antiche mura alle prime piazze, la città nasce come snodo di rotte commerciali e culturali.",
    color: 'from-blue-500/30 to-transparent',
  },
  {
    id: 2,
    title: 'Rinascimento Urbano',
    text:
      "Maestri artigiani e architetti ridisegnano prospettive: cortili luminosi, facciate scandite e vie porticate.",
    color: 'from-purple-500/30 to-transparent',
  },
  {
    id: 3,
    title: 'Dialoghi Contemporanei',
    text:
      "Installazioni e spazi pubblici diventano palcoscenici di arte condivisa, tra luce, suono e materia.",
    color: 'from-emerald-500/30 to-transparent',
  },
];

export default function StoryScroller() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="storie" className="relative bg-zinc-950 py-24 text-white">
      {/* Scroll progress bar */}
      <motion.div
        style={{ width: progress }}
        className="fixed left-0 top-0 z-50 h-1 bg-blue-500"
      />

      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-geist-sans text-3xl font-semibold md:text-5xl">
          Storie che si svelano mentre scorri
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-300">
          Uno storytelling fluido: ogni sezione appare con micro-animazioni, guidandoti tra epoche e linguaggi artistici.
        </p>

        <div className="mt-16 space-y-16">
          {chapters.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.color}`} />
              <div className="relative">
                <h3 className="text-2xl font-medium md:text-3xl">{c.title}</h3>
                <p className="mt-3 max-w-3xl text-zinc-200">{c.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
