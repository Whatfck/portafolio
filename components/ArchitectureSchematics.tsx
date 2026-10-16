'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SchematicItem } from '@/lib/dictionaries'

type ArchitectureSchematicsProps = {
  schematics: SchematicItem[]
}

export default function ArchitectureSchematics({ schematics }: ArchitectureSchematicsProps) {
  const [activeId, setActiveId] = useState<string>(schematics[0]?.id || '')

  const current = schematics.find((s) => s.id === activeId) || schematics[0]

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'gateway':
        return 'border-[var(--ink)] bg-[var(--surface)] text-[var(--ink)]'
      case 'compute':
        return 'border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)]'
      case 'queue':
        return 'border-[var(--ink)] bg-[var(--accent)] text-[var(--accent-ink)] font-bold'
      case 'database':
        return 'border-[var(--ink)] bg-[var(--surface)] text-[var(--ink)]'
      case 'observability':
        return 'border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]'
      default:
        return 'border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)]'
    }
  }

  return (
    <div className="space-y-10">
      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-3 border-b-2 border-[var(--ink)] pb-6">
        {schematics.map((item) => {
          const isActive = item.id === activeId
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`font-mono-tech text-xs uppercase font-bold px-5 py-3 border-2 border-[var(--ink)] transition-all flex items-center gap-3 ${
                isActive
                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-[4px_4px_0px_0px_var(--accent)]'
                  : 'bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--bg)] shadow-[2px_2px_0px_0px_var(--ink)]'
              }`}
            >
              <span className={`w-2 h-2 ${isActive ? 'bg-[var(--accent)]' : 'bg-[var(--ink)]'}`} />
              <span>{item.tab}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="border-2 border-[var(--ink)] bg-[var(--surface)] p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--ink)] space-y-10"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-2 border-[var(--ink)] pb-8">
            <div className="space-y-2">
              <span className="font-mono-tech text-xs px-2.5 py-1 bg-[var(--ink)] text-[var(--bg)] font-bold inline-block">
                {current.system_type}
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-[var(--ink)]">
                {current.title}
              </h3>
              <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <a
                href={current.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-xs uppercase font-bold px-6 py-3 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors border-2 border-[var(--ink)] shadow-[3px_3px_0px_0px_var(--ink)] inline-flex items-center gap-2"
              >
                <span>AUDITAR REPO</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              </a>
              <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end">
                {current.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono-tech text-[10px] px-2 py-0.5 bg-[var(--bg)] border border-[var(--ink)] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Schematic Diagram Flow */}
          <div className="space-y-4">
            <span className="font-mono-tech text-xs uppercase font-bold text-[var(--muted)] tracking-wider block">
              {'//'} DATA & EXECUTION TOPOLOGY
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-stretch">
              {current.flow.map((step, idx) => (
                <div key={idx} className="flex flex-col justify-between relative group">
                  <div
                    className={`p-5 border-2 h-full flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_var(--ink)] transition-transform group-hover:-translate-y-1 ${getNodeColor(
                      step.type
                    )}`}
                  >
                    <div className="flex items-center justify-between font-mono-tech text-[10px]">
                      <span className="opacity-70">STEP 0{idx + 1}</span>
                      <span className="uppercase tracking-widest text-[9px] font-bold">
                        {step.type}
                      </span>
                    </div>

                    <div className="my-2">
                      <h4 className="font-mono-tech font-bold text-sm tracking-tight leading-tight">
                        {step.node}
                      </h4>
                      <p className="font-mono-tech text-xs opacity-80 mt-1 leading-snug">
                        {step.role}
                      </p>
                    </div>

                    <div className="w-full pt-2 border-t border-current/20 flex items-center justify-between font-mono-tech text-[9px] uppercase">
                      <span>SYNC</span>
                      <span>ACTIVE</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Decisions & Trade-offs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t-2 border-[var(--ink)]">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono-tech text-xs uppercase font-bold text-[var(--muted)] tracking-wider block">
                {'//'} ARCHITECTURAL DECISIONS & GUARANTEES
              </span>
              <div className="space-y-3">
                {current.architecture_decisions.map((dec, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[var(--bg)] border-2 border-[var(--ink)] font-mono-tech text-xs leading-relaxed flex items-start gap-3 shadow-[2px_2px_0px_0px_var(--ink)]"
                  >
                    <span className="text-[var(--accent-ink)] bg-[var(--accent)] px-2 py-0.5 font-bold shrink-0">
                      R{i + 1}
                    </span>
                    <p className="text-[var(--ink)]">{dec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono-tech text-xs uppercase font-bold text-[var(--muted)] tracking-wider block">
                {'//'} SYSTEM TRADE-OFFS & CONSTRAINTS
              </span>
              <div className="p-6 bg-[var(--bg)] border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)] space-y-3">
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold text-amber-600 dark:text-amber-400">
                  <i className="fa-solid fa-scale-balanced"></i>
                  <span>ENGINEERING COMPROMISE</span>
                </div>
                <p className="font-mono-tech text-xs leading-relaxed text-[var(--ink)]">
                  {current.trade_offs}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
