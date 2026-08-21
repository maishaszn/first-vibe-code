import {
  ArrowUpRight,
  BookOpen,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

/**
 * Edit this object to personalize the whole page.
 * Link cards are intentionally kept in one list so their order and copy
 * can be changed without touching the layout.
 */
const PROFILE = {
  name: 'Alma Moreno',
  role: 'Writer, image-maker, occasional wanderer',
  bio: 'Notes on making a life with more room for wonder.',
  location: 'Lisbon · everywhere',
  initials: 'AM',
};

const LINKS = [
  {
    label: 'Instagram',
    detail: '@almamakes',
    href: 'https://www.instagram.com/',
    icon: Instagram,
  },
  {
    label: 'X',
    detail: '@almoreno',
    href: 'https://x.com/',
    icon: Twitter,
  },
  {
    label: 'LinkedIn',
    detail: 'alma-moreno',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  {
    label: 'The Sunday Letter',
    detail: 'a small note, every other week',
    href: 'https://buttondown.com/',
    icon: BookOpen,
  },
];

function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-background">
      <div className="grain" aria-hidden="true" />

      <main className="mx-auto flex min-h-[100dvh] w-full max-w-[1220px] flex-col px-6 py-8 sm:px-10 sm:py-10 lg:grid lg:grid-cols-[minmax(280px,0.82fr)_minmax(440px,1.18fr)] lg:gap-24 lg:px-16 lg:py-14">
        <section
          className="page-rise flex flex-1 flex-col lg:sticky lg:top-14 lg:h-[calc(100dvh-7rem)]"
          aria-labelledby="profile-name"
        >
          <header className="flex items-center justify-between">
            <span
              className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/65"
              data-testid="text-site-label"
            >
              Personal index
            </span>
            <span
              className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/55"
              data-testid="text-edition"
            >
              2024—25
            </span>
          </header>

          <div className="mt-14 sm:mt-20 lg:my-auto lg:mt-0">
            <div
              className="profile-mark mark-in flex h-24 w-24 items-center justify-center rounded-full border border-foreground/35 text-3xl text-foreground shadow-sm sm:h-28 sm:w-28 sm:text-4xl"
              aria-hidden="true"
            >
              <span className="font-serif italic">{PROFILE.initials}</span>
            </div>

            <p
              className="mt-9 font-sans text-xs uppercase tracking-[0.2em] text-accent"
              data-testid="text-role"
            >
              {PROFILE.role}
            </p>
            <h1
              id="profile-name"
              className="mt-3 max-w-md font-serif text-[clamp(3.6rem,9vw,7.1rem)] leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[clamp(4.4rem,8vw,7.1rem)]"
              data-testid="text-profile-name"
            >
              {PROFILE.name}
            </h1>
            <p
              className="mt-8 max-w-[22rem] font-sans text-[15px] leading-7 text-foreground/75 sm:text-base"
              data-testid="text-profile-bio"
            >
              {PROFILE.bio}
            </p>
            <p
              className="mt-5 font-sans text-[11px] uppercase tracking-[0.2em] text-foreground/55"
              data-testid="text-profile-location"
            >
              {PROFILE.location}
            </p>
          </div>

          <p
            className="mt-16 hidden font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/45 lg:block"
            data-testid="text-scroll-note"
          >
            Find me in the margins
          </p>
        </section>

        <section
          className="page-rise mt-16 flex flex-1 flex-col sm:mt-20 lg:mt-0 lg:justify-center"
          style={{ animationDelay: '90ms' }}
          aria-labelledby="links-heading"
        >
          <div className="mb-7 flex items-end justify-between border-b border-foreground/25 pb-4 sm:mb-9">
            <h2
              id="links-heading"
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-foreground/75"
              data-testid="text-links-heading"
            >
              Places to begin
            </h2>
            <span
              className="font-serif text-lg italic text-foreground/55"
              data-testid="text-link-count"
            >
              04
            </span>
          </div>

          <nav aria-label="Alma Moreno's external links">
            <ul className="m-0 list-none space-y-3 p-0 sm:space-y-4">
              {LINKS.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li
                    key={link.label}
                    className={`page-rise link-delay-${index + 1}`}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-card group flex min-h-[92px] items-center gap-4 border border-foreground/25 bg-card/35 px-4 py-4 text-foreground sm:min-h-[106px] sm:gap-6 sm:px-6"
                      aria-label={`${link.label}, ${link.detail}. Opens in a new tab`}
                      data-testid={`link-external-${index + 1}`}
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/25 text-foreground/80 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:border-foreground/60 sm:h-12 sm:w-12"
                        aria-hidden="true"
                      >
                        <Icon size={19} strokeWidth={1.35} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block truncate font-serif text-[1.65rem] leading-none tracking-[-0.02em] sm:text-[1.9rem]"
                          data-testid={`text-link-label-${index + 1}`}
                        >
                          {link.label}
                        </span>
                        <span
                          className="mt-2 block truncate font-sans text-[11px] uppercase tracking-[0.13em] text-foreground/55 sm:text-xs"
                          data-testid={`text-link-detail-${index + 1}`}
                        >
                          {link.detail}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="shrink-0 text-foreground/55 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
                        size={22}
                        strokeWidth={1.35}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <p
            className="mt-8 max-w-sm font-sans text-xs leading-5 text-foreground/50 sm:mt-10"
            data-testid="text-links-note"
          >
            A few corners of the internet I return to often. Choose your own
            pace.
          </p>
        </section>

        <footer className="mt-20 border-t border-foreground/20 pt-5 lg:col-span-2 lg:mt-4">
          <div className="flex flex-col gap-2 font-sans text-[10px] uppercase tracking-[0.18em] text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
            <span data-testid="text-footer-signature">Made slowly, shared openly</span>
            <span data-testid="text-footer-year">© 2025 Alma Moreno</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;