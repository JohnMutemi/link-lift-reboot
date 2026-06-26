import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { validateAdminLogin, createAdminSession, seedDefaultAdminLogins } from "@/lib/auth";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const user = validateAdminLogin(email, password);
    if (user) {
      createAdminSession(user);
      setIsLoading(false);
      navigate({ to: "/admin" });
    } else {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Seed default credentials only on the client
    try {
      seedDefaultAdminLogins();
    } catch (e) {
      // ignore in environments without storage
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-slate-900 to-navy px-4 py-10">
      <div className="w-full max-w-lg sm:max-w-md">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
          <div className="bg-slate-950 px-6 py-7 sm:px-8 sm:py-8 text-center text-white">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan/15 text-cyan">
              <Lock className="size-7" />
            </div>
            <h1 className="mt-6 text-2xl font-bold">Admin Portal</h1>
            <p className="mt-2 text-sm text-slate-300">
              Link Freight Logistics — Secure access to your dashboard.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={isLoading}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/20 disabled:bg-slate-100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/20 disabled:bg-slate-100"
                  required
                />
              </div>

              {error && (
                <div className="rounded-2xl bg-rose-50 border border-rose-200 p-3 text-sm text-rose-700">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full justify-center gap-2 bg-cyan hover:bg-cyan/90 text-white font-semibold rounded-2xl py-3 text-sm"
              >
                <LogIn className="size-4" />
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
