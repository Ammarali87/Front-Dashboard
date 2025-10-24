// 'use client'

// import React from 'react'
// import { Snackbar, Alert } from '@mui/material'

// interface ToastData {
//   id: number
//   message: string
//   severity?: 'success' | 'info' | 'warning' | 'error'
// }

// interface ToastProps {
//   toast: ToastData
//   onClose: (id: number) => void
// }

// export const Toast = ({ toast, onClose }: ToastProps) => (
//   <Snackbar
//     key={toast.id}
//     open
//     autoHideDuration={4000}
//     onClose={() => onClose(toast.id)}
//     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//   >
//     <Alert
//       onClose={() => onClose(toast.id)}
//       severity={toast.severity}
//       variant="filled"
//       sx={{ width: '100%' }}
//     >
//       {toast.message}
//     </Alert>
//   </Snackbar>
// )



"use client";

import React from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  type?: "success" | "error" | "info";
};

export default function Toaster({
  toasts,
  removeToast,
}: {
  toasts: Toast[];
  removeToast: (id: string) => void;
}) {
  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="max-w-sm w-full bg-white dark:bg-gray-800 border rounded shadow p-3 flex items-start gap-3"
          role="status"
        >
          <div className="flex-1">
            {t.title && <div className="font-medium">{t.title}</div>}
            {t.description && <div className="text-sm text-gray-600 dark:text-gray-300">{t.description}</div>}
          </div>
          <button
            onClick={() => removeToast(t.id)}
            aria-label="Close toast"
            className="text-gray-500 hover:text-gray-800"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}