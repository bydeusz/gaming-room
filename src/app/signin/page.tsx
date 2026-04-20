import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { SigninForm } from "./signin-form";

export default async function SigninPage() {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm space-y-6 rounded-xl border p-6 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="text-muted-foreground text-sm">
            Welcome back — sign in with your email and password.
          </p>
        </div>
        <SigninForm />
        <p className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-foreground underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
