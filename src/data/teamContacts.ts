import type { LucideIcon } from "lucide-react";
import {
  Lock,
  Tag,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";

export interface TeamContact {
  slug: string;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  company: string;
  phone: {
    display: string;
    international: string;
  };
  whatsapp: string;
  email: string;
  website: string;
  linkedin?: string;
  location: string;
  country: string;
  description: string;
  photo?: string;
}

export interface Solution {
  icon: LucideIcon;
  name: string;
  tagline: string;
  href: string;
  external?: boolean;
}

export const solutions: Solution[] = [
  {
    icon: Lock,
    name: "TPD Smart Lockers",
    tagline: "Gestión inteligente de espacios de guarda",
    href: "https://lockers.tpdsmart.com",
    external: true,
  },
  {
    icon: Tag,
    name: "TPD Smart ESL",
    tagline: "Etiquetas electrónicas para retail",
    href: "https://tpdsmart.com/#soluciones",
  },
  {
    icon: ShieldCheck,
    name: "TPD Smart Access",
    tagline: "Control de accesos y trazabilidad",
    href: "https://tpdsmart.com/#soluciones",
  },
  {
    icon: LayoutDashboard,
    name: "TPD Smart Platform",
    tagline: "Plataforma central de administración",
    href: "https://tpdsmart.com/#soluciones",
  },
];

const teamContacts: TeamContact[] = [
  {
    slug: "pablo",
    firstName: "Pablo",
    lastName: "Bullor",
    fullName: "Pablo Bullor",
    title: "Managing Director",
    company: "TPD Smart Systems",
    phone: {
      display: "+54 9 11 2816-8289",
      international: "+5491128168289",
    },
    whatsapp: "https://wa.me/5491128168289",
    email: "hola@tpdsmart.com",
    website: "https://tpdsmart.com",
    location: "Buenos Aires",
    country: "Argentina",
    description: "Tecnología propia para infraestructura inteligente.",
  },
];

export function getContactBySlug(slug: string): TeamContact | undefined {
  return teamContacts.find((c) => c.slug === slug);
}

export function getAllContactSlugs(): string[] {
  return teamContacts.map((c) => c.slug);
}

export function generateVCard(contact: TeamContact): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.fullName}`,
    `ORG:${contact.company}`,
    `TITLE:${contact.title}`,
    `TEL;TYPE=CELL:${contact.phone.international}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.website}`,
    `ADR;TYPE=WORK:;;${contact.location};;;${contact.country}`,
    `NOTE:${contact.description}`,
    "END:VCARD",
  ];
  return lines.join("\r\n") + "\r\n";
}
