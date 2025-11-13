// A. إعداد البيانات والحالة العالمية (Configuration & Global State)
// ----------------------------------------------------------------------
const GITHUB_DATA_URL = 'https://amedattia2026.github.io/net/data.js';

// --- Global State & DOM Elements ---
const currentQuiz = {
    tutorial: 'tutorial-1',
    incorrectAnswers: []
};
// استخدام Map لإدارة الإجابات الخاطئة بشكل فريد
const incorrectAnswers = new Map(); 

const sidebar = document.getElementById('sidebar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const navItemsContainer = document.querySelector('.sidebar-nav-container');
const sectionsContainer = document.querySelector('.main-container');
const headerTitle = document.getElementById('header-title');
const currentTutorialTitle = document.getElementById('current-tutorial-title');
const header = document.querySelector('header');
let headerHeight = 0; 


// B. وظائف تحميل البيانات والتخزين المحلي (Data Loading & Storage)
// ----------------------------------------------------------------------

/**
 * تحميل البيانات من GitHub مع دعم التخزين المؤقت المحلي.
 */
async function loadQuizData() {
    try {
        // 1. قراءة النسخة المحلية أولاً
        const cachedData = localStorage.getItem('quizData');
        if (cachedData) {
            window.quizData = JSON.parse(cachedData);
        }

        // 2. محاولة جلب النسخة الجديدة من الإنترنت
        const response = await fetch(GITHUB_DATA_URL, { cache: "no-store" });
        if (!response.ok) throw new Error('فشل تحميل البيانات من GitHub');
        
        const freshData = await response.json();

        // 3. التحديث في حال وجود بيانات جديدة
        if (JSON.stringify(freshData) !== cachedData) {
            localStorage.setItem('quizData', JSON.stringify(freshData));
            window.quizData = freshData;
            console.log("✅ تم تحديث البيانات من الإنترنت");
        } else {
            console.log("ℹ️ لا يوجد تحديث جديد للبيانات");
        }
    } catch (error) {
        console.warn("⚠️ تعذر الوصول للإنترنت، استخدام البيانات المخزنة محليًا:", error);
    }
}

// --- LOCAL STORAGE FUNCTIONS ---

/**
 * حفظ الحالة الحالية للاختبار (الإجابات الخاطئة والدرس الحالي) في التخزين المحلي.
 */
function saveQuizState() {
    localStorage.setItem('incorrectAnswers', JSON.stringify(Array.from(incorrectAnswers.entries())));
    localStorage.setItem('currentQuiz', JSON.stringify(currentQuiz));
}

/**
 * تحميل الحالة المحفوظة من التخزين المحلي.
 */
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
        currentQuiz.tutorial = parsedCurrent.tutorial || 'tutorial-1'; // قيمة افتراضية
        currentQuiz.incorrectAnswers = parsedCurrent.incorrectAnswers || [];
    }
}


// C. منطق الاختبار والعرض (Quiz Rendering & Logic)
// ----------------------------------------------------------------------

/**
 * الحصول على معرّف الحاوية الصحيح للدرس.
 */
function getContainerId(tutorialKey) {
    return `${tutorialKey}-container`;
}

/**
 * إنشاء بطاقة HTML لسؤال واحد بناءً على نوعه.
 */
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
            option.setAttribute('role', 'radio');
            option.setAttribute('aria-checked', 'false');
            option.setAttribute('tabindex', '0');
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

            // وضع المراجعة
            if (isReviewMode) {
                const incorrectQuestion = Array.from(incorrectAnswers.values()).find(item =>
                    item.tutorialKey === tutorialKey && item.questionIndex === questionIndex
                );
                if (incorrectQuestion) {
                    if (incorrectQuestion.userAnswer !== null && parseInt(incorrectQuestion.userAnswer) === optionIndex) {
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
    
    // --- Fill-in-the-Blank Logic (Modified Part) ---
    // تم إزالة حقل الإدخال. لم تعد هناك حاجة لـ else if (questionObj.type === 'fill') لإضافة عناصر تحكم خاصة.
    
    // زر عرض الإجابة (مخفي في وضع المراجعة)
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

/**
 * مسح محتويات حاوية الاختبار قبل عرض أسئلة جديدة.
 */
function clearQuizContainer(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const tutorialKey = containerId.replace('-container', '');

    // إخفاء وإظهار الأزرار والنتائج المرتبطة
    const elementsToClear = [
        `show-all-${tutorialKey}`,
        `${tutorialKey}-score-display`,
        `${tutorialKey}-final-score-message`,
        `review-incorrect-button-${tutorialKey}`,
        `retake-button-${tutorialKey}`
    ].map(id => document.getElementById(id)).filter(el => el);

    elementsToClear.forEach(el => {
        if (el.id.includes('score-display')) el.textContent = '';
        if (el.id.includes('final-score-message')) el.classList.add('hidden');
        if (el.id.includes('review-incorrect')) el.classList.add('hidden');
        if (el.id.includes('retake-button')) el.classList.add('hidden');
        if (el.id.includes('show-all')) el.style.display = 'block';
    });
}

/**
 * الوظيفة الرئيسية لعرض أسئلة الدرس المحدد.
 */
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

            if (isReviewMode) {
                showAnswer(card, qObj, true);
            }
        });
    }

    // إعداد أزرار التقييم والمراجعة
    const showAllButton = document.getElementById(`show-all-${tutorialKey}`);
    const reviewButton = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    const retakeButton = document.getElementById(`retake-button-${tutorialKey}`);

    if (showAllButton) {
        showAllButton.classList.toggle('hidden', isReviewMode);
    }
    if (reviewButton) {
        reviewButton.classList.toggle('hidden', isReviewMode);
    }
    if (retakeButton) {
        retakeButton.classList.toggle('hidden', !isReviewMode);
    }

    // إضافة مستمعي الأحداث لأزرار 'عرض الإجابة' و 'الاختيار'
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
                option.setAttribute('aria-checked', 'true');
                const otherOptions = option.closest('.options-container').querySelectorAll('.mcq-option');
                otherOptions.forEach(other => {
                    if (other !== option) {
                        other.setAttribute('aria-checked', 'false');
                    }
                });
            }
        });
    });
}

/**
 * إظهار الإجابة الصحيحة وتوفير التغذية الراجعة.
 */
function showAnswer(card, questionObj, isReviewMode = false) {
    const feedbackElement = card.querySelector('.answer-text');
    feedbackElement.style.display = 'block';

    if (questionObj.type === 'mcq') {
        const options = card.querySelectorAll('.mcq-option');
        const selectedOption = card.querySelector('input[type="radio"]:checked');

        options.forEach(option => {
            option.classList.remove('option-correct-highlight', 'option-incorrect-highlight');
        });

        const correctOption = options[questionObj.correct];
        if (correctOption) {
            correctOption.classList.add('option-correct-highlight');
        }

        const selectedAnswerIndex = selectedOption ? parseInt(selectedOption.value) : null;
        const isCorrect = selectedAnswerIndex === questionObj.correct;

        if (selectedOption && !isCorrect) {
            const selectedOptionElement = options[selectedAnswerIndex];
            if (selectedOptionElement) {
                selectedOptionElement.classList.add('option-incorrect-highlight');
            }
        }

        if (isCorrect) {
            feedbackElement.innerHTML = `<span class="correct-answer-highlight">🎉 إجابة صحيحة</span>`;
        } else {
            feedbackElement.innerHTML = `<span class="incorrect-answer-highlight">❌ الإجابة الصحيحة هي: ${questionObj.options[questionObj.correct]}</span>`;
        }

    } 
    
    // --- Fill-in-the-Blank Show Answer (Modified Part) ---
    else if (questionObj.type === 'fill') {
        // عرض الإجابة الصحيحة (فقط نص)
        feedbackElement.innerHTML = `<span class="correct-answer-highlight">الإجابة الصحيحة هي: ${questionObj.answer}</span>`;
    }
    
    // تعطيل زر التحقق
    const checkButton = card.querySelector('.check-button');
    if (checkButton) {
        checkButton.disabled = true;
        checkButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

/**
 * التحقق من إجابات أسئلة الاختيار من متعدد وحساب النتيجة.
 */
function checkAnswers(tutorialKey) {
    const container = document.getElementById(getContainerId(tutorialKey));
    // نصفي الأسئلة على الاختيار من متعدد فقط لحساب النتيجة
    const questions = quizData[tutorialKey].data.filter(q => q.type === 'mcq'); 
    let score = 0;
    
    // مسح الإجابات الخاطئة القديمة الخاصة بالدرس الحالي
    const keysToRemove = Array.from(incorrectAnswers.keys()).filter(key => key.startsWith(tutorialKey));
    keysToRemove.forEach(key => incorrectAnswers.delete(key));

    questions.forEach((questionObj, index) => {
        const card = container.querySelector(`.card[data-question-index="${index}"]`);
        
        // هذا الشرط ضروري لضمان عدم محاولة قراءة خيارات إذا كان نوع السؤال ليس MCQ
        if (questionObj.type !== 'mcq') return; 

        const selectedOption = card.querySelector('input[type="radio"]:checked');
        const isCorrect = selectedOption && parseInt(selectedOption.value) === questionObj.correct;
        const incorrectKey = `${tutorialKey}-${index}`;

        if (isCorrect) {
            score++;
        } else {
            incorrectAnswers.set(incorrectKey, {
                tutorialKey: tutorialKey,
                questionIndex: index,
                question: questionObj,
                userAnswer: selectedOption ? selectedOption.value : null
            });
        }
    });

    // عرض النتيجة
    const totalMCQ = questions.length;
    const scoreDisplay = document.getElementById(`${tutorialKey}-score-display`);
    scoreDisplay.textContent = `أنت حصلت على ${score} من ${totalMCQ}.`;
    
    const finalScoreMessage = document.getElementById(`${tutorialKey}-final-score-message`);
    const reviewButton = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    const retakeButton = document.getElementById(`retake-button-${tutorialKey}`);
    
    if (score === totalMCQ) {
        finalScoreMessage.textContent = 'عمل رائع! جميع إجابات الاختيار من متعدد صحيحة!';
        reviewButton.classList.add('hidden');
    } else {
        finalScoreMessage.textContent = `لديك ${totalMCQ - score} إجابات خاطئة في الاختيار من متعدد.`;
        reviewButton.classList.remove('hidden');
    }
    finalScoreMessage.classList.remove('hidden');
    if (retakeButton) retakeButton.classList.add('hidden');

    saveQuizState();
}

/**
 * عرض الإجابات الصحيحة لجميع الأسئلة على الصفحة.
 */
function showAllAnswers(tutorialKey) {
    // نحسب النتيجة أولاً ثم نعرض الإجابات
    checkAnswers(tutorialKey); 
    const container = document.getElementById(getContainerId(tutorialKey));
    const questionCards = container.querySelectorAll('.card');
    
    questionCards.forEach(card => {
        const index = parseInt(card.dataset.questionIndex);
        const questionObj = quizData[tutorialKey].data[index];
        showAnswer(card, questionObj);
    });

    const showAllButton = document.getElementById(`show-all-${tutorialKey}`);
    if (showAllButton) {
        showAllButton.style.display = 'none';
    }
}


// D. وظائف واجهة المستخدم والتنقل (UI & Navigation)
// ----------------------------------------------------------------------

/**
 * بناء عناصر التنقل والأقسام الرئيسية بشكل ديناميكي.
 */
function buildDynamicUI() {
    navItemsContainer.innerHTML = '';
    sectionsContainer.innerHTML = '';

    headerTitle.textContent = quizData.courseTitle || 'منصة تعليمية';

    const tutorialKeys = Object.keys(quizData).filter(key => key !== 'courseTitle');

    tutorialKeys.forEach(key => {
        // إنشاء عنصر التنقل
        const navItem = document.createElement('div');
        navItem.className = 'sidebar-nav-item';
        navItem.dataset.section = key;
        navItem.textContent = quizData[key].title || key.replace(/-/g, ' ').toUpperCase();
        navItemsContainer.appendChild(navItem);

        // إنشاء قسم الاختبار
        const section = document.createElement('section');
        section.id = `${key}-section`;
        section.className = 'question-section hidden';

        const quizContainer = document.createElement('div');
        quizContainer.id = `${key}-container`;
        section.appendChild(quizContainer);

        // إنشاء حاوية الأزرار والنتائج
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'text-center';
        actionsContainer.innerHTML = `
            <button id="show-all-${key}" class="action-button mx-auto">تقييم الإجابات</button>
            <div id="${key}-score-display" class="score-display mt-4"></div>
            <div id="${key}-final-score-message" class="final-score-message hidden"></div>
            <button id="review-incorrect-button-${key}" class="action-button mt-4 hidden mx-auto">مراجعة الإجابات الخاطئة</button>
            <button id="retake-button-${key}" class="action-button mt-4 hidden mx-auto">إعادة الاختبار</button>
        `;
        section.appendChild(actionsContainer);
        sectionsContainer.appendChild(section);
    });

    // إعادة ربط مستمعي الأحداث
    attachEventListeners();
}

/**
 * ربط جميع مستمعي الأحداث اللازمة.
 */
function attachEventListeners() {
    // التنقل الجانبي
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const sectionKey = item.dataset.section;
            setActiveNavItem(sectionKey);
            currentQuiz.tutorial = sectionKey;
            
            const tutorialTitle = quizData[sectionKey]?.title || sectionKey.replace(/-/g, ' ').toUpperCase();
            currentTutorialTitle.textContent = tutorialTitle;
            
            renderQuiz(sectionKey, false);
            
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
        });
    });

    // أزرار 'تقييم الإجابات'
    document.querySelectorAll('[id^="show-all-"]').forEach(button => {
        button.addEventListener('click', () => {
            const tutorialKey = button.id.replace('show-all-', '');
            showAllAnswers(tutorialKey);
        });
    });

    // أزرار 'مراجعة الإجابات الخاطئة'
    document.querySelectorAll('[id^="review-incorrect-button-"]').forEach(button => {
        button.addEventListener('click', () => {
            const tutorialKey = button.id.replace('review-incorrect-button-', '');
            const incorrectQuestions = Array.from(incorrectAnswers.values()).filter(item => item.tutorialKey === tutorialKey);
            if (incorrectQuestions.length > 0) {
                renderQuiz(tutorialKey, true);
            }
        });
    });

    // أزرار 'إعادة الاختبار'
    document.querySelectorAll('[id^="retake-button-"]').forEach(button => {
        button.addEventListener('click', () => {
            const tutorialKey = button.id.replace('retake-button-', '');
            const keysToRemove = Array.from(incorrectAnswers.keys()).filter(key => key.startsWith(tutorialKey));
            keysToRemove.forEach(key => incorrectAnswers.delete(key));
            saveQuizState();
            renderQuiz(tutorialKey, false);
        });
    });
    
    // زر 'العودة للصفحة الرئيسية'
    const backToHomeButton = document.getElementById('back-to-home-button');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }
}

/**
 * تمييز عنصر التنقل النشط.
 */
function setActiveNavItem(sectionKey) {
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionKey);
    });
}

/**
 * إظهار القسم المطلوب وإخفاء الأقسام الأخرى.
 */
function showSection(sectionId) {
    document.querySelectorAll('.question-section').forEach(section => section.classList.add('hidden'));
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// E. التشغيل عند التحميل (Initialization)
// ----------------------------------------------------------------------

window.addEventListener('load', () => {
    loadQuizState();
    buildDynamicUI(); 

    // تحديد الدرس الأولي للعرض
    const firstTutorialKey = Object.keys(quizData).filter(key => key !== 'courseTitle')[0];
    const initialTutorial = quizData[currentQuiz.tutorial] ? currentQuiz.tutorial : firstTutorialKey;

    setActiveNavItem(initialTutorial);
    currentQuiz.tutorial = initialTutorial;
    const tutorialTitle = quizData[initialTutorial]?.title || initialTutorial.replace(/-/g, ' ').toUpperCase();
    currentTutorialTitle.textContent = tutorialTitle;
    renderQuiz(initialTutorial, false);

    // تبديل القائمة الجانبية
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sidebarBackdrop.classList.toggle('active');
    });

    sidebarBackdrop.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarBackdrop.classList.remove('active');
    });

    // التحكم بحجم الخط
    const fontSizeIncreaseBtn = document.getElementById('font-size-increase');
    const fontSizeDecreaseBtn = document.getElementById('font-size-decrease');
    const htmlElement = document.documentElement;
    fontSizeIncreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
        htmlElement.style.fontSize = (currentSize + 1) + 'px';
    });
    fontSizeDecreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
        if (currentSize > 8) {
            htmlElement.style.fontSize = (currentSize - 1) + 'px';
        }
    });

    // زر العودة للأعلى
    const scrollToTopButton = document.getElementById('scroll-to-top-button');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { 
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});