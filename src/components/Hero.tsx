export default function Hero() {
  return (
    <section className="py-24 px-6 bg-white text-center">
      {/* Arabic calligraphy image */}
      <div className="mb-8">
        <img
          src="images/Bismillah_rose.svg"
          alt="Bismillah calligraphy"
          className="mx-auto h-20 sm:h-28 opacity-80"
        />
      </div>

      {/* Main Title and Subtitle */}
      <p className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-rose leading-snug italic">
        Sacred Knowledge, Taught with Grace
      </p>
      <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-forest max-w-4xl mx-auto">
        Arabic & Quran Courses for Women, by Women
      </h2>

      {/* Call to Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#schedule"
          className="px-8 py-3 rounded-md text-white bg-brand-forest hover:bg-brand-dark shadow-md transition"
        >
          Schedule Now
        </a>
        <a
          href="#courses"
          className="px-8 py-3 rounded-md border border-brand-forest text-brand-forest hover:bg-brand-rose hover:text-white shadow-md transition"
        >
          View Courses
        </a>
      </div>

      {/* Feature Highlights */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        {/* Feature 1: Female-led */}
        <div className="flex items-start gap-4">
          <img src="images/hijabicon.png" alt="Female-led" className="w-10 h-10" />
          <p className="text-gray-800">
            <strong className="text-brand-forest">Female-led instruction</strong> with Ijazah certified scholars.
          </p>
        </div>

        {/* Feature 2: Scheduling */}
        <div className="flex items-start gap-4">
          <img src="images/calendar.png" alt="Flexible scheduling" className="w-10 h-10" />
          <p className="text-gray-800">
            <strong className="text-brand-forest">Flexible scheduling</strong> with live and recorded options.
          </p>
        </div>

        {/* Feature 3: Community */}
        <div className="flex items-start gap-4">
          <img src="images/community.png" alt="Supportive community" className="w-10 h-10" />
          <p className="text-gray-800">
            <strong className="text-brand-forest">Supportive community</strong> for women at every level.
          </p>
        </div>
      </div>
    </section>
  );
}
