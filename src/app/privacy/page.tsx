export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-zinc-500 mb-4">Last updated: May 18, 2026</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Data We Collect</h2>
      <ul className="list-disc pl-5 text-zinc-600 space-y-1 mb-4">
        <li>Your email address (required for service)</li>
        <li>Your chosen daily check-in time</li>
        <li>Emergency contact email(s) you provide</li>
        <li>Check-in timestamps (date and time only)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Data</h2>
      <p className="text-zinc-600 mb-4">
        We use your data exclusively to provide the DailyPing service — sending check-in
        reminders, recording your check-ins, and alerting your emergency contacts when
        necessary. We never sell, rent, or share your data with third parties for
        marketing purposes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Storage</h2>
      <p className="text-zinc-600 mb-4">
        Your data is stored on Supabase servers in Singapore. We retain your check-in
        history for the lifetime of your account. You may request deletion of your data
        at any time by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Cookies</h2>
      <p className="text-zinc-600 mb-4">
        DailyPing does not use tracking cookies. We do not run any analytics or
        advertising scripts.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Contact</h2>
      <p className="text-zinc-600">
        Privacy questions? Email{" "}
        <a href="mailto:support@dailyping.com" className="text-amber-600 underline">
          support@dailyping.com
        </a>
      </p>
    </div>
  );
}
