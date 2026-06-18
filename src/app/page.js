import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Settings, Wrench } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-24 px-6 md:px-24">
      <div className="max-w-4xl w-full space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-navy dark:bg-metallic-light pb-2">
            Premium Hydraulic Works
          </h1>
          <p className="text-lg md:text-xl text-steel-grey dark:text-slate-300 font-medium max-w-2xl mx-auto">
            Industrial grade skeuomorphic UI components preview.
          </p>
        </header>

        {/* Buttons Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-heading border-b border-steel-light/30 pb-2">Tactile Buttons</h2>
          <div className="flex flex-wrap gap-6">
            <Button variant="primary">
              <Settings className="w-5 h-5" />
              Primary Action
            </Button>
            <Button variant="secondary">
              <Wrench className="w-5 h-5" />
              Secondary Action
            </Button>
            <Button variant="outline">
              Outline Action
            </Button>
          </div>
        </section>

        {/* Cards Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-heading border-b border-steel-light/30 pb-2">3D Depth Cards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card interactive className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-navy flex items-center justify-center text-white shadow-inset-deep">
                <Settings />
              </div>
              <h3 className="text-xl font-bold font-heading">Hydraulic Maintenance</h3>
              <p className="text-steel-grey leading-relaxed">Interactive card. Hover over me to see the realistic spring lift effect powered by Framer Motion.</p>
            </Card>
            <Card className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-steel-grey flex items-center justify-center text-white shadow-inset-deep">
                <Wrench />
              </div>
              <h3 className="text-xl font-bold font-heading">Static Component</h3>
              <p className="text-steel-grey leading-relaxed">Standard 3D depth card with metallic/glass top layer to give a premium industrial feel.</p>
            </Card>
          </div>
        </section>

        {/* Inputs Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-heading border-b border-steel-light/30 pb-2">Deep Inset Forms</h2>
          <Card className="max-w-xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-trust-blue ml-1">Email Address</label>
                <Input type="email" placeholder="john@industrial.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-trust-blue ml-1">Project Details</label>
                <Textarea placeholder="Describe your hydraulic requirements..." />
              </div>
              <Button variant="primary" className="w-full">Submit Request</Button>
            </form>
          </Card>
        </section>
      </div>
    </main>
  );
}
