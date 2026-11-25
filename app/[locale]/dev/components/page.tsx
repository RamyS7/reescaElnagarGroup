import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatCard } from "@/components/sections/StatCard";
import { ProductCard } from "@/components/sections/ProductCard";
import { BranchCard } from "@/components/sections/BranchCard";
import { TeamCard } from "@/components/sections/TeamCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { InquiryForm } from "@/components/forms/InquiryForm";

/**
 * Component showcase — dev only.
 * Visual regression / sanity check for every shared component.
 * Delete or guard behind an env flag before production.
 */
export default function ComponentsShowcase() {
  // Internal showcase — never served on the production site.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className="container-content space-y-20 py-16">
      <header>
        <div className="mb-2 text-xs font-bold tracking-[3px] text-gold">DEV · PHASE 3</div>
        <h1 className="text-4xl font-bold text-charcoal">Component Showcase</h1>
        <p className="mt-2 text-earth">
          Visual check for every shared component. Not shipped to the live site.
        </p>
      </header>

      {/* -------------------- BUTTONS -------------------- */}
      <Showcase title="Buttons">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary · Gold</Button>
          <Button variant="secondary">Secondary · Forest</Button>
          <div className="rounded-lg bg-charcoal p-4">
            <Button variant="outline">Outline (on dark)</Button>
          </div>
          <Button variant="ghost">Ghost · Inquire →</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" href="/contact">As Link</Button>
        </div>
      </Showcase>

      {/* -------------------- BREADCRUMBS -------------------- */}
      <Showcase title="Breadcrumbs">
        <div className="rounded-lg bg-charcoal p-6">
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Wood Products" },
            ]}
          />
        </div>
        <div className="mt-4 rounded-lg bg-cream p-6">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "General Trading", href: "/general-trading" },
              { label: "Wheat" },
            ]}
          />
        </div>
      </Showcase>

      {/* -------------------- SECTION HEADER -------------------- */}
      <Showcase title="Section Headers">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title="Two Divisions, One Trusted Partner"
          subtitle="Everything you need from one supplier."
          align="center"
        />
        <SectionHeader
          eyebrow="OUR MAIN BUSINESS"
          title="Crafted in Alexandria, Trusted Worldwide"
          align="start"
        />
      </Showcase>

      {/* -------------------- STATS -------------------- */}
      <Showcase title="Stat Cards">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCard value="15+" label="Years Experience" />
          <StatCard value="4" label="Group Companies" />
          <StatCard value="3" label="Countries" />
          <StatCard value="1000+" label="Global Clients" />
        </div>
      </Showcase>

      {/* -------------------- PRODUCT CARDS -------------------- */}
      <Showcase title="Product Cards (gradient · image · placeholder)">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            variant="gradient"
            gradient="from-[#8B5A2B] to-[#5C3317]"
            title="Hardwood"
            description="Natural timber with distinctive grain and character."
            action={{ label: "Inquire" }}
          />
          <ProductCard
            variant="gradient"
            gradient="from-[#F0E0C8] to-[#C9A961]"
            title="Birch Plywood"
            description="Smooth pale face, ideal for furniture and joinery."
            action={{ label: "Inquire" }}
          />
          <ProductCard
            variant="placeholder"
            icon="⚙️"
            title="Raw Iron & Scrap"
            caption="حديد خام وخردة"
          />
        </div>
      </Showcase>

      {/* -------------------- BRANCH CARDS -------------------- */}
      <Showcase title="Branch Cards">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <BranchCard
            branch={{
              countryFlag: "🇪🇬",
              countryLabel: "EGYPT",
              name: "Reesca Company",
              address: "Petrochemicals Road, Murgham Industrial Area, Alexandria 23722",
            }}
          />
          <BranchCard
            branch={{
              countryFlag: "🇪🇬",
              countryLabel: "EGYPT · FACTORY",
              name: "Afamia Sky Plywood",
              address: "Petrochemicals Road, Murgham Industrial Area, Alexandria 23722",
            }}
          />
          <BranchCard
            branch={{
              countryFlag: "🇹🇷",
              countryLabel: "TURKEY",
              name: "Reesca Elnagar Int'l",
              address: "Yavuz Sultan Selim Mah., Fatih, Istanbul",
            }}
          />
          <BranchCard
            branch={{
              countryFlag: "🇦🇪",
              countryLabel: "UAE",
              name: "Reesca Global Trading",
              address: "Office 1, Al Quoz Industrial First, Dubai",
            }}
          />
        </div>
      </Showcase>

      {/* -------------------- TEAM CARDS -------------------- */}
      <Showcase title="Team Cards">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <TeamCard
            member={{
              name: "Mahmoud Elnagar",
              initials: "ME",
              role: "GENERAL MANAGER",
              phone: "+20 100 639 1550",
              avatarGradient: "from-forest to-earth",
            }}
          />
          <TeamCard
            member={{
              name: "Farid Abdo",
              initials: "FA",
              role: "SALES MANAGER",
              phone: "+20 115 008 9957",
              avatarGradient: "from-earth to-gold",
            }}
          />
        </div>
      </Showcase>

      {/* -------------------- FORM FIELDS -------------------- */}
      <Showcase title="Form Fields">
        <div className="grid max-w-2xl grid-cols-1 gap-5 md:grid-cols-2">
          <Input name="demo-name" label="FULL NAME" placeholder="Your name" />
          <Input
            name="demo-email"
            type="email"
            label="EMAIL"
            placeholder="you@company.com"
            error="This field is required"
          />
          <Select name="demo-product" label="PRODUCT TYPE" defaultValue="">
            <option value="" disabled>Select a product</option>
            <option value="panels">Panels</option>
            <option value="birch">Birch Plywood</option>
          </Select>
          <Input
            name="demo-phone"
            label="WHATSAPP"
            placeholder="+00 000 000 0000"
            hint="Include country code"
          />
        </div>
        <Textarea
          name="demo-message"
          label="PROJECT DETAILS"
          placeholder="Dimensions, quantities, specifications..."
          className="mt-5 max-w-2xl"
        />
      </Showcase>

      {/* -------------------- INQUIRY FORM -------------------- */}
      <Showcase title="Inquiry Form · variant=wood">
        <div className="max-w-3xl">
          <InquiryForm
            variant="wood"
            productOptions={[
              { value: "panels", label: "Panels" },
              { value: "birch-plywood", label: "Birch Plywood" },
              { value: "hardwood", label: "Hardwood" },
              { value: "softwood", label: "Softwood" },
            ]}
          />
        </div>
      </Showcase>

      {/* -------------------- CTA BANNER -------------------- */}
      <Showcase title="CTA Banner" bare>
        <CTABanner
          title="Ready to source with us?"
          subtitle="Tell us what your project needs — our team will respond with availability and a quotation."
          cta={{ label: "Request a Quote", href: "/contact" }}
        />
      </Showcase>
    </div>
  );
}

function Showcase({
  title,
  children,
  bare,
}: {
  title: string;
  children: React.ReactNode;
  bare?: boolean;
}) {
  return (
    <section>
      <h2 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-earth">
        {title}
      </h2>
      {bare ? children : <div>{children}</div>}
    </section>
  );
}
