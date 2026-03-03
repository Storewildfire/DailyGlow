import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart, Award, Sparkles, Smartphone, ShieldCheck, Download, Star, Droplets, Moon, Brain, Bell, Cloud, Trash2 } from 'lucide-react';

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
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-cyan-100 flex items-center justify-center mb-4 text-orange-500">
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
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
                        <img src="/logo.png" alt="DailyGlow" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-gray-800">Daily<span className="text-gradient">Glow</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-orange-500 transition-colors hidden sm:block">Privacy</Link>
                    <Link to="/terms" className="text-sm text-gray-500 hover:text-orange-500 transition-colors hidden sm:block">Terms</Link>
                    <a href="#download" className="glass-button px-6 py-2.5 rounded-full font-medium text-orange-500 hover:shadow-lg hover:-translate-y-0.5 z-10">
                        Get the App
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="w-full max-w-6xl mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
                {/* Background Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-orange-500 mb-6">
                        <Sparkles size={16} /> <span>Your complete wellness companion</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
                        Track habits.<br />Stay hydrated.<br />
                        <span className="text-gradient-warm">Glow daily.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                        Build life-changing routines, track mood & water intake, monitor sleep, practice gratitude — all in one beautiful app with cloud sync.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                        <a href="https://play.google.com/store/apps/details?id=com.dailyglow.daily_glow" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            <Download size={18} />
                            <div className="text-left"><div className="text-[9px] uppercase tracking-wider opacity-70">Get it on</div><div className="text-sm font-bold -mt-0.5">Google Play</div></div>
                        </a>
                        <a href="https://www.indusappstore.com/apps/lifestyle/dailyglow/com.dailyglow.daily_glow/?page=details&id=com.dailyglow.daily_glow" target="_blank" rel="noopener noreferrer" className="glass-button px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 text-gray-800 hover:-translate-y-1">
                            <Download size={18} />
                            <div className="text-left"><div className="text-[9px] uppercase tracking-wider opacity-50">Get it on</div><div className="text-sm font-bold -mt-0.5">Indus App Store</div></div>
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
                    <div className="w-[300px] h-[600px] bg-white rounded-[3rem] border-8 border-gray-100 shadow-2xl relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100 rounded-b-xl z-20"></div>

                        {/* App UI Simulation */}
                        <div className="flex-1 bg-gradient-to-br from-orange-50 to-cyan-50 p-6 pt-12">
                            <div className="glass-card p-4 flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-sm text-gray-500">Good Morning ☀️</p>
                                    <p className="font-bold text-gray-800">Stay consistent!</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-orange-200 border-t-orange-500 flex items-center justify-center font-bold text-orange-500 text-sm">
                                    85%
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: 'Drink Water', emoji: '💧', val: '7/8', color: 'text-cyan-500' },
                                    { name: 'Morning Walk', emoji: '🚶', val: '1/1', done: true },
                                    { name: 'Meditate', emoji: '🧘', val: '0/1' },
                                    { name: 'Read 15 Min', emoji: '📖', val: '1/1', done: true },
                                ].map((h, i) => (
                                    <div key={i} className="glass-card p-3.5 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl bg-white/50 w-9 h-9 rounded-xl flex items-center justify-center">{h.emoji}</span>
                                            <span className={`font-medium text-sm ${h.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{h.name}</span>
                                        </div>
                                        <span className={`text-xs font-bold ${h.done ? 'text-green-500' : 'text-gray-400'}`}>{h.done ? '✅' : h.val}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 glass-card p-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">🔥</span>
                                    <span className="text-sm font-medium text-gray-600">Streak</span>
                                </div>
                                <span className="font-bold text-orange-500">14 days</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Features Section */}
            <section id="features" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to <br /><span className="text-gradient-warm">glow every day.</span></h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Designed to help you build lasting wellness habits with beautiful design and cloud sync.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        delay={0.1}
                        icon={CheckCircle2}
                        title="Smart Habit Tracking"
                        description="Build lasting routines with customizable habits, streaks, and daily progress tracking."
                    />
                    <FeatureCard
                        delay={0.15}
                        icon={Droplets}
                        title="Water Tracker"
                        description="Stay hydrated with a beautiful water intake tracker. Set daily goals and never miss a glass."
                    />
                    <FeatureCard
                        delay={0.2}
                        icon={Heart}
                        title="Mood & Gratitude"
                        description="Log your daily mood with expressive emojis and write in your personal gratitude journal."
                    />
                    <FeatureCard
                        delay={0.25}
                        icon={Moon}
                        title="Sleep Tracking"
                        description="Monitor your sleep quality and duration. Understand your patterns and improve your rest."
                    />
                    <FeatureCard
                        delay={0.3}
                        icon={Award}
                        title="Achievements & XP"
                        description="Earn XP, level up, and unlock achievements as you build healthy habits consistently."
                    />
                    <FeatureCard
                        delay={0.35}
                        icon={Brain}
                        title="Daily Affirmations"
                        description="Start your day with positive affirmations across confidence, health, calm, and more."
                    />
                    <FeatureCard
                        delay={0.4}
                        icon={Cloud}
                        title="Cloud Sync"
                        description="Your progress syncs securely to the cloud. Never lose your data when switching devices."
                    />
                    <FeatureCard
                        delay={0.45}
                        icon={Bell}
                        title="Smart Notifications"
                        description="Get personalized reminders to stay on track. Welcome messages and motivational nudges."
                    />
                    <FeatureCard
                        delay={0.5}
                        icon={Sparkles}
                        title="Beautiful Analytics"
                        description="Visualize your progress with weekly charts, heatmaps, and insightful trends."
                    />
                </div>
            </section>

            {/* Security & Privacy Highlights */}
            <section className="w-full max-w-6xl mx-auto px-6 py-16 z-10">
                <div className="glass-card p-10 bg-gradient-to-br from-green-50/50 to-cyan-50/50">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">🔒 Your Privacy Matters</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">We take data protection seriously. Here's how we keep your info safe.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6">
                            <ShieldCheck size={40} className="mx-auto mb-4 text-green-500" />
                            <h3 className="font-bold text-gray-800 mb-2">Secure Cloud Storage</h3>
                            <p className="text-sm text-gray-600">Data stored in Google Firebase with enterprise-grade security. Only you can access your data.</p>
                        </div>
                        <div className="text-center p-6">
                            <Trash2 size={40} className="mx-auto mb-4 text-red-400" />
                            <h3 className="font-bold text-gray-800 mb-2">Full Data Deletion</h3>
                            <p className="text-sm text-gray-600">Delete your account anytime. All data is permanently removed from our servers — zero traces.</p>
                        </div>
                        <div className="text-center p-6">
                            <Smartphone size={40} className="mx-auto mb-4 text-blue-500" />
                            <h3 className="font-bold text-gray-800 mb-2">Your Data, Your Control</h3>
                            <p className="text-sm text-gray-600">Export your data anytime. We never sell or share your personal information with third parties.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="w-full max-w-6xl mx-auto px-6 py-16 z-10">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Loved by users ❤️</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ReviewCard
                        delay={0.1}
                        name="Priya S."
                        role="Fitness Enthusiast"
                        content="DailyGlow helped me build a consistent morning routine. The water tracker alone changed my health game!"
                    />
                    <ReviewCard
                        delay={0.2}
                        name="Rahul K."
                        role="College Student"
                        content="I love how the app tracks everything — mood, sleep, habits. The achievements keep me motivated every day."
                    />
                    <ReviewCard
                        delay={0.3}
                        name="Ananya M."
                        role="Working Professional"
                        content="Beautiful design and so easy to use. The gratitude journal has become my favorite part of the day."
                    />
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="w-full mt-10 z-10 p-6">
                <div className="max-w-4xl mx-auto glass-card p-12 relative overflow-hidden bg-gradient-to-br from-orange-600/10 to-cyan-600/10">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-3xl overflow-hidden mx-auto mb-6 shadow-xl">
                            <img src="/logo.png" alt="DailyGlow" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Start Your Wellness Journey</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Download DailyGlow free and take the first step toward a healthier, happier you.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="https://play.google.com/store/apps/details?id=com.dailyglow.daily_glow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:-translate-y-1 transition-transform">
                                <Download size={22} />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                                    <div className="text-base font-bold -mt-0.5">Google Play</div>
                                </div>
                            </a>
                            <a href="https://www.indusappstore.com/apps/lifestyle/dailyglow/com.dailyglow.daily_glow/?page=details&id=com.dailyglow.daily_glow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:-translate-y-1 transition-transform">
                                <Download size={22} />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                                    <div className="text-base font-bold -mt-0.5">Indus App Store</div>
                                </div>
                            </a>
                        </div>
                        <a href="mailto:storewildfire.in@gmail.com?subject=DailyGlow%20Support" className="inline-flex items-center gap-2 mt-6 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors">
                            <Star size={16} /> Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full pb-8 pt-16 text-center text-gray-500 z-10 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-4 opacity-60">
                    <div className="w-8 h-8 rounded-xl overflow-hidden">
                        <img src="/logo.png" alt="DailyGlow" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold tracking-tight text-gray-800">DailyGlow</span>
                </div>
                <p>&copy; 2026 DailyGlow Studio. All rights reserved.</p>
                <div className="flex gap-4 mt-4 text-sm">
                    <Link to="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-orange-500">Terms of Service</Link>
                    <a href="mailto:storewildfire.in@gmail.com" className="hover:text-orange-500">Contact Support</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
