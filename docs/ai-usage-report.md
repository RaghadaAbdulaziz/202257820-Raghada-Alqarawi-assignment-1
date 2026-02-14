
# AI Usage Report

## Tools Used & Use Cases
- **Claude:** Primary tool for **Code Generation and Code Review**. Claude assisted in writing the functional JavaScript logic for the theme switcher and the smooth-scroll calculations. It also reviewed the CSS for potential redundancy.
- **Google Gemini:** Primary tool for **Documentation Support and UI/UX Enhancement**. Gemini provided the structure for the README and technical docs, suggested the "Inter" font stack, and advised on adding the dynamic greeting banner to improve user engagement.

## Benefits & Challenges
- **Benefits:** Using AI significantly sped up the process of making the site responsive. It helped debug many conflicts in the code 
- **Challenges:** A significant challenge was filtering out AI suggestions for external libraries that weren't necessary. I addressed this by using targeted prompts to force the AI to follow specific HTML/CSS syntax. This allowed me to ensure the final result was built entirely with standard web technologies as requested by the assignment guidelines.

## Learning Outcomes
I learned how to manage state (like Dark/Light mode) without a backend using `localStorage`. I also gained a deeper understanding of how to use CSS variables to change the entire look of a site with a single attribute toggle.

## Responsible Use & Modificationsd
While I used Claude for code structure and Gemini for documentation, I did not "copy-paste" blindly. I manually verified the CSS Grid logic to ensure it didn't conflict with my custom purple theme. I also rewrote the AI-generated project descriptions to accurately reflect my own class projects (KFUPMMap and Event Planner). To ensure academic integrity, I tested every line of JavaScript in the DevTools console to confirm I understood the logic before finalizing the code.