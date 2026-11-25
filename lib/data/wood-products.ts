/**
 * Wood Products catalog — 6 items matching PowerPoint slides 3–8.
 * Each product references i18n keys and a local image extracted from the PPTX.
 */

export type WoodProduct = {
  slug: string;
  nameKey: string;
  descKey: string;
  image: string;
  applications: [string, string]; // i18n keys
  discussKey: string; // i18n key for the "discuss" text
};

export const woodProducts: WoodProduct[] = [
  {
    slug: "panels",
    nameKey: "products.panels.name",
    descKey: "products.panels.desc",
    image: "/images/products/panels.webp",
    applications: [
      "products.panels.app1",
      "products.panels.app2",
    ],
    discussKey: "products.panels.discuss",
  },
  {
    slug: "birchPlywood",
    nameKey: "products.birchPlywood.name",
    descKey: "products.birchPlywood.desc",
    image: "/images/products/birch-plywood.webp",
    applications: [
      "products.birchPlywood.app1",
      "products.birchPlywood.app2",
    ],
    discussKey: "products.birchPlywood.discuss",
  },
  {
    slug: "hardwood",
    nameKey: "products.hardwood.name",
    descKey: "products.hardwood.desc",
    image: "/images/products/hardwood.webp",
    applications: [
      "products.hardwood.app1",
      "products.hardwood.app2",
    ],
    discussKey: "products.hardwood.discuss",
  },
  {
    slug: "softwood",
    nameKey: "products.softwood.name",
    descKey: "products.softwood.desc",
    image: "/images/products/softwood.webp",
    applications: [
      "products.softwood.app1",
      "products.softwood.app2",
    ],
    discussKey: "products.softwood.discuss",
  },
  {
    slug: "veneer",
    nameKey: "products.veneer.name",
    descKey: "products.veneer.desc",
    image: "/images/products/veneer.webp",
    applications: [
      "products.veneer.app1",
      "products.veneer.app2",
    ],
    discussKey: "products.veneer.discuss",
  },
  {
    slug: "birchVeneer",
    nameKey: "products.birchVeneer.name",
    descKey: "products.birchVeneer.desc",
    image: "/images/products/birch-veneer.webp",
    applications: [
      "products.birchVeneer.app1",
      "products.birchVeneer.app2",
    ],
    discussKey: "products.birchVeneer.discuss",
  },
];
