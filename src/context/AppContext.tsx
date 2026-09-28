import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isAppointmentModalOpen: boolean;
  selectedServiceForModal: string;
  openAppointmentModal: (serviceId?: string) => void;
  closeAppointmentModal: () => void;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Support HTML5 pathname or hash routing gracefully
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    return window.location.pathname || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('ultrasound');
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('/')) {
        setCurrentPath(hash);
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Update hash so browser history and reloads preserve page state smoothly in preview
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAppointmentModal = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForModal(serviceId);
    }
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        isAppointmentModalOpen,
        selectedServiceForModal,
        openAppointmentModal,
        closeAppointmentModal,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
