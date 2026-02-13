import React, { useEffect, useRef } from "react";
import "./home.css";
import UniverseBG from "../components/UniverseBG";
import { gsap } from "gsap";
import MemberCard from "../components/MemberCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeaderCard from "../components/LeaderCard";
import DevSourceContact from "../components/DevSourceContact";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const portalRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const floatingImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= HERO TIMELINE ================= */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-wrapper",
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
          pin: true,
        },
      });

      tl.to(portalRef.current, {
        scale: 45,
        ease: "power4.out",
      });

      tl.to(
        logoRef.current,
        {
          opacity: 0,
          filter: "blur(14px)",
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.to(
        ".portal-ring",
        {
          opacity: 0.8,
          scale: 2,
          ease: "power2.out",
        },
        "<"
      );

      /* ================= FLOATING PNG ================= */

      tl.fromTo(
        floatingImgRef.current,
        {
          opacity: 0,
          scale: 0.3,
          y: 80,
          rotateX: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: -120,
          rotateX: 0,
          ease: "power3.out",
        },
        "-=0.1"
      );

      tl.to(floatingImgRef.current, {
        y: -300,
        x: 40,
        scale: 1.15,
        rotateZ: 4,
        ease: "none",
      });

      tl.to(
        floatingImgRef.current,
        {
          opacity: 0,
          scale: 1.4,
          ease: "power2.in",
        },
        "-=0.25"
      );

      /* ================= LETTER BY LETTER REVEAL ================= */

      const reveal = contentRef.current.querySelector(".reveal-text");
      if (!reveal) return;

      const text = reveal.innerText;
      reveal.innerHTML = "";

      [...text].forEach((char) => {
        if (char === " ") {
          reveal.appendChild(document.createTextNode(" "));
        } else {
          const span = document.createElement("span");
          span.className = "reveal-char";
          span.textContent = char;
          reveal.appendChild(span);
        }
      });

      gsap.fromTo(
        reveal.querySelectorAll(".reveal-char"),
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: reveal,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-container">
      <div className="universe-bg-wrapper">
        <UniverseBG />
      </div>

      {/* HERO */}
      <div className="hero-wrapper">
        <div className="sticky-hero">
          <div className="logo-container" ref={logoRef}>
            <div className="logo">
              <span className="dev-text">DevS</span>

              <div className="o-portal" ref={portalRef}>
                <div className="portal-ring ring-1" />
                <div className="portal-ring ring-2" />
                <div className="portal-ring ring-3" />
                <span className="o-letter">O</span>
              </div>

              <span className="source-text">urce</span>
            </div>

            <p className="tagline">
              A platform built by <span>developers</span>, for{" "}
              <span>developers</span>
            </p>
          </div>

          <img
            ref={floatingImgRef}
            src="/earth.png"
            alt="Floating"
            className="floating-png"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="content-section" ref={contentRef}>
        <div className="content-inner">
          <section className="about-main">
            <h2 className="content-title ds-heading">Welcome to DevSource Universe</h2>

            <p className="content-text reveal-text">
              DevSource is a developer-driven community focused on building real-world projects that solve practical problems.
              We believe   learning happens best through hands-on experience, collaboration, and consistent execution.
              By working on industry-level projects, our members gain technical expertise, problem-solving skills, and strong portfolios that reflect real development experience.
              At DevSource, the journey matters just as much as the result.
            </p>
            <section className="leadership-section">
              <h3 className="leadership-heading ds-heading">Leadership</h3>
         
               <div className="leadership-cards">
                 <LeaderCard
                   name="Khushi Bhaskar"
                   role="LEAD"
                   img="/khushii.jpeg"
                   link="/khushi"
                 />
         
                 <LeaderCard
                   name="Krrish Khowal"
                   role="VICE LEAD"
                   img="/vice_lead.JPG"
                   link="https://www.linkedin.com/in/krrish-khowal-150885311/"
                 />
               </div>
             </section>

            {/* ================= TEAM MEMBERS ================= */}
            <section className="team-section">
              <h3 className="team-heading ds-heading">Team Members</h3>
            
              <div className="members-grid">
               
                <MemberCard
                  name="Nikhil"
                  role="MERN Developer"
                  img="/Nikhil_image.png"
                  link="/nikhil"
                />
                <MemberCard
                 name="Atharv Handa"
                 role="MERN Developer"
                 img="/atharvv.jpeg"
                 link="/atharv"
               />
                <MemberCard
                 name="Mohd. Sami"
                 role="Game Developer & Frontend Developer"
                 img="/samii.jpeg"
                 link="https://samicode.netlify.app/"
               />
                <MemberCard
                  name="Jiya Agrawal"
                  role="UI/UX Designer"
                  img="/jiya.jpeg"
                  link="https://portfolio-devsource-jiya.vercel.app/"
                />

                <MemberCard
                  name="Vinit Tiwari"
                  role="MERN Developer"
                  img="/vinit.jpeg"
                  link="/vinit"
                />
              
                <MemberCard
                  name="Himanshu Singh"
                  role="MERN Developer"
                  img="/himanshu.jpeg"
                  link="https://portfolio-gules-two-28.vercel.app/"
                />
              </div>
            </section>
            
          </section>
        </div>
      </div>
      <DevSourceContact />
    </div>
  );
};

export default Home;
