import { NavbarDemo } from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <div className="relative h-full w-full bg-my-color-5">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#F26B5E2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:8px_8px]"></div>
        <div className="min-h-screen w-screen">
          <NavbarDemo />
        </div>
      </div>
    </main>
  )
}
