import Image from 'next/image'
import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 bottom-0 w-64 p-6 bg-my-color-1 text-my-color-4 z-50 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <Image
          src="/myIMG.jpg"
          width={80}
          height={80}
          alt="Prasenjit Das"
          className="rounded-full mb-4 border-2 border-my-color-3"
        />
        {/* Name */}
        <h1 className="text-lg font-bold mb-6">Prasenjit Das</h1>
        {/* Social Media Icons */}
        <SocialLinks />
        {/* Navigation Links */}
        <NavLinks />
      </div>
    </div>
  )
}

export default Sidebar
