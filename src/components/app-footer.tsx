export default function Footer() {
  return (
    <footer className="hidden md:block w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Seth Tafika. Tous droits réservés.
        </div>
        <div className="text-sm hidden md:block">
          Développé par Seth avec React
        </div>
      </div>
    </footer>
  );
}
