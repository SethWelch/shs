import type { SvgIconComponent } from "@mui/icons-material";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import sherylProfile from "../assets/images/sheryl-profile.png";
import katherineProfile from "../assets/images/katherine-profile.png";
import johnProfile from "../assets/images/john-profile.png";
import sethProfile from "../assets/images/seth-profile.png";

export const CONTACT_EMAIL = "sheryl@strategichealthcaresolutions.org";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/strategic-healthcare-solutions-llc/";

export const navLinks = [
  { label: "Services", hash: "services" },
  { label: "Approach", hash: "about" },
  { label: "Team", hash: "team" },
  { label: "Insights", hash: "insights" },
];

export type Service = {
  title: string;
  tag: string;
  body: string;
  icon: SvgIconComponent;
};

export const services: Service[] = [
  {
    title: "CMS Promoting Interoperability Compliance",
    tag: "CMS PI",
    body: "Assistance with meeting CMS requirements for electronic health records and promoting interoperability to enhance patient care.",
    icon: SyncAltRoundedIcon,
  },
  {
    title: "Security & Privacy Risk Assessments",
    tag: "Risk",
    body: "Evaluating potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information.",
    icon: ShieldOutlinedIcon,
  },
  {
    title: "SAFER Guide Facilitation and Completion",
    tag: "SAFER",
    body: "Guiding healthcare organizations through SAFER Guides to ensure the safe and secure use of electronic health records.",
    icon: FactCheckOutlinedIcon,
  },
  {
    title: "HIPAA Compliance Assessments",
    tag: "HIPAA",
    body: "Comprehensive assessments to ensure compliance with the Health Insurance Portability and Accountability Act regulations.",
    icon: GavelRoundedIcon,
  },
  {
    title: "CARF Assessments",
    tag: "CARF",
    body: "Specialized assistance with Commission on Accreditation of Rehabilitation Facilities (CARF) standards for quality and results.",
    icon: VerifiedOutlinedIcon,
  },
];

export const approach = [
  {
    title: "Assess",
    body: "Our regulatory and cybersecurity experts evaluate your policies, systems, and practices against the standards that apply to you.",
  },
  {
    title: "Identify gaps",
    body: "We pinpoint compliance gaps and security vulnerabilities, and rank them by the risk they pose to your organization.",
  },
  {
    title: "Report to leadership",
    body: "Findings roll up into executive dashboards, so leadership sees exactly what should be keeping them up at night.",
  },
  {
    title: "Manage to closure",
    body: "We project manage every issue through remediation until it is resolved, not just documented.",
  },
];

export type TeamMember = {
  name: string;
  title: string;
  credentials?: string;
  image?: string;
};

export const team: TeamMember[] = [
  { name: "Sheryl Clark", title: "President / CEO", image: sherylProfile },
  { name: "Katherine Uhling", title: "Chief People Officer", image: katherineProfile },
  {
    name: "John DeDonder",
    credentials: "BSCS, MSIS",
    title: "Director of Public Safety Programs",
    image: johnProfile,
  },
  { name: "Seth Welch", title: "Web Developer", image: sethProfile },
];
