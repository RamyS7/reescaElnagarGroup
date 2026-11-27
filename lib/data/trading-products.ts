/**
 * General Trading commodities catalog — 10 items.
 * Each product references i18n keys and an Unsplash image URL.
 */

export type TradingProduct = {
  slug: string;
  nameKey: string;
  captionKey: string;
  image: string;
};

export const tradingProducts: TradingProduct[] = [
  {
    slug: "wheat",
    nameKey: "trading.products.wheat.name",
    captionKey: "trading.products.wheat.caption",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  },
  {
    slug: "rice",
    nameKey: "trading.products.rice.name",
    captionKey: "trading.products.rice.caption",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
  },
  {
    slug: "corn",
    nameKey: "trading.products.corn.name",
    captionKey: "trading.products.corn.caption",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
  },
  {
    slug: "freshProduce",
    nameKey: "trading.products.freshProduce.name",
    captionKey: "trading.products.freshProduce.caption",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
  },
  {
    slug: "frozenProduce",
    nameKey: "trading.products.frozenProduce.name",
    captionKey: "trading.products.frozenProduce.caption",
    image: "/images/trading/frozen-produce.webp",
  },
  {
    slug: "cookingOils",
    nameKey: "trading.products.cookingOils.name",
    captionKey: "trading.products.cookingOils.caption",
    image: "/images/trading/cooking-oils.webp",
  },
  {
    slug: "iron",
    nameKey: "trading.products.iron.name",
    captionKey: "trading.products.iron.caption",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
  {
    slug: "chemicals",
    nameKey: "trading.products.chemicals.name",
    captionKey: "trading.products.chemicals.caption",
    image: "/images/trading/chemicals.webp",
  },
  {
    slug: "fabrics",
    nameKey: "trading.products.fabrics.name",
    captionKey: "trading.products.fabrics.caption",
    image: "/images/trading/fabrics.webp",
  },
  {
    slug: "clothes",
    nameKey: "trading.products.clothes.name",
    captionKey: "trading.products.clothes.caption",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
  },
];
