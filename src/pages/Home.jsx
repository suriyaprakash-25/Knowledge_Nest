import React from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { Users, Clock, Heart, TrendingUp, BookOpen, Atom, Microscope } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: Users,
            title: "Experienced Tutors",
            description: "Learn from highly qualified educators with years of teaching experience and a passion for student success."
        },
        {
            icon: Clock,
            title: "Small Batch Learning",
            description: "We keep our batches small to ensure every student gets the personal attention they deserve."
        },
        {
            icon: Heart,
            title: "Personal Attention",
            description: "Customized learning plans and regular doubt-clearing sessions to address individual needs."
        },
        {
            icon: TrendingUp,
            title: "Result-Oriented",
            description: "Focused approach on delivering tangible academic improvements and competitive exam success."
        }
    ];

    const featuredCourses = [
        {
            title: "Foundation Course",
            level: "Class 6-10",
            description: "Complete curriculum coverage for Mathematics, Science, and English to build a strong academic base.",
            tags: ["Maths", "Science", "English"],
            icon: BookOpen
        },
        {
            title: "Senior Physics",
            level: "Class 11-12",
            description: "In-depth concepts, problem-solving strategies, and preparation for board/competitive exams.",
            tags: ["Physics", "JEE", "NEET"],
            icon: Atom
        },
        {
            title: "Biology Excellence",
            level: "Class 11-12",
            description: "Comprehensive biology coaching with detailed diagrams and practical understanding.",
            tags: ["Biology", "NEET"],
            icon: Microscope
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Parent of Class 10 Student",
            content: "Knowledge Nest has been a blessing for my daughter. Her confidence in Math has improved significantly, and the teachers are incredibly supportive.",
            rating: 5
        },
        {
            name: "Rahul Verma",
            role: "Class 12 Student",
            content: "The concepts are explained so clearly here. Physics used to be my nightmare, but now it's my favorite subject!",
            rating: 5
        },
        {
            name: "Anita Desai",
            role: "Parent of Class 8 Student",
            content: "I love the small batch size. My son gets personal attention, and his grades have improved drastically in just 3 months.",
            rating: 5
        }
    ];

    return (
        <div className="bg-white">
            <HeroSection />

            {/* Why Choose Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Why Us</span>
                        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Why Knowledge Nest?
                        </h2>
                        <p className="mt-4 text-xl text-gray-500">
                            We focus on building not just grades, but confidence and understanding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div className="max-w-2xl">
                            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Courses</span>
                            <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                Programs Designed for Excellence
                            </h2>
                        </div>
                        <a href="/courses" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center space-x-1">
                            <span>View All Courses</span>
                            <BookOpen size={16} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            What Parents & Students Say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Home;
