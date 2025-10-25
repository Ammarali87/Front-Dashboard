'use client'

import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "./toaster";



type Toast = {
  id: string;
  title?: string;
  description?: string;
  type?: "success" | "error" | "info";
};

type ToastContextValue = {
  addToast: (t: Omit<Toast, "id">) => string;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((t: Omit<Toast, "id">) => {
    const id = Date.now().toString();
    setToasts((s) => [{ id, ...t }, ...s]);
    // auto-dismiss
    setTimeout(() => removeToast(id), 4000);
    return id;
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}