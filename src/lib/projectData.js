/* ─────────────────────────────────────────────
   Shared project data
   Used by: Projects gallery, individual project pages
   ───────────────────────────────────────────── */

export const CATEGORIES = ["All", "Repair", "Manufacturing", "Installation"];

export const PROJECTS = [
  {
    id: "x7k2",
    title: "Custom Hydraulic Power Pack",
    slug: "custom-hydraulic-power-pack",
    category: "Manufacturing",
    description: "Designed and built a 200L custom power pack unit with dual-pump configuration for an automotive press line.",
    fullDescription: "This project involved designing and manufacturing a fully custom 200-litre hydraulic power pack for a leading automotive manufacturer's press line. The unit features a dual-pump configuration — one for high-pressure operation and one for rapid traverse — allowing seamless switching between force and speed. The reservoir was engineered with internal baffles for optimal oil cooling and air separation. The complete system was pressure-tested to 315 BAR and delivered with an integrated PLC-based control panel for automated sequencing.",
    image: "/projects/powerpack.png",
    specs: { pressure: "250 BAR", flow: "120 L/min", reservoir: "200L", motor: "37 kW" },
    highlights: [
      "Dual-pump configuration for speed & force",
      "Internal baffled reservoir for optimal cooling",
      "PLC-integrated control panel",
      "Pressure tested to 315 BAR",
    ],
    completionDate: "March 2024",
    client: "Automotive Press Line",
  },
  {
    id: "m4p9",
    title: "Heavy-Duty Cylinder Overhaul",
    slug: "heavy-duty-cylinder-overhaul",
    category: "Repair",
    description: "Complete reconditioning of a 3-meter bore hydraulic cylinder for a steel plant's rolling mill.",
    fullDescription: "A critical 3-meter stroke hydraulic cylinder from a major steel plant's rolling mill was brought in for emergency reconditioning. The piston rod showed severe scoring and the bore had developed ovality beyond tolerance. Our team performed complete bore honing to restore surface finish, re-chromed and ground the piston rod, replaced all seals with premium polyurethane sets, and re-machined the gland assembly. The cylinder was reassembled in a Class 10000 clean room environment and dynamically tested at full working pressure for 72 hours before dispatch.",
    image: "/projects/cylinder-repair.png",
    specs: { bore: "300mm", stroke: "3000mm", pressure: "280 BAR", rodDia: "200mm" },
    highlights: [
      "Precision bore honing to mirror finish",
      "Piston rod re-chroming & grinding",
      "Clean room assembly environment",
      "72-hour dynamic pressure testing",
    ],
    completionDate: "January 2024",
    client: "Steel Rolling Mill",
  },
  {
    id: "r8e1",
    title: "Pump System Installation",
    slug: "pump-system-installation",
    category: "Installation",
    description: "Turnkey installation of a multi-pump hydraulic system with centralised filtration and cooling.",
    fullDescription: "This turnkey project involved the complete design, supply, and commissioning of a centralised multi-pump hydraulic system for a large-scale manufacturing facility. The system features four variable-displacement piston pumps feeding a common manifold, with centralised 10-micron return line filtration and a plate-type heat exchanger rated for continuous tropical operation. All piping was designed per DIN standards with vibration-dampening mounts. The system was commissioned with full load testing and operator training.",
    image: "/projects/pump-install.png",
    specs: { capacity: "500 HP", units: "4 Pumps", filtration: "10μm", cooling: "Plate HX" },
    highlights: [
      "4× variable-displacement piston pumps",
      "Centralised 10-micron filtration system",
      "Plate-type heat exchanger for tropical operation",
      "DIN-standard vibration-dampened piping",
    ],
    completionDate: "November 2023",
    client: "Manufacturing Facility",
  },
  {
    id: "t5w3",
    title: "Industrial Hydraulic Press",
    slug: "industrial-hydraulic-press",
    category: "Manufacturing",
    description: "800-ton forging press equipped with servo-hydraulic controls and precision force monitoring.",
    fullDescription: "We designed and manufactured an 800-ton hydraulic forging press with state-of-the-art servo-hydraulic proportional controls. The press features a 4-column guided frame for perfect parallelism, force monitoring accurate to ±0.1mm position repeatability, and programmable multi-stage pressing profiles via an HMI touch panel. The hydraulic system includes pressure-compensated flow control for consistent ram speeds across varying loads. The complete system was factory-tested for 500 cycles before shipment.",
    image: "/projects/press.png",
    specs: { force: "800 Ton", accuracy: "±0.1mm", columns: "4-Column", control: "Servo" },
    highlights: [
      "Servo-hydraulic proportional controls",
      "4-column guided frame for precision",
      "HMI touch panel with programmable profiles",
      "500-cycle factory acceptance testing",
    ],
    completionDate: "August 2023",
    client: "Forging Plant",
  },
  {
    id: "a2n6",
    title: "Precision Valve Assembly",
    slug: "precision-valve-assembly",
    category: "Repair",
    description: "Multi-station directional control valve manifold with proportional flow regulation for CNC operations.",
    fullDescription: "This project involved the complete rebuild and enhancement of a 5-port directional control valve manifold used in a CNC machining center's hydraulic clamping system. Each valve station was disassembled, lapped, and reassembled with new spool seals. We upgraded two stations from on/off to proportional flow control valves, enabling the client's CNC system to perform variable-pressure clamping based on workpiece material. The manifold was flow-tested on our test bench at rated pressure with leak-down monitoring.",
    image: "/projects/valve-assembly.png",
    specs: { stations: "5 Ports", rating: "210 BAR", type: "Proportional", leakage: "<0.1cc/min" },
    highlights: [
      "Complete valve spool lapping & rebuild",
      "Upgraded to proportional flow control",
      "Variable-pressure clamping capability",
      "Leak-down tested to <0.1cc/min",
    ],
    completionDate: "June 2023",
    client: "CNC Machining Center",
  },
  {
    id: "h9v4",
    title: "Custom System Build",
    slug: "custom-system-build",
    category: "Manufacturing",
    description: "Complete hydraulic power unit with reservoir, motor, and integrated control panel for automated tooling.",
    fullDescription: "A complete bespoke hydraulic power unit was engineered for an automated tooling application. The system comprises a 200-litre fabricated reservoir with level, temperature, and pressure sensors, a 75 kW IE3-rated motor driving an axial piston pump, and a fully wired control panel with safety interlocks. The unit features automatic start/stop based on accumulator pressure, oil condition monitoring, and Modbus RTU connectivity for integration with the client's factory SCADA system.",
    image: "/projects/custom-system.png",
    specs: { power: "75 kW", reservoir: "200L", protocol: "Modbus RTU", efficiency: "IE3" },
    highlights: [
      "IE3 high-efficiency motor drive",
      "Integrated oil condition monitoring",
      "Modbus RTU SCADA connectivity",
      "Automatic pressure-based start/stop",
    ],
    completionDate: "April 2023",
    client: "Automated Tooling Line",
  },
];

/**
 * Get a project by its slug-id combination.
 * URL format: /projects/[slug]-[id]
 */
export function getProjectBySlugId(slugId) {
  // The ID is always the last 4 characters
  const id = slugId.slice(-4);
  return PROJECTS.find((p) => p.id === id) || null;
}

/**
 * Generate the URL path for a project.
 */
export function getProjectPath(project) {
  return `/projects/${project.slug}-${project.id}`;
}
