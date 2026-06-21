import { PRODUCTS, getProductBySlugId, getProductPath } from "@/lib/productData";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

/**
 * Generate static params for all products.
 */
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slugId: `${product.slug}-${product.id}`,
  }));
}

/**
 * Generate metadata for each product page.
 */
export async function generateMetadata({ params }) {
  const { slugId } = await params;
  const product = getProductBySlugId(slugId);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} — Indian Hydraulic Works`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slugId } = await params;
  const product = getProductBySlugId(slugId);

  if (!product) {
    notFound();
  }

  // Find prev/next products for navigation
  const currentIdx = PRODUCTS.findIndex((p) => p.id === product.id);
  const prevProduct = currentIdx > 0 ? PRODUCTS[currentIdx - 1] : null;
  const nextProduct = currentIdx < PRODUCTS.length - 1 ? PRODUCTS[currentIdx + 1] : null;

  return (
    <ProductDetailClient
      product={product}
      prevProduct={prevProduct ? { title: prevProduct.title, path: getProductPath(prevProduct) } : null}
      nextProduct={nextProduct ? { title: nextProduct.title, path: getProductPath(nextProduct) } : null}
    />
  );
}
