 # New Hope of Glory Preparatory School - Responsive Website

## 📚 Project Overview

This is a **fully responsive educational website** built with HTML5, CSS3, and JavaScript. The website showcases a modern, professional preparatory school with comprehensive features including responsive design, form validation, and interactive elements.

---

## 📋 Project Structure

```
├── index.html          # Home Page with hero section
├── about.html          # About Us page with mission/vision
├── services.html       # Services & Programs page
├── contact.html        # Contact & Registration Form
├── styles.css          # Responsive CSS Stylesheet (600+ lines)
├── script.js           # JavaScript - Form validation & DOM manipulation (400+ lines)
└── README.md           # Project Documentation
```

---

## ✨ Key Features Implemented

### 1. **Semantic HTML5 Structure**
- ✅ `<header>` - Navigation header with sticky positioning
- ✅ `<nav>` - Semantic navigation menu
- ✅ `<section>` - Major content sections
- ✅ `<article>` - Self-contained content blocks
- ✅ `<footer>` - Footer with contact information
- ✅ Proper heading hierarchy (h1-h6)
- ✅ `<table>` - Achievements and pricing tables
- ✅ `<form>` - Contact form with proper labels

### 2. **Responsive Navigation Bar**
- ✅ **Flexbox-based layout** - Horizontal menu on desktop
- ✅ **Hamburger menu** - Toggles on mobile devices (< 768px)
- ✅ **Sticky positioning** - Stays visible while scrolling
- ✅ **Active link indicator** - Shows current page
- ✅ **Smooth transitions** - Hover effects on all links
- ✅ **Mobile-first approach** - Optimized for all screen sizes

### 3. **Responsive Content Layout**
- ✅ **CSS Grid** - Primary layout system
- ✅ **Flexbox** - Flexible component layouts
- ✅ **Auto-fit/minmax** - Responsive grid columns
- ✅ **Gap properties** - Consistent spacing
- ✅ **Nested layouts** - Complex page structures

### 4. **Typography & Color Scheme**
| Element | Color | Hex |
|---------|-------|-----|
| Primary | Dark Blue-Gray | #2c3e50 |
| Secondary | Bright Blue | #3498db |
| Accent | Red | #e74c3c |
| Success | Green | #27ae60 |
| Background Light | Light Gray | #ecf0f1 |

- ✅ Segoe UI font stack
- ✅ Readable font sizes (16px+)
- ✅ Proper line heights (1.6)
- ✅ Color contrast compliance

### 5. **Hover Effects**
- ✅ Navigation links color transition
- ✅ Button elevation effect
- ✅ Card lift animation (translateY)
- ✅ Box shadow enhancement
- ✅ Color changes on hover
- ✅ Smooth transitions (0.3s ease)

### 6. **Mobile-Friendly Design**
- ✅ Meta viewport tag for proper scaling
- ✅ Touch-friendly button sizes (48x48px minimum)
- ✅ Flexible images and responsive sizing
- ✅ No horizontal scrolling
- ✅ Large text on mobile (16px+)
- ✅ Proper spacing and padding

### 7. **Responsive Media Queries**

| Breakpoint | Device | Layout |
|------------|--------|--------|
| 1200px+ | Desktop | Multi-column, full features |
| 768px-1024px | Tablet | 2-column grids, adjusted spacing |
| 480px-768px | Mobile | 1-column, hamburger menu |
| < 480px | Small Mobile | Compact layouts, minimal styling |

### 8. **Contact Form & Validation**

#### Form Fields:
1. **Full Name** - Text input with 2+ character validation
2. **Email Address** - Email input with regex validation
3. **Mobile Number** - Tel input with Nigerian format validation
4. **Gender** - Select dropdown with required option
5. **City** - Text input with 2+ character validation
6. **Message** - Textarea with 10-1000 character validation
7. **Subject** - Optional dropdown for inquiry type

#### Validation Features:
- ✅ Real-time validation on blur
- ✅ Error messages without page reload
- ✅ Clear, user-friendly error messages
- ✅ Visual error highlighting
- ✅ Automatic error clearing on correction
- ✅ Scroll to first error

#### Error Message Rules:
```javascript
Name: 2+ characters, letters/spaces/hyphens only
Email: Valid email format (RFC 5322)
Mobile: +233XXXXXXXXXX or 02XXXXXXXXX
City: 2+ characters, letters/spaces only
Message: 10-1000 characters
```

### 9. **JavaScript Features**

#### A. Mobile Navigation
```javascript
✅ Hamburger menu toggle
✅ Close menu on link click
✅ Close menu on outside click
```

#### B. Form Validation
```javascript
✅ Field-level validation functions
✅ Form-level validation on submit
✅ Custom validation rules
✅ Dynamic error message generation
```

#### C. DOM Manipulation
```javascript
✅ Dynamic greeting message (time-based)
✅ Success message animation
✅ Form element visibility toggle
✅ CSS class manipulation
✅ Event listener attachment
```

#### D. Interactive Features
```javascript
✅ Phone number auto-formatting
✅ Real-time error clearing
✅ Success animation
✅ Form data persistence (localStorage)
✅ Submission statistics tracking
✅ Smooth scroll navigation
```

### 10. **Additional Interactive Feature**
**Phone Number Auto-Formatting** - Automatically formats mobile input as: XXX-XXXX-XXXX

---

## 📄 Page Descriptions

### **Home Page (index.html)**
- Hero section with gradient background
- Welcome message with CTA button
- Features/Benefits grid
- Impact statistics
- Call-to-action section
- Professional footer

**Key Sections:**
- `<section class="hero">` - Hero content
- `<section class="features">` - Feature cards
- `<section class="stats">` - Statistics display
- `<section class="cta">` - Call-to-action

### **About Page (about.html)**
- Mission and Vision statements
- 6 Core Values cards
- School history/story section
- Leadership team profiles (3 members with images)
- Achievements table (5 rows)
- Contact CTA

**Key Sections:**
- `<section class="mission-vision">` - Mission/Vision
- `<section class="values">` - Core values grid
- `<section class="history">` - School story
- `<section class="leadership">` - Team profiles
- `<section class="achievements">` - Achievements table

### **Services Page (services.html)**
- Academic programs (3 levels)
- Support services (6 services)
- Extracurricular activities (clubs, sports, events)
- Pricing table with tuition fees
- Flexible payment options

**Key Sections:**
- `<section class="programs">` - Academic programs
- `<section class="support-services">` - Support services
- `<section class="activities">` - Extracurricular activities
- `<section class="pricing">` - Pricing table

### **Contact Page (contact.html)**
- Contact information section
- Contact form with validation
- Dynamic greeting message
- Subject inquiry dropdown
- Submission statistics dashboard
- Location map placeholder

**Key Sections:**
- `<section class="contact-section">` - Contact form
- `<section class="submissions-list">` - Statistics
- `<section class="map-section">` - Location

---

## 🎯 Validation Examples

### Valid Submission:
```
Name: "John Okonkwo"
Email: "john@example.com"
Mobile: "+233542035632" or "0248851553"
Gender: "Male"
City: "Kumasi"
Message: "I am interested in your school programs"
```

### Invalid Submissions & Errors:

| Input | Error Message |
|-------|---------------|
| Name: "J" | "Name must be at least 2 characters" |
| Email: "invalid" | "Please enter a valid email address" |
| Mobile: "1234567" | "Please enter a valid mobile number" |
| Message: "Hi" | "Message must be at least 10 characters" |

---

## 📊 Features Checklist

### HTML5 Requirements
- [x] Semantic header with nav
- [x] Multiple sections with semantic tags
- [x] Articles/divs for content
- [x] Footer with information
- [x] Headings (h1-h6)
- [x] Paragraphs (p)
- [x] Hyperlinks (a)
- [x] Images (img)
- [x] Lists (ul, ol, li)
- [x] Tables (th, tr, td)
- [x] Forms with inputs/labels

### CSS Requirements
- [x] Responsive navbar with Flexbox
- [x] CSS Grid layouts
- [x] Typography styling
- [x] Color scheme applied
- [x] Hover effects on all interactive elements
- [x] Media queries for responsive design
- [x] Mobile-first approach
- [x] Smooth transitions

### JavaScript Requirements
- [x] Form field validation
- [x] Error messages without page reload
- [x] Success message after valid submission
- [x] Dynamic greeting message (DOM manipulation)
- [x] Additional interactive feature (phone formatting)
- [x] Real-time error clearing
- [x] Mobile menu toggle
- [x] Form data persistence

### Responsive Design
- [x] Works on desktop (1200px+)
- [x] Works on tablet (768px-1024px)
- [x] Works on mobile (480px-768px)
- [x] Works on small mobile (< 480px)
- [x] No horizontal scrolling
- [x] Touch-friendly targets
- [x] Readable text on all devices

---

## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/iasantekobia4/NewHopeOfGloryPreparatorySchool-website.git
cd NewHopeOfGloryPreparatorySchool-website
```

### 2. Open in Browser
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### 3. Test Responsiveness
- Open DevTools (F12)
- Click Device Toolbar (Ctrl+Shift+M)
- Test on different breakpoints

### 4. Test Form Validation
- Visit contact.html
- Try entering invalid data
- Check error messages appear without reload
- Submit valid data to see success message

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

---

## 🔧 Customization

### Change Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more colors */
}
```

### Modify Form Fields
Edit form in `contact.html` and add validation in `script.js`

### Update Content
Simply edit text in HTML files, CSS styling remains responsive

---

## 📊 Code Statistics

| File | Lines | Purpose |
|------|-------|---------|
| index.html | 200+ | Home page structure |
| about.html | 180+ | About page structure |
| services.html | 190+ | Services page structure |
| contact.html | 200+ | Contact form structure |
| styles.css | 600+ | Complete styling |
| script.js | 400+ | Form validation & interactivity |
| **Total** | **1,700+** | Complete website |

---

## ✅ Validation Checklist

### Submitted Requirements:
- [x] Responsive website with 4+ pages
- [x] Semantic HTML5 (header, nav, section, article, footer)
- [x] All required HTML elements (headings, paragraphs, links, images, lists, tables)
- [x] Responsive navigation using Flexbox
- [x] Responsive content layout using CSS Grid
- [x] Typography and color scheme applied
- [x] Hover effects on interactive elements
- [x] Mobile-friendly design with media queries
- [x] Works on desktop, tablet, mobile
- [x] Contact form with validation
- [x] Form has all required fields
- [x] Field validation implemented
- [x] Error messages without page reload
- [x] Success message after valid submission
- [x] Dynamic greeting message (DOM manipulation)
- [x] Additional interactive features (5+)
- [x] Source code provided
- [x] Brief feature description (this README)

---

## 🎓 Learning Objectives Met

✅ **HTML5 Mastery** - Semantic markup
✅ **CSS3 Advanced** - Responsive design
✅ **JavaScript Skills** - Form validation, DOM manipulation
✅ **UX/UI Design** - User-friendly interface
✅ **Accessibility** - WCAG compliance
✅ **Performance** - Optimized for speed
✅ **Version Control** - GitHub integration
✅ **Documentation** - Clear, comprehensive README

---

## 🔒 Security Notes

This is a frontend-only demonstration. For production:
- Implement backend validation
- Use HTTPS for data transmission
- Sanitize all inputs on server
- Implement CSRF protection
- Secure API endpoints
- Use environment variables for sensitive data

---

## 📞 Support & Resources

- **HTML5 Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3 Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Responsive Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

---

## 📈 Future Enhancements

- Backend API integration
- Database for form submissions
- Email notifications
- Admin dashboard
- User authentication
- Multi-language support
- Analytics tracking
- Blog/News section
- Photo gallery
- Event calendar

---

## 📜 License

Open source - Available for educational purposes

---

## 👨‍💻 Author

**Israel Asante-Kobia**
- GitHub: https://github.com/iasantekobia4
- Repository: https://github.com/iasantekobia4/NewHopeOfGloryPreparatorySchool-website

---

## 📅 Project Timeline

- **Created**: 2026-06-27
- **Pages**: 4 (Home, About, Services, Contact)
- **Total Files**: 6 (4 HTML + 1 CSS + 1 JS)
- **Total Code Lines**: 1,700+
- **Status**: Complete ✅

---

**✨ A comprehensive, responsive educational website demonstrating modern web development practices.**

*Built with HTML5, CSS3, and Vanilla JavaScript*
