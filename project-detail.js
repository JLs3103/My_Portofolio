const projects = {
    profitly: {
        title: 'Profitly Application',
        image: 'assets/profitly.png',
        summary: 'Profitly is a personal finance management application designed to help users track income and expenses, monitor their balance and cash flow, set financial goals, analyze spending through interactive charts, and evaluate their overall financial health. The application also provides financial alerts, profile management, Indonesian and English localization, and light and dark themes.',
        role: 'I designed and developed Profitly as a cross-platform Flutter application. My work included building the user interface, implementing transaction and financial goal management, integrating the local SQLite database, developing financial calculations and alerts, adding localization and theme support, and implementing profile and password-management features.',
        features: [
            'Financial dashboard: Displays balance, income, expenses, cash flow, financial targets, and money health score.',
            'Transaction management: Allows users to record, view, and analyze income and expenses.',
            'Financial targets: Helps users create savings goals, set deadlines, and monitor progress.',
            'Financial alerts: Provides insights about spending changes and estimated cash flow sustainability.',
            'Charts and progress indicators: Visualizes financial data using interactive charts and progress indicators.',
            'User profile and security: Supports profile updates, profile images, login, and password changes.',
            'Localization and themes: Supports Indonesian and English languages, as well as light and dark modes.'
        ],
        challenges: 'One of the main challenges was organizing financial data for multiple users while keeping transactions, balances, and targets consistent across the application. This was addressed by using a user-specific SQLite database structure with schema migrations and reusable database helper methods. Another challenge was keeping dashboard data synchronized after transactions or targets changed, which was handled through shared application notifiers and automatic data refreshes.',
        outcome: 'The project resulted in a functional local personal finance application with transaction tracking, financial goal monitoring, interactive data visualization, financial alerts, and rule-based financial health analysis. Through this project, I gained practical experience in Flutter application development, local database design, state synchronization, data visualization, localization, and responsive user interface implementation. Future improvements may include cloud synchronization, database encryption, online authentication, and a remote backend service.',
        technologies: [
            'Flutter',
            'Dart',
            'SQLite',
            'Kotlin',
            'C++',
            'Android Gradle'
        ],
        repository: 'https://github.com/JLs3103/profitly'
    },
    'password-shield': {
        title: 'Password Shield',
        image: 'assets/password_shield.png',
        summary: 'Password Shield helps users evaluate password strength and check whether credentials have appeared in known data breaches.',
        role: 'I designed and developed Password Shield as a client-side web application. My work included building the password analysis interface, integrating password strength evaluation with zxcvbn, implementing secure password generation with the Web Crypto API, connecting the breach checker to the Have I Been Pwned API, and creating responsive tab-based interactions using JavaScript and Tailwind CSS.',
        features: [
            'Password strength analysis: Evaluates password strength and provides a score, description, and visual strength indicator.',
            'Crack-time estimation: Displays estimated online and offline attack times based on the password analysis.',
            'Security suggestions: Provides feedback about password weaknesses and recommendations for improvement.',
            'Data breach checking: Checks whether a password has appeared in known breaches through the Have I Been Pwned API.',
            'K-anonymity protection: Uses SHA-1 hashing and sends only a partial hash prefix during breach checks to avoid transmitting the complete password.',
            'Secure password generator: Generates random passwords with configurable length and character types.',
            'Password customization: Supports uppercase letters, lowercase letters, numbers, and symbols.',
            'Clipboard functionality: Allows generated passwords to be copied directly to the clipboard.',
            'Responsive interface: Provides a responsive security dashboard with separate password analysis and generator tabs.'
        ],
        challenges: 'One of the main challenges was implementing breach detection without exposing the user password to an external service. This was addressed by hashing the password locally with the Web Crypto API and using the Have I Been Pwned k-anonymity range API, which only requires sending the first five characters of the hash. Another challenge was generating passwords with sufficient randomness while ensuring that selected character types were included, which was handled using cryptographically secure random values, guaranteed character selection, and password shuffling. The application also needed to provide useful security feedback without storing or sending user passwords unnecessarily.',
        outcome: 'The project resulted in a functional browser-based password security tool that combines password strength analysis, crack-time estimation, security recommendations, data breach detection, and secure password generation. Through this project, I gained practical experience in JavaScript component design, client-side cryptography, secure random value generation, API integration, k-anonymity, responsive interface development, and privacy-focused application design. Future improvements may include password history warnings, stronger accessibility support, additional password generation rules, offline support, and automated security testing.',
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        repository: 'https://github.com/JLs3103/PasswordShield'
    },
    budgify: {
        title: 'Budgify',
        image: 'assets/budgify.png',
        summary: 'Budgify is a containerized personal budgeting web application that helps users manage income and expenses, calculate their current balance, organize transactions by category, and review financial activity through a simple dashboard.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Docker'],
        repository: 'https://github.com/JLs3103/budgify',
        role: 'I designed and developed Budgify as a full-stack budgeting web application. My work included creating the responsive frontend interface, implementing income and expense transaction management, developing balance and category calculations, adding transaction filtering and sorting, building user registration and login functionality, integrating the Flask backend with SQLite, implementing password hashing, and containerizing the application with Docker.',
        features: [
            'Budget dashboard: Displays the current total balance and separates income and expense information.',
            'Transaction management: Allows users to add, edit, and delete income and expense transactions with descriptions, dates, amounts, and categories.',
            'Income and expense categories: Organizes financial activity into predefined categories and displays category-based totals in the sidebar.',
            'Transaction filtering and sorting: Supports sorting transactions by date, transaction type, and category name.',
            'User authentication: Provides user registration and login functionality using email and password credentials.',
            'Input validation: Validates required fields, password length, password confirmation, and unique usernames and email addresses.',
            'Responsive interface: Provides a clean budgeting dashboard with popups, forms, navigation controls, and visual indicators for income, expenses, and negative balances.',
            'Containerized deployment: Uses Docker to package and run the Flask backend and frontend application.'
        ],
        challenges: 'One of the main challenges was coordinating the budgeting interface with financial calculations while keeping income, expenses, category totals, and the displayed balance synchronized after transactions were added, edited, or deleted. This was addressed by centralizing transaction state in JavaScript and updating the balance and category summaries whenever the transaction list changed. Another challenge was implementing user authentication across the frontend and backend, which was handled through Flask API endpoints, SQLite database models, CORS configuration, and Werkzeug password hashing. The application was also structured for containerized execution to simplify local setup and deployment.',
        outcome: 'The project resulted in a functional containerized personal budgeting web application with transaction management, balance calculation, category summaries, filtering, sorting, registration, and login features. Through this project, I gained practical experience in full-stack web development, Flask API design, SQLite database integration, client-side state management, form validation, password security, responsive interface development, and Docker-based application deployment. Future improvements may include persistent transaction records for each user, session-based authentication, financial analytics, charts, budget goals, and cloud deployment.'
    },
    'finance-manager': {
        title: 'Finance Manager',
        image: 'assets/finance_manager.png',
        summary: 'Finance Manager is a Flutter application for recording personal transactions, viewing transaction history, and reviewing basic income and expense summaries through a simple budgeting interface.',
        role: 'I designed and developed Finance Manager as a Flutter application. My work included creating the application structure, building the transaction input form, implementing transaction history, developing the budget overview screen, designing reusable transaction and budget widgets, and organizing the application using models, services, screens, and widgets.',
        features: [
            'Transaction management: Allows users to add transactions with a title, amount, unique identifier, and date.',
            'Transaction history: Displays recorded transactions in a structured list with titles, dates, and formatted amounts.',
            'Budget overview: Shows total income and total expenses through a dedicated budget summary screen.',
            'Navigation: Provides separate screens for adding transactions, viewing history, and checking the budget overview.',
            'Reusable components: Uses reusable models, services, and widgets to organize transaction and budget functionality.',
            'Cross-platform interface: Built with Flutter and Dart for a consistent application experience across supported platforms.'
        ],
        challenges: 'One of the main challenges was organizing transaction and budget functionality into a clear application structure while keeping the screens easy to navigate. This was addressed by separating the application into data models, services, screens, and reusable widgets. Another challenge was managing transaction data between screens, which was handled through a shared transaction service that stores and provides access to recorded transactions.',
        outcome: 'The project resulted in a functional personal finance management application with transaction recording, transaction history, and budget overview features. Through this project, I gained practical experience in Flutter application development, Dart programming, screen navigation, reusable widget creation, basic state management, data modeling, and service-based application organization. Future improvements may include persistent database storage, transaction categories, income and expense types, editable and deletable transactions, dynamic budget calculations, charts, and financial summaries.',
        technologies: ['Dart', 'Flutter'],
        repository: 'https://github.com/JLs3103/Finance-Manager'
    },
    'simple-enrollment': {
        title: 'Simple President University Enrollment',
        image: 'assets/simple_president_university_enrollment.png',
        summary: 'Simple President University Enrollment is an Android application that provides a straightforward course enrollment workflow for President University students, including account authentication, course selection, credit calculation, and enrollment summary review.',
        role: 'I designed and developed the Android application using Java and XML. My work included creating the login and registration screens, integrating Firebase Authentication, building the course enrollment interface with selectable courses, implementing credit calculation and enrollment validation, and developing the enrollment summary screen.',
        features: [
            'User authentication: Allows users to register and log in using email and password authentication.',
            'Enrollment dashboard: Provides access to the President University enrollment workflow from the main screen.',
            'Course selection: Displays available courses with their corresponding SKS credits using a scrollable list and checkboxes.',
            'Credit calculation: Automatically calculates and displays the total SKS based on the selected courses.',
            'Enrollment validation: Prevents users from submitting an enrollment with more than 24 SKS.',
            'Enrollment summary: Shows the selected courses and the total number of SKS after submission.',
            'Navigation flow: Provides navigation between authentication, main menu, enrollment, and summary screens.'
        ],
        challenges: 'One of the main challenges was keeping the selected course data and total credit calculation synchronized while users interacted with the RecyclerView list. This was addressed by using a Course model with selection state, a custom RecyclerView adapter, and centralized credit calculation in the enrollment activity. Another challenge was validating the maximum credit limit before submission, which was handled through clear validation logic and user feedback using Toast messages.',
        outcome: 'The project resulted in a functional Android enrollment application that supports user authentication, course selection, SKS calculation, enrollment validation, and summary review. Through this project, I gained practical experience in Android activity navigation, Java-based UI logic, XML layout design, RecyclerView implementation, Firebase Authentication integration, state management, and input validation. Future improvements may include storing enrollment records in a database, adding student profile information, and supporting enrollment history.',
        technologies: ['Java', 'XML'],
        repository: 'https://github.com/JLs3103/Simple-President-University-Enrollment'
    }
};

const project = projects[new URLSearchParams(window.location.search).get('project')];

if (!project) {
    window.location.replace('index.html#projects');
} else {
    document.title = `${project.title} - Joan Lase`;
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-image').alt = project.title;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-summary').textContent = project.summary;
    document.getElementById('project-repository').href = project.repository;

    const technologyContainer = document.getElementById('project-technologies');
    project.technologies.forEach(technology => {
        const tag = document.createElement('span');
        tag.className = 'px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium';
        tag.textContent = technology;
        technologyContainer.appendChild(tag);
    });

    const placeholders = {
        role: 'Template: explain your responsibilities, the parts you built, and how you contributed to this project.',
        features: ['Template: describe the most important user-facing features and how they work.'],
        challenges: 'Template: describe the main technical or design problem and how you solved it.',
        outcome: 'Template: describe the result, what you learned, and what you would improve next.'
    };

    ['role', 'features', 'challenges', 'outcome'].forEach(field => {
        const content = project[field] || placeholders[field];
        const container = document.getElementById(`project-${field}`);

        if (Array.isArray(content)) {
            const list = document.createElement('ul');
            list.className = 'list-disc list-inside space-y-2 text-gray-500 leading-relaxed';
            content.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                list.appendChild(listItem);
            });
            container.replaceWith(list);
        } else {
            container.textContent = content;
        }
    });
}