import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>My Tailwind CSS Next.js Page</title>
        <meta name="description" content="A basic Next.js page styled with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">My Tailwind CSS Next.js App</h1>
      </header>

      <main className="flex-grow container mx-auto p-6 text-center">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to My App</h2>
          <p className="text-gray-700">
            This is a simple example of a Next.js page styled with Tailwind CSS.
          </p>
        </section>

        <section className="flex justify-center">
          <a
            href="/about"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Go to About Page
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© {new Date().getFullYear()} My Tailwind CSS Next.js App</p>
      </footer>
    </div>
  );
};

export default HomePage;
