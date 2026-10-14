import { Link } from "react-router-dom";
import logoWhite from "../assets/images/shs-logo-white.png";
import { CAGE_CODE, COMPANY_NAME, CONTACT_EMAIL, LINKEDIN_URL, UEI } from "../data/content";
import { LinkedInIcon, MailIcon } from "./Icons";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img
              className="foot-logo"
              src={logoWhite}
              alt={`${COMPANY_NAME} — Transforming Compliance into a Strategic Advantage`}
            />
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#results">Case Studies</Link></li>
              <li><Link to="/#insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4>Government</h4>
            <ul>
              <li>SBA WOSB Certified</li>
              <li>SBA EDWOSB Certified</li>
              <li>CAGE {CAGE_CODE}</li>
              <li>UEI {UEI}</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Schedule a Consultation</Link></li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <MailIcon width={18} height={18} /> Email us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {COMPANY_NAME}</span>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={`${COMPANY_NAME} on LinkedIn`}>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
