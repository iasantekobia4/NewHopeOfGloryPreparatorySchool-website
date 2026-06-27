/* ========================================
   JAVASCRIPT - FORM VALIDATION & DOM MANIPULATION
   ======================================== */

// ========== MOBILE NAVIGATION TOGGLE ==========

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });
});

// ========== FORM VALIDATION ==========

let submissionCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Display greeting message when page loads
        displayGreetingMessage();

        // Add real-time validation to form fields
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
    }
});

// ========== DYNAMIC GREETING MESSAGE ==========

function displayGreetingMessage() {
    const greetingElement = document.getElementById('greetingMessage');
    if (!greetingElement) return;

    const currentHour = new Date().getHours();
    let greeting = '';

    if (currentHour < 12) {
        greeting = '🌅 Good Morning! We are here to help with your inquiries.';
    } else if (currentHour < 18) {
        greeting = '☀️ Good Afternoon! Thank you for visiting our contact page.';
    } else {
        greeting = '🌙 Good Evening! We will respond to your message shortly.';
    }

    greetingElement.textContent = greeting;
    greetingElement.classList.add('show');
}

// ========== FIELD VALIDATION FUNCTIONS ==========

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Check if field is empty
    if (!fieldValue) {
        isValid = false;
        errorMessage = `${capitalizeFirstLetter(fieldName)} is required`;
    } else {
        // Specific validations
        switch (fieldName) {
            case 'name':
                if (fieldValue.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters';
                } else if (!/^[a-zA-Z\s'-]+$/.test(fieldValue)) {
                    isValid = false;
                    errorMessage = 'Name should only contain letters, spaces, hyphens, and apostrophes';
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(fieldValue)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;

            case 'mobile':
                // Nigerian phone number format validation
                const phoneRegex = /^(\+233|0)[0-9]{9}$/;
                if (!phoneRegex.test(fieldValue.replace(/[\s()-]/g, ''))) {
                    isValid = false;
                    errorMessage = 'Please enter a valid mobile number (e.g., +233XXXXXXXXXX or 02XXXXXXXXX)';
                }
                break;

            case 'gender':
                if (fieldValue === '' || fieldValue === '-- Select Gender --') {
                    isValid = false;
                    errorMessage = 'Please select a gender';
                }
                break;

            case 'city':
                if (fieldValue.length < 2) {
                    isValid = false;
                    errorMessage = 'City must be at least 2 characters';
                } else if (!/^[a-zA-Z\s'-]+$/.test(fieldValue)) {
                    isValid = false;
                    errorMessage = 'City should only contain letters and spaces';
                }
                break;

            case 'message':
                if (fieldValue.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters';
                } else if (fieldValue.length > 1000) {
                    isValid = false;
                    errorMessage = 'Message cannot exceed 1000 characters';
                }
                break;
        }
    }

    // Display error or clear it
    const errorElement = document.getElementById(`${fieldName}Error`);
    if (errorElement) {
        if (isValid) {
            field.classList.remove('error');
            errorElement.textContent = '';
        } else {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
        }
    }

    return isValid;
}

// ========== FORM SUBMISSION HANDLER ==========

function handleFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        mobile: document.getElementById('mobile'),
        gender: document.getElementById('gender'),
        city: document.getElementById('city'),
        message: document.getElementById('message')
    };

    // Validate all fields
    let allFieldsValid = true;
    for (let field in fields) {
        if (!validateField(fields[field])) {
            allFieldsValid = false;
        }
    }

    if (!allFieldsValid) {
        scrollToFirstError();
        return;
    }

    // All validations passed - show success message
    displaySuccessMessage(fields);

    // Increment submission count
    submissionCount++;
    updateSubmissionStats();

    // Reset form
    setTimeout(() => {
        contactForm.reset();
        Object.values(fields).forEach(field => {
            field.classList.remove('error');
        });
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.textContent = '';
        });
    }, 3000);
}

// ========== SUCCESS MESSAGE DISPLAY ==========

function displaySuccessMessage(fields) {
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    const subject = document.getElementById('subject').value || 'General Inquiry';

    // Create success message
    const message = `Thank you, ${fields.name.value}! Your message has been sent successfully. We will review your ${subject.toLowerCase()} and contact you at ${fields.email.value} within 24 hours.`;
    
    successText.textContent = message;
    successMessage.style.display = 'block';

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);

    // Log submission data (in real app, this would be sent to server)
    console.log('Form submitted with data:', {
        name: fields.name.value,
        email: fields.email.value,
        mobile: fields.mobile.value,
        gender: fields.gender.value,
        city: fields.city.value,
        subject: subject,
        message: fields.message.value,
        timestamp: new Date().toLocaleString()
    });
}

// ========== UPDATE SUBMISSION STATISTICS ==========

function updateSubmissionStats() {
    const totalSubmissions = document.getElementById('totalSubmissions');
    const todaySubmissions = document.getElementById('todaySubmissions');
    const formStatus = document.getElementById('formStatus');

    if (totalSubmissions) {
        totalSubmissions.textContent = submissionCount;
    }

    if (todaySubmissions) {
        // For demo purposes, we'll increment today's count
        const currentTodayCount = parseInt(todaySubmissions.textContent) || 0;
        todaySubmissions.textContent = currentTodayCount + 1;
    }

    if (formStatus) {
        formStatus.textContent = 'Submitted';
        formStatus.style.color = '#27ae60';
    }
}

// ========== UTILITY FUNCTIONS ==========

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function scrollToFirstError() {
    const firstError = document.querySelector('.error');
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
    }
}

// ========== PHONE NUMBER FORMATTING ==========

document.addEventListener('DOMContentLoaded', function() {
    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', function() {
            // Remove non-numeric characters
            let value = this.value.replace(/\D/g, '');
            
            // Format as user types
            if (value.length > 0) {
                if (value.length <= 3) {
                    this.value = value;
                } else if (value.length <= 7) {
                    this.value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    this.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
                }
            }
        });
    }
});

// ========== LOCAL STORAGE - SAVE FORM DATA ==========

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formFields = contactForm.querySelectorAll('input, select, textarea');

        // Load saved data on page load
        formFields.forEach(field => {
            const savedValue = localStorage.getItem(`form_${field.name}`);
            if (savedValue) {
                field.value = savedValue;
            }

            // Save field value to localStorage on change
            field.addEventListener('change', function() {
                localStorage.setItem(`form_${this.name}`, this.value);
            });
        });

        // Clear saved data on successful submission
        contactForm.addEventListener('submit', function() {
            if (document.getElementById('successMessage').style.display === 'block') {
                formFields.forEach(field => {
                    localStorage.removeItem(`form_${field.name}`);
                });
            }
        });
    }
});

// ========== ACTIVE NAV LINK INDICATOR ==========

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ========== SMOOTH SCROLL BEHAVIOR ==========

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target && href !== '#') {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========== FORM FIELD CHARACTER COUNT ==========

document.addEventListener('DOMContentLoaded', function() {
    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.addEventListener('input', function() {
            const charCount = this.value.length;
            const maxChars = 1000;
            
            // Optional: Add character counter display
            console.log(`Characters: ${charCount}/${maxChars}`);
        });
    }
});

// ========== PAGE LOAD ANIMATION ==========

window.addEventListener('load', function() {
    // Add fade-in animation to main content
    const main = document.querySelector('main');
    if (main) {
        main.style.animation = 'fadeIn 0.5s ease-in';
    }
});

// Fade-in keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ========== PERFORMANCE & ACCESSIBILITY ==========

// Preload critical resources
document.addEventListener('DOMContentLoaded', function() {
    // Add any performance-related code here
    console.log('Website loaded successfully');
});

// Log form accessibility
console.log('✓ Form validation complete');
console.log('✓ Mobile navigation implemented');
console.log('✓ DOM manipulation active');
console.log('✓ Local storage enabled');
