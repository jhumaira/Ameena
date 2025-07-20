export default function Contact() {
    return (
      <section id="contact" className="bg-brandLight py-16 px-4">
        <h2 className="text-3xl font-serif text-brandDark text-center mb-10">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/xnnzjbyd" // ← REPLACE this with your actual Formspree endpoint
          method="POST"
          className="max-w-2xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 rounded-md border border-gray-300"
          ></textarea>

           {/* 🔽 Step 3: Optional redirect input (add this!) */}
            <input
                type="hidden"
                name="_redirect"
                value="https://jhumaira.github.io/Ameena/#"
            />
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
  