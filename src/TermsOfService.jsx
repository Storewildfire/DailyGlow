import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-orange-50 via-white to-cyan-50 text-gray-800">
            {/* Navigation */}
            <nav className="w-full max-w-4xl mx-auto px-6 py-6 flex justify-between items-center z-50">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-cyan-400 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
                        <ArrowLeft size={20} />
                    </div>
                    <span className="font-medium text-gray-600 group-hover:text-orange-500 transition-colors">Back to Home</span>
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
                        <span className="text-4xl">📋</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Terms of Service</h1>
                    </div>

                    <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
                        <p className="text-lg font-medium text-orange-500 border-l-4 border-orange-300 pl-4 py-1">
                            <strong>Last updated:</strong> March 3, 2026
                        </p>

                        <p>
                            Please read these Terms of Service ("Terms") carefully before using the DailyGlow mobile application ("the App") operated by DailyGlow Studio ("we," "us," or "our").
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, or using DailyGlow, you agree to be bound by these Terms. If you do not agree, please do not use the App.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">2. Description of Service</h2>
                        <p>
                            DailyGlow is a personal wellness and habit tracking application that allows users to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Track daily habits with streaks and achievements</li>
                            <li>Monitor mood, water intake, and sleep quality</li>
                            <li>Maintain a gratitude journal</li>
                            <li>Earn XP and unlock achievements</li>
                            <li>Receive motivational affirmations and notifications</li>
                            <li>Sync data securely to the cloud</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">3. User Accounts</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>You must create an account to use DailyGlow (via Google Sign-In, email, or anonymous sign-in)</li>
                            <li>You are responsible for maintaining the confidentiality of your account</li>
                            <li>You must provide accurate information when creating your account</li>
                            <li>You may delete your account at any time from Settings → Delete Account</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">4. User Data</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>You retain ownership of all data you enter into the App</li>
                            <li>Your data is stored securely in Google Firebase Cloud Firestore</li>
                            <li>We do not sell, share, or profit from your personal data</li>
                            <li>You can export or delete your data at any time</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">5. Acceptable Use</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Use the App for any illegal purpose</li>
                            <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
                            <li>Interfere with the App's security features or servers</li>
                            <li>Create multiple accounts for fraudulent purposes</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">6. Advertisements</h2>
                        <p>
                            DailyGlow displays advertisements through Google AdMob. These ads are served by third-party networks and may collect data as described in our <Link to="/privacy-policy" className="text-orange-500 hover:underline font-medium">Privacy Policy</Link>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">7. Disclaimer</h2>
                        <p>
                            DailyGlow is a wellness tracking tool and is <strong>not a substitute for professional medical advice</strong>. The App does not provide medical diagnoses, treatment recommendations, or health assessments. Always consult a qualified healthcare provider for medical concerns.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">8. Limitation of Liability</h2>
                        <p>
                            DailyGlow Studio shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of or inability to use the App. The App is provided "as is" without warranties of any kind.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">9. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Continued use of the App after any changes constitutes acceptance of the new Terms.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">10. Contact Us</h2>
                        <p>For any questions about these Terms, please contact us:</p>
                        <div className="bg-white/50 p-6 rounded-2xl border border-orange-100 mt-4">
                            <p><strong>Developer:</strong> Amar (DailyGlow Studio)</p>
                            <p><strong>Email:</strong> <a href="mailto:storewildfire.in@gmail.com" className="text-orange-500 hover:underline">storewildfire.in@gmail.com</a></p>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="w-full pb-8 pt-4 text-center text-gray-500 z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2 opacity-50">
                    <div className="w-6 h-6 rounded-lg overflow-hidden">
                        <img src="/logo.png" alt="DailyGlow" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold tracking-tight text-gray-800">DailyGlow</span>
                </div>
                <p>&copy; 2026 DailyGlow Studio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TermsOfService;
