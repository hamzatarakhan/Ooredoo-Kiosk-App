import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="font-bold text-xl">
          App
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
