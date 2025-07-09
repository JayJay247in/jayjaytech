# Jay Jay - Professional Technology Services Portfolio

A modern, responsive, and fully-featured single-page portfolio website for **Jay Jay Mobile Solutions & Technology Services**. Inspired by a professional flyer, this site features a vibrant dark-mode aesthetic, smooth animations, and a dynamic, auto-playing slideshow to showcase completed work.


## Key Features

- **Fully Responsive Design:** Looks great on desktops, tablets, and mobile phones.
- **Dynamic "Reveal on Scroll" Animations:** Elements gracefully fade into view as you scroll.
- **Automated Image Slideshow:** Showcases up to 29 projects, with manual navigation and auto-play every 5 seconds.
- **Sleek User Interface:** Professional dark theme with vibrant blue and purple gradients.
- **Interactive Contact Methods:** Clickable cards for WhatsApp, Telegram, and Direct Call.
- **Easy to Customize:** Built with clean HTML, CSS, and JavaScript.

---

## Technology Stack

- **HTML5:** Core structure and content.
- **CSS3:** Styling, responsive design, and animations.
- **JavaScript (ES6):** Reveal-on-scroll and slideshow functionality.
- **Font Awesome:** Icons throughout the site.

---

## Getting Started

1. **Download or Clone the Repository**
    ```bash
    git clone <your-repository-url>
    ```
    Or download as ZIP and extract.

2. **Add Your Work Images**
    - Place up to 29 images in the `/images` folder.
    - Name them sequentially: `work1.jpg`, `work2.jpg`, ..., `work29.jpg`.

3. **Open the Website**
    - Open `index.html` in your browser.

---

## Customization Guide

### Updating the Slideshow

- **Image Count:**  
  Edit `totalSlides` in `script.js`:
  ```js
  const totalSlides = 29; // Change this number
  ```
- **Image Captions:**  
  Customize captions in `script.js` (array or text generation).
- **Auto-play Speed:**  
  Change interval in `script.js`:
  ```js
  slideInterval = setInterval(autoSlide, 5000); // 5000ms = 5 seconds
  ```

### Editing Text Content

- Update services, titles, and descriptions directly in `index.html`.

### Updating Contact Information

- In `index.html`, find the section with `id="contact"` and update:
  - **WhatsApp:** `https://wa.me/2349024999425`
  - **Telegram:** `https://t.me/Divinity100`
  - **Direct Call:** `tel:09135217479`
- Change visible phone numbers in `<p>` tags as needed.

### Changing Colors and Fonts

- Edit `style.css`:
  ```css
  :root {
        --bg-gradient: linear-gradient(135deg, #4831a4, #12d1da);
        --dark-bg: #0d1120;
        /* ... */
  }
  ```

---

## File Structure

```
/jay-jay-portfolio
|
|-- /images/
|   |-- work1.jpg
|   |-- work2.jpg
|   |-- ... (up to work29.jpg)
|
|-- index.html      # Main HTML file
|-- style.css       # All styles
`-- script.js       # JavaScript functionality
```

---

> This portfolio was generated based on a design provided by the owner.  
> **Licensed under the MIT License.**
