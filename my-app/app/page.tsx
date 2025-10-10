'use client';
import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="flex  z-50 flex-col relative mb-8  md:flex-row items-center h-screen justify-center mt-3 md:mt-[-22px]">
        <section className="w-full mt-[-61px] max-w-4xl text-center mb-12">
          <h1 className="text-5xl w-[30vw] max-md:mt-20 mx-auto  mb-11">
          
          </h1>
          
        </section>

        <section className="w-1/2 max-w-4xl mt-[-61px] p-8 mb-8 rounded-lg shadow-lg">

        </section>
      </div>
        <section className="w-full max-w-6xl text-center bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
        </section>

        <section className="w-full flex-col md:flex-row  bg-[#2D3748] p-8 rounded-lg shadow-lg mb-8">
      
        </section>


    </main>
  );
}



