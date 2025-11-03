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


         اشرح 
  <!-- const [toasts, setToasts] = useState<Array<ToastOption>>([]) -->
   
# create Tcontext   const TCotext =
      creaContxt<{t:()=> void }>
      ({t:()=>{} }) 

 const toast = useCallback(
    ({ title, description, variant = "default" } :ToastOption) => {
    const id = Math.random().toString(36)
    setToasts((toasts) => [...toasts, { id, title, description, variant }])
    setTimeout(() => {      
      setToasts((toasts) => toasts.filter((t) => t.id !== id))
    }, 3000)
  }, [])


<!-- utils  اشرح Ai -->

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


  # dark mode 
<!-- const isDark = localStorage.getItem('darkMode') === 'true'; -->

const themCxt = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

#                                   type                                  
ThemeProvider({ children }: { children: React.ReactNode })


'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }, 
  });

 <!-- if (element) { -->
<!-- //     element.scrollIntoView({ behavior: 'smooth' }); -->
<!-- //   } -->



npm i sonner   for toast 
String(), Number(), Boolean()   real convert    
    as string   ts لاسكات
let x: any = 42;
let y = x as string; // ❌ من ناحية المنطق هذا خطأ، لكن TS يقبله
const num = Number("123"); // ✅ يحول فعليًا
 const x = "33" ,y=Number(x)


  useState<keyof AnalyticsDataPoint>("pv");
    e:slectionChangeEvent




<Select    
          #  labelId="analytics-select-label"
             value={selection}
          #  label="Filter"
             onChange={handleChange}
          > 
              {availableFilters.map((filter) => (
              <MenuItem key={filter.value}
    value={filter.value}>  add also value with key 
                {filter.label}    fliter.label not value
              </MenuItem>
            ))}
            ))}         
          </Select>
         why add value={filter.value}
  القيمة التي يستخدمها الكود فعليًا عند الاختيار (مثلاً: "pv", "uv", "amt")          Page Views  ليس الاسم


  style  no ""  or "" 
#  <Box sx={{p:2 , with:"100%" , height:500}}>
   also in recharts not sx <ResponsiveContainer width="100%" height={300}>
 REsponCntainer from recharts  add to Box <ResonsivC><ResConter>
 Card -cardContent   also cardActions -FormControl
 const dd:REact.FC =   const AnalyticsChart: React.FC = () => { 

# const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


map((enyry,index))

































Today at 12 o’clock 😄 it’s October 1st — not New Year’s Eve 🎉 and not salary day 💰 my dear Cristina…
It’s the day we complete exactly **two full months** of non-stop chatting and sharing everything every single day 💌
..................
These two months passed so fast! 😍
So tell me… will you let Ammar be your love forever? ❤️
Not just for a few months… but until we’re 100 years old together 😂👵👴 hahahahha
.......................................................
Do you enjoy having Ammar in your life?
Do you feel that warm little spark when you read my messages? 🔥💞
Because honestly… I feel warm every time I write to you 😌💫
......continue read down 
Now let’s share something useful too 😄👇
Did you know that **talking to yourself out loud** is actually a good habit?
(Just not in public… people might think you’re crazy 😂)
But really — studies say it helps a lot:
💡 When you have a problem, talk to yourself — it helps you see it more clearly.
💪 When you feel down, it boosts your motivation and confidence.
But… stop if you start talking negatively or about the past 😅

I always love talking to myself — especially when I’m walking alone 🚶‍♂️🎧

Now tell me, what are your dreams and future plans? 🌈
Maybe you want to build a shelter for stray animals? 🐶🐱
I will defintly support you 🤩🐈‍⬛
Let’s make a deal 😎
I’m good at photography 📸 — I can help you become a famous influencer, maybe like Kim Kardashian 😂✨
And you help me travel to London someday  ✈️








you ask about household duties::In our home, there will be no conflicts or drama — you’ll always be happy and satisfied 😍💞..
 ..in Arabic culture, most men never even enter the kitchen 😂🍳.
Many don’t even know how to make a simple cup of tea! ☕😅 I was shocked when I knew too! hahaha
............
But thank God, my mother was a disciplined woman 👩‍👦.
She always told me, “Go to the kitchen and help!” and “Keep your room clean!” 🧹
And I used to say, “I don’t have time, Mom!” 😆
She’d reply, “It only takes 15 minutes!” ⏰..Actually, I helped sometimes — peeling potatoes 🥔 and preparing the rice 🍚.
And the surprise? 😏 I can even make a chocolate cake 🍫🎂 (yes, really!)***In our future family, my Cristina 💖, we’ll do things differently —
not 50%–50%, but 30%–30%–30% between me, you, and… ordering from a restaurant! 😂🍔🍕
........
As for cleaning our stunning Romantic room, we’ll just make a small daily routine 🕯️
Maybe even a cute cleaning schedule, because honestly, I always forget my daily tasks😂 


In our culture, rich families often have a servant (sometimes two) and even a driver 🚗💎.
It’s normal here — they help with cleaning or taking care of the kids so parents can focus on work 👨‍👩‍👧‍👦💼.........
But for us, my love, I think in the beginning we won’t need servants…
We’ll just build our little world together — stunning, funny, and full of love 💞🏠😂.



















































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
