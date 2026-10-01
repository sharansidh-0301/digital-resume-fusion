# Cybersecurity Hunter Portfolio Completion

## Goal
Transform the existing portfolio into the selected **Tactical Hunter HUD** direction while preserving its pages, links, portrait, résumé download, project links, and professional gallery. Position Sharansidh as an aspiring cybersecurity professional without inventing experience, tools, metrics, or credentials.

## Visual direction
- Use the locked Phosphor Hunter palette: `#050806`, `#0B1710`, `#39FF88`, `#C8FFD9`, represented by semantic theme tokens.
- Use Libre Baskerville for headings, IBM Plex Sans for body text, and JetBrains Mono for compact security labels and telemetry.
- Apply the chosen asymmetric Mission Brief structure and Tactical Hunter HUD details: square tactical frames, fine grid/scan accents, status markers, restrained borders, and evidence-style labels.
- Keep effects lightweight with CSS only, limited motion, and reduced-motion support.

## Content and page updates
- **Home:** Replace developer-first messaging with the supplied cybersecurity positioning: aspiring cybersecurity professional, SOC Analyst and VAPT enthusiast, bug hunter, threat detection, vulnerability research, ethical hacking, Linux, networking, SIEM, SQL, and Java. Keep the real portrait, contact links, and résumé action.
- **About:** Reframe the introduction around the transition into cybersecurity while retaining verified education, iSPIDER software experience, awards, and professional gallery. Correct CGPA to 8.34 and coding counts to 55+ GeeksforGeeks and 400+ SkillRack.
- **Skills:** Organize cybersecurity capabilities and the user's verified software foundations into clear groups. Use honest familiarity labels rather than unsupported proficiency percentages.
- **Projects:** Keep only the three résumé-backed projects, retain valid GitHub/live links, remove fake stars/forks, and present their security/data relevance without rewriting their actual purpose.
- **Achievements:** Keep the four verified awards plus Pull Shark and Quickdraw badges. Remove fabricated GitHub, coding, award, contribution, and leadership metrics.
- **Certifications:** Keep only Java Full Stack, Cisco Introduction to Networks, Cisco Switching/Routing/Wireless Essentials, and SQL Basics; remove unsupported credential IDs and certifications.
- **Contact:** Fix the email and LinkedIn links, use the current résumé, and make the contact form open a prepared email instead of claiming a message was sent.
- **Navigation and footer:** Restyle consistently and retain all routes.
- **Metadata:** Update search and sharing text to the cybersecurity identity.

## Performance and technical work
- Lazy-load page routes with a small themed loading state.
- Remove Framer Motion and React Query usage, then remove those packages.
- Use existing WebP images throughout and preserve lazy loading outside the first viewport.
- Record the theme and architecture decisions in the project guidance file.

## Verification
- Check the homepage and every routed page on desktop and mobile.
- Verify navigation, résumé download, external links, project actions, tabs, and contact flow.
- Confirm no stale .NET/ERP claims, fake metrics, broken links, runtime errors, or build errors remain.
