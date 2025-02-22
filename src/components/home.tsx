import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the App</h1>
      <p className="text-muted-foreground">
        Get started by exploring our features
      </p>
      <Button>Get Started</Button>
    </div>
  );
}
