import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-800">
            {/* Navigation */}
            <nav className="w-full max-w-4xl mx-auto px-6 py-6 flex justify-between items-center z-50">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
                        <ArrowLeft size={20} />
                    </div>
                    <span className="font-medium text-gray-600 group-hover:text-purple-600 transition-colors">Back to Home</span>
                </Link>
            </nav>

            <main className="w-full max-w-4xl mx-auto px-6 pb-24 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-10 md:p-14"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-4xl">🔒</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Privacy Policy</h1>
                    </div>

                    <div className="prose prose-purple max-w-none text-gray-600 space-y-6">
                        <p className="text-lg font-medium text-purple-600 border-l-4 border-purple-300 pl-4 py-1">
                            <strong>Last updated:</strong> February 23, 2026
                        </p>

                        <p>
                            DailyGlow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your information is collected, used, and disclosed by DailyGlow.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">1. Data Collection and Usage</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Local Data Storage</h3>
                        <p>
                            DailyGlow is primarily a local-first application. Your personal data, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Habit tracking logs</li>
                            <li>Mood entries</li>
                            <li>Journal entries</li>
                            <li>Streak data</li>
                            <li>Settings</li>
                        </ul>
                        <p className="mt-4">
                            Are stored locally on your device using Hive encryption. We do not have access to this data, and it is not synced to any external server unless you explicitly export it.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.2 Google AdMob</h3>
                        <p>
                            We use Google AdMob to display advertisements in the free version of DailyGlow. AdMob may collect and use data to provide personalized ads. This may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Device identifiers (e.g., Android Advertising ID)</li>
                            <li>Location data (approximate)</li>
                            <li>App usage data</li>
                        </ul>
                        <p className="mt-4">
                            For more information, please review <a href="https://policies.google.com/privacy" className="text-purple-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">2. Permissions</h2>
                        <p>DailyGlow requests the following permissions:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Internet Access:</strong> Required to load advertisements from AdMob and to access external links.</li>
                            <li><strong>Notifications:</strong> Required to send you daily habit reminders. You can disable this in Settings.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">3. Children's Privacy</h2>
                        <p>
                            DailyGlow is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">4. Contact Us</h2>
                        <p>
                            If you have any questions or suggestions about this Privacy Policy, do not hesitate to contact the developer:
                        </p>
                        <div className="bg-white/50 p-6 rounded-2xl border border-purple-100 mt-4">
                            <p><strong>Developer:</strong> Amar (DailyGlow Studio)</p>
                            <p><strong>Email:</strong> <a href="mailto:storewildfire.in@gmail.com" className="text-purple-600 hover:underline">storewildfire.in@gmail.com</a></p>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="w-full pb-8 pt-4 text-center text-gray-500 z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2 opacity-50">
                    <span className="text-xl">✨</span>
                    <span className="font-bold tracking-tight text-gray-800">DailyGlow</span>
                </div>
                <p>&copy; 2026 DailyGlow Studio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
