import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between px-8 py-6">
        <span className="text-lg font-semibold tracking-tight">
          Gaming Room
        </span>
        <ModeToggle />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-8 pb-16">
        <h1 className="max-w-xl text-center text-3xl font-semibold tracking-tight">
          shadcn/ui is wired up with the Blue theme and Geist fonts.
        </h1>
        <p className="text-muted-foreground max-w-md text-center text-base">
          Toggle the theme in the top right to flip between light, dark, and
          system modes.
        </p>
        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </main>
    </div>
  );
}
