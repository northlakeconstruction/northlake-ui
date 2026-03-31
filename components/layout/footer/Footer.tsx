import { Mail, MapPin, Phone } from "lucide-react"
import Image from 'next/image'
import { Contact } from "@/components/layout/contact"
import { company } from "@/content/company"

const Footer = () => {
  const { address, contact, logo } = company

  return (
    <footer className="w-full">
      <section id="contact" className="bg-section">
        <div className="flex justify-start py-6">
          <h2 className="text-md pl-6 uppercase tracking-widest text-primary-fg/50">Contact Us</h2>
        </div>
        <Contact />
      </section>
      <div className="pt-8 pb-12 px-6">
        <div className="flex flex-col align-between gap-4 md:flex-row justify-between items-center">
          <div className="text-center md:flex-col gap-6 text-left">
            <div className="flex flex-row gap-2 items-center">
              <MapPin className="w-[1em] h-[1em] align-middle" />
              <address className="not-italic textxs: text-center md:text-left">
                {address.street} {address.city}, {address.state} {address.zip}
              </address>
            </div>
            <div className="flex text-nowrap flex-row gap-2 items-center">
              <Mail className="w-[1em] h-[1em] align-middle" />
              <a className="text-black text-center md:text-right" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex-col gap-2 text-center content-end">
            <Image
              src={logo.color}
              alt="Northlake Construction corporate logo"
              height="75"
              width="210"
            />
          </div>
          <div className="flex flex-col text-center md:text-right">
            <span>MBE / DBE Certified</span>
            <span className="text-xs">NAICS Codes 237310, 238990</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
