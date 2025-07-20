const teachers = [
    {
      name: "Ustadha Ameena",
      bio: "Specialist in Tajweed and Arabic Grammar",
      img: "images/hijab.png",
    },

  ];
  
  export default function Teachers() {
    return (
      <section id="teachers" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-serif text-brand.forest text-center mb-10">
          Meet Our Teachers
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="bg-brand.light rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-serif text-brand.forest">{t.name}</h3>
                  <p className="text-sm text-gray-700">{t.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  