import { ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'B2B SaaS Revamp',
    summary: 'Repositioned a mid-market SaaS with a conversion-first website and sales assets.',
    metrics: '↑ 38% demo bookings in 60 days',
    link: '#'
  },
  {
    title: 'Consulting Brand Launch',
    summary: 'Named, branded, and launched a boutique consultancy with a content engine.',
    metrics: '0 → 5-figure MRR in 3 months',
    link: '#'
  },
  {
    title: 'Pitch & Deck System',
    summary: 'Built a modular pitch system used across sales, fundraising, and partnerships.',
    metrics: 'Shortened sales cycle by 22%',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600">A snapshot of outcomes delivered for ambitious teams.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-white text-sm">
            <Sparkles size={16} /> Results-focused
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100 mb-4" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.summary}</p>
                </div>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-gray-700" />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-900">{p.metrics}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
