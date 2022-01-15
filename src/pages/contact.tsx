import ContactForm from '@/components/ContactForm';
import Layout from '@/components/layout-main/Layout';

export default function contact() {
  const customMetadata = {
    url: 'https://sergiobarria.com/contact',
    title: 'Contact | Sergio Barria',
  };

  return (
    <Layout customMetadata={customMetadata}>
      <section className='section'>
        <div className='layout'>
          <div className='w-full mx-auto mb-8 md:w-8/12'>
            <h2>Contact Me</h2>
            <p className='my-2 text-long'>
              If you want to hire me, collaborate or give me any feedback or
              suggestions, get in touch.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
