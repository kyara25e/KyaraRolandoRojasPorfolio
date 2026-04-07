"use client";

export default function FireBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="fire fire-1" />
      <div className="fire fire-2" />
      <div className="fire fire-3" />
      <div className="spark spark-1" />
      <div className="spark spark-2" />
      <div className="spark spark-3" />
      <div className="spark spark-4" />
    </div>
  );
}