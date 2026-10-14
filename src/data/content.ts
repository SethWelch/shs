import type { ComponentType, SVGProps } from "react";
import { BarsIcon, LockIcon, MonitorIcon, PeopleIcon, ShieldIcon } from "../components/Icons";
import serviceCompliance from "../assets/images/service-compliance.jpg";
import serviceInformatics from "../assets/images/service-informatics.jpg";
import serviceCybersecurity from "../assets/images/service-cybersecurity.jpg";
import serviceTransformation from "../assets/images/service-transformation.jpg";
import sherylProfile from "../assets/images/sheryl-profile.png";
import katherineProfile from "../assets/images/katherine-profile.png";
import johnProfile from "../assets/images/john-profile.png";
import sethProfile from "../assets/images/seth-profile.png";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const COMPANY_NAME = "Strategic Healthcare Solutions, LLC";
export const CONTACT_EMAIL = "sheryl@strategichealthcaresolutions.org";
export const LINKEDIN_URL = "https://www.linkedin.com/company/strategic-healthcare-solutions-llc/";

/** `hideMd` links are only shown on very wide screens, as in the mockup. */
export const navLinks: { label: string; to: string; hideMd?: boolean }[] = [
  { label: "Home", to: "/", hideMd: true },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Government Contracting", to: "/#government" },
  { label: "Case Studies", to: "/#results" },
  { label: "Insights", to: "/#insights" },
];

export const pillars = [
  "Compliance",
  "Clinical Expertise",
  "Technology",
  "Financial Impact",
  "Measurable Results",
];

export const services: { title: string; body: string; icon: Icon; image: string; alt: string }[] = [
  {
    title: "Healthcare Compliance & Regulatory Advisory",
    body: "CMS Promoting Interoperability, HIPAA, SAFER Guides, accreditation readiness, quality programs, and regulatory gap remediation.",
    icon: ShieldIcon,
    image: serviceCompliance,
    alt: "Clipboard with a stethoscope",
  },
  {
    title: "Clinical Informatics & EHR Optimization",
    body: "Oracle Health/Cerner, Epic, MEDITECH, perioperative optimization, clinical workflows, revenue opportunities, and Dragon dictation solutions.",
    icon: MonitorIcon,
    image: serviceInformatics,
    alt: "Clinicians reviewing data on monitors",
  },
  {
    title: "Cybersecurity, Privacy & Risk Management",
    body: "NIST assessments, HIPAA security, governance, incident response readiness, and risk mitigation programs.",
    icon: LockIcon,
    image: serviceCybersecurity,
    alt: "Digital shield with a padlock",
  },
  {
    title: "Healthcare Transformation & Program Management",
    body: "EHR implementations, integration, deployment readiness, project leadership, workflow redesign, and remediation through closure.",
    icon: PeopleIcon,
    image: serviceTransformation,
    alt: "Sheryl Clark working with a colleague at a laptop",
  },
];

export const certifications = [
  { code: "WOSB", name: "Woman-Owned Small Business" },
  { code: "EDWOSB", name: "Economically Disadvantaged Woman-Owned Small Business" },
];

export const naicsCodes = ["541512", "541519", "541611", "541618", "541690"];
export const NAICS_SUMMARY = "Healthcare IT, Management Consulting, and Related Services";
export const CAGE_CODE = "9R7K6";
export const UEI = "K2G4F8D4L5V1";

export const caseStudy = {
  area: "Perioperative Optimization",
  stat: "~$1,500",
  label: "Potential savings identified per appendectomy case",
  body: "Through preference card standardization, supply utilization reviews, and surgeon-specific workflow optimization.",
};

export const outcomes: { title: string; body: string; icon: Icon }[] = [
  { title: "Improved Efficiency", body: "Streamlined workflows and reduced operational costs.", icon: BarsIcon },
  { title: "Reduced Risk", body: "Strengthened compliance and cybersecurity posture.", icon: ShieldIcon },
  {
    title: "Better Outcomes",
    body: "Enhanced patient care, provider satisfaction, and financial performance.",
    icon: PeopleIcon,
  },
];

export const team: { name: string; title: string; credentials?: string; image: string }[] = [
  { name: "Sheryl Clark", title: "President/CEO", image: sherylProfile },
  { name: "Katherine Uhling", title: "Chief People Officer", image: katherineProfile },
  {
    name: "John DeDonder",
    credentials: "BSCS MSIS",
    title: "Director of Public Safety Programs",
    image: johnProfile,
  },
  { name: "Seth Welch", title: "Web Developer", image: sethProfile },
];
