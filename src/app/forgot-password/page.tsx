"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const identifierError =
    submitted && !identifier.trim() ? "Email or mobile number is required." : "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!identifier.trim()) {
      return;
    }
  }

  return (
    <AuthShell
      badge="Password recovery"
      title="Continue managing your services"
      body="Track applications, upload missing documents, review billing, manage team access, and open active service spaces."
      image="/illustrations/login-services.svg"
    >
      {submitted && identifier.trim() ? (
        <Card className="p-6">
          <h1 className="text-4xl font-medium tracking-normal text-text-primary">
            Forgot your password?
          </h1>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            If an account matches <span className="font-medium text-text-primary">{identifier}</span>,
            we will send reset instructions.
          </p>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Check your inbox or phone after a few minutes, then return to sign in.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/login">Back to sign in</ButtonLink>
            <ButtonLink href="/login" variant="secondary">
              Try another account
            </ButtonLink>
          </div>
        </Card>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="mb-8 text-4xl font-medium tracking-normal text-text-primary">
            Forgot your password?
          </h1>
          <div className="space-y-4">
            <AuthInput
              id="identifier"
              label="Email or mobile number"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="Email or mobile number"
              required
              aria-invalid={Boolean(identifierError)}
              className={identifierError ? "border-error focus:border-error" : ""}
            />
            {identifierError ? <p className="text-sm text-error">{identifierError}</p> : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button type="submit" disabled={!identifier.trim()} className="min-w-36">
              Send reset link
            </Button>
            <Link href="/login" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover">
              Back to sign in
            </Link>
          </div>
        </form>
      )}
    </AuthShell>
  );
}