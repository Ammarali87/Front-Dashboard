// Contact.tsx
 
export default function Contact() {
  return (
    <section
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
    </section>
  );
}
