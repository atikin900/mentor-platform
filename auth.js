// Функция для инициализации администратора
function initializeAdmin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.some(user => user.isAdmin);
    
    if (!adminExists) {
        const adminUser = {
            name: 'Администратор',
            login: 'admin',
            email: 'admin@admin.com',
            password: 'admin',
            isAdmin: true
        };
        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Функция для проверки авторизации
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const header = document.querySelector('.header');
    
    if (currentUser) {
        // Если пользователь авторизован
        header.innerHTML = `
            <div class="header__container">
                <a href="/" class="header__logo">
                    <img src="logo.svg" alt="Логотип" class="header__logo-img">
                </a>
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li class="header__nav-item">
                            <a href="#about" class="header__nav-link">О нас</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#courses" class="header__nav-link">Курсы</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#contacts" class="header__nav-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="header__user">
                    <div class="user-profile">
                        <span class="user-profile__name">${currentUser.name}</span>
                        <div class="user-profile__menu">
                            ${currentUser.isAdmin ? `
                                <button onclick="showUsersManagement()" class="user-profile__menu-item">Управление пользователями</button>
                                <button onclick="showCoursesManagement()" class="user-profile__menu-item">Управление курсами</button>
                                <button onclick="showStatistics()" class="user-profile__menu-item">Статистика</button>
                            ` : ''}
                            <button onclick="showUserProfile()" class="user-profile__menu-item">Мой профиль</button>
                            <button onclick="showUserCourses()" class="user-profile__menu-item">Мои курсы</button>
                            <button onclick="logout()" class="user-profile__menu-item">Выйти</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Если пользователь не авторизован
        header.innerHTML = `
            <div class="header__container">
                <a href="/" class="header__logo">
                    <img src="logo.svg" alt="Логотип" class="header__logo-img">
                </a>
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li class="header__nav-item">
                            <a href="#about" class="header__nav-link">О нас</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#courses" class="header__nav-link">Курсы</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#contacts" class="header__nav-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="header__auth">
                    <button onclick="showLoginModal()" class="header__auth-btn">Войти</button>
                    <button onclick="showRegisterModal()" class="header__auth-btn">Регистрация</button>
                </div>
            </div>
        `;
    }
}

// Функция для показа модального окна входа
function showLoginModal() {
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Вход</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                <form class="Modal_form" id="loginForm">
                    <div class="Modal_form_group">
                        <label for="loginEmail">Email или логин</label>
                        <input type="text" id="loginEmail" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="loginPassword">Пароль</label>
                        <input type="password" id="loginPassword" required>
                    </div>
                    <div class="Modal_actions">
                        <button type="submit" class="Modal_button Modal_button_primary">Войти</button>
                        <button type="button" class="Modal_button" onclick="showRegisterModal()">Регистрация</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик формы
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailOrLogin = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => (u.email === emailOrLogin || u.login === emailOrLogin) && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            modal.remove();
            checkAuth();
        } else {
            alert('Неверный email/логин или пароль');
        }
    });
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Функция для показа модального окна регистрации
function showRegisterModal() {
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Регистрация</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                <form class="Modal_form" id="registerForm">
                    <div class="Modal_form_group">
                        <label for="registerName">Имя</label>
                        <input type="text" id="registerName" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="registerLogin">Логин</label>
                        <input type="text" id="registerLogin" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="registerEmail">Email</label>
                        <input type="email" id="registerEmail" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="registerPassword">Пароль</label>
                        <input type="password" id="registerPassword" required>
                    </div>
                    <div class="Modal_actions">
                        <button type="submit" class="Modal_button Modal_button_primary">Зарегистрироваться</button>
                        <button type="button" class="Modal_button" onclick="showLoginModal()">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик формы
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const login = document.getElementById('registerLogin').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.some(u => u.email === email)) {
            alert('Пользователь с таким email уже существует');
            return;
        }
        if (users.some(u => u.login === login)) {
            alert('Пользователь с таким логином уже существует');
            return;
        }
        
        const newUser = {
            name,
            login,
            email,
            password,
            isAdmin: false
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        modal.remove();
        checkAuth();
    });
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Функция для выхода
function logout() {
    localStorage.removeItem('currentUser');
    checkAuth();
}

// Функция для показа профиля пользователя
function showUserProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Мой профиль</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                <div class="user-profile-info">
                    <p><strong>Имя:</strong> ${currentUser.name}</p>
                    <p><strong>Логин:</strong> ${currentUser.login}</p>
                    <p><strong>Email:</strong> ${currentUser.email}</p>
                    <p><strong>Роль:</strong> ${currentUser.isAdmin ? 'Администратор' : 'Пользователь'}</p>
                </div>
                <div class="Modal_actions">
                    <button class="Modal_button" onclick="this.closest('.Modal_overlay').remove()">Закрыть</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Функция для показа курсов пользователя
function showUserCourses() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    const courses = JSON.parse(localStorage.getItem('courses') || '[]');
    const userCourses = courses.filter(course => course.students.includes(currentUser.email));
    
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Мои курсы</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                ${userCourses.length > 0 ? `
                    <div class="courses-list">
                        ${userCourses.map(course => `
                            <div class="course-card">
                                <h3>${course.title}</h3>
                                <p>${course.description}</p>
                                <p><strong>Дата начала:</strong> ${course.startDate}</p>
                                <p><strong>Длительность:</strong> ${course.duration}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p>У вас пока нет записей на курсы</p>'}
                <div class="Modal_actions">
                    <button class="Modal_button" onclick="this.closest('.Modal_overlay').remove()">Закрыть</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Функция для показа модального окна "Стать наставником"
function showBecomeMentorModal() {
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Стать наставником</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                <form class="Modal_form" id="becomeMentorForm">
                    <div class="Modal_form_group">
                        <label for="mentorName">Ваше имя</label>
                        <input type="text" id="mentorName" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="mentorEmail">Email</label>
                        <input type="email" id="mentorEmail" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="mentorPhone">Телефон</label>
                        <input type="tel" id="mentorPhone" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="mentorExperience">Опыт работы</label>
                        <textarea id="mentorExperience" required></textarea>
                    </div>
                    <div class="Modal_form_group">
                        <label for="mentorSpecialization">Специализация</label>
                        <input type="text" id="mentorSpecialization" required>
                    </div>
                    <div class="Modal_actions">
                        <button type="submit" class="Modal_button Modal_button_primary">Отправить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик формы
    document.getElementById('becomeMentorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        modal.remove();
    });
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Функция для показа модального окна "Найти наставника"
function showFindMentorModal() {
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Найти наставника</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                <form class="Modal_form" id="findMentorForm">
                    <div class="Modal_form_group">
                        <label for="menteeName">Ваше имя</label>
                        <input type="text" id="menteeName" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="menteeEmail">Email</label>
                        <input type="email" id="menteeEmail" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="menteePhone">Телефон</label>
                        <input type="tel" id="menteePhone" required>
                    </div>
                    <div class="Modal_form_group">
                        <label for="menteeGoals">Ваши цели</label>
                        <textarea id="menteeGoals" required></textarea>
                    </div>
                    <div class="Modal_form_group">
                        <label for="menteePreferredTime">Предпочтительное время для занятий</label>
                        <input type="text" id="menteePreferredTime" required>
                    </div>
                    <div class="Modal_actions">
                        <button type="submit" class="Modal_button Modal_button_primary">Отправить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик формы
    document.getElementById('findMentorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за заявку! Мы подберем подходящего наставника и свяжемся с вами.');
        modal.remove();
    });
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Функция для прокрутки к секции "О нас"
function scrollToAbout() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция для показа доступных курсов
function showAvailableCourses() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const courses = JSON.parse(localStorage.getItem('courses') || '[]');
    
    const modal = document.createElement('div');
    modal.className = 'Modal_overlay';
    modal.innerHTML = `
        <div class="Modal_content">
            <div class="Modal_header">
                <h2 class="Modal_title">Доступные курсы</h2>
                <button class="Modal_close">&times;</button>
            </div>
            <div class="Modal_body">
                ${courses.length > 0 ? `
                    <div class="courses-list">
                        ${courses.map(course => `
                            <div class="course-card">
                                <h3>${course.title}</h3>
                                <p>${course.description}</p>
                                <p><strong>Дата начала:</strong> ${course.startDate}</p>
                                <p><strong>Длительность:</strong> ${course.duration}</p>
                                <button class="Modal_button Modal_button_primary enroll-button" data-course-id="${course.id}">
                                    Записаться
                                </button>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p>В данный момент нет доступных курсов</p>'}
                <div class="Modal_actions">
                    <button class="Modal_button" onclick="this.closest('.Modal_overlay').remove()">Закрыть</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Обработчик закрытия
    const closeButton = modal.querySelector('.Modal_close');
    closeButton.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация администратора
    initializeAdmin();
    
    // Проверка авторизации
    checkAuth();
    
    // Обработчики для кнопок с атрибутами data-modal
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            
            switch(modalType) {
                case 'become-mentor':
                case 'become-mentor-form':
                    showBecomeMentorModal();
                    break;
                case 'find-mentor':
                case 'find-mentor-form':
                    showFindMentorModal();
                    break;
                case 'what-is-mentoring':
                    scrollToAbout();
                    break;
            }
        });
    });
    
    // Обработчики для кнопок "Пройти курс"
    document.querySelectorAll('.Button_button__KOYeE.Button_primary-outline-button__26Y1Y').forEach(button => {
        if (button.textContent === 'Пройти курс') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showAvailableCourses();
            });
        }
    });
    
    // Обработчики для кнопок записи на курсы
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('enroll-button')) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                showLoginModal();
                return;
            }
            
            const courseId = e.target.getAttribute('data-course-id');
            const courses = JSON.parse(localStorage.getItem('courses') || '[]');
            const course = courses.find(c => c.id === courseId);
            
            if (course) {
                if (!course.students.includes(currentUser.email)) {
                    course.students.push(currentUser.email);
                    localStorage.setItem('courses', JSON.stringify(courses));
                    alert('Вы успешно записались на курс!');
                } else {
                    alert('Вы уже записаны на этот курс');
                }
            }
        }
    });
}); 