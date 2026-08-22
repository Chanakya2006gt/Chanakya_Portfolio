import { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LogOut, Plus, Trash2, Save, FileText, LayoutGrid, CheckCircle2, ShieldAlert, Sparkles, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DynamicData } from "@/data/store";
import { Project } from "@/data/projects";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [data, setData] = useState<DynamicData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  // Check auth status & fetch initial data
  useEffect(() => {
    async function checkAuthAndFetchData() {
      try {
        const authRes = await fetch("/api/admin/check");
        const authJson = await authRes.json();

        if (!authJson.authenticated) {
          setIsAuthenticated(false);
          navigate({ to: "/admin/login" });
          return;
        }

        setIsAuthenticated(true);

        const dataRes = await fetch("/api/admin/data");
        if (!dataRes.ok) {
          setIsAuthenticated(false);
          navigate({ to: "/admin/login" });
          return;
        }
        const dataJson = await dataRes.json();
        if (!dataJson || !Array.isArray(dataJson.businesses)) {
          toast.error("We couldn't load your portfolio content. Please refresh the page.");
          return;
        }
        setData(dataJson);
      } catch (error) {
        console.error("Failed to load admin data:", error);
        setIsAuthenticated(false);
        navigate({ to: "/admin/login" });
      }
    }

    checkAuthAndFetchData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      toast.success("Logged out successfully");
      navigate({ to: "/admin/login" });
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const handleSaveData = async () => {
    if (!data) return;
    setIsSaving(true);

    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        toast.success("Portfolio changes saved successfully!");
      } else {
        toast.error(json.error || "Failed to save changes");
      }
    } catch (error) {
      console.error("Save error:", error);
      toast.error("An error occurred while saving");
    } finally {
      setIsSaving(false);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Please choose a PDF file.");
      return;
    }
    try {
      const res = await fetch("/api/admin/resume", {
        method: "POST",
        headers: { "Content-Type": "application/pdf" },
        body: file,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        toast.success("Résumé uploaded. It is live within ~1 minute.");
      } else {
        toast.error(json.error || "Upload failed.");
      }
    } catch {
      toast.error("Upload failed.");
    } finally {
      e.target.value = "";
    }
  };

  // Add new business project helper
  const handleAddBusiness = () => {
    if (!data) return;
    const newBiz: Project = {
      id: `biz_${Date.now()}`,
      title: "New Business Product",
      description: "Description of the new business SaaS or product.",
      liveUrl: "https://example.com",
      stack: ["React", "Node.js", "PostgreSQL"],
      badge: "Live product",
      featured: true,
      kind: "business",
    };

    setData({
      ...data,
      businesses: [...data.businesses, newBiz],
    });
  };

  // Delete business project helper
  const handleDeleteBusiness = (id: string) => {
    if (!data) return;
    setData({
      ...data,
      businesses: data.businesses.filter((b) => b.id !== id),
    });
  };

  // Add new side project helper
  const handleAddSideProject = () => {
    if (!data) return;
    const newProj: Project = {
      id: `proj_${Date.now()}`,
      title: "New Side Project",
      description: "Short description of the new experiment or project.",
      stack: ["React", "TypeScript"],
      kind: "side",
    };

    setData({
      ...data,
      sideProjects: [...data.sideProjects, newProj],
    });
  };

  // Delete side project helper
  const handleDeleteSideProject = (id: string) => {
    if (!data) return;
    setData({
      ...data,
      sideProjects: data.sideProjects.filter((p) => p.id !== id),
    });
  };

  if (isAuthenticated === false) {
    return null; // Will redirect via useEffect
  }

  if (isAuthenticated === null || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-3">
        <div className="size-8 rounded-full border-2 border-sage border-t-transparent animate-spin" />
        <p className="text-xs text-muted-foreground">Authenticating Admin Session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-card/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-3 rounded-full bg-sage animate-ping" />
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white">
              Chanakya Admin Dashboard
            </h1>
            <Badge variant="sage" className="hidden sm:inline-flex text-[10px]">
              Live Edit Mode
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-sage transition-colors"
            >
              <ExternalLink className="size-3.5" /> View Live Site
            </a>
            <Button
              onClick={handleSaveData}
              variant="sage"
              size="sm"
              disabled={isSaving}
              className="gap-1.5"
            >
              <Save className="size-4" />
              {isSaving ? "Saving..." : "Save All Changes"}
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
              <LogOut className="size-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="bg-secondary/60 border border-border p-1">
            <TabsTrigger value="projects" className="gap-2 text-xs">
              <LayoutGrid className="size-3.5" /> Projects & Side Experiments
            </TabsTrigger>
            <TabsTrigger value="resume" className="gap-2 text-xs">
              <FileText className="size-3.5" /> Resume & Qualifications
            </TabsTrigger>
            <TabsTrigger value="status" className="gap-2 text-xs">
              <Sparkles className="size-3.5" /> Status & Tagline
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: Projects & Experiments */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Businesses & Products</h3>
                <p className="text-xs text-muted-foreground">Manage serious SaaS products like Trelio.</p>
              </div>
              <Button onClick={handleAddBusiness} variant="outline" size="sm" className="gap-1.5 text-sage border-sage/40">
                <Plus className="size-4" /> Add Business / Product
              </Button>
            </div>

            <div className="space-y-4">
              {data.businesses.map((biz, index) => (
                <Card key={biz.id} className="p-4 border-border bg-card relative group">
                  {data.businesses.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteBusiness(biz.id)}
                      className="absolute top-2 right-2 size-7 text-muted-foreground hover:text-red-400"
                      title="Delete Product"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  )}

                  <div className="space-y-3 pr-6">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <Label className="text-xs">Product Title</Label>
                        <Input
                          value={biz.title}
                          onChange={(e) => {
                            const updated = [...data.businesses];
                            updated[index].title = e.target.value;
                            setData({ ...data, businesses: updated });
                          }}
                          className="mt-1 bg-secondary/50 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Badge (e.g. Live product)</Label>
                        <Input
                          value={biz.badge || ""}
                          onChange={(e) => {
                            const updated = [...data.businesses];
                            updated[index].badge = e.target.value;
                            setData({ ...data, businesses: updated });
                          }}
                          className="mt-1 bg-secondary/50 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Live URL</Label>
                        <Input
                          value={biz.liveUrl || ""}
                          onChange={(e) => {
                            const updated = [...data.businesses];
                            updated[index].liveUrl = e.target.value;
                            setData({ ...data, businesses: updated });
                          }}
                          className="mt-1 bg-secondary/50 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs">Description</Label>
                      <Textarea
                        value={biz.description}
                        onChange={(e) => {
                          const updated = [...data.businesses];
                          updated[index].description = e.target.value;
                          setData({ ...data, businesses: updated });
                        }}
                        className="mt-1 bg-secondary/50 text-xs"
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label className="text-xs">Tech Stack (comma separated)</Label>
                      <Input
                        value={biz.stack.join(", ")}
                        onChange={(e) => {
                          const updated = [...data.businesses];
                          updated[index].stack = e.target.value.split(",").map((s) => s.trim());
                          setData({ ...data, businesses: updated });
                        }}
                        className="mt-1 bg-secondary/50 text-xs"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Side Projects & Experiments</h3>
                <p className="text-xs text-muted-foreground">Add or update side projects and WIP labs.</p>
              </div>
              <Button onClick={handleAddSideProject} variant="outline" size="sm" className="gap-1.5 text-sage border-sage/40">
                <Plus className="size-4" /> Add Side Project
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {data.sideProjects.map((proj, index) => (
                <Card key={proj.id} className="p-4 border-border bg-card relative group">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteSideProject(proj.id)}
                    className="absolute top-2 right-2 size-7 text-muted-foreground hover:text-red-400"
                  >
                    <Trash2 className="size-3.5" />
                  </Button>

                  <div className="space-y-3 pr-6">
                    <div>
                      <Label className="text-xs">Title</Label>
                      <Input
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...data.sideProjects];
                          updated[index].title = e.target.value;
                          setData({ ...data, sideProjects: updated });
                        }}
                        className="mt-1 bg-secondary/50 text-xs"
                      />
                    </div>

                    <div>
                      <Label className="text-xs">Description</Label>
                      <Textarea
                        value={proj.description}
                        onChange={(e) => {
                          const updated = [...data.sideProjects];
                          updated[index].description = e.target.value;
                          setData({ ...data, sideProjects: updated });
                        }}
                        className="mt-1 bg-secondary/50 text-xs"
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label className="text-xs">Tech Stack (comma separated)</Label>
                      <Input
                        value={proj.stack.join(", ")}
                        onChange={(e) => {
                          const updated = [...data.sideProjects];
                          updated[index].stack = e.target.value.split(",").map((s) => s.trim());
                          setData({ ...data, sideProjects: updated });
                        }}
                        className="mt-1 bg-secondary/50 text-xs"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TAB 2: Resume & Qualifications */}
          <TabsContent value="resume" className="space-y-4">
            <Card className="p-5 border-border bg-card space-y-4">
              <h3 className="text-base font-semibold text-white">Resume Information Overrides</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-xs">Primary Email</Label>
                  <Input
                    value={data.resumeOverride?.email || "nagulagamchanakya2211@gmail.com"}
                    onChange={(e) => {
                      setData({
                        ...data,
                        resumeOverride: { ...data.resumeOverride, email: e.target.value },
                      });
                    }}
                    className="mt-1 bg-secondary/50 text-xs"
                  />
                </div>
                <div>
                  <Label className="text-xs">Résumé PDF (upload replaces the live file)</Label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleResumeUpload}
                    className="mt-1 block w-full text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-sage/20 file:px-3 file:py-1.5 file:text-sage file:text-xs file:font-medium hover:file:bg-sage/30 cursor-pointer"
                  />
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    PDF only, max 4&nbsp;MB. Uploads immediately; no “Save” needed.
                  </p>
                </div>
              </div>

              <div>
                <Label className="text-xs">Executive Summary</Label>
                <Textarea
                  value={data.resumeOverride?.summary || "Computer and Information Science student with hands-on experience building and shipping a full-stack, security-conscious SaaS product..."}
                  onChange={(e) => {
                    setData({
                      ...data,
                      resumeOverride: { ...data.resumeOverride, summary: e.target.value },
                    });
                  }}
                  className="mt-1 bg-secondary/50 text-xs"
                  rows={3}
                />
              </div>

              <div>
                <Label className="text-xs">Education Details</Label>
                <Input
                  value={data.resumeOverride?.education || "SR University — B.Tech CIS (2028)"}
                  onChange={(e) => {
                    setData({
                      ...data,
                      resumeOverride: { ...data.resumeOverride, education: e.target.value },
                    });
                  }}
                  className="mt-1 bg-secondary/50 text-xs"
                />
              </div>
            </Card>
          </TabsContent>

          {/* TAB 3: Status & Tagline */}
          <TabsContent value="status" className="space-y-4">
            <Card className="p-5 border-border bg-card space-y-4">
              <h3 className="text-base font-semibold text-white">Hero & Availability Settings</h3>

              <div>
                <Label className="text-xs">Hero Subtitle / Tagline</Label>
                <Textarea
                  value={data.heroTagline}
                  onChange={(e) => setData({ ...data, heroTagline: e.target.value })}
                  className="mt-1 bg-secondary/50 text-xs"
                  rows={2}
                />
              </div>

              <div>
                <Label className="text-xs">Blinking Availability Badge (Hero Section)</Label>
                <Input
                  value={data.availabilityStatus}
                  onChange={(e) => setData({ ...data, availabilityStatus: e.target.value })}
                  placeholder="e.g. Open for contracts & software engineering roles"
                  className="mt-1 bg-secondary/50 text-xs"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-border/60">
                <div>
                  <Label className="text-xs font-semibold text-white">1. Work / Contract Availability (When someone wants to hire YOU)</Label>
                  <p className="text-[11px] text-muted-foreground mb-1">What you tell clients/recruiters wanting to hire you.</p>
                  <Input
                    value={data.workAvailability || "Open for contract work, consulting & engineering roles"}
                    onChange={(e) => setData({ ...data, workAvailability: e.target.value })}
                    placeholder="e.g. Open for contract work & full-time roles"
                    className="mt-1 bg-secondary/50 text-xs"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-white">2. Team Hiring Status (Are YOU hiring anyone?)</Label>
                  <p className="text-[11px] text-muted-foreground mb-1">What you tell candidates asking if you/Trelio are hiring.</p>
                  <Input
                    value={data.hiringStatus || "Not currently hiring team members"}
                    onChange={(e) => setData({ ...data, hiringStatus: e.target.value })}
                    placeholder="e.g. Not currently hiring team members"
                    className="mt-1 bg-secondary/50 text-xs"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
