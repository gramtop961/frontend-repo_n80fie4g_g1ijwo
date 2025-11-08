import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-x-0 top-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-20">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/10 shadow-sm">Business Portfolio</span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Elevate your business presence with a modern portfolio
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Showcase your services, highlight achievements, and convert visitors into clients with an interactive, tech-forward experience.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium hover:bg-black transition-colors">Book a consultation</a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-gray-900 ring-1 ring-inset ring-black/10 hover:bg-gray-50">See case studies</a>
              </div>
            </div>

            <div className="h-[420px] w-full lg:h-[560px]" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}
