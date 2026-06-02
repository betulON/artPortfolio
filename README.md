# Graduate Portfolio Website

This is a simple static portfolio prepared for graduate program applications.

## File structure

```text
grad_portfolio_site/
├── index.html
├── aether.html
├── quintet.html
├── artworks.html
├── about.html
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    ├── videos/
    └── files/
        └── cv.pdf
```

## How to edit

1. Replace `Your Name` with your real name or artist name.
2. Replace `your.email@example.com`.
3. Put your images in `assets/images/`.
4. Put your videos in `assets/videos/`.
5. Put your CV PDF in `assets/files/cv.pdf`.
6. Replace placeholder boxes with real `<img>` or `<video>` tags.

## Example image replacement

Replace this:

```html
<div class="media-placeholder">Artwork 01<br />assets/images/artwork-01.jpg</div>
```

with this:

```html
<img src="assets/images/artwork-01.jpg" alt="Artwork title" />
```

## Example video replacement

Replace the video placeholder with:

```html
<video controls>
  <source src="assets/videos/aether-gameplay.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Publishing with GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders from `grad_portfolio_site`.
3. Go to repository `Settings`.
4. Go to `Pages`.
5. Choose `Deploy from branch`.
6. Select `main` and `/root`.
7. Save.


## Game artwork layout

The Aether and Quintet pages use:

```html
<div class="game-media-grid">
```

This creates a single-column layout where each artwork/video appears as a wide rectangle.
The painting gallery still uses a multi-column grid.


## Latest design changes

- Home page buttons were removed.
- Navigation is now: Home, Projects dropdown, Paintings, About/CV.
- A light/dark theme button was added to the navbar.
- Game project media is one-column and rectangular.
- Painting page uses sharp rectangular image areas with optional minimalist artwork labels/künye.
- The design is intentionally minimal: white or black background, simple typography, direct images/videos, and fewer card-like elements.
