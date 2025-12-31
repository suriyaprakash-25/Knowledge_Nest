import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-primary-50 min-h-screen flex items-center pt-16">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 left-0 -ml-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm border border-primary-100 animate-fade-in">
                        <Sparkles size={16} className="text-secondary-500" />
                        <span className="text-sm font-medium text-secondary-600 tracking-wide uppercase">Unlock Potential</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Where Learning Finds Its <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Home</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Expert tuition, personalized attention, and a caring environment for students from Class 6 to 12. Join us to build a strong foundation for your future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <Link
                            to="/courses"
                            className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center space-x-2 transform hover:-translate-y-1"
                        >
                            <span>Enroll Now</span>
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-white text-gray-700 px-8 py-4 rounded-xl font-bold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                        >
                            <span>Contact Us</span>
                        </Link>
                    </div>

                </div>

                {/* Image/Visual content */}
                <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                            alt="Students studying"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Floating Card */}
                    <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-4 max-w-xs animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <div className="bg-green-100 p-3 rounded-lg text-green-600">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Top Results</p>
                            <p className="text-xs text-gray-500">Consistently excellent performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
