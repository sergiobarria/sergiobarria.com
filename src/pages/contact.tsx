import MainLayout from '@/components/layout/MainLayout'
import ContactForm from '@/components/misc/ContactForm'
import SectionTitle from '@/components/misc/SectionTitle'

export default function contact() {
  const customMetadata = {
    url: 'https://sergiobarria.com/contact',
    title: 'Contact | Sergio Barria',
  }

  return (
    <MainLayout customMetadata={customMetadata}>
      <div className="max-w-lg mx-auto md:mt-10">
        <SectionTitle title="Contact Me" />
        <p className="my-6 long-text">
          If you want to hire me, collaborate or give me any feedback or
          suggestions, get in touch.
        </p>
        <ContactForm />
      </div>
    </MainLayout>
  )
}
