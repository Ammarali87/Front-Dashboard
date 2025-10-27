
       //  how to  use toast 

//   const { toast:addToast } = useToast()

//   const handleClick = () => {
//     toast({
//       title: "Success",
//       description: "Operation completed successfully",
//       variant: "default" // or "destructive" for errors
//     })
//   }

//   return <button onClick={handleClick}>Show Toast</button>
// }




"use client"

import * as React from "react"
import { createContext, useContext } from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

   
 interface ToastOption {
    id?:string;
    title?:string;
    description?:string;
    variant?:"default"|"destructive"
   } 
      
  const ToastContext = createContext<{
    toast: (props:ToastOption) => void
  }>({
    toast: () => {},
  })     

export function ToastProvider({ children }: { children: React.ReactNode }) {
    
  const [toasts, setToasts] = React.useState<Array<ToastOption>>([])

  const toast = React.useCallback(
    ({ title, description, variant = "default" } :ToastOption) => {
    const id = Math.random().toString(36)
    setToasts((toasts) => [...toasts, { id, title, description, variant }])
    setTimeout(() => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  return (   
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastPrimitives.Provider>
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          {toasts.map(({ id, title, description, variant }) => (
            <ToastPrimitives.Root
              key={id}
              className={cn(
                "rounded-md border p-4 shadow-md",
                variant === "destructive" 
                  ? "border-red-500 bg-red-50 text-red-700"
                  : "border-gray-200 bg-white"
              )}
            >
              {title && <div className="font-medium">{title}</div>}
              {description && <div className="text-sm text-gray-500">{description}</div>}
              <ToastPrimitives.Close className="absolute top-2 right-2">
                <X className="h-4 w-4" />
              </ToastPrimitives.Close>
            </ToastPrimitives.Root>
          ))}
        </div>
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider")
  return context         
}