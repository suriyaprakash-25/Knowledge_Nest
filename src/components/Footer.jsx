import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary-500 p-2 rounded-lg text-white">
                                <BookOpen size={24} />
                            </div>
                            <span className="font-bold text-xl">Knowledge Nest</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students with personalized tuition and a strong academic foundation. Where learning feels like home.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Class 6–10 All Subjects</li>
                            <li className="text-gray-400">Class 11–12 Physics</li>
                            <li className="text-gray-400">Class 11–12 Chemistry</li>
                            <li className="text-gray-400">Class 11–12 Biology</li>
                            <li className="text-gray-400">Exam Preparation</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    70/29 1st Main road,Ramakrishnanagar<br />
                                    Chennai Ernavoor 57
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+91 6380345802</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">knowledge_nest_official@outlook.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Knowledge Nest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
