import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import { useTranslation } from "react-i18next";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 dark:bg-gray-800">
      <h1 className="text-2xl font-bold dark:text-white">
        {t("Flowbite React")} + {t("Vite")}
      </h1>
      <DarkThemeToggle />
      <Sidebar ariaLabel={t("sidebar.ariaLabel")} />
      <h1 className="text-lg dark:text-gray-400">Hello Muslim</h1>
    </main>
  );
};

export default App;
