import { getSupabaseAdmin } from "@/lib/supabase";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default async function CheckInPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const { data: user } = await getSupabaseAdmin()
    .from("users")
    .select("id, email, check_in_time")
    .eq("unique_token", token)
    .single();

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <X className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Invalid Link</h1>
          <p className="text-zinc-500">
            This check-in link doesn't exist. If you're the account owner,
            check your welcome email for the correct link.
          </p>
        </div>
      </div>
    );
  }

  // Record check-in for today
  const today = new Date().toISOString().split("T")[0];
  await getSupabaseAdmin().from("check_ins").upsert(
    {
      user_id: user.id,
      date: today,
      checked_in_at: new Date().toISOString(),
    },
    { onConflict: "user_id,date" }
  );

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 animate-bounce">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Checked in!</h1>
        <p className="text-zinc-500 mb-4">
          You're safe. We'll remind you again tomorrow at{" "}
          <strong>{user.check_in_time}</strong>.
        </p>
        <Link
          href={`/dashboard/${token}`}
          className="text-sm text-amber-600 hover:underline"
        >
          Manage your settings
        </Link>
      </div>
    </div>
  );
}
