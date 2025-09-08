import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-yellow-500 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-yellow-500">Lumina AI</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
      </div>
    </nav>
  );
}
