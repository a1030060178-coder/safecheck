import { getSupabaseAdmin } from "@/lib/supabase";
import { Shield, Clock, Users, Calendar, ArrowUp } from "lucide-react";
import { UpgradeButton } from "@/components/UpgradeButton";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const { data: user } = await getSupabaseAdmin()
    .from("users")
    .select("*, emergency_contacts(*), check_ins(*)")
    .eq("unique_token", token)
    .single();

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2">Not Found</h1>
          <p className="text-zinc-500">Invalid dashboard link.</p>
        </div>
      </div>
    );
  }

  const contacts = user.emergency_contacts || [];
  const checkIns = (user.check_ins || []).sort(
    (a: { date: string }, b: { date: string }) =>
      b.date.localeCompare(a.date)
  );

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-2xl font-bold">Your SafeCheck</h1>
          <p className="text-sm text-zinc-500">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-zinc-200 rounded-xl p-4">
          <Clock className="w-5 h-5 text-amber-500 mb-2" />
          <p className="text-xs text-zinc-400">Check-in Time</p>
          <p className="font-semibold">{user.check_in_time}</p>
        </div>
        <div className="border border-zinc-200 rounded-xl p-4">
          <Users className="w-5 h-5 text-amber-500 mb-2" />
          <p className="text-xs text-zinc-400">Emergency Contacts</p>
          <p className="font-semibold">{contacts.length}</p>
        </div>
        <div className="border border-zinc-200 rounded-xl p-4">
          <Calendar className="w-5 h-5 text-amber-500 mb-2" />
          <p className="text-xs text-zinc-400">Plan</p>
          <p className="font-semibold capitalize">{user.tier}</p>
        </div>
      </div>

      <div className="border border-zinc-200 rounded-xl p-6 mb-8">
        <h2 className="font-semibold mb-4">Emergency Contacts</h2>
        {contacts.length === 0 ? (
          <p className="text-sm text-zinc-400">
            No contacts added yet. Add at least one for protection.
          </p>
        ) : (
          <ul className="space-y-2">
            {contacts.map(
              (c: { id: string; email: string; name: string | null }) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">
                      {c.name || "Unnamed"}
                    </p>
                    <p className="text-xs text-zinc-400">{c.email}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
      </div>

      {user.tier === "free" && (
        <div className="border-2 border-amber-300 bg-amber-50 rounded-xl p-6 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-1 flex items-center gap-2">
                <ArrowUp className="w-5 h-5 text-amber-500" />
                Upgrade to Pro
              </h2>
              <ul className="text-sm text-zinc-600 space-y-1 mt-2">
                <li>• 5 emergency contacts (instead of 1)</li>
                <li>• SMS alerts (not just email)</li>
                <li>• Multiple daily check-ins</li>
                <li>• Full check-in history</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 max-w-[200px]">
            <UpgradeButton email={user.email} />
          </div>
        </div>
      )}

      <div className="border border-zinc-200 rounded-xl p-6">
        <h2 className="font-semibold mb-4">Recent Check-ins</h2>
        {checkIns.length === 0 ? (
          <p className="text-sm text-zinc-400">
            No check-ins yet. Your first one is coming up!
          </p>
        ) : (
          <ul className="space-y-2">
            {checkIns
              .slice(0, 14)
              .map((ci: { id: string; date: string; checked_in_at: string }) => (
                <li
                  key={ci.id}
                  className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0 text-sm"
                >
                  <span>{ci.date}</span>
                  <span className="text-zinc-400">
                    {new Date(ci.checked_in_at).toLocaleTimeString()}
                  </span>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
