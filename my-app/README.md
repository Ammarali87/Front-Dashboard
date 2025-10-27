# inform   login regester 
 when fetch data  use manual fetch data  no Ai
 after fetch  consloe.log((post )) 
    handleSubmit(data:z.infer<>){  log(data)}
    func sometime just log data not action in the beggining
 onSubmit={handleSubmit(onSubmit)} noValidate
 error={!!error.name}  !! converts any truthy/falsy value into a boolean (true or false).
error={errors?.name}    this pass object but MUI want true or false 

onBlur,      // mark as touched
When you do {...field}, it spreads all these props into your TextField, so it automatically:

Displays the correct value

Updates the form when typing

Handles blur/touch logic

noValidate disables the browser’s default HTML5 validation popups (like “Please fill out this field”).
You want to use React Hook Form’s custom validation instead.
    
<form onSubmit={onSubmit}>   normal REACT   then 
you’d have to manually call event.preventDefault() and handle validation logic yourself
  but react-hook-form  
<Box component="form" onSubmit={handleSubmit(onSubmit)}>
 add   type="password"     to passwond 

 const {  c,h,f:{ers}} = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {


     Toaster not Wrapper in Layout

  if not in type make new compont then </P>  const P = PostsPagination as any;

   when create type add ?    icon?:string

  useRouter  import from "next/navigation"
   after update form use in submit router.refresh()   

# create usecontext helper always 
<!-- export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider") 
  return context         
}  -->

   can make type function  ({toast:()=>{}})

  
  # after login make router.push('/');  from next not usenavigate










This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
