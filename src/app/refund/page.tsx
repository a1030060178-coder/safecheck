export default function RefundPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
      <p className="text-zinc-500 mb-4">Last updated: May 18, 2026</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7-Day Money-Back Guarantee</h2>
      <p className="text-zinc-600 mb-4">
        If you're not satisfied with DailyPing Pro for any reason, contact us within
        7 days of your purchase and we will issue a full refund. No questions asked.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How to Request a Refund</h2>
      <p className="text-zinc-600 mb-4">
        Email{" "}
        <a href="mailto:support@dailyping.com" className="text-amber-600 underline">
          support@dailyping.com
        </a>{" "}
        with the email address associated with your account. We process refunds within
        48 hours.
      </p>
    </div>
  );
}
