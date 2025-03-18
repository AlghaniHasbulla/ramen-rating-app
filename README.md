# ramen-rating-app# Ramen Rating App: A Dynamic Web Application for Ramen Enthusiasts

## About the App

The **Ramen Rating App** is a front-end web application designed for ramen lovers to explore, rate, and add their favorite ramen dishes. Built entirely from scratch using HTML, CSS, and JavaScript, this project showcases dynamic DOM manipulation, event handling, and structured code organization. It operates with static data, requiring no server-side communication, making it a lightweight and standalone tool for ramen appreciation. Whether you're a casual noodle fan or a ramen connoisseur, this app provides an interactive way to display ramen images, view details, and submit new entries—all while practicing essential web development skills and Git version control.

### Features
- **Ramen Image Gallery:** Displays a collection of ramen dish images in a visually appealing layout.
- **Detail View:** Click on any ramen image to see its name, restaurant, rating, and comment.
- **Add New Ramen:** Use a form to submit new ramen entries, which are instantly added to the gallery.
- **No Persistence Required:** Updates are reflected in the DOM without needing a backend or database.
- **Git Integration:** The project is version-controlled with Git and hosted on GitHub.

## How to Use the App

1. **View Ramen Gallery:**
   - Upon loading the app, a horizontal row of ramen images appears in the `#ramen-menu` section.
   - Each image represents a ramen dish from the static data set.

2. **Explore Ramen Details:**
   - Click on any ramen image to display its details in the `#ramen-detail` section below.
   - Details include the ramen's name, restaurant, rating (if provided), and comment (if available).

3. **Add a New Ramen:**
   - Scroll to the form labeled "Add New Ramen."
   - Fill in the required fields: Ramen Name, Restaurant, and Image URL.
   - Optionally, add a Rating (1-5) and Comment.
   - Click the "Add Ramen" button to see your new ramen appear in the gallery.

4. **Interact with the UI:**
   - The app dynamically updates the gallery and detail view without refreshing the page.
   - Hover over the "Add Ramen" button for a subtle color change effect.

## How to Set Up the Project

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge)
- Git installed on your system (optional, for version control)
- A code editor (e.g., VS Code) for viewing or modifying the files
- Basic knowledge of HTML, CSS, and JavaScript (optional, for customization)

### Setup Instructions

1. **Clone or Download the Repository:**
   - **Using Git:**
     ```bash
     git clone https://github.com/your-username/ramen-rating-app.git
     cd ramen-rating-app
     ```
   - **Manual Download:**
     - Download the ZIP file from the GitHub repository and extract it to a folder named `ramen-rating-app`.

2. **Prepare the Project Files:**
   - Ensure the following structure exists:
     ```
     ramen-rating-app/
     ├── images/
     │   ├── gyukotsu.jpg
     │   ├── kojiro.jpg
     │   ├── naruto.jpg
     │   ├── nirvana.jpg
     │   └── shoyu.jpg
     ├── index.html
     ├── index.js
     ├── style.css
     └── README.md
     ```
   - If images are missing, either download the specified ramen images (`gyukotsu.jpg`, `kojiro.jpg`, `naruto.jpg`, `nirvana.jpg`, `shoyu.jpg`) or use free-to-use images from the internet, placing them in the `images/` folder.

3. **Run the App:**
   - Open `index.html` directly in your web browser:
     - On Windows: Right-click `index.html` > Open with > [Your Browser]
     - On macOS/Linux: Drag `index.html` into a browser window or use `open index.html` in the terminal
   - Alternatively, use a local development server (e.g., VS Code Live Server extension) for a better experience.

4. **Optional: Modify and Version Control:**
   - Edit the files in your code editor to customize the app (e.g., add new features or styles).
   - Use Git to track changes:
     ```bash
     git add .
     git commit -m "Describe your changes here"
     git push origin main
     ```

### Notes
- The app uses static data defined in `index.js`. Any new ramen added via the form exists only during the current browser session.
- Image paths in `index.js` assume the images are in the `images/` folder. Update paths if your image filenames or locations differ.
- This project is designed for learning purposes and can be extended with advanced features like editing or deleting ramen entries.

Enjoy rating your ramen dishes with this simple yet interactive web app!

### CREATED BY GEORGE EVANS
