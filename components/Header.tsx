import NavLinks from "@/components/NavLinks"; // ✅ import

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div id="header-title" className="text-2xl font-bold">Raymond Mukonda</div>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <NavLinks /> 
      </nav>
    </header>
  );
}

