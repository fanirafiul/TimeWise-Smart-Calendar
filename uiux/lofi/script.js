// TimeWise - Lofi UI/UX JavaScript

// Calendar functionality
function initCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    updateCalendar(currentMonth, currentYear);
}

function updateCalendar(month, year) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Update month/year display
    const monthYearElement = document.querySelector('.calendar-month');
    if (monthYearElement) {
        monthYearElement.textContent = `${monthNames[month]} ${year}`;
    }
    
    // Generate calendar days
    const calendarGrid = document.querySelector('.calendar-grid');
    if (calendarGrid) {
        calendarGrid.innerHTML = '';
        
        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-day-header';
            header.textContent = day;
            calendarGrid.appendChild(header);
        });
        
        // Add empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            const isToday = today.getDate() === day && 
                          today.getMonth() === month && 
                          today.getFullYear() === year;
            
            if (isToday) {
                dayElement.classList.add('today');
            }
            
            // Random events for demo
            if (Math.random() > 0.7) {
                dayElement.classList.add('has-events');
                const eventDot = document.createElement('div');
                eventDot.className = 'event-dot';
                dayElement.appendChild(eventDot);
            }
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayElement.appendChild(dayNumber);
            
            dayElement.addEventListener('click', () => {
                alert(`Selected date: ${monthNames[month]} ${day}, ${year}`);
            });
            
            calendarGrid.appendChild(dayElement);
        }
    }
}

// Navigation handlers
function prevMonth() {
    const monthElement = document.querySelector('.calendar-month');
    if (!monthElement) return;
    
    const [month, year] = monthElement.textContent.split(' ');
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
    const newDate = new Date(year, monthIndex - 1, 1);
    updateCalendar(newDate.getMonth(), newDate.getFullYear());
}

function nextMonth() {
    const monthElement = document.querySelector('.calendar-month');
    if (!monthElement) return;
    
    const [month, year] = monthElement.textContent.split(' ');
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
    const newDate = new Date(year, monthIndex + 1, 1);
    updateCalendar(newDate.getMonth(), newDate.getFullYear());
}

// Form handlers
function handleFormSubmit(formId, event) {
    event.preventDefault();
    const form = document.getElementById(formId);
    if (form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        alert('Form submitted successfully! (Check console for data)');
        return false;
    }
    return false;
}

// Export handleFormSubmit for use in HTML
window.handleFormSubmit = handleFormSubmit;

// Task toggle
function toggleTask(checkbox) {
    const taskItem = checkbox.closest('.task-item');
    if (taskItem) {
        if (checkbox.checked) {
            taskItem.classList.add('task-completed');
        } else {
            taskItem.classList.remove('task-completed');
        }
    }
}

// Tab switching
function switchTab(tabElement) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabElement.classList.add('active');
    
    // Show/hide content based on tab
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => {
        content.style.display = 'none';
    });
    
    const targetContent = document.querySelector(`#${tabElement.dataset.target}`);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
}

// Notification actions
function markAsRead(notificationElement) {
    notificationElement.style.opacity = '0.6';
    notificationElement.style.backgroundColor = 'var(--bg-light)';
}

function addComment(commentText) {
    if (!commentText.trim()) return;
    
    const commentList = document.querySelector('.comment-list');
    if (commentList) {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <div class="comment-author">You</div>
            <div class="comment-text">${commentText}</div>
            <div class="comment-time">Just now</div>
        `;
        commentList.appendChild(commentItem);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize calendar if exists
    if (document.querySelector('.calendar-grid')) {
        initCalendar();
    }
    
    // Setup form handlers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            handleFormSubmit(form.id, e);
        });
    });
    
    // Setup task checkboxes
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            toggleTask(checkbox);
        });
    });
    
    // Setup tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab);
        });
    });
    
    // Setup comment form
    const commentForms = document.querySelectorAll('.comment-input form');
    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="text"]');
            if (input) {
                addComment(input.value);
                input.value = '';
            }
        });
    });
});

// Export functions for use in HTML
window.TimeWise = {
    prevMonth,
    nextMonth,
    toggleTask,
    switchTab,
    markAsRead,
    addComment
};

