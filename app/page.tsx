import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-28">
      <div className="items-center font-mono text-sm">
        <p className="fixed top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
