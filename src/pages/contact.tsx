import MainContainer from '@/components/layout/MainContainer'
import ContactForm from '@/components/misc/ContactForm'
import SectionTitle from '@/components/misc/SectionTitle'

export default function contact() {
  return (
    <MainContainer>
      <div className="max-w-lg mx-auto md:mt-10">
        <SectionTitle title="Contact Me" />
        <p className="my-6 long-text">
          If you want to hire me, collaborate or give me any feedback or
          suggestions, get in touch.
        </p>
        <ContactForm />
      </div>
    </MainContainer>
  )
}
