const ContactForm = () => {
  const styles = {
    input:
      'block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-50 border-none rounded appearance-none focus:outline-none focus:bg-white',
  };

  return (
    <form className="w-full py-6 space-y-6 md:w-5/6">
      <div className="">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          className={styles.input}
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          className={styles.input}
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your message..."
          className={styles.input}
        />
      </div>
    </form>
  );
};

export default ContactForm;
