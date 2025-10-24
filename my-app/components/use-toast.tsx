'use client'

// import React, { createContext, useContext, useState, ReactNode } from 'react'
// import { Snackbar, Alert, AlertColor } from '@mui/material'


import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "./toaster";



// export const ToastProvider = ({ children }: { children: ReactNode }) => {
//   const [open, setOpen] = useState(false)
//   const [message, setMessage] = useState('')
//   const [severity, setSeverity] = useState<AlertColor>('info')

//   const showToast = (msg: string, sev: AlertColor = 'info') => {
//     setMessage(msg)
//     setSeverity(sev)
//     setOpen(true)
//   }

//   const handleClose = () => setOpen(false)

//   return (
//     <ToastContext.Provider value={{ showToast }}>
//       {children}
//       <Snackbar
//         open={open}
//         autoHideDuration={4000}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert
//           onClose={handleClose}
//           severity={severity}
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {message}
//         </Alert>
//       </Snackbar>
//     </ToastContext.Provider>
//   )
// }

// export const useToast = () => {
//   const context = useContext(ToastContext)
//   if (!context) {
//     throw new Error('useToast must be used within a ToastProvider')
//   }
//   return context
// }



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