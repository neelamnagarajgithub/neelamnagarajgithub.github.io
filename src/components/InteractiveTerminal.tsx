"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { SIGNAL } from "@/lib/accent-colors";

type Line = { type: "input" | "output" | "error"; text: string };

const ABOUT =
  "Backend engineer, final-year CS @ Kakatiya Institute of Technology and Science. Four internships in — enterprise pipelines, decentralized health records, serverless AWS, AI-agent platforms. Lately: backend systems meets LLMs.";

const SKILLS = [
  "languages     Java, C++, Python, JavaScript",
  "ai/agentic    LLMs, Prompt Engineering, LangChain, LangGraph, AI Agents",
  "backend       Node.js, Express.js, FastAPI, REST APIs, Microservices, Serverless",
  "data          PostgreSQL, MySQL, MongoDB, DynamoDB",
  "cloud/tools   AWS, Google Cloud, Docker, Git, Linux, Postman",
];

const EXPERIENCE = [
  "Virtusa Consulting Services   Intern -  Delivery           Mar 2026 – May 2026",
  "Secure Blink Tech             Backend Developer Intern     Sep 2025 – Nov 2025",
  "NIT Warangal                  Research Intern              May 2025 – Jul 2025",
  "Vitacure Healthcare           Backend Developer Intern     Apr 2025 – Jul 2025",
];

const PROJECTS = [
  "fintro      autonomous AI CFO platform (LangGraph)     fintro.nagarajneelam.in",
  "baax        backend scaffolding CLI (Node/Python)      baax.nagarajneelam.in",
  "vitavoice   multilingual AI-doctor voice assistant     vitavoice.streamlit.app",
  "repurpoai   AI drug-repurposing platform (Google ADK)  repurpoai.vercel.app",
];

const EDUCATION = [
  "Kakatiya Institute of Technology and Science, Warangal",
  "B.Tech, Computer Science & Engineering (Networks)",
  "CGPA: 8.41 / 10.00  ·  Oct 2022 – May 2026",
];

const ACHIEVEMENTS = [
  "Semi-Finalist    NEST 2.0 by Novartis (top 60 / 34,000+)",
  "Top 60 Finalist  AI Builders Challenge (Portkey)",
  "Finalist         Agentathon '25 (Google Developer Groups)",
  "Top 50 Finalist  DeepDive 1.0 (1,600+ participants)",
  "Rank 3,430       TCS CodeVita 2024 (4.5 lakh+ participants)",
  "Regional Finalist NASA Space Apps Challenge 2024",
  "Rank #317        GSSoC 2024 (27,000+ participants)",
];

const CONTACT = [
  "email     neelamnagaraj99@gmail.com",
  "phone     +91-9949499507",
  "github    github.com/neelamnagarajgithub",
  "linkedin  linkedin.com/in/nagarajneelam", // TODO: confirm this is the right handle
];

const FILES: Record<string, string[]> = {
  "about.md": [ABOUT],
  "skills.json": SKILLS,
  "experience.log": EXPERIENCE,
  "education.txt": EDUCATION,
  "achievements.log": ACHIEVEMENTS,
  "contact.txt": CONTACT,
};

const HELP_LINES = [
  "help          show this list",
  "about         who I am",
  "whoami        quick id",
  "skills        tech stack",
  "experience    work history",
  "projects      things I've built",
  "education     degree info",
  "achievements  hackathons & rankings",
  "contact       how to reach me",
  "ls            list sections",
  "cat <file>    read a section as a file",
  "clear         clear the screen",
];

function runCommand(raw: string): { lines: Line[]; clear?: boolean } {
  const trimmed = raw.trim();
  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = rest.join(" ");
  const lower = (cmd || "").toLowerCase();

  const out = (text: string): Line => ({ type: "output", text });
  const err = (text: string): Line => ({ type: "error", text });

  switch (lower) {
    case "":
      return { lines: [] };
    case "help":
      return { lines: HELP_LINES.map(out) };
    case "about":
      return { lines: [out(ABOUT)] };
    case "whoami":
      return { lines: [out("nagaraj — backend engineer, final-year CS @ KITS Warangal")] };
    case "skills":
      return { lines: SKILLS.map(out) };
    case "experience":
      return { lines: EXPERIENCE.map(out) };
    case "projects":
      return { lines: PROJECTS.map(out) };
    case "education":
      return { lines: EDUCATION.map(out) };
    case "achievements":
      return { lines: ACHIEVEMENTS.map(out) };
    case "contact":
      return { lines: CONTACT.map(out) };
    case "ls":
      return { lines: [out(Object.keys(FILES).join("  ") + "  projects/")] };
    case "pwd":
      return { lines: [out("/home/nagaraj")] };
    case "cat": {
      if (!arg) return { lines: [err("cat: missing operand")] };
      const file = FILES[arg.trim()];
      if (!file) return { lines: [err(`cat: ${arg}: No such file or directory`)] };
      return { lines: file.map(out) };
    }
    case "sudo":
      return { lines: [err("Permission denied: nice try though.")] };
    case "clear":
      return { lines: [], clear: true };
    default:
      return {
        lines: [err(`command not found: ${cmd}. type 'help' to see available commands.`)],
      };
  }
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "nagaraj@portfolio — interactive session" },
    { type: "output", text: "type 'help' to get started." },
  ]);
  const [input, setInput] = useState("");
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const submit = () => {
    const value = input;
    const { lines, clear } = runCommand(value);

    if (clear) {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "input", text: value },
        ...lines,
      ]);
    }

    if (value.trim()) {
      setPastCommands((prev) => [...prev, value]);
    }
    setHistoryIndex(null);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pastCommands.length === 0) return;
      const nextIndex =
        historyIndex === null ? pastCommands.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(pastCommands[nextIndex]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= pastCommands.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(pastCommands[nextIndex]);
      }
    }
  };

  return (
    <div
      className="w-full max-w-[560px] overflow-hidden rounded-2xl border bg-[rgb(var(--color-bg-elevated))] shadow-[var(--shadow-card)]"
      style={{ borderColor: "rgb(var(--color-border-hairline))" }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: "rgb(var(--color-border-hairline))" }}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: SIGNAL }} />
        <span className="font-mono text-xs text-[rgb(var(--color-text-muted))]">
          session: active — try &apos;help&apos;
        </span>
      </div>

      <div
        ref={scrollRef}
        className="h-[360px] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed"
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={
              line.type === "input"
                ? "text-white"
                : line.type === "error"
                ? "text-[#FB7185]"
                : "text-[rgb(var(--color-text-secondary))]"
            }
          >
            {line.type === "input" ? (
              <span>
                <span style={{ color: SIGNAL }}>nagaraj@portfolio</span>
                <span className="text-[rgb(var(--color-text-muted))]">:~$ </span>
                {line.text}
              </span>
            ) : (
              <span className="whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}

        {/* live input line */}
        <div className="flex items-center gap-0">
          <span style={{ color: SIGNAL }}>nagaraj@portfolio</span>
          <span className="text-[rgb(var(--color-text-muted))]">:~$&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
            className="flex-1 border-none bg-transparent font-mono text-[13px] text-white caret-current outline-none"
            style={{ caretColor: SIGNAL }}
          />
        </div>
      </div>
    </div>
  );
}
