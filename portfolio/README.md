# Personal Profile Website – Soniya Lakade

A responsive multi-page portfolio website, hosted from this repository using GitHub Pages.

- **Live link:** https://soniyalakade.github.io/fsdl-practical-assignments/
- **Original repository:** https://github.com/soniyalakade/soniya_portfolio

## Pages

| Page | Content |
|---|---|
| `index.html` | Home — introduction, résumé link, navigation cards |
| `about.html` | About me |
| `education.html` | B.E. Computer Engineering (PCCOE, Pune), HSC and SSC details |
| `skills.html` | Languages, web technologies, frameworks, databases |
| `projects.html` | devTinder, Cultural Odyssey, Car Price Prediction, Target Shooter Game |
| `certifications-achievements.html` | Udemy and SimpliLearn certifications, 150+ DSA problems solved, project copyright |
| `contact.html` | Email, GitHub and LinkedIn links |

## Features

- Navigation bar on every page
- Responsive layout for mobile and desktop
- Profile image and downloadable résumé
- Working GitHub and LinkedIn links
- Footer on every page

## Technologies Used

HTML5, CSS3

## Folder Structure

```
profile-website/
├── index.html
├── about.html
├── education.html
├── skills.html
├── projects.html
├── certifications-achievements.html
├── contact.html
├── style.css
└── assets/            # profile photo, résumé PDF, skill icons
```

## How to Run Locally

No build step is needed. Open `index.html` in a browser, or serve the folder:

```bash
cd profile-website
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Hosting

Deployed with **GitHub Pages** from the `main` branch (root folder). The repository root contains an `index.html` that redirects to `profile-website/`.
