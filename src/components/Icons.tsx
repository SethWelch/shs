import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="ic" {...props}>
      {children}
    </svg>
  );
}

export const ArrowIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const CalendarIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.8} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.7} {...p}>
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z" />
    <path d="M8.5 12l2.4 2.4 4.6-4.8" />
  </Svg>
);

export const MonitorIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.7} {...p}>
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M8 20h8M12 16v4M6.5 10.5h2l1.5-3 2.5 6 1.5-3h3.5" />
  </Svg>
);

export const LockIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.7} {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 018 0v3M12 14.5v2.5" />
  </Svg>
);

export const PeopleIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.7} {...p}>
    <circle cx="12" cy="8" r="3" />
    <circle cx="5.5" cy="10" r="2.2" />
    <circle cx="18.5" cy="10" r="2.2" />
    <path d="M6.5 19.5v-1a5.5 5.5 0 0111 0v1M2 19.5v-.5a3.5 3.5 0 015-3.2M22 19.5v-.5a3.5 3.5 0 00-5-3.2" />
  </Svg>
);

export const BarsIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.8} {...p}>
    <path d="M4 20h16M7 20v-5M12 20V9M17 20V5" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={1.8} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...stroke} strokeWidth={2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const LinkedInIcon = (p: IconProps) => (
  <Svg fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.97 1.33-1.97 2.7V21h-4z" />
  </Svg>
);
