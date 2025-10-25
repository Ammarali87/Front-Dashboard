 

// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
//   label?: string
//   error?: boolean
//   helperText?: string
// }

// const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
//   ({ className, label, error, helperText, ...props }, ref) => {
//     return (
//       <TextField
//         {...props}
//         inputRef={ref}
//         label={label}
//         multiline
//         minRows={3}
//         error={error}
//         helperText={helperText}
//         variant="outlined"
//         fullWidth
//         className={cn(
//           'rounded-md border bg-background text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
//           className
//         )}
//         sx={{
//           '& .MuiOutlinedInput-root': {
//             borderRadius: '0.5rem',
//           },
//           '& .MuiInputBase-input': {
//             fontSize: '0.875rem',
//             padding: '10px 12px',
//           },
//  


'use client'

import * as React from 'react'
import TextField from '@mui/material/TextField'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: boolean
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    // Remove 'color' from props before spreading (since HTML props have it as string)
    const { color, ...rest } = props as any

    return (
      <TextField
        {...rest}
        inputRef={ref}
        label={label}
        multiline
        minRows={3}
        error={error}
        helperText={helperText}
        variant="outlined"
        fullWidth
        className={cn(
          'rounded-md border bg-background text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.5rem',
          },
          '& .MuiInputBase-input': {
            fontSize: '0.875rem',
            padding: '10px 12px',
          },
        }}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
