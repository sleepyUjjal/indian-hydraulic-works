import Products from "@/components/sections/Products";

export const metadata = {
  title: "Our Products — Indian Hydraulic Works",
  description: "Browse our comprehensive range of hydraulic products including pumps, motors, cylinders, and complete power pack units.",
};

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <Products />
    </main>
  );
}
