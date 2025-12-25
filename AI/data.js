const quizData = {
    courseTitle: "Artificial Intelligence",
    // الجزء الخاص ببيانات الشيت الأول بالكامل
    "sheet-1-intro": {
        title: "Sheet 1 - Introduction to AI",
        data: [
            // أسئلة الاختيار من متعدد
            { type: 'mcq', q: "Which of the following best describes Classical AI?", options: ["Systems that rely on hand-coded rules and logic", "Systems that learn patterns from data", "Neural networks inspired by the human brain", "Robots performing physical tasks"], correct: 0 },
            { type: 'mcq', q: "What caused the “AI Winter”?", options: ["Global economic crisis", "Unrealistic expectations and lack of computational power", "AI becoming too advanced", "Overabundance of funding"], correct: 1 },
            
            // أسئلة الصح والخطأ (النوع الجديد)
            { type: 'tf', q: "Machine Learning is a subfield of AI.", correct: true },
            { type: 'tf', q: "Classical AI relied heavily on data-driven learning from large datasets.", correct: false },
            { type: 'tf', q: "AI, Data Science, and Analytics are identical fields.", correct: false },
            
            // أسئلة الإجابة القصيرة (عرض الإجابة النموذجية)
            { type: 'fill', q: "Define Artificial Intelligence in your own words.", answer: "The field of computer science that aims to create machines capable of performing tasks that typically require human intelligence." },
            { type: 'fill', q: "What is the main difference between AI, Data Science, and Analytics?", answer: "AI focuses on decision-making/automation; Data Science on insights; Analytics on interpreting data for decisions." }
        ]
    }
};
