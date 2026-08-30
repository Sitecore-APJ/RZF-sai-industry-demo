import Link from 'next/link';
import {
  MANDAI_HOME,
  MANDAI_PAGES,
  type MandaiCard,
  type MandaiStaticPath,
} from '@/constants/mandaiSite';
import { getMandaiPagePath } from '@/helpers/mandaiRoutes';

const Card = ({ card }: { card: MandaiCard }) => {
  const body = (
    <>
      {card.image && (
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
        </div>
      )}
      <h3 className="mt-4 text-2xl">{card.title}</h3>
      <p className="text-foreground-light mt-2 text-base leading-relaxed">{card.description}</p>
    </>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="group hover:text-accent block transition-colors">
        {body}
      </Link>
    );
  }

  return <article>{body}</article>;
};

const MandaiHome = () => {
  return (
    <div className="mandai-home bg-background text-foreground">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-[80vh]">
        <img
          src={MANDAI_HOME.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="from-brand/80 via-brand/25 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="text-background-accent relative z-10 container py-16 md:py-24">
          <p className="eyebrow text-highlight">{MANDAI_HOME.eyebrow}</p>
          <h1 className="text-background-accent mt-3 max-w-3xl text-5xl md:text-7xl">
            {MANDAI_HOME.title}
          </h1>
          <p className="text-background-accent/90 mt-6 max-w-2xl text-lg md:text-xl">
            {MANDAI_HOME.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={MANDAI_HOME.cta.href}
              className="main-btn bg-highlight text-foreground px-6 py-3"
            >
              {MANDAI_HOME.cta.label}
            </Link>
            <Link
              href={MANDAI_HOME.secondaryCta.href}
              className="main-btn border-background-accent text-background-accent border px-6 py-3"
            >
              {MANDAI_HOME.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <p className="eyebrow">What’s new</p>
        <h2 className="mt-2 max-w-xl">Discover what’s wild right now</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {MANDAI_HOME.whatsNew.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="bg-background-accent">
        <div className="container py-20">
          <p className="eyebrow">A wilder world awaits</p>
          <h2 className="mt-2 max-w-2xl">
            Discover fun and exciting experiences at the Mandai Wildlife Reserve.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {MANDAI_HOME.pillars.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <p className="eyebrow">Mandai-exclusive</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl">Experiences you can only have here</h2>
          <Link href="/see-and-do" className="arrow-btn">
            View all experiences
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {MANDAI_HOME.experiences.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border-border hover:border-accent rounded-2xl border p-6 transition-colors"
            >
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-foreground-light mt-2">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand text-background-accent">
        <div className="container grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-highlight">A wilder way to eat and shop</p>
            <h2 className="text-background-accent mt-2">Dine and shop across the reserve</h2>
            <p className="text-background-accent/85 mt-4 max-w-lg">
              Savour dining around the attractions, then take home a Mandai-exclusive collection.
            </p>
            <Link
              href="/dine-and-shop"
              className="main-btn bg-highlight text-foreground mt-8 inline-block px-6 py-3"
            >
              Explore dine & shop
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <img
              src="/images/mandai/bird-paradise.jpg"
              alt="Dining and shopping at Mandai"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="/images/mandai/rainforest.jpg"
              alt=""
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container py-20">
        <p className="eyebrow">Too wild to miss</p>
        <h2 className="mt-2 max-w-2xl">Itineraries for Singapore’s wild side</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {MANDAI_HOME.itineraries.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="bg-background-accent">
        <div className="container py-20">
          <p className="eyebrow">Meet our animal residents</p>
          <h2 className="mt-2">A few of the animals who call Mandai home</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {MANDAI_HOME.animals.map((animal) => (
              <article key={animal.title}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={animal.image}
                    alt={animal.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-2xl">{animal.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <p className="eyebrow">Visitor guide</p>
        <h2 className="mt-2">Discover your wild</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {MANDAI_HOME.visitorGuide.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border-border hover:border-accent rounded-2xl border p-6 transition-colors"
            >
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-foreground-light mt-2">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const MandaiInnerPage = ({ path }: { path: Exclude<MandaiStaticPath, '/'> }) => {
  const page = MANDAI_PAGES[path];

  return (
    <div className="mandai-page bg-background text-foreground">
      <section className="relative flex min-h-[46vh] items-end overflow-hidden">
        <img src={page.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="from-brand/80 via-brand/30 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="text-background-accent relative z-10 container py-14">
          {page.eyebrow && <p className="eyebrow text-highlight">{page.eyebrow}</p>}
          <h1 className="text-background-accent mt-3 max-w-3xl text-5xl md:text-6xl">
            {page.title}
          </h1>
          <p className="text-background-accent/90 mt-5 max-w-2xl text-lg">{page.lede}</p>
        </div>
      </section>
      {page.sections.map((section) => (
        <section key={section.heading} className="container py-20">
          <h2>{section.heading}</h2>
          {section.intro && (
            <p className="text-foreground-light mt-4 max-w-2xl text-lg">{section.intro}</p>
          )}
          <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {section.cards.map((card) => (
              <div key={card.title} id={card.id}>
                <Card card={card} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export const MandaiPageMain = ({ path }: { path: string }) => {
  const mandaiPath = getMandaiPagePath(path);

  if (!mandaiPath) {
    return null;
  }

  if (mandaiPath === '/') {
    return <MandaiHome />;
  }

  return <MandaiInnerPage path={mandaiPath} />;
};
