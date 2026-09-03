**Language:** [English](README_en.md) | [Русский](README.md)

# Anna Demyanovich — Photographer Portfolio

A vanilla HTML, SCSS, and JavaScript photographer landing page for [RS School](https://rs.school/), JS / Front-end Course 2025 Q3.

[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-0A66C2?style=flat&logo=githubpages&logoColor=white)](https://thefoxtale.github.io/portfolio/)
[![HTML5](https://img.shields.io/badge/markup-HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://thefoxtale.github.io/portfolio/)
[![Sass](https://img.shields.io/badge/styles-Sass-CC6699?style=flat&logo=sass&logoColor=white)](https://thefoxtale.github.io/portfolio/)
[![JavaScript](https://img.shields.io/badge/scripts-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://thefoxtale.github.io/portfolio/)
[![RS School](https://img.shields.io/badge/RS%20School-JS%20%2F%20Front--end-000000?style=flat)](https://rs.school/courses/javascript)
[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey?style=flat)](#license)

## Live demo

**Site:** [https://thefoxtale.github.io/portfolio/](https://thefoxtale.github.io/portfolio/)

**Task:** [brief](https://github.com/rolling-scopes-school/tasks/blob/master/stage1/tasks/portfolio/portfolio-part-1.md) · **Design:** [Figma](https://www.figma.com/design/iFsApEUsf6tPwXas56gOiT/Portfolio?node-id=26-1637&t=L9uya9x6r8IlKFzP-0)

## Screenshot

![Desktop preview at 1440px](assets/screenshots/main.jpg)

<details>
<summary>Additional screenshots</summary>

![Medium width](assets/screenshots/medium.jpg)
![Small width](assets/screenshots/small.jpg)
</details>

## About

Course landing page for photographer **Vera**: hero, about, gallery, pricing packages, FAQ, and a booking form.  
Self-hosted fonts, semantic markup, 1440 / 768 / 380 breakpoints, and vanilla JavaScript for interactivity.

## Features

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `section`, `dialog`)
- Accessible buttons and forms, visible `:focus-visible`, FAQ and burger ARIA
- CSS custom properties for color and motion; `prefers-reduced-motion`
- Self-hosted **Oswald** and **Mulish** (no font CDN)
- Burger menu, portfolio slider, FAQ accordion, booking modal
- WhatsApp booking with name, phone, and selected package
- Hover effects only on pointer devices
- GitHub Pages deploy

## Tech stack

| Area | Tools |
|------|--------|
| Markup | HTML5 |
| Styles | SCSS (section modules, Flexbox, custom properties) |
| Scripts | Vanilla JavaScript (ES modules) |
| Fonts | Oswald, Mulish (local `.woff` / `.woff2`) |
| Assets | SVG, WebP, PNG slider cursors |
| Build | Sass (`npm run build-css` / `watch-css`) |
| Deploy | GitHub Pages |

## Getting started

```bash
git clone https://github.com/theFoxTale/portfolio.git
cd portfolio
npm i
npm run watch-css
```

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

Then visit the URL printed in the terminal (usually `http://localhost:3000`).

- `npm run build-css` — one-off CSS build
- `npm run build-css-prod` — minified CSS
- `npm run lint` — JavaScript syntax check

## Project structure

```text
portfolio/
├── .github/                # Pull request template
├── index.html
├── css/                    # Compiled CSS for GitHub Pages
├── scss/
│   ├── index.scss
│   └── sections/           # Per-section styles
├── js/                     # ES modules: burger, slider, FAQ, forms
├── assets/
│   ├── fonts/              # Oswald, Mulish
│   ├── img/                # SVG, WebP, PNG
│   └── screenshots/
├── package.json
├── README.md
└── README_en.md
```

## RS School task

This repository follows the **Portfolio. Part 1–2** assignment for JS / Front-end:

- Layout at 1440 / 768 / 380
- Burger, slider, FAQ, and modal
- English content, GitHub Pages deploy

<details>
<summary>Part 1: Responsive Layout</summary>

1. The layout of the page sections matches the design at a screen width of 1440px and above: <b>+40</b>
    - [x] header: <b>+4</b>
    - [x] Hero section: <b>+4</b>
    - [x] About section: <b>+4</b>
    - [x] Portfolio section: <b>+4</b>
    - [x] Price section: <b>+4</b>
    - [x] FAQ section: <b>+4</b>
    - [x] footer: <b>+4</b>
    - [x] When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of the page (except slider's content) is centered rather than shifted to the side and not stretched across the entire width: <b>+6</b>
    - [x] The background sections' color stretches across the entire width of the screen: <b>+6</b>


2. The layout of the page sections matches the design at a screen width of 768px: <b>+28</b>
    - [x] header: <b>+4</b>
    - [x] Hero section: <b>+4</b>
    - [x] About section: <b>+4</b>
    - [x] Portfolio section: <b>+4</b>
    - [x] Price section: <b>+4</b>
    - [x] FAQ section: <b>+4</b>
    - [x] footer: <b>+4</b>


3. The layout of the page sections matches the design at a screen width of 380px: <b>+28</b>
    - [x] header: <b>+4</b>
    - [x] Hero section: <b>+4</b>
    - [x] About section: <b>+4</b>
    - [x] Portfolio section: <b>+4</b>
    - [x] Price section: <b>+4</b>
    - [x] FAQ section: <b>+4</b>
    - [x] footer: <b>+4</b>


4. At any width between 1440px and 380px, no horizontal scrollbar appears. All page content displays exactly as intended by the design — nothing is cropped, removed, or shifted: <b>+12</b>
    - [x] no horizontal scroll bar between 1440px and 768px widths: <b>+6</b>
    - [x] no horizontal scroll bar between 768px and 380px widths: <b>+6</b>


5. During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios:
    - [x] <b>+8</b>


6. At screen widths of 768px, the menu and navigation links in header are concealed, and a burger menu icon is displayed:
    - [x] <b>+4</b> (Note: Activation of the burger menu icon is not evaluated at this stage.)


7. Interactivity: <b>+26</b>
    - [x] Smooth scrolling with anchor links: <b>+4</b>
    - [x] Interactivity of the links and buttons is implemented according to the Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the cursor: pointer property, but also the use of other visual effects, such as changing the background color or font color, following the Styleguide in the Figma layout. If the interactivity is not specified in the Styleguide, cursor: pointer property is enough: <b>+4</b>
    - [x] Each Package-card in the Packages & Pricing section is interactive (color for border and button) when hovering over any area of the card: <b>+6</b>
    - [x] Each accordion's header in the FAQ section is interactive (color for name and "plus" sign) when hovering over any area of the header, except content of this accordion: <b>+6</b> (Note: Opening/closing of accordion sections is not evaluated at this stage.)
    - [x] Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: <b>+2</b>
    - [x] Hover effects are active on desktop devices (as per the Desktop device type in DevTools) and are disabled for mobile devices (as per the Mobile device type in DevTools): <b>+4</b>


8. Checking validation of the page: <b>+14</b>
    - [x] The layout for the page is validated and error-free according to the W3C Validator (https://validator.w3.org/): <b>+6</b>
        - Valid markup of checked page corresponds to the message "Document checking completed. No errors or warnings to show." In this case, you assigns the full points for the checked page (+6).
        - If there are warnings but no errors, you assigns half of the points (+3) for the checked page
    - [x] Favicon is added to the page: <b>+4</b>
    - [x] Only one h1 on the page: <b>+4</b>
</details>

<details>
<summary>Part 2: Adding Functionality</summary>

1. Implementation of the burger menu: +40
    - [x] At 768px and below, the navigation panel hides, and a burger icon appears: +4
    - [x] The burger icon is created using HTML and CSS without the use of images/svg: +4
    - [x] When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: +4
    - [x] The burger menu occupies the entire available screen area below the <header> block: +4
    - [x] The placement and sizes of elements in the burger menu correspond to the layout (horizontal and vertical centering of menu items): +4
    - [x] When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: +4
    - [x] When clicking on any link in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon: +4
    - [x] Links scroll smoothly to their anchor points: +4
    - [x] The page behind the open menu does not scroll. After closing the menu, scrolling works again: +4
    - [x] Above 768px, both the burger icon and menu are hidden, and the standard navigation panel is shown: +4


2. Implementation of the Slider: +40
    - [x] By default, the slider track must be horizontally centered on the page: +4
    - [x] On desktop, slider scrolling is activated by hovering the cursor over the left or right area: +8
    - [x] On desktop, the active area for scrolling the slider is ~30% of the screen width on each side: +8
    - [x] On desktop, the remaining area in the center is inactive: +4
    - [x] On mobile, the slider is scrolled by swiping with a finger: +8
    - [x] The slider's end positions are aligned with the page content on either side. Scrolling is locked beyond these points: +8


3. Implementation of the accordions in the FAQ section: +24
    - [x] By default, the first accordion is open: +4
    - [x] You can open or close the accordion by clicking anywhere on its header: +4
    - [x] Only one accordion can be open at a time (opening a new one closes the previous): +8
    - [x] Accordion state persists after page reload: +8


4. Implementation of the modals: +22
    - [x] A modal opens when you click any "BOOK NOW" button in the cards within the Packages & Pricing section: +6
    - [x] The part of the page outside the Modal is darkened: +4
    - [x] When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +4
    - [x] Clicking both outside the modal and on the close button closes it: +4
    - [x] The Modal is centered on both axes, sizes of modal elements and their layout match the design: +4


5. Implementation of the scroll down button: +4
    - [x] When the button is clicked, the page scrolls to About section: +4
</details>

## Contact

- GitHub: [theFoxTale](https://github.com/theFoxTale)
- Telegram: [@annie_in_life](https://t.me/annie_in_life)
- Email: [makarenkoanna@yandex.ru](mailto:makarenkoanna@yandex.ru)

## License

Personal portfolio project for educational purposes (RS School).  
All rights reserved unless otherwise noted.
