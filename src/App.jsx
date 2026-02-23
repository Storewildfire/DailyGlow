import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart, Award, Sparkles, Smartphone, ShieldCheck, Download, Star } from 'lucide-react';

const ReviewCard = ({ name, role, content, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-card p-8 flex flex-col gap-4"
    >
        <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
        </div>
        <p className="text-gray-700 italic flex-1">"{content}"</p>
        <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-card p-6 flex flex-col items-center text-center"
    >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4 text-purple-600">
            <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Navigation */}
            <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center z-50">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg">
                        ✨
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-gray-800">Daily<span className="text-gradient">Glow</span></span>
                </div>
                <a href="#download" className="glass-button px-6 py-2.5 rounded-full font-medium text-purple-600 hover:shadow-lg hover:-translate-y-0.5 z-10">
                    Get the App
                </a>
            </nav>

            {/* Hero Section */}
            <main className="w-full max-w-6xl mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
                {/* Background Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-600 mb-6">
                        <Sparkles size={16} /> <span>Your all-in-one self-care companion</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
                        Track habits.<br />Log moods.<br />
                        <span className="text-gradient">Daily Glow.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                        Transform your life one day at a time with a beautiful, locally-stored self-care application designed for your privacy and peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                        <a href="#download" className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            <Download size={20} /> Download Free
                        </a>
                        <a href="#features" className="glass-button px-8 py-4 rounded-full font-semibold flex items-center justify-center text-gray-800">
                            Explore Features
                        </a>
                    </div>
                </motion.div>

                {/* Mockup Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 flex justify-center relative z-10"
                >
                    {/* Abstract Phone Mockup Placeholder */}
                    <div className="w-[300px] h-[600px] bg-white rounded-[3rem] border-8 border-gray-100 shadow-2xl relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100 rounded-b-xl z-20"></div>

                        {/* App UI Simulation */}
                        <div className="flex-1 bg-gradient-to-br from-indigo-50 to-pink-50 p-6 pt-12">
                            <div className="glass-card p-4 flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-sm text-gray-500">Good Morning, ☀️</p>
                                    <p className="font-bold text-gray-800">Keep it up!</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-500 flex items-center justify-center font-bold text-purple-500 text-sm">
                                    75%
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: 'Drink Water', emoji: '💧', val: '6/8' },
                                    { name: 'Meditation', emoji: '🧘', val: '0/1' },
                                    { name: 'Reading', emoji: '📖', val: '1/1', done: true },
                                ].map((h, i) => (
                                    <div key={i} className="glass-card p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl bg-white/50 w-10 h-10 rounded-xl flex items-center justify-center">{h.emoji}</span>
                                            <span className={`font-medium ${h.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{h.name}</span>
                                        </div>
                                        <span className={`text-sm ${h.done ? 'text-green-500 font-bold' : 'text-gray-400'}`}>{h.done ? 'Done!' : h.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Features Section */}
            <section id="features" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need. <br />Nothing you don't.</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">We designed DailyGlow to be beautiful, functional, and deeply respectful of your personal data.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        delay={0.1}
                        icon={CheckCircle2}
                        title="Smart Habit Tracking"
                        description="Build lasting routines with customizable targets, intervals, and a satisfying completion system."
                    />
                    <FeatureCard
                        delay={0.2}
                        icon={Heart}
                        title="Mood & Gratitude"
                        description="Log your daily feelings with expressive emojis and write in your secure gratitude journal."
                    />
                    <FeatureCard
                        delay={0.3}
                        icon={Award}
                        title="Gamified Streaks"
                        description="Stay motivated with a daily score and visual streaks that keep your self-improvement flame lit."
                    />
                    <FeatureCard
                        delay={0.4}
                        icon={ShieldCheck}
                        title="100% Privacy"
                        description="No cloud databases stealing your data. Everything is encrypted and stored locally on your device."
                    />
                    <FeatureCard
                        delay={0.5}
                        icon={Smartphone}
                        title="Premium Aesthetics"
                        description="Enjoy a stunning glassmorphic UI with smooth animations, light mode, and dark mode."
                    />
                    <FeatureCard
                        delay={0.6}
                        icon={Sparkles}
                        title="Insightful Analytics"
                        description="Visualize your progress over time with beautiful weekly charts and completion heatmaps."
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section id="download" className="w-full mt-10 z-10 p-6">
                <div className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden bg-gradient-to-br from-purple-600/10 to-pink-600/10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to glow up your routine?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Join the community of users building better habits and practicing daily self-care with DailyGlow.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:-translate-y-1 transition-transform">
                            Get DailyGlow for Android
                        </a>
                        <a href="mailto:storewildfire.in@gmail.com?subject=App%20Review:%20DailyGlow" className="glass-button px-8 py-4 rounded-full font-semibold flex items-center justify-center text-purple-600">
                            <Star size={20} className="mr-2" /> Write a Review
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full pb-8 pt-16 text-center text-gray-500 z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                    <span className="text-xl">✨</span>
                    <span className="font-bold tracking-tight text-gray-800">DailyGlow</span>
                </div>
                <p>&copy; 2026 DailyGlow Studio. All rights reserved.</p>
                <div className="flex gap-4 mt-4 text-sm">
                    <Link to="/privacy-policy" className="hover:text-purple-600">Privacy Policy</Link>
                    <a href="#" className="hover:text-purple-600">Terms of Service</a>
                    <a href="mailto:storewildfire.in@gmail.com" className="hover:text-purple-600">Contact Support</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
