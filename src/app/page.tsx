export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Unlocking the Future with <span className="text-blue-500">InnovateAI</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl text-gray-300">
          InnovateAI is at the forefront of artificial intelligence, delivering groundbreaking solutions that redefine possibilities. Join us on the journey to transform tomorrow.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
          Get Started Now
        </button>
      </main>
      <footer className="py-6 text-gray-400 text-sm">
        © 2024 InnovateAI. All rights reserved.
      </footer>
    </div>
  );
}