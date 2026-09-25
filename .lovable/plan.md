# Resume-aligned portfolio and performance update

## Goal
Align the portfolio with the uploaded Software Developer résumé and the supplied skill levels, while preserving existing pages and verified links. Remove unsupported or outdated claims and make every route load substantially less code and media.

## Content changes
- Replace the .NET/ASP.NET/ERP positioning with the résumé’s Software Developer profile: backend development, database programming, business applications, Java, SQL, Spring Boot, REST APIs, and MS SQL Server.
- Present skills using the requested proficiency groups:
  - Proficient: SQL, Java, Python
  - Familiar with: React, Spring Boot, REST APIs
  - Good knowledge: DSA, Problem Solving, OOP, Computer Networks, Generative AI, DBMS, and Operating Systems
- Add the Software Developer Trainee experience at iSPIDER Software Solutions (June–August 2026) and correct education to B.E. (Hons.) ECE with Honours in AI, CGPA 8.34, 2022–2026.
- Align project summaries, certifications, coding achievements, awards, contact details, and page metadata to the résumé. Remove unsupported portfolio counters and invented credentials.
- Replace the existing Software Developer résumé download with the uploaded current résumé.

## Performance changes
- Remove Framer Motion and replace motion-heavy sections with lightweight CSS transitions or static presentation.
- Load page code only when its route is opened, instead of bundling every page into the initial download.
- Compress oversized portfolio images and serve modern formats; keep the portrait prioritized and gallery/project media lazy-loaded.
- Remove unused global providers and heavy packages from the delivered app where they are no longer needed.
- Simplify blur, noise, continuous animation, and expensive layered effects while retaining the existing Noir & Gold visual identity.

## Verification
- Check all routes on desktop and mobile, including navigation and the current résumé download.
- Confirm résumé-aligned text and skill groups across the home, About, Skills, Projects, Achievements, Certifications, and Contact pages.
- Inspect production bundle output and compare route chunks and asset sizes.
- Confirm the preview has no build, runtime, console, or broken-link errors.

## Technical notes
- Keep React, Vite, React Router, Tailwind, existing page URLs, contact links, project links, and dark styling.
- Use native React/CSS interactions and route-level `lazy()` imports to reduce JavaScript execution and initial bundle weight.
