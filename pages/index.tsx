// pages/index.tsx

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Welcome to the ALX Listing App!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome to the ALX Listing App
        </h1>
        <p className="mt-4 text-center text-gray-700">
          This is the home page. Start building your app here.
        </p>
      </main>
    </>
  )
}
