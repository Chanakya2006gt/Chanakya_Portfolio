import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as ExternalLink, i as Trash2, l as Save, o as Sparkles, p as Plus, v as LogOut, w as FileText, x as LayoutGrid } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as Input, l as Label, n as Card, t as Button } from "./card-C0Me2UHH.mjs";
import { a as TabsTrigger, i as TabsList, n as Tabs, o as Textarea, r as TabsContent, t as Badge } from "./badge-BQ7xvde_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Bh8Rh4o0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboardPage() {
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(null);
	const [data, setData] = (0, import_react.useState)(null);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		async function checkAuthAndFetchData() {
			try {
				if (!(await (await fetch("/api/admin/check")).json()).authenticated) {
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
				body: JSON.stringify(data)
			});
			const json = await res.json();
			if (res.ok && json.success) toast.success("Portfolio changes saved successfully!");
			else toast.error(json.error || "Failed to save changes");
		} catch (error) {
			console.error("Save error:", error);
			toast.error("An error occurred while saving");
		} finally {
			setIsSaving(false);
		}
	};
	const handleResumeUpload = async (e) => {
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
				body: file
			});
			const json = await res.json();
			if (res.ok && json.success) {
				if (json.parsed === true) toast.success("Résumé uploaded and details updated from the PDF. Refresh the site to see the changes.");
				else if (json.parsed === false) toast.warning(json.parseError || "Résumé uploaded. The details couldn't be read automatically — you can edit them manually.");
				else toast.success("Résumé uploaded. It is live within ~1 minute.");
			} else toast.error(json.error || "Upload failed.");
		} catch {
			toast.error("Upload failed.");
		} finally {
			e.target.value = "";
		}
	};
	const handleRestoreBackup = async () => {
		try {
			const res = await fetch("/api/admin/restore", { method: "POST" });
			const json = await res.json();
			if (res.ok && json.success) {
				toast.success("Previous portfolio version restored successfully! Refreshing data...");
				const dataRes = await fetch("/api/admin/data");
				if (dataRes.ok) {
					const updated = await dataRes.json();
					setData(updated);
				}
			} else toast.error(json.error || "Failed to restore previous version.");
		} catch {
			toast.error("Failed to restore previous version.");
		}
	};
	const handleAddBusiness = () => {
		if (!data) return;
		const newBiz = {
			id: `biz_${Date.now()}`,
			title: "New Business Product",
			description: "Description of the new business SaaS or product.",
			liveUrl: "https://example.com",
			stack: [
				"React",
				"Node.js",
				"PostgreSQL"
			],
			badge: "Live product",
			featured: true,
			kind: "business"
		};
		setData({
			...data,
			businesses: [...data.businesses, newBiz]
		});
	};
	const handleDeleteBusiness = (id) => {
		if (!data) return;
		setData({
			...data,
			businesses: data.businesses.filter((b) => b.id !== id)
		});
	};
	const handleAddSideProject = () => {
		if (!data) return;
		const newProj = {
			id: `proj_${Date.now()}`,
			title: "New Side Project",
			description: "Short description of the new experiment or project.",
			stack: ["React", "TypeScript"],
			kind: "side"
		};
		setData({
			...data,
			sideProjects: [...data.sideProjects, newProj]
		});
	};
	const handleDeleteSideProject = (id) => {
		if (!data) return;
		setData({
			...data,
			sideProjects: data.sideProjects.filter((p) => p.id !== id)
		});
	};
	if (isAuthenticated === false) return null;
	if (isAuthenticated === null || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-8 rounded-full border-2 border-sage border-t-transparent animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: "Authenticating Admin Session..."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 border-b border-border/80 bg-card/80 backdrop-blur-md px-6 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex size-3 rounded-full bg-sage animate-ping" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-2xl font-bold tracking-tight text-white",
							children: "Chanakya Admin Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "sage",
							className: "hidden sm:inline-flex text-[10px]",
							children: "Live Edit Mode"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-sage transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), " View Live Site"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleSaveData,
							variant: "sage",
							size: "sm",
							disabled: isSaving,
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), isSaving ? "Saving..." : "Save All Changes"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleLogout,
							variant: "outline",
							size: "sm",
							className: "gap-1.5 text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Logout"]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-6xl px-6 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "projects",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "bg-secondary/60 border border-border p-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "projects",
								className: "gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-3.5" }), " Projects & Side Experiments"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "resume",
								className: "gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), " Resume & Qualifications"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "status",
								className: "gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " Status & Tagline"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "projects",
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-white",
									children: "Businesses & Products"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Manage serious SaaS products like Trelio."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleAddBusiness,
									variant: "outline",
									size: "sm",
									className: "gap-1.5 text-sage border-sage/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add Business / Product"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: data.businesses.map((biz, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-4 border-border bg-card relative group",
									children: [data.businesses.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										onClick: () => handleDeleteBusiness(biz.id),
										className: "absolute top-2 right-2 size-7 text-muted-foreground hover:text-red-400",
										title: "Delete Product",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 pr-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-3 sm:grid-cols-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Product Title"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: biz.title,
														onChange: (e) => {
															const updated = [...data.businesses];
															updated[index].title = e.target.value;
															setData({
																...data,
																businesses: updated
															});
														},
														className: "mt-1 bg-secondary/50 text-xs"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Badge (e.g. Live product)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: biz.badge || "",
														onChange: (e) => {
															const updated = [...data.businesses];
															updated[index].badge = e.target.value;
															setData({
																...data,
																businesses: updated
															});
														},
														className: "mt-1 bg-secondary/50 text-xs"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Live URL"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: biz.liveUrl || "",
														onChange: (e) => {
															const updated = [...data.businesses];
															updated[index].liveUrl = e.target.value;
															setData({
																...data,
																businesses: updated
															});
														},
														className: "mt-1 bg-secondary/50 text-xs"
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs",
												children: "Description"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												value: biz.description,
												onChange: (e) => {
													const updated = [...data.businesses];
													updated[index].description = e.target.value;
													setData({
														...data,
														businesses: updated
													});
												},
												className: "mt-1 bg-secondary/50 text-xs",
												rows: 2
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs",
												children: "Tech Stack (comma separated)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: biz.stack.join(", "),
												onChange: (e) => {
													const updated = [...data.businesses];
													updated[index].stack = e.target.value.split(",").map((s) => s.trim());
													setData({
														...data,
														businesses: updated
													});
												},
												className: "mt-1 bg-secondary/50 text-xs"
											})] })
										]
									})]
								}, biz.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 border-t border-border flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-white",
									children: "Side Projects & Experiments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Add or update side projects and WIP labs."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleAddSideProject,
									variant: "outline",
									size: "sm",
									className: "gap-1.5 text-sage border-sage/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add Side Project"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: data.sideProjects.map((proj, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-4 border-border bg-card relative group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										onClick: () => handleDeleteSideProject(proj.id),
										className: "absolute top-2 right-2 size-7 text-muted-foreground hover:text-red-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 pr-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs",
												children: "Title"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: proj.title,
												onChange: (e) => {
													const updated = [...data.sideProjects];
													updated[index].title = e.target.value;
													setData({
														...data,
														sideProjects: updated
													});
												},
												className: "mt-1 bg-secondary/50 text-xs"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs",
												children: "Description"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												value: proj.description,
												onChange: (e) => {
													const updated = [...data.sideProjects];
													updated[index].description = e.target.value;
													setData({
														...data,
														sideProjects: updated
													});
												},
												className: "mt-1 bg-secondary/50 text-xs",
												rows: 2
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs",
												children: "Tech Stack (comma separated)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: proj.stack.join(", "),
												onChange: (e) => {
													const updated = [...data.sideProjects];
													updated[index].stack = e.target.value.split(",").map((s) => s.trim());
													setData({
														...data,
														sideProjects: updated
													});
												},
												className: "mt-1 bg-secondary/50 text-xs"
											})] })
										]
									})]
								}, proj.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "resume",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 border-border bg-card space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold text-white",
									children: "Resume Information Overrides"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs",
										children: "Primary Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: data.resumeOverride?.email || "nagulagamchanakya2211@gmail.com",
										onChange: (e) => {
											setData({
												...data,
												resumeOverride: {
													...data.resumeOverride,
													email: e.target.value
												}
											});
										},
										className: "mt-1 bg-secondary/50 text-xs"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs",
											children: "Résumé PDF (upload replaces the live file)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "application/pdf",
											onChange: handleResumeUpload,
											className: "mt-1 block w-full text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-sage/20 file:px-3 file:py-1.5 file:text-sage file:text-xs file:font-medium hover:file:bg-sage/30 cursor-pointer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] text-muted-foreground",
											children: "PDF only, max 4\xA0MB. Uploads immediately; no “Save” needed."
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Executive Summary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: data.resumeOverride?.summary || "Computer and Information Science student with hands-on experience building and shipping a full-stack, security-conscious SaaS product...",
									onChange: (e) => {
										setData({
											...data,
											resumeOverride: {
												...data.resumeOverride,
												summary: e.target.value
											}
										});
									},
									className: "mt-1 bg-secondary/50 text-xs",
									rows: 3
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Education Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: data.resumeOverride?.education || "SR University — B.Tech CIS (2028)",
									onChange: (e) => {
										setData({
											...data,
											resumeOverride: {
												...data.resumeOverride,
												education: e.target.value
											}
										});
									},
									className: "mt-1 bg-secondary/50 text-xs"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 border-t border-border flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-foreground",
										children: "Accidental AI update or bad overwrite?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Restore the previous version of your portfolio content saved before the last change."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										onClick: handleRestoreBackup,
										variant: "outline",
										size: "sm",
										className: "text-xs border-sage/40 text-sage hover:bg-sage/10",
										children: "Undo last update"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "status",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 border-border bg-card space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold text-white",
									children: "Hero & Availability Settings"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Hero Subtitle / Tagline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: data.heroTagline,
									onChange: (e) => setData({
										...data,
										heroTagline: e.target.value
									}),
									className: "mt-1 bg-secondary/50 text-xs",
									rows: 2
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Blinking Availability Badge (Hero Section)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: data.availabilityStatus,
									onChange: (e) => setData({
										...data,
										availabilityStatus: e.target.value
									}),
									placeholder: "e.g. Open for contracts & software engineering roles",
									className: "mt-1 bg-secondary/50 text-xs"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2 pt-2 border-t border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold text-white",
											children: "1. Work / Contract Availability (When someone wants to hire YOU)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mb-1",
											children: "What you tell clients/recruiters wanting to hire you."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: data.workAvailability || "Open for contract work, consulting & engineering roles",
											onChange: (e) => setData({
												...data,
												workAvailability: e.target.value
											}),
											placeholder: "e.g. Open for contract work & full-time roles",
											className: "mt-1 bg-secondary/50 text-xs"
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold text-white",
											children: "2. Team Hiring Status (Are YOU hiring anyone?)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mb-1",
											children: "What you tell candidates asking if you/Trelio are hiring."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: data.hiringStatus || "Not currently hiring team members",
											onChange: (e) => setData({
												...data,
												hiringStatus: e.target.value
											}),
											placeholder: "e.g. Not currently hiring team members",
											className: "mt-1 bg-secondary/50 text-xs"
										})
									] })]
								})
							]
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { AdminDashboardPage as component };
