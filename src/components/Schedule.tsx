export default function Schedule() {
    return (
      <section id="schedule" className="bg-brand.light py-16 px-4 text-center">
        <h2 className="text-3xl font-serif text-brand.dark mb-8">
          Schedule a Free Consultation
        </h2>
        <p className="mb-8 text-gray-700 max-w-xl mx-auto">
          Want to learn more about our programs? Schedule a free 15-minute call with one of our instructors.
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://calendly.com/bintawesome"
            width="100%"
            height="500"
            className="max-w-3xl w-full rounded-xl border shadow"
          ></iframe>
        </div>
      </section>
    );
  }
  