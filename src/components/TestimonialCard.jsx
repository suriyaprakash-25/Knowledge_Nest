import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating = 5 }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative h-full flex flex-col">
            <div className="absolute top-4 right-6 text-primary-100">
                <Quote size={48} fill="currentColor" />
            </div>

            <div className="flex space-x-1 mb-4 text-yellow-400">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                ))}
            </div>

            <p className="text-gray-600 mb-6 relative z-10 italic flex-grow">
                "{content}"
            </p>

            <div className="flex items-center space-x-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                    <p className="text-primary-500 text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
