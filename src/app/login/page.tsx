"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailError = submitted && !email.trim() ? "Email or mobile number is required." : "";
  const passwordError = submitted && !password.trim() ? "Password is required." : "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!email.trim() || !password.trim()) {
      return;
    }

    router.push("/dashboard");
  }

  return (
    <AuthShell
      badge="Workspace access"
      title="Continue managing your services"
      body="Track applications, upload missing documents, review billing, and open active product spaces."
      image="/illustrations/login-services.svg"
    >
      <form onSubmit={handleSubmit}>
        <h1 className="mb-8 text-4xl font-medium tracking-normal text-text-primary">
          Sign in
        </h1>
        <div className="space-y-6">
          <AuthInput
            id="email"
            label="Email or mobile number"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email or mobile number"
            required
            aria-invalid={Boolean(emailError)}
            className={emailError ? "border-error focus:border-error" : ""}
          />
          {emailError ? <p className="-mt-4 text-sm text-error">{emailError}</p> : null}
          <AuthInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
            aria-invalid={Boolean(passwordError)}
            className={passwordError ? "border-error focus:border-error" : ""}
          />
          {passwordError ? <p className="-mt-4 text-sm text-error">{passwordError}</p> : null}
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <Link href="/get-started" className="text-primary hover:text-primary-hover">
            Create account
          </Link>
          <Link href="/forgot-password" className="text-primary hover:text-primary-hover">
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          disabled={!email.trim() || !password.trim()}
          className="mt-8 min-w-36"
        >
          Sign in
        </Button>
      </form>
    </AuthShell>
  );
}
