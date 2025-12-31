import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Intro */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Empowering Minds, Shaping Futures</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        At Knowledge Nest, we believe that education is not just about syllabi and exams. It's about igniting curiosity, building confidence, and creating a lifelong love for learning.
                    </p>
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-primary-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                    <Eye size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted educational partner for parents and students, known for our commitment to excellence, holistic development, and creating a nurturing environment where every child can thrive.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-secondary-100 rounded-lg text-secondary-600">
                                    <Target size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To provide high-quality, personalized tuition that simplifies complex concepts, builds strong academic foundations, and prepares students not just for exams, but for future challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Teaching Philosophy</span>
                        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 mb-6">
                            Why Parents Trust Us
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Concept Over Rote Learning", desc: "We focus on understanding the 'why' and 'how', not just memorizing the 'what'." },
                                { title: "Friendly Environment", desc: "A fear-free zone where students are encouraged to ask questions without hesitation." },
                                { title: "Regular Feedback", desc: "Transparent communication with parents about their child's progress and areas of improvement." },
                                { title: "Holistic Growth", desc: "We mentor students on time management, study techniques, and exam stress management." }
                            ].map((item, i) => (
                                <div key={i} className="flex">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle size={20} className="text-green-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-200 transform translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                            alt="Teacher helping student"
                            className="rounded-3xl shadow-xl w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
