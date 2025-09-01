import React from "react";

const WHATSAPP_LINK =
  "https://wa.me/15551234567?text=I%20want%20to%20start%20with%20SpyDishTest";

export default function App() {
  return (
    <>
      {/* Header / Hero */}
      <header className="relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
          alt="Variety of dishes"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background/90 via-background/70 to-background/30"></div>

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
              alt="logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-2xl font-bold text-primary">SpyDishTest</span>
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_LINK}
            className="rounded-md bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
            >
            Start Now
          </a>
        </nav>

        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6 pb-24 pt-16 text-center sm:pt-32">
          <h1 className="font-heading text-4xl font-bold text-secondary sm:text-5xl">
            An Innovative Solution for Restaurants &amp; Diners
          </h1>
          <p className="max-w-2xl text-lg text-secondary/80">
            SpyDishTest is an intelligent WhatsApp bot connecting diners
            with restaurants&nbsp;while optimizing restaurant management through
            powerful data insights.
          </p>
          <a
            href={WHATSAPP_LINK}
            className="rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-primary/90"
            >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      {/* Diners Section */}
      <section id="diners" className="section-padding bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              For Diners
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Explore restaurants based on preferences &amp; location",
                "Discover featured dishes &amp; menus",
                "Access reviews, rankings &amp; popularity analyses"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span className="text-secondary/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat mockup */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
              alt="WhatsApp chat example"
              className="mx-auto w-full max-w-sm rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurants" className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-center text-3xl font-bold text-secondary">
            For Restaurants
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Competitor Pricing Intelligence",
                desc: "Compare menu prices with local competitors in real-time."
              },
              {
                title: "Dish Ranking &amp; Sentiment Analysis",
                desc: "See how dishes rank and identify strengths &amp; improvement areas."
              },
              {
                title: "Diner Interest Heatmaps",
                desc: "Visualize peak demand by time &amp; location."
              },
              {
                title: "AI Notifications &amp; Campaigns",
                desc: "Personalize recommendations and optimize ads."
              },
              {
                title: "Smart Pricing Adjustments",
                desc: "Dynamic pricing based on market analysis and demand."
              },
              {
                title: "Weekly Executive Reports",
                desc: "Stay ahead with automated competitor &amp; trend updates."
              }
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-background p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-semibold text-secondary">{title}</h3>
                <p className="mt-2 text-sm text-secondary/80">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_LINK}
              className="rounded-md bg-primary px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
              >
              Subscribe to Pro Plan
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-center text-3xl font-bold text-secondary">
            Loved by Diners &amp; Restaurants
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                img:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400",
                name: "Sofia M.",
                role: "Foodie",
                quote:
                  "SpyDishTest helped me discover amazing hidden gems in my city!"
              },
              {
                img:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400",
                name: "Chef Marco",
                role: "Restaurant Owner",
                quote:
                  "The competitor pricing insights boosted our revenue by 18%."
              },
              {
                img:
                  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400",
                name: "Emily R.",
                role: "Marketing Manager",
                quote:
                  "Heatmaps allowed us to optimize campaigns and double footfall."
              }
            ].map(({ img, name, role, quote }) => (
              <blockquote
                key={name}
                className="rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={img}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-secondary">{name}</h4>
                    <span className="text-xs text-secondary/60">{role}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-secondary/80">“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-white">
        <div className="mx-auto max-w-lg text-center px-6">
          <h2 className="font-heading text-3xl font-bold text-secondary">
            Get in Touch
          </h2>
          <p className="mt-4 text-secondary/80">
            Have questions? Send us a message and we'll respond promptly.
          </p>

          <form
            action="mailto:dasdas@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="rounded-md border border-secondary/20 px-4 py-3 outline-primary"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="rounded-md border border-secondary/20 px-4 py-3 outline-primary"
            />
            <textarea
              name="Message"
              placeholder="Your Message"
              rows="4"
              required
              className="rounded-md border border-secondary/20 px-4 py-3 outline-primary"
            ></textarea>
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="text-secondary/70">© {new Date().getFullYear()} SpyDishTest. All rights reserved.</div>
          <ul className="flex gap-6">
            {[
              { href: "#", label: "Facebook" },
              { href: "#", label: "Instagram" },
              { href: "#", label: "LinkedIn" }
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-secondary/60 transition hover:text-primary"
                  >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
