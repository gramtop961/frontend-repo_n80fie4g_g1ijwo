import { CheckCircle2, LineChart, Layers, Users } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Strategy & Positioning',
    desc: 'Clarify your value proposition and design a growth strategy that resonates with your ideal clients.'
  },
  {
    icon: Layers,
    title: 'Brand & Identity',
    desc: 'Build a visual language that speaks trust and innovation across every touchpoint.'
  },
  {
    icon: Users,
    title: 'Sales Enablement',
    desc: 'Create collateral and funnels that turn qualified attention into measurable revenue.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What I Do</h2>
          <p className="mt-3 text-gray-600">A focused service stack crafted for founders, executives, and sales leaders.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-gray-900 text-white p-3">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={16} />Discovery workshop</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={16} />Roadmap & KPI setup</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={16} />Monthly progress reviews</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
