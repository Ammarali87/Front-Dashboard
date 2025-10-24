'use client'

import React from 'react'
import { Snackbar, Alert } from '@mui/material'

interface ToastData {
  id: number
  message: string
  severity?: 'success' | 'info' | 'warning' | 'error'
}

interface ToastProps {
  toast: ToastData
  onClose: (id: number) => void
}

export const Toaster = ({ toast, onClose }: ToastProps) => (
  <Snackbar
    key={toast.id}
    open
    autoHideDuration={4000}
    onClose={() => onClose(toast.id)}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  >
    <Alert
      onClose={() => onClose(toast.id)}
      severity={toast.severity}
      variant="filled"
      sx={{ width: '100%' }}
    >
      {toast.message}
    </Alert>
  </Snackbar>
)
