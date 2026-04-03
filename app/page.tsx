import Image from "next/image";

const MAILTO_HREF =
  "mailto:feras@thefwgroup.co?subject=Partnership%20Inquiry";

const LINKEDIN_HREF = "https://www.linkedin.com/in/ferasalhroub/";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="flex items-center justify-center py-10 sm:py-14">
        <a href="/" aria-label="FW Group home">
          <Image
            src="/logo.svg"
            alt="FW Group"
            width={180}
            height={52}
            className="h-[72px] w-auto sm:h-[84px]"
            priority
          />
        </a>
      </header>

      <section className="mx-auto max-w-4xl pb-16 text-center">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
          Strategic representation for
          <br />
          social leaders and digital creators.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-800">
          We manage a focused roster of elite talent with a combined reach of
          400,000+ followers. From social commentary to niche gaming, we bridge
          the gap between high-impact voices and strategic brand partnerships.
        </p>

        <div className="mt-8">
          <a
            href={MAILTO_HREF}
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Partnership inquiries
          </a>
          <p className="mt-3 text-sm font-medium text-neutral-700">
            Or copy:{" "}
            <a
              href={MAILTO_HREF}
              className="text-neutral-700 transition-colors hover:text-neutral-900 hover:underline"
            >
              feras@thefwgroup.co
            </a>
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16">
        <p className="text-center text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Our Approach
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Social Impact Integrations
            </h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
              We align brands with the most influential voices in social
              leadership to build trust and community authority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Niche Category Expertise
            </h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
              We dominate specific digital verticals, ensuring your brand is
              seen by the most engaged audiences in the world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              End-to-End Execution
            </h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
              We handle everything from high-level negotiation to final
              deliverable oversight.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 text-center">
        <p className="text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Who We Partner With
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Chip>National Consumer Brands</Chip>
          <Chip>Telecommunications</Chip>
          <Chip>Financial Institutions</Chip>
          <Chip>Gaming Technology</Chip>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16">
        <p className="text-center text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Current Representation
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Category A: Social Leadership */}
          <div className="flex flex-col text-center md:text-left">
            <div className="w-full shrink-0">
              <Image
                src="/images/social-leader.jpg"
                alt="Rula Al-Hroub"
                width={420}
                height={420}
                className="h-auto w-full max-w-[420px] rounded-xl object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
              Rula Al-Hroub
            </h3>
            <p className="mt-1 text-sm font-semibold text-neutral-500 uppercase tracking-wide">
              Social Leadership
            </p>
            <p className="mt-1">
              <a
                href="https://www.facebook.com/rulaalhroob/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                View Facebook &rarr;
              </a>
            </p>
            <p className="mt-4 text-lg font-medium leading-relaxed text-neutral-700">
              <strong>365,000+ Followers.</strong> The leading voice for labor rights and social commentary in Jordan. Mass market reach and high-authority community engagement.
            </p>
          </div>

          {/* Category B: Digital Culture */}
          <div className="flex flex-col text-center md:text-left">
            <div className="w-full shrink-0">
              <Image
                src="/images/ephey.jpg"
                alt="Ephey"
                width={420}
                height={420}
                className="h-auto w-full max-w-[420px] rounded-xl object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
              Ephey
            </h3>
            <p className="mt-1 text-sm font-semibold text-neutral-500 uppercase tracking-wide">
              Digital Culture
            </p>
            <p className="mt-1">
              <a
                href="https://instagram.com/mira.nee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                View Instagram &rarr;
              </a>
            </p>
            <p className="mt-4 text-lg font-medium leading-relaxed text-neutral-700">
              <strong>100,000+ Followers.</strong> Dota 2 Analyst & Creator. Global presence in the esports and variety streaming landscape with deep engagement in gaming hardware and tech.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 text-center">
        <p className="text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Partner with the most influential voices in the region.
        </p>

        <p className="mt-6 text-sm font-medium text-[#222]">
          Email is the fastest way to reach us.
        </p>

        <p className="mt-4">
          <a
            href={MAILTO_HREF}
            className="text-lg font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-300"
          >
            feras@thefwgroup.co
          </a>
        </p>
      </section>

      <footer className="border-t border-neutral-200 py-12 text-center space-y-2">
        <p className="text-sm font-medium text-neutral-700">
          &copy; 2026 FW Group
        </p>
        <p className="text-sm font-medium text-neutral-700">
          Specialized Talent Representation
        </p>
        <p>
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-700 transition-colors hover:underline hover:text-neutral-900 cursor-pointer"
          >
            LinkedIn &rarr;
          </a>
        </p>
      </footer>
    </div>
  );
}