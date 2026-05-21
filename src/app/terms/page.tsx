export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-zinc-500 mb-4">Last updated: May 18, 2026</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Service Description</h2>
      <p className="text-zinc-600 mb-4">
        DailyPing provides a daily check-in reminder service. Users receive email
        reminders at their chosen time and must confirm their well-being by clicking
        the check-in link. If a user fails to check in within their configured grace
        period, DailyPing sends an alert to the user's designated emergency contacts.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. No Emergency Service</h2>
      <p className="text-zinc-600 mb-4">
        DailyPing is NOT an emergency response service. We do not contact police,
        ambulance, or any emergency services on your behalf. Our service only notifies
        the emergency contacts you designate. You are responsible for ensuring your
        emergency contacts are willing and able to check on you.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Subscription &amp; Billing</h2>
      <p className="text-zinc-600 mb-4">
        DailyPing Pro is a monthly subscription at $5/month. You may cancel anytime.
        Refunds are provided within 7 days of purchase if you are not satisfied.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Limitation of Liability</h2>
      <p className="text-zinc-600 mb-4">
        DailyPing is provided as-is. We are not liable for any harm, injury, or loss
        resulting from the use or failure of this service. You use DailyPing at your
        own risk.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Contact</h2>
      <p className="text-zinc-600">
        Questions? Email us at{" "}
        <a href="mailto:support@dailyping.com" className="text-amber-600 underline">
          support@dailyping.com
        </a>
      </p>
    </div>
  );
}
