import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-28">
      <div className="items-center font-mono text-sm">
        <p className="top-0 static flex w-auto p-4 justify-center bg-gray-200 border border-gray-300 rounded-xl">
          Get started by editing&nbsp;
          <code className="font-bold">app/page.tsx</code>
        </p>
      </div>
      <div className="pt-52">
        <Image src="/dm_logo.svg" alt="Base Project Logo" width={180} height={180} priority />
      </div>
    </main>
  )
}
