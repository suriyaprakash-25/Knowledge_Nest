import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-primary-600 rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Background Patterns */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full  -mr-16 -mt-16 blur-sm"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-8 -mb-8 blur-sm"></div>

                    <div className="space-y-6 max-w-2xl relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                            Ready to start your journey with us?
                        </h2>
                        <p className="text-primary-100 text-lg lg:text-xl">
                            Enroll today and take the first step towards academic excellence.
                            Limited seats available for the upcoming batch.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 text-center"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/whatsapp"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                        >
                            <span>Chat on WhatsApp</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
