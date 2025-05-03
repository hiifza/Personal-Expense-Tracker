// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const appContainer = document.getElementById('app-container');
const themeSelection = document.getElementById('theme-selection');
const userTypeSelection = document.getElementById('user-type-selection');
const actionSelection = document.getElementById('action-selection');
const dataEntry = document.getElementById('data-entry');
const analysisPage = document.getElementById('analysis-page');
const viewData = document.getElementById('view-data');

// Buttons
const lightThemeBtn = document.getElementById('light-theme');
const darkThemeBtn = document.getElementById('dark-theme');
const studentBtn = document.getElementById('student-btn');
const earnerBtn = document.getElementById('earner-btn');
const enterDataBtn = document.getElementById('enter-data-btn');
const viewDataBtn = document.getElementById('view-data-btn');
const editDataBtn = document.getElementById('edit-data-btn');
const nextToAnalysisBtn = document.getElementById('next-to-analysis');
const compareBtn = document.getElementById('compare-btn');
const goHomeFromAnalysisBtn = document.getElementById('go-home-from-analysis');
const goHomeFromViewBtn = document.getElementById('go-home-from-view');

// Form Elements
const userNameInput = document.getElementById('user-name');
const yearInput = document.getElementById('year');
const monthSelect = document.getElementById('month');
const incomeInput = document.getElementById('income');
const savingsGoalInput = document.getElementById('savings-goal');
const otherExpenseInput = document.getElementById('other-expense');
const expenseCategories = document.getElementById('expense-categories');
const incomeLabel = document.getElementById('income-label');

// Analysis Elements
const totalIncomeDisplay = document.getElementById('total-income');
const totalExpensesDisplay = document.getElementById('total-expenses');
const moneyLeftDisplay = document.getElementById('money-left');
const displaySavingsGoal = document.getElementById('display-savings-goal');
const finalAmountDisplay = document.getElementById('final-amount');
const savingsMessage = document.getElementById('savings-message');
const expenseChart = document.getElementById('expense-chart');
const suggestionsContent = document.getElementById('suggestions-content');

// Chatbot Elements
const chatbotQuestions = document.getElementById('chatbot-questions');
const chatbotResponse = document.getElementById('chatbot-response');

// Records List
const recordsList = document.getElementById('records-list');

// Audio Elements
const clickSound = document.getElementById('click-sound');
const successSound = document.getElementById('success-sound');

// App State
let currentUserType = '';
let currentTheme = 'light';
let currentData = {
    name: '',
    year: '',
    month: '',
    type: '',
    income: 0,
    savingsGoal: 0,
    expenses: {},
    otherExpense: 0
};

// Expense Categories
const studentCategories = [
    { id: 'food', label: 'Food 🍔' },
    { id: 'travel', label: 'Travel 🚗' },
    { id: 'shopping', label: 'Shopping 🛍️' },
    { id: 'education', label: 'Education 📚' },
    { id: 'entertainment', label: 'Entertainment 🎮' },
    { id: 'recharge', label: 'Recharge 📱' }
];

const earnerCategories = [
    { id: 'food', label: 'Food 🍔' },
    { id: 'travel', label: 'Travel 🚗' },
    { id: 'rent', label: 'Rent 🏠' },
    { id: 'electricity', label: 'Electricity 💡' },
    { id: 'water', label: 'Water 🚿' },
    { id: 'internet', label: 'Internet 🌐' },
    { id: 'phone', label: 'Phone 📞' },
    { id: 'entertainment', label: 'Entertainment 🎮' },
    { id: 'investments', label: 'Investments 📈' },
    { id: 'shopping', label: 'Shopping 🛍️' },
    { id: 'insurance', label: 'Insurance 🛡️' },
    { id: 'emis', label: 'EMIs 💰' },
    { id: 'subscriptions', label: 'Subscriptions 📺' }
];

// Chatbot Questions and Answers
const studentQuestions = [
    {
        question: "How can I save money as a student?",
        answers: [
            "Try preparing meals at home instead of eating out to save on food expenses.",
            "Use student discounts whenever possible - many places offer them!",
            "Share textbooks with classmates or use library resources to cut costs.",
            "Track your small daily expenses - they add up quickly!",
            "Set a weekly spending limit and stick to it."
        ]
    },
    {
        question: "What's the best way to budget my pocket money?",
        answers: [
            "Follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings.",
            "Prioritize essential expenses first, then allocate for fun activities.",
            "Use budgeting apps to track where your money goes each month.",
            "Divide your monthly allowance by weeks to avoid overspending early.",
            "Always set aside at least 10% for unexpected expenses."
        ]
    },
    {
        question: "How much should I save from my pocket money?",
        answers: [
            "Aim to save at least 20% of your monthly pocket money.",
            "Start with whatever you can, even 5-10%, and increase gradually.",
            "Save enough to cover at least one month's expenses as emergency fund.",
            "It depends on your goals - save more if you're planning a big purchase.",
            "Try to save 30% if you can, but any amount is better than nothing!"
        ]
    },
    {
        question: "What are common money mistakes students make?",
        answers: [
            "Overspending on food delivery and eating out frequently.",
            "Buying brand new textbooks when used ones are available.",
            "Not tracking small expenses that add up over time.",
            "Impulse shopping during sales or peer pressure situations.",
            "Not taking advantage of student discounts and free campus resources."
        ]
    },
    {
        question: "How can I earn extra money as a student?",
        answers: [
            "Offer tutoring in subjects you're good at to other students.",
            "Take up part-time jobs like library assistant or campus rep.",
            "Sell notes or study guides you've created for difficult courses.",
            "Participate in paid surveys or market research studies.",
            "Offer freelance services like graphic design or content writing."
        ]
    },
    {
        question: "Should I get a credit card as a student?",
        answers: [
            "Only if you're confident you can pay the balance in full each month.",
            "A secured credit card can help build credit if used responsibly.",
            "Avoid it unless absolutely necessary - it's easy to accumulate debt.",
            "Consider a debit card first to learn spending discipline.",
            "If you get one, set a low limit and track all purchases carefully."
        ]
    },
    {
        question: "How can I reduce my food expenses?",
        answers: [
            "Meal prep on weekends to avoid expensive last-minute meals.",
            "Buy groceries in bulk with roommates to save money.",
            "Take advantage of free food events on campus when available.",
            "Limit eating out to special occasions only.",
            "Learn to cook simple, nutritious meals at home."
        ]
    },
    {
        question: "What are good saving goals for students?",
        answers: [
            "Save for an emergency fund covering 3 months of expenses.",
            "Set aside money for professional development like certifications.",
            "Save for a meaningful experience like studying abroad.",
            "Build savings for post-graduation relocation costs.",
            "Start saving for future investments like a laptop upgrade."
        ]
    },
    {
        question: "How can I avoid impulse spending?",
        answers: [
            "Implement a 24-hour rule before making non-essential purchases.",
            "Unsubscribe from marketing emails that tempt you to spend.",
            "Carry limited cash and leave payment cards at home when possible.",
            "Track all purchases to become more aware of spending habits.",
            "Find free alternatives to paid activities you enjoy."
        ]
    },
    {
        question: "What free resources can help me manage money?",
        answers: [
            "Use budgeting apps like Mint or personal finance templates.",
            "Attend financial literacy workshops offered by your school.",
            "Read personal finance blogs geared toward students.",
            "Check out finance books from your campus library.",
            "Follow reputable financial advisors on social media for tips."
        ]
    }
];

const earnerQuestions = [
    {
        question: "How much of my income should I save each month?",
        answers: [
            "Aim to save at least 20% of your take-home pay.",
            "Follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings.",
            "Start with 10% if 20% seems difficult, and increase gradually.",
            "Save enough to build a 3-6 month emergency fund first.",
            "It depends on your goals - retirement, house, etc. - but save consistently."
        ]
    },
    {
        question: "What's the best way to reduce monthly bills?",
        answers: [
            "Negotiate with service providers for better rates.",
            "Bundle services like internet and TV for discounts.",
            "Switch to energy-efficient appliances to lower utility bills.",
            "Review subscriptions regularly and cancel unused services.",
            "Consider refinancing loans to get lower interest rates."
        ]
    },
    {
        question: "How can I create an effective budget?",
        answers: [
            "Track all expenses for a month to understand spending patterns.",
            "Use the 50-30-20 rule as a starting framework.",
            "Automate savings and bill payments to stay disciplined.",
            "Use budgeting apps that sync with your accounts.",
            "Review and adjust your budget monthly based on actual spending."
        ]
    },
    {
        question: "What are common budgeting mistakes to avoid?",
        answers: [
            "Not accounting for irregular expenses like car maintenance.",
            "Setting unrealistic spending limits that are hard to maintain.",
            "Forgetting to include fun money - deprivation leads to splurges.",
            "Not adjusting the budget when income or expenses change.",
            "Failing to track small daily expenses that add up."
        ]
    },
    {
        question: "How much should I spend on housing?",
        answers: [
            "Ideally no more than 30% of your gross monthly income.",
            "In high-cost areas, up to 40% may be acceptable.",
            "Consider roommates to reduce housing costs if possible.",
            "Factor in utilities and maintenance when calculating costs.",
            "Weigh commute costs against cheaper housing farther away."
        ]
    },
    {
        question: "What's the best way to pay off debt?",
        answers: [
            "Use the avalanche method: pay highest interest debts first.",
            "Or use the snowball method: pay smallest balances first for motivation.",
            "Consolidate debts if you can get a lower interest rate.",
            "Pay more than minimums whenever possible.",
            "Stop using credit cards while paying them down."
        ]
    },
    {
        question: "How can I save money on groceries?",
        answers: [
            "Plan meals weekly and shop with a list to avoid impulse buys.",
            "Buy store brands instead of name brands for many items.",
            "Shop sales and use coupons strategically for items you need.",
            "Buy non-perishables in bulk when prices are good.",
            "Consider joining a wholesale club if the savings justify the fee."
        ]
    },
    {
        question: "What are smart ways to reduce taxes?",
        answers: [
            "Maximize contributions to retirement accounts like 401(k)s.",
            "Take advantage of all available deductions and credits.",
            "Consider health savings accounts if eligible.",
            "Donate to charity for potential deductions.",
            "Consult a tax professional for personalized strategies."
        ]
    },
    {
        question: "How much should I have in emergency savings?",
        answers: [
            "Aim for 3-6 months of essential living expenses.",
            "Start with a $1,000 mini-emergency fund if starting from zero.",
            "Save more (6-12 months) if you're self-employed or in an unstable industry.",
            "Keep emergency funds in a separate, easily accessible account.",
            "Replenish the fund immediately after using it."
        ]
    },
    {
        question: "What's the best way to invest extra money?",
        answers: [
            "First pay off high-interest debt (over 6-7% interest).",
            "Maximize retirement account contributions before taxable investing.",
            "Consider low-cost index funds for long-term growth.",
            "Diversify across asset classes based on your risk tolerance.",
            "Consult a financial advisor for personalized investment advice."
        ]
    }
];

// Initialize the app
function initApp() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('expenseTrackerTheme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Hide splash screen after delay
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        appContainer.classList.remove('hidden');
        playSound(clickSound);
    }, 4000);
}

// Set up event listeners
function setupEventListeners() {
    // Theme selection
    lightThemeBtn.addEventListener('click', () => {
        setTheme('light');
        playSound(clickSound);
        setTimeout(() => {
            themeSelection.classList.add('hidden');
            userTypeSelection.classList.remove('hidden');
        }, 300);
    });
    
    darkThemeBtn.addEventListener('click', () => {
        setTheme('dark');
        playSound(clickSound);
        setTimeout(() => {
            themeSelection.classList.add('hidden');
            userTypeSelection.classList.remove('hidden');
        }, 300);
    });
    
    // User type selection
    studentBtn.addEventListener('click', () => {
        currentUserType = 'student';
        playSound(clickSound);
        setTimeout(() => {
            userTypeSelection.classList.add('hidden');
            showActionSelection();
        }, 300);
    });
    
    earnerBtn.addEventListener('click', () => {
        currentUserType = 'earner';
        playSound(clickSound);
        setTimeout(() => {
            userTypeSelection.classList.add('hidden');
            showActionSelection();
        }, 300);
    });
    
    // Action selection
    enterDataBtn.addEventListener('click', () => {
        if (validateActionSelection()) {
            playSound(clickSound);
            currentData.name = userNameInput.value;
            currentData.year = yearInput.value;
            currentData.month = monthSelect.value;
            currentData.type = currentUserType;
            
            actionSelection.classList.add('hidden');
            showDataEntryForm();
        }
    });
    
    viewDataBtn.addEventListener('click', () => {
        if (validateActionSelection()) {
            playSound(clickSound);
            currentData.name = userNameInput.value;
            currentData.year = yearInput.value;
            
            actionSelection.classList.add('hidden');
            showViewData();
        }
    });
    
    editDataBtn.addEventListener('click', () => {
        if (validateActionSelection()) {
            playSound(clickSound);
            currentData.name = userNameInput.value;
            currentData.year = yearInput.value;
            currentData.month = monthSelect.value;
            
            actionSelection.classList.add('hidden');
            loadDataForEditing();
        }
    });
    
    // Data entry
    nextToAnalysisBtn.addEventListener('click', () => {
        if (validateDataEntry()) {
            playSound(clickSound);
            saveData();
            dataEntry.classList.add('hidden');
            showAnalysisPage();
        }
    });
    
    // Analysis page
    compareBtn.addEventListener('click', () => {
        playSound(clickSound);
        compareWithPreviousMonth();
    });
    
    goHomeFromAnalysisBtn.addEventListener('click', () => {
        playSound(clickSound);
        analysisPage.classList.add('hidden');
        resetActionSelection();
        actionSelection.classList.remove('hidden');
    });
    
    // View data page
    goHomeFromViewBtn.addEventListener('click', () => {
        playSound(clickSound);
        viewData.classList.add('hidden');
        resetActionSelection();
        actionSelection.classList.remove('hidden');
    });
    
    // Chatbot
    chatbotQuestions.addEventListener('change', () => {
        if (chatbotQuestions.value) {
            playSound(clickSound);
            showChatbotResponse();
        }
    });
}

// Set theme
function setTheme(theme) {
    currentTheme = theme;
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    localStorage.setItem('expenseTrackerTheme', theme);
}

// Show action selection
function showActionSelection() {
    actionSelection.classList.remove('hidden');
    resetActionSelection();
}

// Reset action selection form
function resetActionSelection() {
    userNameInput.value = '';
    yearInput.value = '';
    monthSelect.value = '';
}

// Validate action selection
function validateActionSelection() {
    if (!userNameInput.value.trim()) {
        alert('Please enter your name');
        return false;
    }
    
    if (!yearInput.value || isNaN(yearInput.value)) {
        alert('Please enter a valid year');
        return false;
    }
    
    // For edit and enter data, month is required
    if ((editDataBtn.contains(document.activeElement) || 
        enterDataBtn.contains(document.activeElement))) {
        if (!monthSelect.value) {
            alert('Please select a month');
            return false;
        }
    }

    
    return true;
}


// Show data entry form
function showDataEntryForm() {
    // Set appropriate label
    incomeLabel.textContent = currentUserType === 'student' ? 'Pocket Money:' : 'Monthly Income:';
    
    // Clear previous categories
    expenseCategories.innerHTML = '';
    
    // Add appropriate categories
    const categories = currentUserType === 'student' ? studentCategories : earnerCategories;
    
    categories.forEach(category => {
        const categoryHTML = `
            <div class="expense-item">
                <label for="${category.id}">${category.label}</label>
                <input type="number" id="${category.id}" placeholder="Enter amount">
            </div>
        `;
        expenseCategories.innerHTML += categoryHTML;
    });
    
    // Reset form
    incomeInput.value = '';
    savingsGoalInput.value = '';
    otherExpenseInput.value = '';
    
    dataEntry.classList.remove('hidden');
}

// Validate data entry
function validateDataEntry() {
    if (!incomeInput.value || isNaN(incomeInput.value) || parseFloat(incomeInput.value) <= 0) {
        alert(`Please enter a valid ${currentUserType === 'student' ? 'pocket money' : 'income'} amount`);
        return false;
    }
    
    if (!savingsGoalInput.value || isNaN(savingsGoalInput.value) || parseFloat(savingsGoalInput.value) < 0) {
        alert('Please enter a valid savings goal (can be 0)');
        return false;
    }
    
    // Check if at least one expense is entered
    const categories = currentUserType === 'student' ? studentCategories : earnerCategories;
    let hasExpenses = false;
    
    if (otherExpenseInput.value && parseFloat(otherExpenseInput.value) > 0) {
        hasExpenses = true;
    } else {
        for (const category of categories) {
            const input = document.getElementById(category.id);
            if (input.value && parseFloat(input.value) > 0) {
                hasExpenses = true;
                break;
            }
        }
    }
    
    if (!hasExpenses) {
        alert('Please enter at least one expense');
        return false;
    }
    
    return true;
}

// Save data to localStorage
function saveData() {
    // Get all expense values
    const expenses = {};
    const categories = currentUserType === 'student' ? studentCategories : earnerCategories;
    
    categories.forEach(category => {
        const input = document.getElementById(category.id);
        expenses[category.id] = input.value ? parseFloat(input.value) : 0;
    });
    
    // Prepare data object
    const data = {
        name: currentData.name,
        year: currentData.year,
        month: currentData.month,
        type: currentUserType,
        income: parseFloat(incomeInput.value),
        savingsGoal: parseFloat(savingsGoalInput.value),
        expenses: expenses,
        otherExpense: otherExpenseInput.value ? parseFloat(otherExpenseInput.value) : 0,
        timestamp: new Date().getTime()
    };
    
    // Generate unique key
    const key = `${data.name}_${data.year}_${data.month}_${data.type}`;
    
    // Get existing data or create new
    let allData = JSON.parse(localStorage.getItem('expenseTrackerData')) || {};
    
    // Add new data
    allData[key] = data;
    
    // Save back to localStorage
    localStorage.setItem('expenseTrackerData', JSON.stringify(allData));
    
    // Update currentData
    currentData = {...data};
    
    playSound(successSound);
}

// Show analysis page
function showAnalysisPage() {
    // Calculate totals
    const totalIncome = currentData.income;
    const totalExpenses = calculateTotalExpenses();
    const moneyLeft = totalIncome - totalExpenses;
    const savingsGoal = currentData.savingsGoal;
    const finalAmount = moneyLeft - savingsGoal;
    
    // Display values
    totalIncomeDisplay.textContent = `₹${totalIncome.toFixed(2)}`;
    totalExpensesDisplay.textContent = `₹${totalExpenses.toFixed(2)}`;
    moneyLeftDisplay.textContent = `₹${moneyLeft.toFixed(2)}`;
    displaySavingsGoal.textContent = `₹${savingsGoal.toFixed(2)}`;
    finalAmountDisplay.textContent = `₹${finalAmount.toFixed(2)}`;
    
    // Set savings message
    savingsMessage.className = 'savings-message';
    if (finalAmount >= 0) {
        savingsMessage.classList.add('success');
        savingsMessage.innerHTML = `
            <p>🎉 Great job! You've met your savings goal with ₹${finalAmount.toFixed(2)} to spare!</p>
            <p>You could save this extra amount or spend it guilt-free.</p>
        `;
    } else {
        savingsMessage.classList.add('danger');
        savingsMessage.innerHTML = `
            <p>⚠️ You're ₹${Math.abs(finalAmount).toFixed(2)} short of your savings goal.</p>
            <p>Try to reduce expenses by this amount to meet your goal.</p>
        `;
    }
    
    // Create expense chart
    createExpenseChart();
    
    // Generate suggestions
    generateSuggestions();
    
    // Load chatbot questions
    loadChatbotQuestions();
    
    // Show the page
    analysisPage.classList.remove('hidden');
}

// Calculate total expenses
function calculateTotalExpenses() {
    let total = currentData.otherExpense;
    
    for (const category in currentData.expenses) {
        total += currentData.expenses[category];
    }
    
    return total;
}

// Create expense chart
function createExpenseChart() {
    expenseChart.innerHTML = '';
    
    const categories = currentUserType === 'student' ? studentCategories : earnerCategories;
    const maxExpense = Math.max(...Object.values(currentData.expenses), currentData.otherExpense);
    
    // Add regular categories
    categories.forEach(category => {
        const amount = currentData.expenses[category.id] || 0;
        if (amount > 0) {
            const height = (amount / maxExpense) * 100;
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.height = `${height}%`;
            bar.setAttribute('data-label', category.label);
            bar.setAttribute('data-amount', `₹${amount.toFixed(2)}`);
            expenseChart.appendChild(bar);
        }
    });
    
    // Add other expense if exists
    if (currentData.otherExpense > 0) {
        const height = (currentData.otherExpense / maxExpense) * 100;
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = `${height}%`;
        bar.setAttribute('data-label', 'Other');
        bar.setAttribute('data-amount', `₹${currentData.otherExpense.toFixed(2)}`);
        expenseChart.appendChild(bar);
    }
}

// Generate suggestions
function generateSuggestions() {
    suggestionsContent.innerHTML = '';
    
    const totalExpenses = calculateTotalExpenses();
    const moneyLeft = currentData.income - totalExpenses;
    const savingsGoal = currentData.savingsGoal;
    const finalAmount = moneyLeft - savingsGoal;
    
    // General suggestions based on savings status
    if (finalAmount >= 0) {
        addSuggestion(`You've met your savings goal! Consider investing the extra ₹${finalAmount.toFixed(2)}.`);
        addSuggestion('Great job managing your finances! Keep up the good habits.');
    } else {
        addSuggestion(`To meet your savings goal, try to reduce expenses by ₹${Math.abs(finalAmount).toFixed(2)} this month.`);
        addSuggestion('Review your largest expense categories for potential savings.');
    }
    
    // Suggestions based on expense percentages
    const categories = currentUserType === 'student' ? studentCategories : earnerCategories;
    let largestCategory = { id: '', amount: 0 };
    let totalSpent = 0;
    
    // Find largest category and calculate totals
    categories.forEach(category => {
        const amount = currentData.expenses[category.id] || 0;
        totalSpent += amount;
        
        if (amount > largestCategory.amount) {
            largestCategory = { id: category.id, amount: amount };
        }
    });
    
    // Add other expense to total
    totalSpent += currentData.otherExpense;
    
    // Check if other is the largest
    if (currentData.otherExpense > largestCategory.amount) {
        largestCategory = { id: 'other', amount: currentData.otherExpense };
    }
    
    // Add suggestions based on largest category
    if (largestCategory.amount > 0) {
        const percent = ((largestCategory.amount / totalSpent) * 100).toFixed(1);
        
        if (percent > 40) {
            addSuggestion(`Your ${largestCategory.id === 'other' ? 'other expenses' : largestCategory.id} account for ${percent}% of spending - look for ways to reduce this.`);
        }
        
        // Category-specific suggestions
        if (largestCategory.id === 'food') {
            addSuggestion('Consider meal planning to reduce food expenses.');
        } else if (largestCategory.id === 'travel') {
            addSuggestion('Explore carpooling or public transport to save on travel costs.');
        } else if (largestCategory.id === 'shopping') {
            addSuggestion('Implement a 24-hour waiting period before non-essential purchases.');
        } else if (largestCategory.id === 'rent') {
            addSuggestion('If rent is straining your budget, consider getting a roommate.');
        }
    }
    
    // Savings suggestions
    if (savingsGoal > (currentData.income * 0.3)) {
        addSuggestion('Your savings goal is ambitious (>30% of income). Make sure it\'s realistic.');
    } else if (savingsGoal < (currentData.income * 0.1)) {
        addSuggestion('Consider increasing your savings goal to at least 10% of your income.');
    }
}

// Add a suggestion to the list
function addSuggestion(text) {
    const suggestion = document.createElement('div');
    suggestion.className = 'suggestion-item';
    suggestion.textContent = text;
    suggestionsContent.appendChild(suggestion);
}

// Load chatbot questions
function loadChatbotQuestions() {
    chatbotQuestions.innerHTML = '<option value="">Select a question...</option>';
    
    const questions = currentUserType === 'student' ? studentQuestions : earnerQuestions;
    
    questions.forEach((q, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = q.question;
        chatbotQuestions.appendChild(option);
    });
}

// Show chatbot response
function showChatbotResponse() {
    const questions = currentUserType === 'student' ? studentQuestions : earnerQuestions;
    const questionIndex = parseInt(chatbotQuestions.value);
    const question = questions[questionIndex];
    
    if (question) {
        // Get random answer
        const randomIndex = Math.floor(Math.random() * question.answers.length);
        const answer = question.answers[randomIndex];
        
        // Display with typing animation
        chatbotResponse.textContent = '';
        typeWriter(chatbotResponse, answer);
    }
}

// Typewriter effect for chatbot
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 20);
    }
}

// Show view data page
function showViewData() {
    recordsList.innerHTML = '';
    
    // Get all data from localStorage
    const allData = JSON.parse(localStorage.getItem('expenseTrackerData')) || {};
    
    // Filter data for current user and year
    const userData = [];
    
    for (const key in allData) {
        const data = allData[key];
        if (data.name === currentData.name && data.year === currentData.year && data.type === currentUserType) {
            userData.push(data);
        }
    }
    
    // Sort by month (January to December)
    const monthOrder = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    userData.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));
    
    if (userData.length === 0) {
        recordsList.innerHTML = '<p>No records found for this user and year.</p>';
    } else {
        userData.forEach(data => {
            const totalExpenses = calculateTotalExpensesForRecord(data);
            const moneyLeft = data.income - totalExpenses;
            const finalAmount = moneyLeft - data.savingsGoal;
            
            const recordHTML = `
                <div class="record-item">
                    <div class="record-header">
                        <span>${data.month} ${data.year}</span>
                        <span>₹${data.income.toFixed(2)}</span>
                    </div>
                    <div class="record-details">
                        <div class="record-detail">
                            <span>Total Expenses:</span>
                            <span>₹${totalExpenses.toFixed(2)}</span>
                        </div>
                        <div class="record-detail">
                            <span>Money Left:</span>
                            <span>₹${moneyLeft.toFixed(2)}</span>
                        </div>
                        <div class="record-detail">
                            <span>Savings Goal:</span>
                            <span>₹${data.savingsGoal.toFixed(2)}</span>
                        </div>
                        <div class="record-detail">
                            <span>Final Amount:</span>
                            <span class="${finalAmount >= 0 ? 'positive' : 'negative'}">₹${finalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
            
            recordsList.innerHTML += recordHTML;
        });
    }
    
    viewData.classList.remove('hidden');
}

// Calculate total expenses for a record
function calculateTotalExpensesForRecord(data) {
    let total = data.otherExpense;
    
    for (const category in data.expenses) {
        total += data.expenses[category];
    }
    
    return total;
}

// Load data for editing
function loadDataForEditing() {
    // Generate key
    const key = `${currentData.name}_${currentData.year}_${currentData.month}_${currentUserType}`;
    
    // Get data from localStorage
    const allData = JSON.parse(localStorage.getItem('expenseTrackerData')) || {};
    const data = allData[key];
    
    if (data) {
        currentData = {...data};
        showDataEntryForm();
        
        // Fill in the form with existing data
        incomeInput.value = data.income;
        savingsGoalInput.value = data.savingsGoal;
        otherExpenseInput.value = data.otherExpense;
        
        // Fill in category expenses
        for (const category in data.expenses) {
            const input = document.getElementById(category);
            if (input) {
                input.value = data.expenses[category];
            }
        }
    } else {
        alert('No data found for the selected month and year');
        actionSelection.classList.remove('hidden');
        dataEntry.classList.add('hidden');
    }
}

// Compare with previous month
function compareWithPreviousMonth() {
    // Get current month index
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const currentMonthIndex = months.indexOf(currentData.month);
    if (currentMonthIndex === 0) {
        alert('No previous month to compare with for January');
        return;
    }
    
    const prevMonth = months[currentMonthIndex - 1];
    const key = `${currentData.name}_${currentData.year}_${prevMonth}_${currentUserType}`;
    
    // Get previous month's data
    const allData = JSON.parse(localStorage.getItem('expenseTrackerData')) || {};
    const prevData = allData[key];
    
    if (!prevData) {
        alert(`No data found for ${prevMonth} ${currentData.year}`);
        return;
    }
    
    // Calculate totals
    const currentTotal = calculateTotalExpenses();
    const prevTotal = calculateTotalExpensesForRecord(prevData);
    
    const difference = currentTotal - prevTotal;
    const percentChange = ((difference / prevTotal) * 100).toFixed(1);
    
    // Create comparison message
    let message = `Compared to ${prevMonth}:<br><br>`;
    
    if (difference > 0) {
        message += `📈 You spent ₹${difference.toFixed(2)} more this month (${percentChange}% increase).<br>`;
    } else if (difference < 0) {
        message += `📉 You spent ₹${Math.abs(difference).toFixed(2)} less this month (${percentChange}% decrease).<br>`;
    } else {
        message += `Your spending is exactly the same as ${prevMonth}.<br>`;
    }
    
    // Add category comparisons
    message += '<br><strong>Category Changes:</strong><br>';
    
    const categories = currentUserType === 'student' ? studentCategories : earnerCategories;
    let hasChanges = false;
    
    categories.forEach(category => {
        const currentAmount = currentData.expenses[category.id] || 0;
        const prevAmount = prevData.expenses[category.id] || 0;
        
        if (currentAmount !== 0 || prevAmount !== 0) {
            const catDifference = currentAmount - prevAmount;
            const catPercent = prevAmount > 0 ? ((catDifference / prevAmount) * 100).toFixed(1) : '∞';
            
            if (catDifference > 0) {
                message += `↑ ${category.label}: +₹${catDifference.toFixed(2)} (+${catPercent}%)<br>`;
            } else if (catDifference < 0) {
                message += `↓ ${category.label}: -₹${Math.abs(catDifference).toFixed(2)} (${catPercent}%)<br>`;
            } else {
                message += `→ ${category.label}: No change<br>`;
            }
            
            hasChanges = true;
        }
    });
    
    // Compare other expenses
    if (currentData.otherExpense !== 0 || prevData.otherExpense !== 0) {
        const otherDifference = currentData.otherExpense - prevData.otherExpense;
        const otherPercent = prevData.otherExpense > 0 ? ((otherDifference / prevData.otherExpense) * 100).toFixed(1) : '∞';
        
        if (otherDifference > 0) {
            message += `↑ Other: +₹${otherDifference.toFixed(2)} (+${otherPercent}%)<br>`;
        } else if (otherDifference < 0) {
            message += `↓ Other: -₹${Math.abs(otherDifference).toFixed(2)} (${otherPercent}%)<br>`;
        } else {
            message += `→ Other: No change<br>`;
        }
        
        hasChanges = true;
    }
    
    if (!hasChanges) {
        message += 'No significant changes in any category.';
    }
    
    // Compare savings
    const savingsDifference = currentData.savingsGoal - prevData.savingsGoal;
    if (savingsDifference !== 0) {
        message += `<br>Your savings goal is ₹${Math.abs(savingsDifference).toFixed(2)} `;
        message += savingsDifference > 0 ? 'higher' : 'lower';
        message += ' than last month.';
    }
    
    // Show comparison
    suggestionsContent.innerHTML = `<div class="comparison-message">${message}</div>`;
}

// Play sound
function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Sound playback prevented:', e));
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);