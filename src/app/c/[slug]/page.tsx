import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Download,
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  getContactBySlug,
  getAllContactSlugs,
  solutions,
} from "@/data/teamContacts";

export async function generateStaticParams() {
  return getAllContactSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const contact = getContactBySlug(slug);
  if (!contact) return {};

  const pageTitle = `${contact.fullName} | ${contact.title}`;
  const fullTitle = `${contact.fullName} | ${contact.title} | ${contact.company}`;
  const description = `Contacto de ${contact.fullName}, ${contact.title} de ${contact.company}.`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "profile",
      locale: "es_AR",
      url: `https://tpdsmart.com/c/${contact.slug}`,
      siteName: "TPD Smart Systems",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${contact.fullName} - ${contact.company}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const contact = getContactBySlug(slug);
  if (!contact) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contact.fullName,
    jobTitle: contact.title,
    worksFor: {
      "@type": "Organization",
      name: contact.company,
      url: contact.website,
    },
    telephone: contact.phone.international,
    email: contact.email,
    url: contact.website,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location,
      addressCountry: contact.country,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-tpd-dark flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 px-6 text-center">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <Image src="/logo-isotipo.svg" alt="" width={32} height={32} className="w-8 h-8" />
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-white tracking-tight">
                TPD
              </span>
              <span className="text-xs font-medium text-tpd-text-muted tracking-wide">
                Smart Systems
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-tpd-teal-light/80 font-medium border border-tpd-teal/20 rounded-full px-3 py-1">
              Industrial IoT Solutions
            </span>
          </div>
        </header>

        {/* Main card */}
        <main className="flex-1 flex flex-col items-center px-4 pb-8">
          <div className="w-full max-w-md">
            {/* Profile */}
            <section
              className="text-center py-8"
              aria-label="Información de contacto"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl shadow-lg shadow-tpd-teal/10 overflow-hidden">
                {contact.photo ? (
                  <Image
                    src={contact.photo}
                    alt={contact.fullName}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src="/logo-isotipo.svg"
                    alt={contact.company}
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                )}
              </div>

              <h1 className="text-2xl font-bold text-white tracking-tight">
                {contact.fullName}
              </h1>
              <p className="text-sm text-tpd-teal-light font-medium mt-1">
                {contact.title}
              </p>
              <p className="text-sm text-tpd-text-muted mt-0.5">
                {contact.company}
              </p>
              <p className="text-xs text-tpd-text-dim mt-3 max-w-xs mx-auto leading-relaxed">
                {contact.description}
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-tpd-text-dim">
                <MapPin size={12} strokeWidth={1.5} />
                <span>
                  {contact.location}, {contact.country}
                </span>
              </div>
            </section>

            {/* Save contact - primary CTA */}
            <a
              href={`/c/${contact.slug}/vcard`}
              download={`${contact.firstName.toLowerCase()}-${contact.lastName.toLowerCase()}.vcf`}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-tpd-teal to-tpd-blue text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-tpd-teal/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
              aria-label={`Guardar contacto de ${contact.fullName}`}
            >
              <Download size={18} strokeWidth={2} />
              Guardar contacto
            </a>

            {/* Action buttons */}
            <nav
              className="grid grid-cols-2 gap-3 mt-4"
              aria-label="Acciones de contacto"
            >
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover hover:bg-tpd-card-hover transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
                aria-label="Enviar WhatsApp"
              >
                <MessageSquare
                  size={18}
                  strokeWidth={1.5}
                  className="text-tpd-teal-light shrink-0"
                />
                <span className="text-sm text-white font-medium">
                  WhatsApp
                </span>
              </a>

              <a
                href={`tel:${contact.phone.international}`}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover hover:bg-tpd-card-hover transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
                aria-label={`Llamar a ${contact.fullName}`}
              >
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="text-tpd-teal-light shrink-0"
                />
                <span className="text-sm text-white font-medium">Llamar</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover hover:bg-tpd-card-hover transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
                aria-label={`Enviar email a ${contact.email}`}
              >
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="text-tpd-teal-light shrink-0"
                />
                <span className="text-sm text-white font-medium">Email</span>
              </a>

              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover hover:bg-tpd-card-hover transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
                aria-label="Visitar tpdsmart.com"
              >
                <Globe
                  size={18}
                  strokeWidth={1.5}
                  className="text-tpd-teal-light shrink-0"
                />
                <span className="text-sm text-white font-medium">Web</span>
              </a>
            </nav>

            {/* Phone display */}
            <div className="mt-4 text-center">
              <a
                href={`tel:${contact.phone.international}`}
                className="text-xs text-tpd-text-dim hover:text-tpd-text-muted transition-colors"
              >
                {contact.phone.display}
              </a>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-tpd-border/60" />

            {/* Solutions */}
            <section aria-label="Soluciones">
              <p className="text-[10px] tracking-[0.2em] uppercase text-tpd-text-dim font-medium mb-4">
                Soluciones
              </p>
              <div className="grid grid-cols-2 gap-3">
                {solutions.map((sol) => (
                  <a
                    key={sol.name}
                    href={sol.href}
                    {...(sol.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group p-4 rounded-xl bg-tpd-card border border-tpd-border hover:border-tpd-border-hover hover:bg-tpd-card-hover transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
                  >
                    <div className="w-9 h-9 rounded-lg bg-tpd-teal/8 flex items-center justify-center mb-3 group-hover:bg-tpd-teal/12 transition-colors duration-200">
                      <sol.icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-tpd-teal-light"
                      />
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">
                      {sol.name}
                    </p>
                    <p className="text-[11px] text-tpd-text-dim mt-1 leading-snug">
                      {sol.tagline}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="my-8 border-t border-tpd-border/60" />

            {/* CTA */}
            <section className="text-center" aria-label="Contactar">
              <p className="text-sm text-tpd-text-muted mb-4">
                Conectemos tu infraestructura física.
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-tpd-teal/30 text-tpd-teal-light text-sm font-medium hover:bg-tpd-teal/8 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tpd-teal-light"
                aria-label={`Contactar a ${contact.firstName}`}
              >
                Contactar a {contact.firstName}
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </section>

            {/* Footer */}
            <footer className="mt-12 pt-6 border-t border-tpd-border/40 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Image src="/logo-isotipo.svg" alt="" width={20} height={20} className="w-5 h-5" />
                <span className="text-xs font-semibold text-white tracking-tight">
                  TPD Smart Systems
                </span>
              </div>
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-tpd-text-dim hover:text-tpd-text-muted transition-colors"
              >
                tpdsmart.com
              </a>
              <p className="text-[10px] text-tpd-text-dim/60 mt-1">
                Industrial IoT Solutions
              </p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
