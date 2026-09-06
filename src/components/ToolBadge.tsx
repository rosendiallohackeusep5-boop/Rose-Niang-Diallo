import React from "react";

export interface ToolInfo {
  name: string;
  category?: string;
}

export function ToolIcon({ name, size = 18 }: { name: string; size?: number }) {
  const normalized = name.toLowerCase().trim();

  // FIGMA
  if (normalized.includes("figma")) {
    return (
      <svg width={size} height={size} viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    );
  }

  // CANVA
  if (normalized.includes("canva")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
        <path
          d="M14.8 14.2c-.8 1.4-2 2-3.3 2-2 0-3.4-1.6-3.4-3.8 0-2.6 1.8-4.6 4.3-4.6 1.4 0 2.5.7 2.9 1.7.1.3 0 .5-.3.6l-.8.4c-.2.1-.4 0-.6-.2-.3-.6-1-1-1.7-1-1.5 0-2.6 1.3-2.6 3 0 1.5.9 2.5 2.1 2.5.8 0 1.5-.4 2-1.3.1-.2.4-.3.6-.2l.8.5c.2.1.2.3.1.5z"
          fill="#FFFFFF"
        />
        <defs>
          <linearGradient id="canva-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // ADOBE ILLUSTRATOR
  if (normalized.includes("illustrator") || normalized.includes("adobe")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#330000" />
        <text
          x="12"
          y="16.5"
          fontFamily="'Inter', sans-serif"
          fontSize="11"
          fontWeight="bold"
          fill="#FF9A00"
          textAnchor="middle"
        >
          Ai
        </text>
      </svg>
    );
  }

  // TRELLO
  if (normalized.includes("trello")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4.5" fill="#0052CC" />
        <rect x="4.5" y="4.5" width="6" height="12" rx="1.5" fill="#FFFFFF" />
        <rect x="13.5" y="4.5" width="6" height="8" rx="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // MONDAY.COM
  if (normalized.includes("monday")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#FFFFFF" />
        <circle cx="6.5" cy="14.5" r="2.5" fill="#FF3D57" />
        <circle cx="12" cy="12" r="2.5" fill="#FFCC00" />
        <path d="M16 8h3v8h-3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 16 8z" fill="#00CA72" />
      </svg>
    );
  }

  // GOOGLE WORKSPACE / GOOGLE DRIVE
  if (normalized.includes("google") || normalized.includes("workspace") || normalized.includes("drive")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M8.2 4L2 14.8h6.4L14.6 4H8.2z" fill="#0066DA" />
        <path d="M14.6 4H8.2l6.2 10.8h6.4L14.6 4z" fill="#00AC47" />
        <path d="M2.8 19.8l3.2-5.6h15.2l-3.2 5.6H2.8z" fill="#EA4335" />
        <path d="M8.4 14.8l-5.6 5H18l-3.4-5H8.4z" fill="#FFBA00" />
      </svg>
    );
  }

  // MICROSOFT WORD / OFFICE
  if (normalized.includes("word") || normalized.includes("office") || normalized.includes("microsoft")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="6" y="3" width="15" height="18" rx="2" fill="#2B579A" />
        <path d="M9 7h9v1.5H9zM9 11h9v1.5H9zM9 15h6v1.5H9z" fill="#FFFFFF" fillOpacity="0.7" />
        <rect x="3" y="6" width="9" height="12" rx="1.5" fill="#185ABD" />
        <text
          x="7.5"
          y="15.5"
          fontFamily="'Inter', sans-serif"
          fontSize="9"
          fontWeight="bold"
          fill="#FFFFFF"
          textAnchor="middle"
        >
          W
        </text>
      </svg>
    );
  }

  // JIRA / AGILE SCRUM
  if (normalized.includes("jira") || normalized.includes("scrum") || normalized.includes("agile")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0052CC" />
        <path
          d="M12 4a4 4 0 0 0-4 4v3.5l4-4 4 4V8a4 4 0 0 0-4-4zm0 8.5l-4 4V20a4 4 0 0 0 8 0v-3.5l-4-4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // INTELLIGENCE ARTIFICIELLE / CHATGPT / PROMPTING
  if (normalized.includes("ia") || normalized.includes("ai") || normalized.includes("prompting") || normalized.includes("gpt")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#7A1838" />
        <path
          d="M12 6l1.8 4.2L18 12l-4.2 1.8L12 18l-1.8-4.2L6 12l4.2-1.8L12 6z"
          fill="#F6DDE4"
        />
        <circle cx="17" cy="7" r="1.5" fill="#D98C9B" />
        <circle cx="7" cy="17" r="1.2" fill="#D98C9B" />
      </svg>
    );
  }

  // NOTION
  if (normalized.includes("notion")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#000000" />
        <path
          d="M6 6.5l3.5-.5 7.5 1.5v10.5l-3.5.5-7.5-1.5V6.5zm3.5 1.5v7l4 .8V8.8l-4-.8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // DEFAULT CLEAN BADGE ICON
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7A1838" fillOpacity="0.1" />
      <circle cx="12" cy="12" r="4" fill="#7A1838" />
    </svg>
  );
}

export default function ToolBadge({
  name,
  size = 18,
  compact = false,
}: {
  name: string;
  size?: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-sm ${
        compact ? "px-2.5 py-1 text-xs" : "px-3.5 py-2 text-xs md:text-sm"
      }`}
      style={{
        background: "#FFF9F6",
        border: "1px solid rgba(217, 140, 155, 0.35)",
        color: "#4A2635",
      }}
    >
      <ToolIcon name={name} size={size} />
      <span className="font-medium tracking-tight whitespace-nowrap">{name}</span>
    </div>
  );
}
