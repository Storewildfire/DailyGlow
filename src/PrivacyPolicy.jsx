import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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
                        <span className="text-4xl">🔒</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Privacy Policy</h1>
                    </div>

                    <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
                        <p className="text-lg font-medium text-orange-500 border-l-4 border-orange-300 pl-4 py-1">
                            <strong>Last updated:</strong> March 3, 2026
                        </p>

                        <p>
                            DailyGlow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your information is collected, used, and disclosed by DailyGlow.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">1. Data Collection and Storage</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Account Information</h3>
                        <p>
                            When you create an account with DailyGlow, we collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Email address</strong> — used for authentication and account recovery</li>
                            <li><strong>Display name</strong> — shown within the app</li>
                            <li><strong>Authentication provider</strong> — Google Sign-In or email/password</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.2 Wellness Data</h3>
                        <p>
                            DailyGlow collects wellness data that you voluntarily enter, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Habit tracking logs and completion history</li>
                            <li>Mood entries and mood history</li>
                            <li>Water intake records</li>
                            <li>Sleep tracking data</li>
                            <li>Gratitude journal entries</li>
                            <li>Achievement progress and XP/level data</li>
                            <li>Streak information</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.3 Cloud Storage</h3>
                        <p>
                            Your data is stored both locally on your device and securely synced to <strong>Google Firebase Cloud Firestore</strong>. This enables:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Data backup and recovery</li>
                            <li>Cross-device synchronization</li>
                            <li>Account restoration if you reinstall the app</li>
                        </ul>
                        <p className="mt-4">
                            Your data is stored under your unique user ID and is only accessible by you when authenticated. We use Firebase's enterprise-grade security to protect your data.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.4 Device Information</h3>
                        <p>
                            For push notification delivery, we collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Device model and OS version</li>
                            <li>Firebase Cloud Messaging (FCM) token</li>
                            <li>App version</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.5 Google AdMob</h3>
                        <p>
                            We use Google AdMob to display advertisements. AdMob may collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Device identifiers (e.g., Android Advertising ID)</li>
                            <li>Approximate location data</li>
                            <li>App usage data for ad personalization</li>
                        </ul>
                        <p className="mt-4">
                            For more information, please review <a href="https://policies.google.com/privacy" className="text-orange-500 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">2. How We Use Your Data</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Provide and maintain the DailyGlow app</li>
                            <li>Sync your wellness data across devices</li>
                            <li>Send push notifications (reminders, welcome messages)</li>
                            <li>Track achievements and progress</li>
                            <li>Improve the app experience</li>
                        </ul>
                        <p className="mt-4 font-medium text-green-600">
                            ✅ We do NOT sell your personal data to third parties.<br />
                            ✅ We do NOT share your wellness data with anyone.<br />
                            ✅ We do NOT use your data for profiling or marketing.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">3. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your data:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Firebase Authentication</strong> — secure login with Google Sign-In or email/password</li>
                            <li><strong>Firestore Security Rules</strong> — users can only read/write their own data</li>
                            <li><strong>HTTPS encryption</strong> — all data transmitted over encrypted connections</li>
                            <li><strong>Access control</strong> — no admin access to individual user data</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">4. Account Deletion</h2>
                        <p>
                            You can delete your account at any time from <strong>Settings → Delete Account</strong> within the app. When you delete your account:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>All your data is permanently deleted from Firebase Cloud Firestore</li>
                            <li>All sub-collections (moods, habits, water, sleep, gratitude, completions) are removed</li>
                            <li>Your Firebase Authentication account is deleted</li>
                            <li>All local data is cleared from your device</li>
                            <li>This action is <strong>irreversible</strong></li>
                        </ul>
                        <p className="mt-4">
                            You can also request account deletion by emailing <a href="mailto:storewildfire.in@gmail.com" className="text-orange-500 hover:underline">storewildfire.in@gmail.com</a>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">5. Permissions</h2>
                        <p>DailyGlow requests the following permissions:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Internet Access:</strong> Required for cloud sync, ads, and authentication</li>
                            <li><strong>Notifications (POST_NOTIFICATIONS):</strong> Required to send reminders and welcome notifications. You can disable this anytime.</li>
                            <li><strong>Wake Lock:</strong> Required for scheduled reminders</li>
                            <li><strong>Boot Completed:</strong> Required to reschedule reminders after device restart</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">6. Children's Privacy</h2>
                        <p>
                            DailyGlow is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided us with personal data, please contact us.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">7. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b">8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
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

export default PrivacyPolicy;
