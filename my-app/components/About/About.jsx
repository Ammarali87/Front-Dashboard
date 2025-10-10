// About.tsx
export default function About() {
  return (
   <main id="about" 
      className="flex min-h-screen flex-col lg:flex-row items-center 
      justify-center bg-[#003888]/90 px-6 py-12"
    >
      <div className="text-white max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Education</h1>
        <h2 className="text-2xl md:text-3xl mb-4">
          🎓 Diploma in Frontend Development : {" "}Route Academy
        </h2>
        <h2 className="text-2xl md:text-3xl mb-6">
          🎓 Faculty of Commerce : Cairo University
        </h2>
        <p className="text-lg md:text-xl mb-3">
          🚀 Passionate about programming and problem-solving.
        </p>
        <p className="text-lg md:text-xl">
          🤖 I create bots to automate daily tasks and boost productivity.
        </p>
      </div>

      <img
        src="/edu.jpg"
        alt="Education illustration"
        className="lg:w-1/2 w-full max-w-md mt-8 lg:mt-0 lg:ml-12 rounded-lg shadow-lg"
      />
    </main>
  );
}








// export default function About() { 
//   return (
//     <main id="about" className="flex min-h-screen 
//      flex-col lg:flex-row items-center justify-center mb-11 bg-[#003888]/90 p-8">
//       <div className="one">

//       <h1 className="text-5xl mt-9">Education</h1>
//       <h2 className="my-4 text-3xl"> Diploma in Frontend Development from Route Academy</h2>
//       <h2 className="my-4 text-3xl">Faculty of Commerce, Cairo University</h2>
//       <br />
//       <p className="my-4 text-xl">Passionate about programming and problem-solving.</p>
//       <p className="my-4 text-xl">Creating bots to automate work.</p>
//       </div>

//         <img src="/edu.jpg" className="lg:w-1/2 ms-6" alt="" />

//     </main>
//   );
// }
