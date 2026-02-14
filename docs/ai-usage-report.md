
# AI Usage Report

## Tools Used & Use Cases
- **Claude:** Primary tool for **Code Generation and Code Review**. Claude assisted in writing the functional JavaScript logic for the theme switcher and the smooth-scroll calculations. It also reviewed the CSS for potential redundancy.
- **Google Gemini:** Primary tool for **Documentation Support and UI/UX Enhancement**. Gemini provided the structure for the README and technical docs, suggested the "Inter" font stack, and advised on adding the dynamic greeting banner to improve user engagement.

## Benefits & Challenges
- **Benefits:** Using AI significantly sped up the process of making the site responsive. It helped debug a conflict where the theme toggle wasn't saving to `localStorage`.
- **Challenges:** Sometimes AI suggested complex libraries (like jQuery or React). I had to provide specific prompts to ensure the code remained "Vanilla JS" to meet the assignment's technical constraints.

## Learning Outcomes
I learned how to manage state (like Dark/Light mode) without a backend using `localStorage`. I also gained a deeper understanding of how to use CSS variables to change the entire look of a site with a single attribute toggle.

## Responsible Use & Modifications
Every snippet provided by AI was manually reviewed. For example, I modified the AI-generated form validation to include custom feedback messages and specific purple branding (`--p1`) to ensure the design remained consistent with my personal brand.