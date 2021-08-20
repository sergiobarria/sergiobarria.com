import { FiSend } from 'react-icons/fi';
import SocialIcons from '../layout/SocialIcons';

import SectionTitle from '../ui/SectionTitle';
import ContactForm from './ContactForm';

const Contact = () => (
  <section className="py-12">
    <div className="grid max-w-screen-lg grid-cols-12 p-8 mx-auto bg-gray-200 rounded-lg">
      <div className="col-span-12 pb-6">
        <SectionTitle title="Contact Me" />
      </div>
      <div className="flex flex-col items-start justify-start col-span-6">
        <ContactForm />
        <button type="submit" className="btn btn-black">
          Send Email <FiSend className="ml-2" />
        </button>
      </div>
      <article className="flex-col justify-center col-span-6">
        <p className="pt-4">
          If you want to hire me, collaborate or give me any feedback or
          suggestions, get in touch.
        </p>
        <SocialIcons width="6" height="6" />
      </article>
    </div>
  </section>
);
export default Contact;
