import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";

const courses = [
  {
    title: "Intro to Arabic",
    subtitle: "Learn reading, writing, and basic conversation",
    level: "Beginner",
    icon: BookOpenIcon,
    link: "/intro-arabic",
  },
  {
    title: "Qur'an Tajweed",
    subtitle: "Master pronunciation with expert teachers",
    level: "Intermediate",
    icon: AcademicCapIcon,
    link: "/quran-tajweed",
  },
  {
    title: "Tafsir for Women",
    subtitle: "Understand the Qur’an deeply through classical sources",
    level: "Advanced",
    icon: ChatBubbleBottomCenterIcon,
    link: "/tafsir-for-women",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-16 px-4">
      <h2 className="text-center text-3xl font-serif text-brandDark mb-10">
        Featured Courses
      </h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {courses.map((course, idx) => {
          const Icon = course.icon;
          return (
            <div
              key={idx}
              className="bg-brandLight p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex gap-4 items-center mb-3">
                <Icon className="h-8 w-8 text-brandDark" />
                <div>
                  <h3 className="text-xl font-serif text-brandDark">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-700">{course.subtitle}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <Link
                  to={course.link}
                  className="text-sm text-brandDark hover:underline"
                >
                  Enroll
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
