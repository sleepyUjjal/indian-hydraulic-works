/* ─────────────────────────────────────────────
   Shared product data
   Used by: Products gallery, individual product pages
   ───────────────────────────────────────────── */

export const CATEGORIES = ["All", "Pumps", "Motors", "Cylinders", "Power Packs", "Valves & Spares"];

export const PRODUCTS = [
  {
    id: "pmp1",
    title: "Rexroth Hydraulic Pump",
    slug: "rexroth-hydraulic-pump",
    category: "Pumps",
    description: "High-performance Rexroth hydraulic pump for industrial applications.",
    fullDescription: "We provide highly reliable Rexroth Hydraulic Pumps known for their efficiency, long service life, and robust performance in demanding industrial environments. These pumps are designed for high-pressure applications and provide consistent fluid power.",
    image: "/products/rexroth-hydraulic-pump-v3.webp",
    specs: { Type: "Hydraulic Pump", Brand: "Rexroth", Application: "Industrial", Material: "Cast Iron" },
    highlights: [
      "High operational efficiency",
      "Robust construction",
      "Long service life",
      "Optimal for high-pressure systems"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "pmp2",
    title: "Danfoss Hydraulic Pump",
    slug: "danfoss-hydraulic-pump",
    category: "Pumps",
    description: "Premium Danfoss hydraulic pump ensuring precise fluid control.",
    fullDescription: "Our range of Danfoss Hydraulic Pumps offers exceptional control and reliability. They are engineered to deliver precise fluid flow and pressure, making them ideal for mobile and industrial hydraulic systems that require exact power delivery.",
    image: "/products/danfoss-hydraulic-pump-v3.webp",
    specs: { Type: "Hydraulic Pump", Brand: "Danfoss", Application: "Mobile & Industrial", Control: "Precise" },
    highlights: [
      "Exceptional fluid control",
      "Highly durable components",
      "Energy-efficient operation",
      "Low noise emissions"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "pmp3",
    title: "Hydraulic Axial Piston Pump",
    slug: "hydraulic-axial-piston-pump",
    category: "Pumps",
    description: "High-pressure axial piston pump for heavy machinery.",
    fullDescription: "Designed for high-pressure operations, the Hydraulic Axial Piston Pump provides superior volumetric efficiency. It is suitable for heavy machinery, construction equipment, and industrial presses requiring significant force.",
    image: "/products/hydraulic-axial-piston-pump-v3.webp",
    specs: { Type: "Axial Piston", Pressure: "High", Efficiency: "High Volumetric", Application: "Heavy Machinery" },
    highlights: [
      "High-pressure capability",
      "Superior volumetric efficiency",
      "Compact design",
      "Ideal for heavy-duty applications"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "pmp4",
    title: "Hydraulic Variable Vane Pump",
    slug: "hydraulic-variable-vane-pump",
    category: "Pumps",
    description: "Variable displacement vane pump for energy-efficient operation.",
    fullDescription: "The Hydraulic Variable Vane Pump adjusts its flow based on system demand, significantly reducing energy consumption and heat generation. It offers smooth operation and is widely used in machine tools and industrial automation.",
    image: "/products/hydraulic-variable-vane-pump-v3.webp",
    specs: { Type: "Variable Vane", Displacement: "Adjustable", Efficiency: "Energy Saving", Operation: "Smooth" },
    highlights: [
      "Variable displacement control",
      "Reduces heat and energy consumption",
      "Smooth, low-pulsation flow",
      "Long operational lifespan"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "pmp5",
    title: "Gear Pump",
    slug: "gear-pump",
    category: "Pumps",
    description: "Reliable and compact hydraulic gear pump for standard applications.",
    fullDescription: "Our Hydraulic Gear Pumps are rugged, simple, and highly reliable. They are perfect for applications requiring constant fluid flow at moderate pressures, offering excellent value and low maintenance requirements.",
    image: "/products/gear-pump-v3.webp",
    specs: { Type: "Gear Pump", Design: "Compact", Maintenance: "Low", Pressure: "Moderate" },
    highlights: [
      "Simple and rugged design",
      "Low maintenance requirements",
      "Cost-effective fluid power",
      "Compact installation footprint"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "mtr1",
    title: "Hydraulic Motor",
    slug: "hydraulic-motor",
    category: "Motors",
    description: "Robust hydraulic motor for high-torque rotary motion.",
    fullDescription: "We supply powerful Hydraulic Motors designed to convert hydraulic pressure into continuous rotary motion. These motors provide high starting torque and smooth operation even at low speeds, suitable for conveyors, winches, and drives.",
    image: "/products/hydraulic-motor-v3.webp",
    specs: { Type: "Hydraulic Motor", Torque: "High", Speed: "Variable", Application: "Rotary Drives" },
    highlights: [
      "High starting torque",
      "Smooth low-speed operation",
      "Reversible rotation",
      "Durable under heavy loads"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "mtr2",
    title: "Intermot Hydraulic Motor",
    slug: "intermot-hydraulic-motor",
    category: "Motors",
    description: "Premium Intermot hydraulic motor for precision applications.",
    fullDescription: "The Intermot Hydraulic Motor series offers exceptional precision and reliability. Built for demanding applications, these motors deliver consistent torque and are highly resistant to wear and harsh environmental conditions.",
    image: "/products/intermot-hydraulic-motor-v3.webp",
    specs: { Type: "Radial Piston", Brand: "Intermot", Precision: "High", Durability: "Excellent" },
    highlights: [
      "Exceptional precision",
      "High resistance to wear",
      "Consistent torque delivery",
      "Suitable for harsh environments"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "cyl1",
    title: "Hydraulic Cylinder",
    slug: "hydraulic-cylinder",
    category: "Cylinders",
    description: "Heavy-duty hydraulic cylinder for linear force applications.",
    fullDescription: "EN24, a high-tensile alloy steel, is a common material for hydraulic cylinder components due to its strength, hardness, wear resistance, and ability to withstand high temperatures and pressures. EN24 is known for its good creep resistance, which is important for applications where the cylinder will be exposed to elevated temperatures over extended periods. It's also easily heat-treatable, allowing for maximum corrosion resistance and superior machinability.",
    image: "/products/hydraulic-cylinder-v3.webp",
    specs: { Type: "Double Acting", Material: "High-grade Steel", Application: "Linear Force", Durability: "Heavy Duty" },
    highlights: [
      "Provides reliable linear force",
      "Constructed with high-grade steel",
      "Designed for extreme loads",
      "Customizable stroke lengths"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "pwp1",
    title: "Hydraulic Power Pack",
    slug: "hydraulic-power-pack",
    category: "Power Packs",
    description: "Complete hydraulic power generation unit for industrial machinery.",
    fullDescription: "The Hydraulic Power Pack is a self-contained unit that includes a motor, pump, and reservoir. It provides a reliable and constant source of hydraulic power for various industrial machines and pressing applications.",
    image: "/products/hydrulic-power-pack-v3.webp",
    specs: { Type: "Standard", Components: "Motor, Pump, Tank", Application: "Industrial Machinery", Flow: "Continuous" },
    highlights: [
      "Self-contained power generation",
      "Easy integration with existing machinery",
      "Reliable and constant power supply",
      "Available in multiple capacities"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "pwp2",
    title: "Mini Hydraulic Power Pack",
    slug: "mini-hydraulic-power-pack",
    category: "Power Packs",
    description: "Compact hydraulic power unit for space-constrained applications.",
    fullDescription: "Our Mini Hydraulic Power Packs offer the perfect balance of power and size. They are ideal for applications where space is limited but reliable hydraulic power is still required, such as scissor lifts and small presses.",
    image: "/products/mini-hydraulic-power-pack-v3.webp",
    specs: { Type: "Compact", Space: "Minimal", Application: "Lifts & Small Presses", Efficiency: "High" },
    highlights: [
      "Compact footprint",
      "Ideal for space-constrained areas",
      "High efficiency operation",
      "Quick and easy installation"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "val1",
    title: "Hydraulic Valve",
    slug: "hydraulic-valve",
    category: "Valves & Spares",
    description: "Precision hydraulic directional control valve.",
    fullDescription: "We offer a wide range of Hydraulic Valves for precise control of fluid direction, pressure, and flow. Our valves ensure smooth operation, minimal leakage, and long-lasting reliability in complex hydraulic circuits.",
    image: "/products/hydraulic-valve-v3.webp",
    specs: { Type: "Directional Control", Leakage: "Minimal", Operation: "Smooth", Reliability: "High" },
    highlights: [
      "Precise fluid control",
      "Minimal internal leakage",
      "Smooth circuit operation",
      "Durable under high pressure"
    ],
    completionDate: "Repair & Service",
    client: "Available"
  },
  {
    id: "spr1",
    title: "Hydraulic Spare Parts",
    slug: "hydraulic-spare-parts",
    category: "Valves & Spares",
    description: "Genuine spare parts and accessories for hydraulic systems.",
    fullDescription: "Maintain the peak performance of your hydraulic systems with our comprehensive range of genuine Spare Parts. From seals and O-rings to replacement shafts and housings, we supply components that meet OEM specifications.",
    image: "/products/spare-parts-v3.webp",
    specs: { Type: "Spares", Quality: "OEM Standard", Range: "Comprehensive", Application: "Maintenance" },
    highlights: [
      "Meets or exceeds OEM specifications",
      "Comprehensive range of components",
      "Ensures peak system performance",
      "Readily available for quick maintenance"
    ],
    completionDate: "In Stock",
    client: "Available"
  }
];

/**
 * Get a product by its slug-id combination.
 * URL format: /products/[slug]-[id]
 */
export function getProductBySlugId(slugId) {
  if (!slugId) return null;
  // The ID is always the last 4 characters
  const id = slugId.slice(-4);
  return PRODUCTS.find((p) => p.id === id) || null;
}

/**
 * Generate the URL path for a product.
 */
export function getProductPath(product) {
  return `/products/${product.slug}-${product.id}`;
}
