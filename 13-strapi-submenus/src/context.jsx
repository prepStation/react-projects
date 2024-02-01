import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <AppContext.Provider
      value={{ pageId, setPageId, isSidebarOpen, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
