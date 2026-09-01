import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Welcome back, Chanakya!");
        navigate({ to: "/admin" });
      } else {
        toast.error(data.error || "Invalid login credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute size-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" />

      <Card className="w-full max-w-md border-border/80 bg-card/90 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl rise-in relative z-10">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage">
            <ShieldCheck className="size-6" />
          </div>
          <CardTitle className="font-serif text-3xl font-bold tracking-tight text-white">
            Admin Portal
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1">
            Authorized access only. Enter your credentials set in <code className="text-sage font-mono">.env</code>.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-xs font-medium text-foreground">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-9 bg-secondary/50 border-border/80 focus:border-sage/60"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs font-medium text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9 bg-secondary/50 border-border/80 focus:border-sage/60"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="sage"
              className="w-full mt-2 font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                "Verifying..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Authenticate <ArrowRight className="size-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-xs text-muted-foreground border-t border-border/60 pt-4">
            <a href="/" className="hover:text-sage transition-colors">
              ← Return to Main Portfolio
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
