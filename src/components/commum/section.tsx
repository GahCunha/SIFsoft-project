import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  center = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={["page", center ? "flex" : "", className].join(" ")}
    >
      <div
        className={[
          "container-page relative",
          center ? "flex flex-1 items-center justify-center" : "",
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
