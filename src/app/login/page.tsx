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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
            label="Email or phone"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email or phone"
            required
          />
          <AuthInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <Link href="/get-started" className="text-primary hover:text-primary-hover">
            Create account
          </Link>
          <Link href="/get-started" className="text-primary hover:text-primary-hover">
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
