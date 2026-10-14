import { Fragment } from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/images/sheryl-hero.jpg";
import sbaLogo from "../assets/images/sba-logo.png";
import { ArrowIcon, CalendarIcon } from "../components/Icons";
import {
  CAGE_CODE,
  NAICS_SUMMARY,
  UEI,
  caseStudy,
  certifications,
  naicsCodes,
  outcomes,
  pillars,
  services,
  team,
} from "../data/content";

function Hero() {
  return (
    <section className="hero">
      <figure className="hero-photo">
        <img src={heroPhoto} alt="Sheryl Clark, President and CEO of Strategic Healthcare Solutions" />
        <figcaption>
          <b>Sheryl Clark</b>President / CEO
        </figcaption>
      </figure>
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow">Strategic Healthcare Solutions, LLC</p>
          <h1>
            Transforming <span className="u">Compliance</span> into a Strategic Advantage<sup>™</sup>
          </h1>
          <p className="lede">
            Healthcare consulting solutions that strengthen compliance, optimize clinical operations,
            reduce risk, and improve financial performance.
          </p>
          <div className="actions">
            <Link className="btn btn-gold" to="/#services">
              Explore Our Services <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              <CalendarIcon /> Schedule a Consultation
            </Link>
          </div>
        </div>
        <ul className="pillars" aria-label="What we bring">
          {pillars.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="sec-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <span className="rule" />
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <SectionHead eyebrow="Our Services" title="Healthcare consulting solutions" />
        <div className="svc-grid">
          {services.map(({ title, body, icon: Icon, image, alt }) => (
            <article className="svc" key={title}>
              <div className="svc-body">
                <div className="svc-head">
                  <div className="icon-disc">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                </div>
                <p>{body}</p>
              </div>
              <figure className="svc-photo">
                <img src={image} alt={alt} loading="lazy" />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Government() {
  return (
    <section className="gov" id="government">
      <div className="wrap">
        <SectionHead eyebrow="SBA Certified" title="Government Contracting" />
        <div className="gov-grid">
          {certifications.map((c) => (
            <div className="tile" key={c.code}>
              <div className="sba">
                <img src={sbaLogo} alt="SBA" />
                <div className="code">{c.code}</div>
              </div>
              <div>
                <div className="full">{c.name}</div>
                <div className="cert">CERTIFIED</div>
              </div>
            </div>
          ))}
        </div>
        <div className="naics-row">
          <div className="reg">
            <div className="label">NAICS Codes</div>
            <div className="naics">
              {naicsCodes.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <div className="naics-note">{NAICS_SUMMARY}</div>
          </div>
          <div className="reg">
            <div className="label">CAGE Code</div>
            <div className="v">{CAGE_CODE}</div>
          </div>
          <div className="reg">
            <div className="label">UEI</div>
            <div className="v">{UEI}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="results" id="results">
      <div className="wrap">
        <div className="results-grid">
          <div>
            <h2>
              Real expertise.
              <br />
              <span className="gold-text">Real results.</span>
            </h2>
            <span className="rule" />
            <p className="intro">
              We partner with hospitals, health systems, government agencies, and healthcare technology
              organizations to deliver measurable clinical, operational, and financial improvements.
            </p>
          </div>
          <div className="case">
            <p className="eyebrow">{caseStudy.area}</p>
            <div className="stat">{caseStudy.stat}</div>
            <div className="stat-label">{caseStudy.label}</div>
            <p>{caseStudy.body}</p>
          </div>
        </div>
        <div className="outcomes">
          {outcomes.map(({ title, body, icon: Icon }) => (
            <div className="outcome" key={title}>
              <div className="ring">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>Let us tell you what vulnerabilities should be keeping your leadership up at night</h2>
          <span className="rule" />
        </div>
        <p className="copy">
          Strategic Healthcare Solutions employs a team of regulatory and cybersecurity experts that assist
          hospitals and health systems across the country with compliance. This dedicated team will perform
          assessments, identify gaps and/or vulnerabilities, generate executive dashboards, and project manage
          issues to closure. Let us tell you what vulnerabilities should be keeping your leadership up at night
          and how to mitigate those risks!
        </p>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <SectionHead eyebrow="Our People" title="The Team" />
        <div className="team-grid">
          {team.map((m) => (
            <div className="member" key={m.name}>
              <div className="ph">
                <img src={m.image} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              {m.credentials && <div className="cr">{m.credentials}</div>}
              <div className="t">{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="wrap insights-row">
        <div>
          <p className="eyebrow">Insights</p>
          <h2>Executive dashboards</h2>
          <span className="rule" />
          <p>Transform data into actionable insights with our comprehensive executive dashboards.</p>
        </div>
        <Link className="btn btn-navy" to="/contact">
          <CalendarIcon /> Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Government />
      <Results />
      <About />
      <Team />
      <Insights />
    </Fragment>
  );
}
