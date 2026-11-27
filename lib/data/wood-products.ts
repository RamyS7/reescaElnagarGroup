/**
 * Wood Products catalog — 10 items (6 from PowerPoint slides 3–8 + MDF,
 * Blockboard, OSB and Birch Logs). Each product references i18n keys and a
 * local image; `image` is omitted while a product photograph is pending.
 */

export type WoodProduct = {
  slug: string;
  nameKey: string;
  descKey: string;
  /** omitted while the product photograph is pending */
  image?: string;
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
  {
    slug: "mdf",
    nameKey: "products.mdf.name",
    descKey: "products.mdf.desc",
    image: "/images/products/mdf.webp",
    applications: [
      "products.mdf.app1",
      "products.mdf.app2",
    ],
    discussKey: "products.mdf.discuss",
  },
  {
    slug: "blockboard",
    nameKey: "products.blockboard.name",
    descKey: "products.blockboard.desc",
    image: "/images/products/blockboard.webp",
    applications: [
      "products.blockboard.app1",
      "products.blockboard.app2",
    ],
    discussKey: "products.blockboard.discuss",
  },
  {
    slug: "osb",
    nameKey: "products.osb.name",
    descKey: "products.osb.desc",
    image: "/images/products/osb.webp",
    applications: [
      "products.osb.app1",
      "products.osb.app2",
    ],
    discussKey: "products.osb.discuss",
  },
  {
    slug: "birchLogs",
    nameKey: "products.birchLogs.name",
    descKey: "products.birchLogs.desc",
    image: "/images/products/birch-logs.webp",
    applications: [
      "products.birchLogs.app1",
      "products.birchLogs.app2",
    ],
    discussKey: "products.birchLogs.discuss",
  },
];
