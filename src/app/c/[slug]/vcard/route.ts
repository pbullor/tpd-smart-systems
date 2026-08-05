import { NextResponse } from "next/server";
import { getContactBySlug, generateVCard } from "@/data/teamContacts";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const contact = getContactBySlug(slug);

  if (!contact) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const vcardContent = generateVCard(contact);
  const fileName = `${contact.firstName.toLowerCase()}-${contact.lastName.toLowerCase()}.vcf`;

  return new NextResponse(vcardContent, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
