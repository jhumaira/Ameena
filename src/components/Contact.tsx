export default function Contact() {
    return (
      <section id="contact" className="bg-brandLight py-16 px-4">
        <h2 className="text-3xl font-serif text-brandDark text-center mb-10">
          Contact Us
        </h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-brandDark text-white rounded-md hover:bg-green-900"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  