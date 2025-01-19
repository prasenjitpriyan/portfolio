import React from 'react'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'Prasenjit Das || Contact',
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.'
}

const ContactPage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <ContactSection />
    </main>
  )
}

export default ContactPage
