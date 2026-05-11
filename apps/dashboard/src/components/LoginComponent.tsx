"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginComponent() {
  const router = useRouter();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate() {
    const errors: { email?: string; password?: string } = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!email.endsWith("@buk.edu.ng")) {
      errors.email = "Use your institutional email (e.g. @buk.edu.ng)";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    }

    return Object.keys(errors).length === 0;
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError("");

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await login(email, password);
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex items-center justify-center px-5 py-10 sm:px-8">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-[#a8d8e6] bg-white p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
              Secure access
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-[#006b85]">
              Admin login
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#0f766e]">
              Use your BUK innovation hub admin details to continue to the
              dashboard.
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            {/* Email */}
            <label className="block text-sm font-bold text-[#006b85]">
              Staff email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-2 w-full rounded-md border px-4 py-3 text-sm outline-none transition ${
                  !email && !serverError
                    ? "border-[#a8d8e6] bg-[#f0f9fc] focus:border-[#009fc3] focus:ring-4 focus:ring-[#009fc3]/10"
                    : "border-red-500 bg-red-50 focus:ring-red-200"
                }`}
                type="email"
                placeholder="admin@buk.edu.ng"
                disabled={isSubmitting}
              />
              {!email && !serverError && (
                <p className="mt-1 text-xs text-red-500">Email is required</p>
              )}
            </label>

            {/* Password */}
            <label className="block text-sm font-bold text-[#006b85]">
              Password
              <div className="relative mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className={`w-full rounded-md border px-4 py-3 pr-12 text-sm outline-none transition ${
                    !password && !serverError
                      ? "border-[#a8d8e6] bg-[#f0f9fc] focus:border-[#009fc3] focus:ring-4 focus:ring-[#009fc3]/10"
                      : "border-red-500 bg-red-50 focus:ring-red-200"
                  }`}
                  placeholder="Enter your password"
                  disabled={isSubmitting}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#0f766e] hover:text-[#009fc3]"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {!password && !serverError && (
                <p className="mt-1 text-xs text-red-500">Password is required</p>
              )}
            </label>

            {serverError && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                {serverError}
              </div>
            )}

            <button
              className="w-full rounded-md bg-[#009fc3] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0088a6] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              type="submit"
              disabled={isSubmitting || !email || !password}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in to dashboard"
              )}
            </button>
          </form>
        </div>

        <p className="mt-5 text-center text-xs font-medium text-[#0f766e]">
          Bayero University Kano Innovation Hubs management interface.
        </p>
      </div>
    </section>
  );
}