import React from "react";
import { useTranslation } from "react-i18next";
import { Sidebar } from "../src/components/Sidebar/useSidebar";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="flex  flex-col items-center justify-center gap-4 dark:bg-gray-800">
      <Sidebar ariaLabel={t("sidebar.ariaLabel")} />
    </main>
  );
};

export default App;
