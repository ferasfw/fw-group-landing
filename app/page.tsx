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
          esports and gaming creators.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-800">
          We represent a focused roster of gaming talent and structure brand
          partnerships from negotiation to execution.
        </p>

        <p className="mt-4 text-base font-medium text-neutral-800 md:text-lg">
          Built for long term category alignment.
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
              Alignment
            </h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
              Category fit over volume.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Structure
            </h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
              Clear deliverables, usage rights, timelines.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Execution
            </h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-700">
              End to end campaign oversight.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 text-center">
        <p className="text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Who We Partner With
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-800">
          Gaming hardware brands, publishers, platforms, and performance driven
          consumer companies seeking structured creator partnerships.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Chip>Hardware</Chip>
          <Chip>Publishers</Chip>
          <Chip>Platforms</Chip>
          <Chip>Performance brands</Chip>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16">
        <p className="text-center text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Current Representation
        </p>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-12 md:flex-row md:items-center">
          <div className="w-full shrink-0 md:w-[420px]">
            <Image
              src="/images/ephey.jpg"
              alt="Ephey"
              width={420}
              height={420}
              className="h-auto w-full max-w-[420px] rounded-xl object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-neutral-900">Ephey</h3>
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
              Esports broadcast talent and creator with global event presence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 text-center">
        <p className="text-[26px] font-semibold uppercase tracking-[0.10em] text-[#111]">
          Partnership Inquiries
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
          Boutique esports representation
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