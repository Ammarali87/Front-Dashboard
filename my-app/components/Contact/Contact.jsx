// Contact.tsx
export default function Contact() {
  return (
    <main
      id="contact"
      className="flex min-h-screen flex-col lg:flex-row items-center
       justify-center bg-[#003888]/90 mt-3 px-6 py-12"
    >
      <div className="text-white max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
        <p className="text-lg md:text-xl mb-4">📧 amarzx74@gmail.com</p>
        <p className="text-lg md:text-xl mb-4">📞 Phone: +20 10 6950 9457</p>
      </div>

      <img
        src="/contact.jpg"
        alt="Contact illustration"
        className="lg:w-1/2 w-full max-w-md mt-8 lg:mt-0 lg:ml-12 rounded-lg shadow-lg"
      />
    </main>
  );
}






// export default function Contact(){ 

//     return (
//       <main id="contact" className="flex min-h-screen flex-col lg:flex-row 
//       items-center justify-center bg-[#003888]/90 p-8">
//       <div className="one">

//       <h1 className="text-5xl mt-9">Contact</h1>
//       <br />
//       <p className="my-4 text-xl">amarzx74@gmail.com</p>
//       <p className="my-4 text-xl">Phone : +2010 69 509 457</p>
//       </div>

//         <img src="/contact.jpg" className="lg:w-1/2 ms-11" alt="" />

//     </main>
//         );
//       }







      