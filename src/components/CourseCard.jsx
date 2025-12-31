import React from 'react';
import { ArrowRight, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, level, description, tags, icon: Icon }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
            <div className="mb-4 bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                {Icon ? <Icon size={24} /> : <Book size={24} />}
            </div>

            <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                    {level}
                </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 text-sm mb-6 flex-grow">
                {description}
            </p>

            {tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 w-full py-2.5 bg-white border-2 border-primary-100 text-primary-600 rounded-xl font-medium hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all group-hover:shadow-md"
            >
                <span>Enquire Now</span>
                <ArrowRight size={18} />
            </Link>
        </div>
    );
};

export default CourseCard;
