import React from 'react';
import CourseCard from '../components/CourseCard';
import { BookOpen, Atom, Microscope, FlaskConical, Calculator, Globe } from 'lucide-react';

const Courses = () => {
    const courses = [
        {
            title: "Complete Foundation",
            level: "Class 6-8",
            description: "Building strong fundamentals in Mathematics, Science, and English. Interactive sessions to make learning fun.",
            tags: ["Maths", "Science", "English"],
            icon: BookOpen
        },
        {
            title: "Board Exam Excellence",
            level: "Class 9-10",
            description: "Rigorous preparation for board exams with focus on concept clarity, regular tests, and answer writing practice.",
            tags: ["Maths", "Science", "Social Science"],
            icon: Calculator
        },
        {
            title: "Physics Mastery",
            level: "Class 11-12",
            description: "Comprehensive physics coaching for CBSE/ICSE and competitive exams like JEE/NEET. Visualization of concepts.",
            tags: ["Physics", "JEE", "NEET"],
            icon: Atom
        },
        {
            title: "Chemistry Expert",
            level: "Class 11-12",
            description: "Master Organic, Inorganic, and Physical Chemistry with expert guidance and regular problem-solving sessions.",
            tags: ["Chemistry", "JEE", "NEET"],
            icon: FlaskConical
        },
        {
            title: "Biology Scholar",
            level: "Class 11-12",
            description: "Detailed study of Botany and Zoology with focus on NCERT and connection to real-world applications.",
            tags: ["Biology", "NEET"],
            icon: Microscope
        },
        {
            title: "English Language",
            level: "All Classes",
            description: "Grammar, creative writing, and literature classes to improve communication skills and academic performance.",
            tags: ["Grammar", "Literature", "Spoken English"],
            icon: Globe
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Structured learning programs designed to bring out the best in every student.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
