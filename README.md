<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NHOGPS School - Quality Education</title>
    <style>
        /* ==================== RESET & GENERAL STYLES ==================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* ==================== HEADER & NAVIGATION ==================== */
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .school-name {
            font-size: 1.8rem;
            font-weight: bold;
            letter-spacing: 1px;
        }

        /* Navigation Menu */
        nav {
            display: flex;
            gap: 2rem;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }

        nav a:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        /* Hamburger Menu for Mobile */
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background: white;
            margin: 5px 0;
            transition: all 0.3s ease;
        }

        /* Mobile Menu Toggle */
        nav.active {
            flex-direction: column;
            position: absolute;
            top: 70px;
            right: 20px;
            background: #667eea;
            padding: 1rem;
            border-radius: 8px;
            gap: 0.5rem;
            width: 200px;
        }

        /* ==================== SECTIONS & LAYOUT ==================== */
        .section {
            display: none;
            min-height: calc(100vh - 70px);
            padding: 3rem 20px;
            animation: fadeIn 0.5s ease;
        }

        .section.active {
            display: block;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* ==================== HOME SECTION ==================== */
        #home {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .banner-content h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            animation: slideDown 0.8s ease;
        }

        .banner-content p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn:hover {
            background-color: #f0f0f0;
            transform: translateY(-3px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        /* ==================== ABOUT SECTION ==================== */
        #about {
            background-color: #f8f9fa;
        }

        .section h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #667eea;
            text-align: center;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-text h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #764ba2;
        }

        .about-text p {
            margin-bottom: 1rem;
            font-size: 1.05rem;
            line-height: 1.8;
        }

        .highlights {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 2rem;
        }

        .highlight-card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: all 0.3s ease;
        }

        .highlight-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
        }

        .highlight-card h4 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }

        /* ==================== COURSES SECTION ==================== */
        #courses {
            background-color: white;
        }

        .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .course-card {
            background: white;
            border: 2px solid #667eea;
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .course-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(102, 126, 234, 0.3);
            border-color: #764ba2;
        }

        .course-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .course-card h3 {
            color: #667eea;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .course-card p {
            color: #666;
            margin-bottom: 1rem;
            line-height: 1.6;
        }

        .course-btn {
            background-color: #667eea;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .course-btn:hover {
            background-color: #764ba2;
            transform: scale(1.05);
        }

        /* ==================== CONTACT SECTION ==================== */
        #contact {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .contact-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: #333;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 5px;
            font-size: 1rem;
            font-family: inherit;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 8px rgba(102, 126, 234, 0.2);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .error {
            color: #e74c3c;
            font-size: 0.9rem;
            margin-top: 0.3rem;
            display: none;
        }

        .error.show {
            display: block;
        }

        .submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(102, 126, 234, 0.4);
        }

        /* ==================== FOOTER ==================== */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
        }

        /* ==================== RESPONSIVE DESIGN ==================== */
        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                gap: 1rem;
            }

            nav {
                display: none;
            }

            .hamburger {
                display: flex;
            }

            nav.active {
                display: flex;
            }

            .school-name {
                font-size: 1.5rem;
            }

            .banner-content h1 {
                font-size: 2rem;
            }

            .about-content {
                grid-template-columns: 1fr;
            }

            .highlights {
                grid-template-columns: 1fr;
            }

            .courses-grid {
                grid-template-columns: 1fr;
            }

            .section h2 {
                font-size: 2rem;
            }

            nav a {
                font-size: 0.9rem;
                padding: 0.5rem;
            }
        }

        @media (max-width: 480px) {
            .banner-content h1 {
                font-size: 1.5rem;
            }

            .banner-content p {
                font-size: 1rem;
            }

            .section {
                padding: 2rem 15px;
            }

            .contact-container {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- ==================== HEADER ==================== -->
    <header>
        <div class="header-container">
            <div class="school-name">NHOGPS School</div>
            <!-- Navigation Menu -->
            <nav id="nav-menu">
                <a href="#" onclick="showSection('home')">Home</a>
                <a href="#" onclick="showSection('about')">About</a>
                <a href="#" onclick="showSection('courses')">Courses</a>
                <a href="#" onclick="showSection('contact')">Contact</a>
            </nav>
            <!-- Hamburger Menu for Mobile -->
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

    <!-- ==================== HOME SECTION ==================== -->
    <section id="home" class="section active">
        <div class="banner-content">
            <h1>Welcome to NHOGPS School</h1>
            <p>Quality Education for a Bright Future</p>
            <button class="btn" onclick="showWelcome()">Click Here to Get Started</button>
        </div>
    </section>

    <!-- ==================== ABOUT SECTION ==================== -->
    <section id="about" class="section">
        <div class="container">
            <h2>About Our School</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Our Mission</h3>
                    <p>
                        At NHOGPS School, we are dedicated to providing quality education that empowers students to achieve their full potential. We believe in nurturing not just academic excellence, but also fostering creativity, critical thinking, and character development.
                    </p>
                    <p>
                        Our experienced faculty and modern facilities ensure that every student receives personalized attention and the best learning experience possible.
                    </p>
                </div>
                <div class="highlights">
                    <div class="highlight-card">
                        <h4>📚 Expert Faculty</h4>
                        <p>Highly qualified and experienced teachers</p>
                    </div>
                    <div class="highlight-card">
                        <h4>🏆 Excellence</h4>
                        <p>Consistent academic achievements</p>
                    </div>
                    <div class="highlight-card">
                        <h4>🌍 Global Standards</h4>
                        <p>International curriculum and practices</p>
                    </div>
                    <div class="highlight-card">
                        <h4>💡 Innovation</h4>
                        <p>Modern teaching methods and technology</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== COURSES SECTION ==================== -->
    <section id="courses" class="section">
        <div class="container">
            <h2>Our Courses</h2>
            <div class="courses-grid">
                <!-- Mathematics Course -->
                <div class="course-card">
                    <div class="course-icon">🔢</div>
                    <h3>Mathematics</h3>
                    <p>Master fundamental and advanced mathematical concepts. Develop problem-solving skills and logical thinking.</p>
                    <button class="course-btn">Learn More</button>
                </div>

                <!-- Science Course -->
                <div class="course-card">
                    <div class="course-icon">🔬</div>
                    <h3>Science</h3>
                    <p>Explore physics, chemistry, and biology through interactive experiments and hands-on learning experiences.</p>
                    <button class="course-btn">Learn More</button>
                </div>

                <!-- English Course -->
                <div class="course-card">
                    <div class="course-icon">📖</div>
                    <h3>English</h3>
                    <p>Develop communication skills, improve writing abilities, and explore literature from around the world.</p>
                    <button class="course-btn">Learn More</button>
                </div>

                <!-- Computer Science Course -->
                <div class="course-card">
                    <div class="course-icon">💻</div>
                    <h3>Computer Science</h3>
                    <p>Learn programming, web development, and digital literacy for the modern technological world.</p>
                    <button class="course-btn">Learn More</button>
                </div>

                <!-- Arts Course -->
                <div class="course-card">
                    <div class="course-icon">🎨</div>
                    <h3>Arts</h3>
                    <p>Express creativity through painting, drawing, and sculpture. Explore the world of visual arts.</p>
                    <button class="course-btn">Learn More</button>
                </div>

                <!-- Physical Education Course -->
                <div class="course-card">
                    <div class="course-icon">⚽</div>
                    <h3>Physical Education</h3>
                    <p>Build a healthy lifestyle through sports, fitness activities, and teamwork development.</p>
                    <button class="course-btn">Learn More</button>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== CONTACT SECTION ==================== -->
    <section id="contact" class="section">
        <div class="container">
            <h2>Get In Touch</h2>
            <div class="contact-container">
                <form id="contact-form" onsubmit="handleFormSubmit(event)">
                    <!-- Name Field -->
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your full name">
                        <span class="error" id="name-error">Please enter your name</span>
                    </div>

                    <!-- Email Field -->
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email">
                        <span class="error" id="email-error">Please enter a valid email</span>
                    </div>

                    <!-- Message Field -->
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" placeholder="Write your message here..."></textarea>
                        <span class="error" id="message-error">Please enter your message</span>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- ==================== FOOTER ==================== -->
    <footer>
        <p>&copy; 2024 NHOGPS School. All rights reserved. | Quality Education for a Bright Future</p>
    </footer>

    <!-- ==================== JAVASCRIPT ==================== -->
    <script>
        // ==================== SECTION NAVIGATION ====================
        /**
         * Show a specific section and hide others
         * @param {string} sectionId - The ID of the section to show
         */
        function showSection(sectionId) {
            // Get all sections
            const sections = document.querySelectorAll('.section');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.classList.add('active');
            }
            
            // Close mobile menu after clicking
            closeMenu();
        }

        // ==================== MOBILE MENU TOGGLE ====================
        /**
         * Toggle the mobile navigation menu
         */
        function toggleMenu() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('active');
        }

        /**
         * Close the mobile menu
         */
        function closeMenu() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('active');
        }

        // ==================== FORM VALIDATION ====================
        /**
         * Validate email format
         * @param {string} email - Email to validate
         * @returns {boolean} - True if email is valid
         */
        function isValidEmail(email) {
            // Regular expression for basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        /**
         * Handle form submission and validation
         * @param {Event} event - Form submission event
         */
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Get error elements
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');

            // Reset errors
            nameError.classList.remove('show');
            emailError.classList.remove('show');
            messageError.classList.remove('show');

            let isValid = true;

            // Validate name (check if not empty)
            if (nameInput.value.trim() === '') {
                nameError.classList.add('show');
                isValid = false;
            }

            // Validate email (check if not empty and valid format)
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Please enter your email';
                emailError.classList.add('show');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.classList.add('show');
                isValid = false;
            }

            // Validate message (check if not empty)
            if (messageInput.value.trim() === '') {
                messageError.classList.add('show');
                isValid = false;
            }

            // If all fields are valid, show success message
            if (isValid) {
                alert(`Thank you, ${nameInput.value}! Your message has been sent to ${emailInput.value}. We will get back to you soon!`);
                
                // Clear the form
                document.getElementById('contact-form').reset();
            }
        }

        // ==================== INTERACTIVE WELCOME BUTTON ====================
        /**
         * Show welcome message when button is clicked
         */
        function showWelcome() {
            alert('🎉 Welcome to NHOGPS School!\n\nWe are excited to have you here. Explore our courses and get in touch with us to learn more about how we can help you achieve your educational goals!\n\nHappy learning! 📚');
        }
    </script>
</body>
</html>
