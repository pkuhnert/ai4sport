# Workshop website template

A static academic workshop website template suitable for GitHub Pages.

## Structure

```text
.
├── index.html
├── assets/
│   ├── styles.css
│   └── script.js
└── README.md
```

## How to use

1. Replace the title, date, room, conference, and workshop description in `index.html`.
2. Replace the topic cards, schedule, speaker names, organizer names, and contact address.
3. Add profile images if needed. You can replace the circular initial avatars with `<img>` tags.
4. Push this folder to a GitHub repository.
5. In GitHub, go to **Settings → Pages** and deploy from the main branch, root folder.

## Notes

- This is plain HTML/CSS/JavaScript, so no build system is required.
- The page is responsive and includes a mobile navigation menu.
- The background image is loaded from Unsplash. For a fully self-contained repository, download your preferred hero image into `assets/` and update the `background` URL in `assets/styles.css`.
