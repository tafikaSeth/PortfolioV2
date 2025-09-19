import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="hidden md:block w-full bg-foreground text-background border-1 border-b-gray-700 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Seth Tafika. {t("allRightsReserved")}.
        </div>
        <div className="text-sm hidden md:block">
          {t("develepedBy")} Seth Tafika
        </div>
      </div>
    </footer>
  );
}
