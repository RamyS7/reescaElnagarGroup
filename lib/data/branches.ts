/**
 * Branches data — single source of truth, used on Home (Our Locations)
 * and Contact (Branches Grid). Country labels and names come from the
 * company profile PDF; all four are real locations.
 */

export type BranchKey = "egyptMain" | "egyptFactory" | "turkey" | "uae";

export type BranchData = {
  key: BranchKey;
  countryFlag: string;
  /** Translation key under `branches.<key>.country` */
  countryKey: string;
  /** Translation key under `branches.<key>.name` */
  nameKey: string;
  /** Translation key under `branches.<key>.address` */
  addressKey: string;
  /** Google Maps embed URL — added in Phase 9 (Integrations) */
  mapEmbedUrl?: string;
};

export const branches: BranchData[] = [
  {
    key: "egyptMain",
    countryFlag: "🇪🇬",
    countryKey: "branches.egyptMain.country",
    nameKey: "branches.egyptMain.name",
    addressKey: "branches.egyptMain.address",
  },
  {
    key: "egyptFactory",
    countryFlag: "🇪🇬",
    countryKey: "branches.egyptFactory.country",
    nameKey: "branches.egyptFactory.name",
    addressKey: "branches.egyptFactory.address",
  },
  {
    key: "turkey",
    countryFlag: "🇹🇷",
    countryKey: "branches.turkey.country",
    nameKey: "branches.turkey.name",
    addressKey: "branches.turkey.address",
  },
  {
    key: "uae",
    countryFlag: "🇦🇪",
    countryKey: "branches.uae.country",
    nameKey: "branches.uae.name",
    addressKey: "branches.uae.address",
  },
];
