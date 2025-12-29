// A. إعداد البيانات والحالة العالمية (Configuration & Global State)
// ----------------------------------------------------------------------
const GITHUB_DATA_URL = 'https://amedattia2026.github.io/net/data.js';

const currentQuiz = {
    tutorial: 'tutorial-1',
    incorrectAnswers: []
};
const incorrectAnswers = new Map(); 

const sidebar = document.getElementById('sidebar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const navItemsContainer = document.querySelector('.sidebar-nav-container');
const sectionsContainer = document.querySelector('.main-container');
const headerTitle = document.getElementById('header-title');
const currentTutorialTitle = document.getElementById('current-tutorial-title');

// B. وظائف تحميل البيانات والتخزين المحلي (Data Loading & Storage)
// ----------------------------------------------------------------------

async function loadQuizData() {
    try {
        const cachedData = localStorage.getItem('quizData');
        if (cachedData) {
            window.quizData = JSON.parse(cachedData);
        }

        const response = await fetch(GITHUB_DATA_URL, { cache: "no-store" });
        if (!response.ok) throw new Error('فشل تحميل البيانات من GitHub');
        
        const freshData = await response.json();

        if (JSON.stringify(freshData) !== cachedData) {
            localStorage.setItem('quizData', JSON.stringify(freshData));
            window.quizData = freshData;
            console.log("✅ تم تحديث البيانات من الإنترنت");
        }
    } catch (error) {
        console.warn("⚠️ تعذر الوصول للإنترنت، استخدام البيانات المخزنة محليًا:", error);
    }
}

function saveQuizState() {
    localStorage.setItem('incorrectAnswers', JSON.stringify(Array.from(incorrectAnswers.entries())));
    localStorage.setItem('currentQuiz', JSON.stringify(currentQuiz));
}

function loadQuizState() {
    const storedIncorrectAnswers = localStorage.getItem('incorrectAnswers');
    const storedCurrentQuiz = localStorage.getItem('currentQuiz');

    if (storedIncorrectAnswers) {
        const parsedIncorrect = new Map(JSON.parse(storedIncorrectAnswers));
        for (const [key, value] of parsedIncorrect) {
            incorrectAnswers.set(key, value);
        }
    }

    if (storedCurrentQuiz) {
        const parsedCurrent = JSON.parse(storedCurrentQuiz);
        currentQuiz.tutorial = parsedCurrent.tutorial || 'tutorial-1';
    }
}

// C. منطق الاختبار والعرض (Quiz Rendering & Logic)
// ----------------------------------------------------------------------

function getContainerId(tutorialKey) {
    return `${tutorialKey}-container`;
}

function createQuestionCard(questionObj, questionIndex, tutorialKey, isReviewMode = false) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.questionIndex = questionIndex;
    card.dataset.tutorialKey = tutorialKey;

    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.textContent = questionObj.q;
    card.appendChild(questionText);

    // --- MCQ Logic ---
    if (questionObj.type === 'mcq') {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        questionObj.options.forEach((optionText, optionIndex) => {
            const option = document.createElement('div');
            option.className = 'mcq-option';
            option.dataset.optionIndex = optionIndex;
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `mcq-${tutorialKey}-${questionIndex}`;
            input.value = optionIndex;
            input.id = `mcq-${tutorialKey}-${questionIndex}-${optionIndex}`;
            
            const label = document.createElement('label');
            label.htmlFor = `mcq-${tutorialKey}-${questionIndex}-${optionIndex}`;
            label.textContent = optionText;

            option.appendChild(input);
            option.appendChild(label);
            optionsContainer.appendChild(option);

            if (isReviewMode) {
                const incorrectItem = Array.from(incorrectAnswers.values()).find(item =>
                    item.tutorialKey === tutorialKey && item.questionIndex === questionIndex
                );
                if (incorrectItem) {
                    if (incorrectItem.userAnswer !== null && parseInt(incorrectItem.userAnswer) === optionIndex) {
                        option.classList.add('selected-for-review', 'option-incorrect-highlight');
                    }
                    if (questionObj.correct === optionIndex) {
                        option.classList.add('option-correct-highlight');
                    }
                }
            }
        });
        card.appendChild(optionsContainer);
    } 
    
    // --- TF (True/False) Logic ---
    else if (questionObj.type === 'tf') {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container tf-options';

        const tfOptions = [{ text: 'صحيح', value: true }, { text: 'خطأ', value: false }];

        tfOptions.forEach((optionData, optionIndex) => {
            const option = document.createElement('div');
            option.className = 'mcq-option';
            option.dataset.optionIndex = optionData.value;
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `tf-${tutorialKey}-${questionIndex}`;
            input.value = optionData.value;
            input.id = `tf-${tutorialKey}-${questionIndex}-${optionIndex}`;
            
            const label = document.createElement('label');
            label.htmlFor = `tf-${tutorialKey}-${questionIndex}-${optionIndex}`;
            label.textContent = optionData.text;

            option.appendChild(input);
            option.appendChild(label);
            optionsContainer.appendChild(option);

            if (isReviewMode) {
                const incorrectItem = Array.from(incorrectAnswers.values()).find(item =>
                    item.tutorialKey === tutorialKey && item.questionIndex === questionIndex
                );
                if (incorrectItem) {
                    const userAnswerBool = incorrectItem.userAnswer === 'true';
                    if (userAnswerBool === optionData.value) {
                        option.classList.add('selected-for-review', 'option-incorrect-highlight');
                    }
                    if (questionObj.correct === optionData.value) {
                        option.classList.add('option-correct-highlight');
                    }
                }
            }
        });
        card.appendChild(optionsContainer);
    } 
    
    // --- Fill-in-the-Blank Logic ---
    // تم حذف حقل الإدخال بناءً على طلبك
    else if (questionObj.type === 'fill' && isReviewMode) {
        // لا يوجد إجابة للمستخدم حالياً لأنه لا يوجد حقل إدخال
    }
    
    // زر عرض الإجابة
    if (!isReviewMode) {
        const checkButton = document.createElement('button');
        checkButton.className = 'action-button check-button';
        checkButton.textContent = 'عرض الإجابة';
        card.appendChild(checkButton);
    }

    const feedback = document.createElement('div');
    feedback.className = 'answer-text';
    card.appendChild(feedback);

    return card;
}

function renderQuiz(tutorialKey, isReviewMode = false) {
    const containerId = getContainerId(tutorialKey);
    showSection(`${tutorialKey}-section`);
    clearQuizContainer(containerId);

    const container = document.getElementById(containerId);
    const questions = isReviewMode 
        ? Array.from(incorrectAnswers.values()).filter(item => item.tutorialKey === tutorialKey) 
        : quizData[tutorialKey]?.data || [];

    if (questions.length === 0 && isReviewMode) {
        container.innerHTML = `<p class="text-center text-lg">لا توجد إجابات خاطئة لمراجعتها. عمل رائع!</p>`;
    } else {
        questions.forEach((questionData, index) => {
            const qIndex = isReviewMode ? questionData.questionIndex : index;
            const qObj = isReviewMode ? questionData.question : questionData;
            const tKey = isReviewMode ? questionData.tutorialKey : tutorialKey;

            const card = createQuestionCard(qObj, qIndex, tKey, isReviewMode);
            container.appendChild(card);

            if (isReviewMode) showAnswer(card, qObj, true);
        });
    }

    // إدارة الأزرار
    const showAllButton = document.getElementById(`show-all-${tutorialKey}`);
    const reviewButton = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    const retakeButton = document.getElementById(`retake-button-${tutorialKey}`);

    if (showAllButton) showAllButton.classList.toggle('hidden', isReviewMode);
    if (reviewButton) reviewButton.classList.toggle('hidden', isReviewMode);
    if (retakeButton) retakeButton.classList.toggle('hidden', !isReviewMode);

    // أحداث الضغط
    container.querySelectorAll('.check-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const tutorial = card.dataset.tutorialKey;
            const index = parseInt(card.dataset.questionIndex);
            const questionObj = quizData[tutorial].data[index];
            showAnswer(card, questionObj);
        });
    });

    container.querySelectorAll('.mcq-option').forEach(option => {
        option.addEventListener('click', () => {
            const radio = option.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                const otherOptions = option.closest('.options-container').querySelectorAll('.mcq-option');
                otherOptions.forEach(other => other.setAttribute('aria-checked', 'false'));
                option.setAttribute('aria-checked', 'true');
            }
        });
    });
}

function showAnswer(card, questionObj, isReviewMode = false) {
    const feedbackElement = card.querySelector('.answer-text');
    feedbackElement.style.display = 'block';

    if (questionObj.type === 'mcq') {
        const options = card.querySelectorAll('.mcq-option');
        const selectedOption = card.querySelector('input[type="radio"]:checked');
        const selectedIndex = selectedOption ? parseInt(selectedOption.value) : null;

        options.forEach(opt => opt.classList.remove('option-correct-highlight', 'option-incorrect-highlight'));
        options[questionObj.correct].classList.add('option-correct-highlight');

        if (selectedIndex !== null && selectedIndex !== questionObj.correct) {
            options[selectedIndex].classList.add('option-incorrect-highlight');
        }

        if (selectedIndex === questionObj.correct) {
            feedbackElement.innerHTML = `<span class="correct-answer-highlight">🎉 إجابة صحيحة</span>`;
        } else {
            feedbackElement.innerHTML = `<span class="incorrect-answer-highlight">❌ الإجابة الصحيحة هي: ${questionObj.options[questionObj.correct]}</span>`;
        }
    } 
    else if (questionObj.type === 'tf') {
        const options = card.querySelectorAll('.mcq-option');
        const selectedOption = card.querySelector('input[type="radio"]:checked');
        const correctValueStr = questionObj.correct.toString();

        options.forEach(opt => {
            opt.classList.remove('option-correct-highlight', 'option-incorrect-highlight');
            if (opt.querySelector('input').value === correctValueStr) opt.classList.add('option-correct-highlight');
        });

        const selectedValueStr = selectedOption ? selectedOption.value : null;
        if (selectedValueStr && selectedValueStr !== correctValueStr) {
            Array.from(options).find(o => o.querySelector('input').value === selectedValueStr).classList.add('option-incorrect-highlight');
        }

        const correctText = questionObj.correct ? 'صحيح' : 'خطأ';
        feedbackElement.innerHTML = (selectedValueStr === correctValueStr) 
            ? `<span class="correct-answer-highlight">🎉 إجابة صحيحة</span>` 
            : `<span class="incorrect-answer-highlight">❌ الإجابة هي: ${correctText}</span>`;
    } 
    else if (questionObj.type === 'fill') {
        const correctAnswer = questionObj.answer.trim();
        let display = correctAnswer.includes('\n') || correctAnswer.length > 50 
            ? `<pre class="code-block-fancy">${correctAnswer}</pre>` 
            : `<strong>${correctAnswer}</strong>`;
        
        feedbackElement.innerHTML = `✅ <span class="correct-answer-highlight">الإجابة الصحيحة هي:</span> <br> ${display}`;
    }

    const checkButton = card.querySelector('.check-button');
    if (checkButton) {
        checkButton.disabled = true;
        checkButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function checkAnswers(tutorialKey) {
    const container = document.getElementById(getContainerId(tutorialKey));
    const questionsForScoring = quizData[tutorialKey].data.filter(q => q.type === 'mcq' || q.type === 'tf'); 
    let score = 0;
    
    const keysToRemove = Array.from(incorrectAnswers.keys()).filter(key => key.startsWith(tutorialKey));
    keysToRemove.forEach(key => incorrectAnswers.delete(key));

    questionsForScoring.forEach((questionObj, index) => {
        const card = container.querySelector(`.card[data-question-index="${index}"]`);
        if (!card) return;

        let selectedValue = null;
        let isCorrect = false;

        const selectedOption = card.querySelector('input[type="radio"]:checked');
        if (questionObj.type === 'mcq') {
            selectedValue = selectedOption ? parseInt(selectedOption.value) : null;
            isCorrect = selectedValue === questionObj.correct;
        } else {
            selectedValue = selectedOption ? (selectedOption.value === 'true') : null;
            isCorrect = selectedValue === questionObj.correct;
        }

        if (isCorrect) score++;
        else {
            incorrectAnswers.set(`${tutorialKey}-${index}`, {
                tutorialKey, questionIndex: index, question: questionObj, userAnswer: selectedValue !== null ? selectedValue.toString() : null
            });
        }
    });

    const scoreDisplay = document.getElementById(`${tutorialKey}-score-display`);
    scoreDisplay.textContent = `نتيجتك: ${score} من ${questionsForScoring.length}`;
    
    const finalMsg = document.getElementById(`${tutorialKey}-final-score-message`);
    const revBtn = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    
    finalMsg.classList.remove('hidden');
    if (score === questionsForScoring.length) {
        finalMsg.textContent = 'أحسنت! جميع الإجابات صحيحة.';
        revBtn.classList.add('hidden');
    } else {
        finalMsg.textContent = `لديك ${questionsForScoring.length - score} أخطاء.`;
        revBtn.classList.remove('hidden');
    }
    saveQuizState();
}

function showAllAnswers(tutorialKey) {
    checkAnswers(tutorialKey);
    const container = document.getElementById(getContainerId(tutorialKey));
    container.querySelectorAll('.card').forEach(card => {
        const idx = parseInt(card.dataset.questionIndex);
        showAnswer(card, quizData[tutorialKey].data[idx]);
    });
    document.getElementById(`show-all-${tutorialKey}`).style.display = 'none';
}

function clearQuizContainer(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const key = containerId.replace('-container', '');
    const ids = [`show-all-${key}`, `${key}-score-display`, `${key}-final-score-message`, `review-incorrect-button-${key}`, `retake-button-${key}`];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.id.includes('score')) el.textContent = '';
            if (el.id.includes('final') || el.id.includes('review') || el.id.includes('retake')) el.classList.add('hidden');
            if (el.id.includes('show-all')) el.style.display = 'block';
        }
    });
}

// D. وظائف واجهة المستخدم (UI Build)
// ----------------------------------------------------------------------

function buildDynamicUI() {
    navItemsContainer.innerHTML = '';
    sectionsContainer.innerHTML = '';
    headerTitle.textContent = quizData.courseTitle || 'منصة تعليمية';

    Object.keys(quizData).filter(key => key !== 'courseTitle').forEach(key => {
        const navItem = document.createElement('div');
        navItem.className = 'sidebar-nav-item';
        navItem.dataset.section = key;
        navItem.textContent = quizData[key].title || key;
        navItemsContainer.appendChild(navItem);

        const section = document.createElement('section');
        section.id = `${key}-section`;
        section.className = 'question-section hidden';
        section.innerHTML = `<div id="${key}-container"></div>
            <div class="text-center">
                <button id="show-all-${key}" class="action-button mx-auto">تقييم الإجابات</button>
                <div id="${key}-score-display" class="score-display mt-4"></div>
                <div id="${key}-final-score-message" class="final-score-message hidden"></div>
                <button id="review-incorrect-button-${key}" class="action-button mt-4 hidden mx-auto">مراجعة الأخطاء</button>
                <button id="retake-button-${key}" class="action-button mt-4 hidden mx-auto">إعادة الاختبار</button>
            </div>`;
        sectionsContainer.appendChild(section);
    });
    attachEventListeners();
}

function attachEventListeners() {
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const key = item.dataset.section;
            setActiveNavItem(key);
            currentQuiz.tutorial = key;
            currentTutorialTitle.textContent = quizData[key].title;
            renderQuiz(key, false);
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
        });
    });

    document.querySelectorAll('[id^="show-all-"]').forEach(btn => btn.addEventListener('click', () => showAllAnswers(btn.id.replace('show-all-', ''))));
    document.querySelectorAll('[id^="review-incorrect-button-"]').forEach(btn => btn.addEventListener('click', () => renderQuiz(btn.id.replace('review-incorrect-button-', ''), true)));
    document.querySelectorAll('[id^="retake-button-"]').forEach(btn => btn.addEventListener('click', () => {
        const key = btn.id.replace('retake-button-', '');
        Array.from(incorrectAnswers.keys()).filter(k => k.startsWith(key)).forEach(k => incorrectAnswers.delete(k));
        saveQuizState();
        renderQuiz(key, false);
    }));
}

function setActiveNavItem(key) {
    document.querySelectorAll('.sidebar-nav-item').forEach(i => i.classList.toggle('active', i.dataset.section === key));
}

function showSection(id) {
    document.querySelectorAll('.question-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id)?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// E. التشغيل عند التحميل (Initialization)
// ----------------------------------------------------------------------

window.addEventListener('load', async () => {
    await loadQuizData();
    loadQuizState();
    buildDynamicUI(); 

    const keys = Object.keys(quizData).filter(k => k !== 'courseTitle');
    const initial = quizData[currentQuiz.tutorial] ? currentQuiz.tutorial : keys[0];

    setActiveNavItem(initial);
    currentTutorialTitle.textContent = quizData[initial].title;
    renderQuiz(initial, false);

    hamburgerMenu.addEventListener('click', () => { sidebar.classList.toggle('active'); sidebarBackdrop.classList.toggle('active'); });
    sidebarBackdrop.addEventListener('click', () => { sidebar.classList.remove('active'); sidebarBackdrop.classList.remove('active'); });
});
