import React from "react";

export function ProjectLogo({
  projectId,
  size = 40,
  light = false,
}: {
  projectId: string;
  size?: number;
  light?: boolean;
}) {
  switch (projectId) {
    case "nayrose":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* Strawberry + Petal organic branding mark */}
          <circle cx="22" cy="22" r="20" fill={light ? "rgba(255,249,246,0.15)" : "#F6DDE4"} stroke={light ? "#FFF9F6" : "#D98C9B"} strokeWidth="1.5" />
          {/* Strawberry body */}
          <path
            d="M22 32C17.5 32 14 26.5 14 21.5C14 17.5 17.5 15.5 22 15.5C26.5 15.5 30 17.5 30 21.5C30 26.5 26.5 32 22 32Z"
            fill={light ? "#FFF9F6" : "#7A1838"}
          />
          {/* Crown leaves */}
          <path
            d="M17 16C18.5 13 22 12.5 22 12.5C22 12.5 25.5 13 27 16C25 15 22 14.5 22 14.5C22 14.5 19 15 17 16Z"
            fill={light ? "#D98C9B" : "#D98C9B"}
          />
          {/* Strawberry seed dots */}
          <circle cx="19" cy="21" r="0.8" fill={light ? "#7A1838" : "#F6DDE4"} />
          <circle cx="25" cy="21" r="0.8" fill={light ? "#7A1838" : "#F6DDE4"} />
          <circle cx="22" cy="25" r="0.8" fill={light ? "#7A1838" : "#F6DDE4"} />
        </svg>
      );

    case "joj-dakar-2026":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* JOJ Olympic youth badge */}
          <circle cx="22" cy="22" r="20" fill={light ? "rgba(255,249,246,0.15)" : "#F6DDE4"} stroke={light ? "#FFF9F6" : "#D98C9B"} strokeWidth="1.5" />
          {/* Olympic stylized flame */}
          <path
            d="M22 11C23.5 15 27 17 26 21C25 24 22 25 22 25C22 25 19 24 18 21C17 17 20.5 15 22 11Z"
            fill={light ? "#FFF9F6" : "#7A1838"}
          />
          {/* Olympic rings simplified arc */}
          <circle cx="17" cy="28" r="3" stroke={light ? "#FFF9F6" : "#7A1838"} strokeWidth="1.2" fill="none" />
          <circle cx="22" cy="28" r="3" stroke={light ? "#D98C9B" : "#D98C9B"} strokeWidth="1.2" fill="none" />
          <circle cx="27" cy="28" r="3" stroke={light ? "#FFF9F6" : "#7A1838"} strokeWidth="1.2" fill="none" />
        </svg>
      );

    case "jambaar":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* SportTech & AI Victory Emblem */}
          <circle cx="22" cy="22" r="20" fill={light ? "rgba(255,249,246,0.15)" : "#F6DDE4"} stroke={light ? "#FFF9F6" : "#D98C9B"} strokeWidth="1.5" />
          {/* Dynamic Athlete J Shield */}
          <path
            d="M17 13H27V17H22V25C22 27.5 20 29 17.5 29C15 29 14 27.5 14 27.5L15.5 24.5C15.5 24.5 16.5 25.5 17.5 25.5C18.5 25.5 19 25 19 24V13H17Z"
            fill={light ? "#FFF9F6" : "#7A1838"}
          />
          {/* AI Spark Star */}
          <path
            d="M27 20L28 22L30 23L28 24L27 26L26 24L24 23L26 22L27 20Z"
            fill={light ? "#D98C9B" : "#D98C9B"}
          />
        </svg>
      );

    case "lolli":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* LOLLI Agile spiral mark */}
          <circle cx="22" cy="22" r="20" fill={light ? "rgba(255,249,246,0.15)" : "#F6DDE4"} stroke={light ? "#FFF9F6" : "#D98C9B"} strokeWidth="1.5" />
          {/* Modern L icon */}
          <path
            d="M16 13H20V24H28V28H16V13Z"
            fill={light ? "#FFF9F6" : "#7A1838"}
          />
          <circle cx="26" cy="16" r="2.5" fill={light ? "#D98C9B" : "#D98C9B"} />
        </svg>
      );

    case "flo":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* FLO replication curve badge */}
          <circle cx="22" cy="22" r="20" fill={light ? "rgba(255,249,246,0.15)" : "#F6DDE4"} stroke={light ? "#FFF9F6" : "#D98C9B"} strokeWidth="1.5" />
          <path
            d="M22 13C25 17 28 20 28 24C28 27.5 25.5 30 22 30C18.5 30 16 27.5 16 24C16 20 19 17 22 13Z"
            fill={light ? "#FFF9F6" : "#7A1838"}
          />
          <circle cx="22" cy="24" r="2" fill={light ? "#D98C9B" : "#FFF9F6"} />
        </svg>
      );

    case "sen-foncier":
    default:
      // STRICT RULE: SEN FONCIER HAS NO LOGO!
      return null;
  }
}
