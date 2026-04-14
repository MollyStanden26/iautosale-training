"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Video,
  ClipboardCheck,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  Lock,
  Award,
  LogOut,
} from "lucide-react";
import { TRAINING_COURSES } from "@/lib/training-data";
import type { TrainingCourse } from "@/lib/training-data";

/* ================================================================== */
/*  PROGRESS TYPES                                                     */
/* ================================================================== */
type CourseProgress = {
  completed: boolean;
  quizScore: number | null;
  lastAccessed: string;
  readSections: string[]; // array of "courseId-sectionIdx" strings
};

/* ================================================================== */
/*  DESIGN TOKENS                                                      */
/* ================================================================== */
const T = {
  bgPage:        "#0B111E",
  bgCard:        "#0D1525",
  bgSidebar:     "#070D18",
  bgRow:         "#111D30",
  bgHover:       "#0C1428",
  border:        "#1E2D4A",
  border2:       "#111D30",
  textPrimary:   "#F1F5F9",
  textSecondary: "#C5CDD8",
  textMuted:     "#94A3BB",
  textDim:       "#A0AEBF",
  teal:          "#008C7C",
  teal200:       "#4DD9C7",
  green:         "#34D399",
  greenBg:       "#0B2B1A",
  amber:         "#F5A623",
  amberBg:       "#2B1A00",
  red:           "#F87171",
  redBg:         "#2B0F0F",
  indigo:        "#A78BFA",
  indigoBg:      "#1A1040",
  navy:          "#0F1724",
};

/* ================================================================== */
/*  HELPERS                                                            */
/* ================================================================== */
function highlightKeyTerms(text: string): React.ReactNode[] {
  const terms = [
    "\\u00a30",
    "\\$0",
    "zero",
    "no fee",
    "no commission",
    "no deductions",
    "48 hours",
    "7 days",
    "under 45 days",
    "45 days",
    "consignment",
    "Faster Payments",
    "seven stages",
    "seven-stage",
    "full retail",
    "retail market price",
    "AutoTrader",
    "Glass's Guide",
    "HPI check",
    "Consumer Rights Act 2015",
    "seller portal",
    "32 professional",
    "360-degree",
    "consignment agreement",
    "buyer finance",
    "pre-authorised",
    "six areas",
    "five parts",
    "five-part",
    "five things",
    "five numbers",
  ];
  const pattern = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (pattern.test(part)) {
      return (
        <strong key={i} style={{ color: T.teal200, fontWeight: 600 }}>
          {part}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

/* ================================================================== */
/*  TOP NAV BAR                                                        */
/* ================================================================== */
function TrainingNav({
  completedCount,
  userName,
  onSignOut,
}: {
  completedCount: number;
  userName: string;
  onSignOut: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        borderBottom: `1px solid ${T.border}`,
        background: T.bgCard,
      }}
    >
      {/* Left: Logo + title */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span
          className="font-heading"
          style={{ fontSize: 20, color: T.teal200 }}
        >
          <span style={{ fontWeight: 300 }}>iAuto</span>
          <span style={{ fontWeight: 900 }}>Sale</span>
        </span>
        <div
          style={{
            width: 1,
            height: 24,
            background: T.border,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h1
            className="font-heading"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: T.textPrimary,
              margin: 0,
            }}
          >
            Sales Training Programme
          </h1>
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              color: T.teal200,
              background: `${T.teal}22`,
              padding: "3px 10px",
              borderRadius: 100,
            }}
          >
            {completedCount} of 5 completed
          </span>
        </div>
      </div>

      {/* Right: User + sign out */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span
          className="font-body"
          style={{ fontSize: 13, color: T.textSecondary }}
        >
          {userName}
        </span>
        <button
          onClick={onSignOut}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 14px",
            fontSize: 13,
            fontWeight: 500,
            color: T.textMuted,
            background: "none",
            border: `1px solid ${T.border}`,
            borderRadius: 100,
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  COURSE SIDEBAR                                                     */
/* ================================================================== */
function CourseSidebar({
  courses,
  activeCourse,
  onSelect,
  courseProgress,
}: {
  courses: TrainingCourse[];
  activeCourse: number;
  onSelect: (i: number) => void;
  courseProgress: Record<string, CourseProgress>;
}) {
  return (
    <div
      style={{
        width: 280,
        minHeight: "100%",
        background: T.bgSidebar,
        borderRight: `1px solid ${T.border}`,
        overflowY: "auto",
        padding: "16px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        className="font-heading"
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: T.textDim,
          textTransform: "uppercase",
          letterSpacing: 1,
          padding: "4px 8px 12px",
        }}
      >
        Course Library
      </div>
      {courses.map((course, i) => {
        const progress = courseProgress[course.id];
        const isActive = i === activeCourse;
        const isCompleted = progress?.completed;
        const hasStarted = !!progress?.lastAccessed;

        return (
          <button
            key={course.id}
            onClick={() => onSelect(i)}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "12px 10px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
              background: isActive ? T.bgCard : "transparent",
              borderLeft: isActive ? `3px solid ${T.teal}` : "3px solid transparent",
              transition: "all 0.15s ease",
            }}
          >
            {/* Number badge */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 12,
                fontWeight: 700,
                background: isCompleted
                  ? T.greenBg
                  : isActive
                  ? T.teal
                  : T.bgRow,
                color: isCompleted
                  ? T.green
                  : isActive
                  ? "#fff"
                  : T.textMuted,
              }}
            >
              {isCompleted ? <Check size={14} /> : course.number}
            </div>
            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                className="font-body"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? T.textPrimary : T.textSecondary,
                  lineHeight: 1.3,
                }}
              >
                {course.title}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 4,
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: T.textDim }}
                >
                  {course.duration}
                </span>
                {isCompleted && progress?.quizScore != null && (
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: T.green,
                    }}
                  >
                    Score: {progress.quizScore}/5
                  </span>
                )}
                {!isCompleted && hasStarted && (
                  <span
                    className="font-body"
                    style={{ fontSize: 11, color: T.teal200 }}
                  >
                    In progress
                  </span>
                )}
                {!isCompleted && !hasStarted && (
                  <span
                    className="font-body"
                    style={{
                      fontSize: 11,
                      color: T.textDim,
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Lock size={10} /> Not started
                  </span>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/*  TAB BAR                                                            */
/* ================================================================== */
function TabBar({
  activeTab,
  onTabChange,
}: {
  activeTab: "watch" | "study" | "quiz";
  onTabChange: (t: "watch" | "study" | "quiz") => void;
}) {
  const tabs: { key: "watch" | "study" | "quiz"; label: string; icon: React.ReactNode }[] = [
    { key: "watch", label: "Watch", icon: <Video size={15} /> },
    { key: "study", label: "Study", icon: <BookOpen size={15} /> },
    { key: "quiz", label: "Quiz", icon: <ClipboardCheck size={15} /> },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: 0,
        borderBottom: `1px solid ${T.border}`,
        padding: "0 28px",
        background: T.bgCard,
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "12px 20px",
            fontSize: 13,
            fontWeight: activeTab === tab.key ? 600 : 400,
            color: activeTab === tab.key ? T.teal200 : T.textMuted,
            background: "none",
            border: "none",
            borderBottom:
              activeTab === tab.key
                ? `2px solid ${T.teal}`
                : "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  VIDEO TAB                                                          */
/* ================================================================== */
function VideoTab({ course }: { course: TrainingCourse }) {
  return (
    <div style={{ padding: 28 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          borderRadius: 14,
          overflow: "hidden",
          background: "#000",
          maxHeight: 520,
        }}
      >
        <iframe
          src={course.videoUrl}
          title={`Course ${course.number}: ${course.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
      <h2
        className="font-heading"
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: T.textPrimary,
          margin: "20px 0 8px",
        }}
      >
        Course {course.number}: {course.title}
      </h2>
      <p
        className="font-body"
        style={{
          fontSize: 14,
          color: T.textSecondary,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {course.description}
      </p>
    </div>
  );
}

/* ================================================================== */
/*  STUDY TAB                                                          */
/* ================================================================== */
function StudyTab({
  course,
  openSections,
  toggleSection,
  readSections,
  markRead,
}: {
  course: TrainingCourse;
  openSections: Set<number>;
  toggleSection: (i: number) => void;
  readSections: Set<string>;
  markRead: (key: string) => void;
}) {
  return (
    <div style={{ padding: 28, overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <BookOpen size={18} style={{ color: T.teal200 }} />
        <h2
          className="font-heading"
          style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, margin: 0 }}
        >
          Study Material
        </h2>
        <span
          className="font-mono"
          style={{ fontSize: 11, color: T.textDim }}
        >
          {course.sections.length} sections
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {course.sections.map((section, idx) => {
          const isOpen = openSections.has(idx);
          const readKey = `${course.id}-${idx}`;
          const isRead = readSections.has(readKey);

          return (
            <div
              key={idx}
              style={{
                borderRadius: 14,
                border: `1px solid ${T.border}`,
                background: T.bgCard,
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <button
                onClick={() => toggleSection(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  padding: "14px 18px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {isOpen ? (
                  <ChevronDown size={16} style={{ color: T.teal200, flexShrink: 0 }} />
                ) : (
                  <ChevronRight size={16} style={{ color: T.textDim, flexShrink: 0 }} />
                )}
                <span
                  className="font-heading"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: isOpen ? T.textPrimary : T.textSecondary,
                    flex: 1,
                  }}
                >
                  {section.title}
                </span>
                {isRead && (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      color: T.green,
                    }}
                  >
                    <Check size={12} /> Read
                  </span>
                )}
              </button>

              {/* Body */}
              {isOpen && (
                <div style={{ padding: "0 18px 18px 44px" }}>
                  <p
                    className="font-body"
                    style={{
                      fontSize: 14,
                      color: T.textSecondary,
                      lineHeight: 1.75,
                      margin: "0 0 14px",
                    }}
                  >
                    {highlightKeyTerms(section.content)}
                  </p>
                  {!isRead && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        markRead(readKey);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 500,
                        color: T.teal200,
                        background: `${T.teal}18`,
                        border: `1px solid ${T.teal}44`,
                        borderRadius: 100,
                        cursor: "pointer",
                      }}
                    >
                      <Check size={12} /> Mark as read
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  QUIZ TAB                                                           */
/* ================================================================== */
interface QuizState {
  currentQ: number;
  answers: (number | null)[];
  submitted: boolean[];
  showResults: boolean;
}

function QuizTab({
  course,
  quizState,
  setQuizState,
  studyComplete,
}: {
  course: TrainingCourse;
  quizState: QuizState;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  studyComplete: boolean;
}) {
  const { quiz } = course;
  const { currentQ, answers, submitted, showResults } = quizState;

  const score = useMemo(() => {
    return quiz.reduce(
      (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
      0
    );
  }, [quiz, answers]);

  const passed = score >= 4;

  /* Locked state */
  if (!studyComplete) {
    return (
      <div
        style={{
          padding: 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 400,
          gap: 16,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: T.bgRow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Lock size={24} style={{ color: T.textDim }} />
        </div>
        <h3
          className="font-heading"
          style={{ fontSize: 16, fontWeight: 600, color: T.textPrimary, margin: 0 }}
        >
          Complete the study material first
        </h3>
        <p
          className="font-body"
          style={{ fontSize: 13, color: T.textMuted, margin: 0, textAlign: "center", maxWidth: 380 }}
        >
          Read through all sections in the Study tab and mark each one as read before taking the quiz.
        </p>
      </div>
    );
  }

  /* Results view */
  if (showResults) {
    return (
      <div style={{ padding: 28, maxWidth: 560, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 14,
            border: `1px solid ${T.border}`,
            background: T.bgCard,
            padding: 28,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              margin: "0 auto 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: passed ? T.greenBg : T.amberBg,
            }}
          >
            <Award size={28} style={{ color: passed ? T.green : T.amber }} />
          </div>
          <h3
            className="font-heading"
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: T.textPrimary,
              margin: "0 0 6px",
            }}
          >
            {score} out of {quiz.length}
          </h3>
          <p
            className="font-body"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: passed ? T.green : T.amber,
              margin: "0 0 24px",
            }}
          >
            {passed ? "Passed" : "Needs review"}
          </p>

          {/* Per-question review */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              textAlign: "left",
              marginBottom: 24,
            }}
          >
            {quiz.map((q, i) => {
              const correct = answers[i] === q.correctIndex;
              return (
                <div
                  key={q.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 14px",
                    borderRadius: 10,
                    background: correct ? `${T.green}10` : `${T.red}10`,
                    border: `1px solid ${correct ? `${T.green}30` : `${T.red}30`}`,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: correct ? T.greenBg : T.redBg,
                      flexShrink: 0,
                    }}
                  >
                    {correct ? (
                      <Check size={12} style={{ color: T.green }} />
                    ) : (
                      <X size={12} style={{ color: T.red }} />
                    )}
                  </div>
                  <span
                    className="font-body"
                    style={{
                      fontSize: 13,
                      color: T.textSecondary,
                      flex: 1,
                    }}
                  >
                    Q{i + 1}. {q.question.length > 70 ? q.question.slice(0, 70) + "..." : q.question}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() =>
              setQuizState({
                currentQ: 0,
                answers: Array(quiz.length).fill(null),
                submitted: Array(quiz.length).fill(false),
                showResults: false,
              })
            }
            style={{
              padding: "10px 28px",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              background: T.teal,
              border: "none",
              borderRadius: 100,
              cursor: "pointer",
            }}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  /* Single question view */
  const q = quiz[currentQ];
  const selected = answers[currentQ];
  const isSubmitted = submitted[currentQ];
  const isCorrect = selected === q.correctIndex;
  const isLastQuestion = currentQ === quiz.length - 1;

  return (
    <div style={{ padding: 28, maxWidth: 620, margin: "0 auto" }}>
      {/* Progress */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <span
          className="font-mono"
          style={{ fontSize: 12, color: T.textDim }}
        >
          Question {currentQ + 1} of {quiz.length}
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {quiz.map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background:
                  i === currentQ
                    ? T.teal
                    : submitted[i]
                    ? answers[i] === quiz[i].correctIndex
                      ? T.green
                      : T.red
                    : T.bgRow,
              }}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3
        className="font-heading"
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: T.textPrimary,
          lineHeight: 1.5,
          margin: "0 0 20px",
        }}
      >
        {q.question}
      </h3>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {q.options.map((opt, oi) => {
          let bg = T.bgCard;
          let borderColor = T.border;
          let textColor = T.textSecondary;

          if (isSubmitted) {
            if (oi === q.correctIndex) {
              bg = T.greenBg;
              borderColor = T.green;
              textColor = T.green;
            } else if (oi === selected && oi !== q.correctIndex) {
              bg = T.redBg;
              borderColor = T.red;
              textColor = T.red;
            }
          } else if (oi === selected) {
            bg = `${T.teal}15`;
            borderColor = T.teal;
            textColor = T.textPrimary;
          }

          return (
            <button
              key={oi}
              onClick={() => {
                if (isSubmitted) return;
                setQuizState((prev) => {
                  const newAnswers = [...prev.answers];
                  newAnswers[currentQ] = oi;
                  return { ...prev, answers: newAnswers };
                });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 18px",
                borderRadius: 12,
                border: `1.5px solid ${borderColor}`,
                background: bg,
                cursor: isSubmitted ? "default" : "pointer",
                textAlign: "left",
                transition: "all 0.15s ease",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1.5px solid ${borderColor}`,
                  background: oi === selected && !isSubmitted ? T.teal : "transparent",
                  flexShrink: 0,
                  fontSize: 12,
                  fontWeight: 600,
                  color: oi === selected && !isSubmitted ? "#fff" : textColor,
                }}
              >
                {isSubmitted && oi === q.correctIndex ? (
                  <Check size={12} />
                ) : isSubmitted && oi === selected && oi !== q.correctIndex ? (
                  <X size={12} />
                ) : (
                  String.fromCharCode(65 + oi)
                )}
              </div>
              <span
                className="font-body"
                style={{ fontSize: 14, color: textColor, lineHeight: 1.4 }}
              >
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {isSubmitted && (
        <div
          style={{
            padding: "14px 18px",
            borderRadius: 12,
            background: isCorrect ? `${T.green}0C` : `${T.amber}0C`,
            border: `1px solid ${isCorrect ? `${T.green}30` : `${T.amber}30`}`,
            marginBottom: 20,
          }}
        >
          <p
            className="font-body"
            style={{
              fontSize: 13,
              color: T.textSecondary,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <strong style={{ color: isCorrect ? T.green : T.amber }}>
              {isCorrect ? "Correct!" : "Not quite."}
            </strong>{" "}
            {q.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: 12 }}>
        {!isSubmitted && (
          <button
            disabled={selected === null}
            onClick={() => {
              setQuizState((prev) => {
                const newSubmitted = [...prev.submitted];
                newSubmitted[currentQ] = true;
                return { ...prev, submitted: newSubmitted };
              });
            }}
            style={{
              padding: "10px 28px",
              fontSize: 13,
              fontWeight: 600,
              color: selected === null ? T.textDim : "#fff",
              background: selected === null ? T.bgRow : T.teal,
              border: "none",
              borderRadius: 100,
              cursor: selected === null ? "default" : "pointer",
              opacity: selected === null ? 0.6 : 1,
            }}
          >
            Submit Answer
          </button>
        )}
        {isSubmitted && (
          <button
            onClick={() => {
              if (isLastQuestion) {
                setQuizState((prev) => ({ ...prev, showResults: true }));
              } else {
                setQuizState((prev) => ({
                  ...prev,
                  currentQ: prev.currentQ + 1,
                }));
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 28px",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              background: T.teal,
              border: "none",
              borderRadius: 100,
              cursor: "pointer",
            }}
          >
            {isLastQuestion ? "See Results" : "Next Question"}
            <ChevronRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN PAGE                                                          */
/* ================================================================== */
export default function TrainingPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeTab, setActiveTab] = useState<"watch" | "study" | "quiz">("watch");
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const [readSections, setReadSections] = useState<Set<string>>(new Set());
  const [courseProgress, setCourseProgress] = useState<
    Record<string, CourseProgress>
  >({});
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [quizStates, setQuizStates] = useState<Record<string, QuizState>>(
    () => {
      const states: Record<string, QuizState> = {};
      TRAINING_COURSES.forEach((c) => {
        states[c.id] = {
          currentQ: 0,
          answers: Array(c.quiz.length).fill(null),
          submitted: Array(c.quiz.length).fill(false),
          showResults: false,
        };
      });
      return states;
    }
  );

  /* Fetch user on mount */
  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.user?.name) {
          setUserName(data.user.name);
        }
        if (data.user?.email) {
          setUserEmail(data.user.email);
        }
      })
      .catch(() => {});
  }, []);

  /* Load progress from localStorage once the user is known */
  useEffect(() => {
    if (!userEmail) return;
    const key = `training-progress:${userEmail}`;
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        setCourseProgress(JSON.parse(saved));
      }
    } catch {
      // ignore parse errors
    }
    setProgressLoaded(true);
  }, [userEmail]);

  /* Persist progress whenever it changes */
  useEffect(() => {
    if (!userEmail || !progressLoaded) return;
    const key = `training-progress:${userEmail}`;
    try {
      localStorage.setItem(key, JSON.stringify(courseProgress));
    } catch {
      // ignore quota errors
    }
  }, [courseProgress, userEmail, progressLoaded]);

  /* Rehydrate readSections + quizStates from progress once loaded */
  useEffect(() => {
    if (!progressLoaded) return;
    const sections = new Set<string>();
    TRAINING_COURSES.forEach((c) => {
      const p = courseProgress[c.id];
      if (p?.readSections) p.readSections.forEach((s) => sections.add(s));
    });
    setReadSections(sections);

    setQuizStates((prev) => {
      const next: Record<string, QuizState> = { ...prev };
      TRAINING_COURSES.forEach((c) => {
        const progress = courseProgress[c.id];
        if (progress?.completed && progress.quizScore != null) {
          const answers = c.quiz.map((q, i) => {
            if (i < (progress.quizScore ?? 0)) return q.correctIndex;
            return q.correctIndex === 0 ? 1 : 0;
          });
          next[c.id] = {
            currentQ: c.quiz.length - 1,
            answers,
            submitted: Array(c.quiz.length).fill(true),
            showResults: true,
          };
        }
      });
      return next;
    });
    // Only rehydrate when progress is first loaded from storage — subsequent
    // in-session updates to courseProgress are driven by the handlers below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressLoaded]);

  const course = TRAINING_COURSES[activeCourse];

  const completedCount = useMemo(
    () =>
      TRAINING_COURSES.filter((c) => courseProgress[c.id]?.completed).length,
    [courseProgress]
  );

  const studyComplete = useMemo(() => {
    return course.sections.every((_, i) => readSections.has(`${course.id}-${i}`));
  }, [course, readSections]);

  const toggleSection = useCallback((i: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }, []);

  const markRead = useCallback(
    (key: string) => {
      setReadSections((prev) => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      // Figure out which course this section belongs to.
      const courseId = key.split("-").slice(0, 2).join("-");
      setCourseProgress((prev) => {
        const existing = prev[courseId];
        if (existing?.completed) {
          // Already completed — don't downgrade status, but still record the section.
          const readSet = new Set(existing.readSections ?? []);
          readSet.add(key);
          return {
            ...prev,
            [courseId]: {
              ...existing,
              readSections: Array.from(readSet),
            },
          };
        }
        const readSet = new Set(existing?.readSections ?? []);
        readSet.add(key);
        return {
          ...prev,
          [courseId]: {
            completed: false,
            quizScore: existing?.quizScore ?? null,
            lastAccessed: new Date().toISOString(),
            readSections: Array.from(readSet),
          },
        };
      });
    },
    []
  );

  const handleCourseSelect = useCallback((i: number) => {
    setActiveCourse(i);
    setActiveTab("watch");
    setOpenSections(new Set());
  }, []);

  const handleSignOut = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }, [router]);

  const recordQuizCompletion = useCallback(
    (courseId: string, score: number) => {
      setCourseProgress((prev) => {
        const existing = prev[courseId];
        return {
          ...prev,
          [courseId]: {
            completed: true,
            quizScore: score,
            lastAccessed: new Date().toISOString(),
            readSections: existing?.readSections ?? [],
          },
        };
      });
    },
    []
  );

  const currentQuizState = quizStates[course.id];
  const setCurrentQuizState = useCallback(
    (updater: React.SetStateAction<QuizState>) => {
      setQuizStates((prev) => {
        const prevState = prev[course.id];
        const nextState =
          typeof updater === "function" ? updater(prevState) : updater;
        // If the user just transitioned to the results screen, record completion.
        if (!prevState.showResults && nextState.showResults) {
          const score = course.quiz.reduce(
            (acc, q, i) =>
              acc + (nextState.answers[i] === q.correctIndex ? 1 : 0),
            0
          );
          // Defer the progress update to avoid setState-in-setState warnings.
          queueMicrotask(() => recordQuizCompletion(course.id, score));
        }
        return {
          ...prev,
          [course.id]: nextState,
        };
      });
    },
    [course.id, course.quiz, recordQuizCompletion]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: T.bgPage }}>
      <TrainingNav
        completedCount={completedCount}
        userName={userName}
        onSignOut={handleSignOut}
      />
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          overflow: "hidden",
        }}
      >
        <CourseSidebar
          courses={TRAINING_COURSES}
          activeCourse={activeCourse}
          onSelect={handleCourseSelect}
          courseProgress={courseProgress}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
          <div style={{ flex: 1, overflowY: "auto" }}>
            {activeTab === "watch" && <VideoTab course={course} />}
            {activeTab === "study" && (
              <StudyTab
                course={course}
                openSections={openSections}
                toggleSection={toggleSection}
                readSections={readSections}
                markRead={markRead}
              />
            )}
            {activeTab === "quiz" && (
              <QuizTab
                course={course}
                quizState={currentQuizState}
                setQuizState={setCurrentQuizState}
                studyComplete={studyComplete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
