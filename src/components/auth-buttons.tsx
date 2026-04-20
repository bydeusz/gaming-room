"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Button variant="outline" size="sm" disabled>
        Loading…
      </Button>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground text-sm">
          {session.user?.name ?? session.user?.email}
        </span>
        <Button variant="outline" size="sm" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <Button size="sm" onClick={() => signIn()}>
      Sign in
    </Button>
  );
}
