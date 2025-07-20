import PDFDownloadCard from "../components/PDFDownloadCard";

export default function IntroArabic() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-brand.dark mb-6">Intro to Arabic</h1>

      <p className="text-lg text-gray-800 mb-4">
        Learn to read, write, and converse in Arabic — designed especially for sisters at the beginning of their journey.
      </p>

      <p className="text-md text-gray-700 mb-6">
        This beginner-friendly course creates a supportive space for women to build foundational Arabic skills.
        Whether you're completely new or reviewing the basics, you'll gain confidence in Arabic literacy and everyday communication.
      </p>

      <h2 className="text-xl font-semibold text-brand.dark mb-3">What You’ll Learn</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Arabic alphabet recognition and pronunciation</li>
        <li>Basic grammar, sentence structure, and vocabulary</li>
        <li>Simple conversation skills (greetings, introductions, daily life)</li>
        <li>Reading and writing short sentences and paragraphs</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand.dark mb-3">Course Format</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Weekly live classes with recordings</li>
        <li>Interactive speaking and writing practice</li>
        <li>Downloadable worksheets and review exercises</li>
        <li>Sisters-only study groups and community chat</li>
      </ul>

      <a
        href="/schedule"
        className="inline-block mt-6 px-6 py-3 rounded-md bg-brand.dark text-white hover:bg-green-900 transition"
      >
        Schedule Now
      </a>

      {/* Downloadable PDF Resources */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-semibold text-brand.dark mb-4">Downloadable PDF Resources</h2>
        <p className="text-gray-700 mb-4">
          Enhance your learning with beautifully designed resources.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <PDFDownloadCard
            title="Intro to Arabic Workbook (PDF)"
            description="60+ pages of practice sheets for reading, writing, and vocabulary."
            price="$7"
            link="/buy/arabic-workbook" // Replace with actual Stripe or Gumroad link
          />
        </div>
      </div>
    </section>
  );
}
