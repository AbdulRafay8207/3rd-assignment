import {
  AtSignIcon,
  EarthIcon,
  FacebookIcon,
  HeadsetIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

const socialLinks = [
  { name: 'LinkedIn', link: '/', icon: <LinkedinIcon /> },
  { name: 'X', link: '/', icon: <TwitterIcon /> },
  { name: 'Facebook', link: '/', icon: <FacebookIcon /> },
  { name: 'Website', link: '/', icon: <EarthIcon /> },
]

const description =
  'SkillSpot offers a range of free and paid online and offline courses in UAE, including topics like App Making, Data Skills, Photography, Money Management, and more. Improve your skills now!'

const Footer = () => {
  return (
    <footer className="bg-[#191F33] text-white">
      <div className="flex flex-col items-center px-4 py-12 max-w-7xl mx-auto text-center">
        {/* Logo and description */}
        <a
          href="/"
          className="mb-6 flex items-center justify-center gap-3 text-white"
        >
          <img
            src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
            className="h-8"
            alt="Logo"
          />
          <span className="text-3xl font-semibold tracking-wider">
            Flexy UI
          </span>
        </a>

        <p className="max-w-2xl text-lg font-medium text-white mb-8">
          {description}
        </p>

        {/* Social links */}
        <div className="mb-6">
          <span className="block text-lg font-medium text-[#767E94] mb-4">
            Follow Us
          </span>
          <ul className="flex items-center gap-6 justify-center">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="hover:text-[#767e94]"
                  target="_blank"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-4 flex items-center gap-2">
          <AtSignIcon size={16} />
          <span className="text-lg font-medium">info@email.com</span>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-base font-semibold text-sky-100 hover:bg-gray-100 hover:text-sky-600 transition"
          >
            <HeadsetIcon size={20} />
            <span>Book A Demo</span>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#2E3447] py-3 text-center">
        <span className="text-[#767E94] text-sm">
          Coded with 💙 by{' '}
          <a
            href="https://www.linkedin.com/in/abdulbasitprofile/"
            target="_blank"
            className="text-white underline"
          >
            Abdul Basit
          </a>{' '}
          in Karachi
        </span>
      </div>
    </footer>
  )
}

export default Footer
