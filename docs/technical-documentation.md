

## Overview
This portfolio is a client-side web application designed to demonstrate proficiency in core web technologies. It uses a component-based approach within a single-page structure.

## Technical Architecture

### 1. Styling Strategy
- **CSS Variables:** The system uses a `:root` and `[data-theme="dark"]` strategy.
- **Flexbox & Grid:** - **Flexbox** is used for the Navigation Bar and Footer for alignment.
    - **CSS Grid** is used for the Project Gallery (`.cards`) to allow for an `auto-fit` layout that naturally wraps on smaller screens.

### 2. JavaScript Implementation
- **Theme Logic:** Uses an Event Listener on the `#themeBtn` to toggle the `data-theme` attribute on the `<html>` element.
- **Form Handling:** Uses `e.preventDefault()` to intercept form submission, performs Regex validation on the email field, and provides visual feedback to the user.

### 3. Responsive Breakpoints
- **Desktop:** > 768px (3-column project grid).
- **Mobile/Tablet:** < 768px (1-column layout, stacked hero elements, and adjusted font sizes).

## Known Issues & Future Improvements
- **Future Feature:** Design and implement a personal brand logo as a browser tab icon.
- **Future Feature:** Add a floating button that appears after scrolling down to help users return to the navigation bar quickly.