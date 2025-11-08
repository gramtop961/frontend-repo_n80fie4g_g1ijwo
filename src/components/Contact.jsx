import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Let’s build something that moves the needle</h2>
            <p className="mt-3 text-gray-600">Share a bit about your goals. I typically respond within 1–2 business days.</p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2"><Mail size={16} /> hello@bizfolio.example</div>
              <div className="inline-flex items-center gap-2"><Phone size={16} /> +1 (555) 123-4567</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required name="name" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell me about your project…" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-white font-medium hover:bg-black">
              <Send size={16} /> Send message
            </button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
