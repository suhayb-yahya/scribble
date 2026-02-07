"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

type AuthState = "loading" | "guest" | "admin";

export default function AdminDashboard() {
  const [auth, setAuth] = useState<AuthState>("loading");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formRequirements, setFormRequirements] = useState("");
  const [formApplyUrl, setFormApplyUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [counters, setCounters] = useState({ videos: 743, brands: 39, clients: 76 });
  const [countersLoading, setCountersLoading] = useState(false);
  const [countersSaving, setCountersSaving] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/me", { credentials: "include" });
      const data = await res.json();
      setAuth(data.isAdmin ? "admin" : "guest");
      if (data.isAdmin) {
        fetchJobs();
        fetchCounters();
      }
    } catch {
      setAuth("guest");
    }
  }, []);

  const fetchJobs = useCallback(async () => {
    setJobsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/jobs", { credentials: "include" });
      if (!res.ok) {
        if (res.status === 401) setAuth("guest");
        else setError("Failed to load jobs");
        return;
      }
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch {
      setError("Failed to load jobs");
    } finally {
      setJobsLoading(false);
    }
  }, []);

  const fetchCounters = useCallback(async () => {
    setCountersLoading(true);
    try {
      const res = await fetch("/api/admin/explore-counters", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setCounters({
          videos: typeof data.videos === "number" ? data.videos : 743,
          brands: typeof data.brands === "number" ? data.brands : 39,
          clients: typeof data.clients === "number" ? data.clients : 76,
        });
      }
    } catch {
      // keep defaults
    } finally {
      setCountersLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error ?? "Login failed");
        return;
      }
      setAuth("admin");
      setPassword("");
      fetchJobs();
      fetchCounters();
    } catch {
      setLoginError("Login failed");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    setAuth("guest");
    setJobs([]);
  };

  const startAdd = () => {
    setEditingId(null);
    setFormTitle("");
    setFormRequirements("");
    setFormApplyUrl("");
  };

  const startEdit = (job: JobItem) => {
    setEditingId(job.id);
    setFormTitle(job.title);
    setFormRequirements(job.requirements.join("\n"));
    setFormApplyUrl(job.applyUrl ?? "");
  };

  const saveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    const requirements = formRequirements
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);
    if (!formTitle.trim()) {
      setError("Title is required");
      return;
    }
    setSaving(true);
    setError("");
    try {
      if (editingId) {
        const res = await fetch(`/api/admin/jobs/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formTitle.trim(),
            requirements,
            applyUrl: formApplyUrl.trim() || undefined,
          }),
          credentials: "include",
        });
        if (!res.ok) {
          const data = await res.json();
          setError(data.error ?? "Update failed");
          return;
        }
        const updated = await res.json();
        setJobs((prev) => prev.map((j) => (j.id === editingId ? updated : j)));
        setEditingId(null);
      } else {
        const res = await fetch("/api/admin/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formTitle.trim(),
            requirements,
            applyUrl: formApplyUrl.trim() || undefined,
          }),
          credentials: "include",
        });
        if (!res.ok) {
          const data = await res.json();
          setError(data.error ?? "Create failed");
          return;
        }
        const created = await res.json();
        setJobs((prev) => [...prev, created]);
        setFormTitle("");
        setFormRequirements("");
        setFormApplyUrl("");
      }
    } catch {
      setError("Request failed");
    } finally {
      setSaving(false);
    }
  };

  const deleteJob = async (id: string) => {
    if (!confirm("Delete this job?")) return;
    setDeleteId(id);
    try {
      const res = await fetch(`/api/admin/jobs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) setJobs((prev) => prev.filter((j) => j.id !== id));
      else setError("Delete failed");
    } catch {
      setError("Delete failed");
    } finally {
      setDeleteId(null);
    }
  };

  if (auth === "loading") {
    return (
      <div className="text-center py-12 text-[#7B2553] font-medium">
        Loading…
      </div>
    );
  }

  if (auth === "guest") {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-[#7B2553] mb-2">Admin login</h1>
        <p className="text-gray-600 text-sm mb-6">
          Enter the admin password to manage jobs.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553]"
              placeholder="Admin password"
              autoFocus
              required
            />
          </div>
          {loginError && (
            <p className="text-red-600 text-sm">{loginError}</p>
          )}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-full font-bold uppercase tracking-wide text-white bg-[#7B2553] hover:bg-[#6a1f48] transition-colors"
          >
            Log in
          </button>
        </form>
        <p className="mt-6 text-center">
          <Link href="/" className="text-[#7B2553] hover:underline text-sm">
            ← Back to site
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#7B2553]">Manage jobs</h1>
          <p className="text-gray-600 text-sm mt-1">
            Add, edit, or remove jobs shown on the careers page.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/jobs"
            className="text-sm text-[#7B2553] hover:underline"
          >
            View jobs page
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Log out
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="font-bold text-[#7B2553] mb-4">
          {editingId ? "Edit job" : "Add job"}
        </h2>
        <form onSubmit={saveJob} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553]"
              placeholder="e.g. Graphic Designer"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Requirements (one per line)
            </label>
            <textarea
              value={formRequirements}
              onChange={(e) => setFormRequirements(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553] resize-y"
              placeholder="First requirement&#10;Second requirement&#10;…"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apply URL (optional)
            </label>
            <input
              type="url"
              value={formApplyUrl}
              onChange={(e) => setFormApplyUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553]"
              placeholder="https://…"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="py-2.5 px-5 rounded-full font-bold uppercase tracking-wide text-white bg-[#7B2553] hover:bg-[#6a1f48] disabled:opacity-60 transition-colors"
            >
              {editingId ? "Save changes" : "Add job"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={startAdd}
                className="py-2.5 px-5 rounded-full font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="font-bold text-[#7B2553] mb-4">Explore section counters</h2>
        <p className="text-gray-600 text-sm mb-4">
          Numbers shown in the Explore section on the homepage (Videos, Brand, Clients).
        </p>
        {countersLoading ? (
          <p className="text-gray-500 text-sm">Loading…</p>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setCountersSaving(true);
              setError("");
              try {
                const res = await fetch("/api/admin/explore-counters", {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(counters),
                  credentials: "include",
                });
                if (res.ok) {
                  const data = await res.json();
                  setCounters(data);
                } else setError("Failed to save counters");
              } catch {
                setError("Failed to save counters");
              } finally {
                setCountersSaving(false);
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Videos</label>
              <input
                type="number"
                min={0}
                value={counters.videos}
                onChange={(e) => setCounters((c) => ({ ...c, videos: parseInt(e.target.value, 10) || 0 }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brands</label>
              <input
                type="number"
                min={0}
                value={counters.brands}
                onChange={(e) => setCounters((c) => ({ ...c, brands: parseInt(e.target.value, 10) || 0 }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Clients</label>
              <input
                type="number"
                min={0}
                value={counters.clients}
                onChange={(e) => setCounters((c) => ({ ...c, clients: parseInt(e.target.value, 10) || 0 }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#7B2553]/40 focus:border-[#7B2553]"
              />
            </div>
            <div className="sm:col-span-3">
              <button
                type="submit"
                disabled={countersSaving}
                className="py-2.5 px-5 rounded-full font-bold uppercase tracking-wide text-white bg-[#7B2553] hover:bg-[#6a1f48] disabled:opacity-60 transition-colors"
              >
                {countersSaving ? "Saving…" : "Save counters"}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="font-bold text-[#7B2553] mb-4">Current jobs</h2>
        {jobsLoading ? (
          <p className="text-gray-500 text-sm">Loading jobs…</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500 text-sm">No jobs yet. Add one above.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="flex flex-wrap items-start justify-between gap-3 py-3 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="font-semibold text-gray-900">{job.title}</p>
                  <p className="text-sm text-gray-500">{job.id}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(job)}
                    className="text-sm text-[#7B2553] hover:underline font-medium"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteJob(job.id)}
                    disabled={deleteId === job.id}
                    className="text-sm text-red-600 hover:underline font-medium disabled:opacity-50"
                  >
                    {deleteId === job.id ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-center">
        <Link href="/" className="text-[#7B2553] hover:underline text-sm">
          ← Back to site
        </Link>
      </p>
    </div>
  );
}
