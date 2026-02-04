import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="h-screen w-screen flex flex-col items-center justify-center gap-12"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <Image
        src="/images/logos/kingmade-arch.png"
        alt="King Made"
        width={400}
        height={200}
        priority
      />
      <a
        href="mailto:hello@kingmade.co"
        className="text-lg transition-opacity hover:opacity-100"
        style={{ color: '#E8DCC4', opacity: 0.6 }}
      >
        hello@kingmade.co
      </a>
    </main>
  )
}
