const quizData = {
    courseTitle: "Artificial Intelligence",

    // Sheet 1: Introduction
    "sheet-1": {
        title: "Sheet 1 - Intro to AI",
        data: [
            { type: 'mcq', q: "Which of the following best describes Classical AI?", options: ["Systems that rely on hand-coded rules and logic", "Systems that learn patterns from data", "Neural networks inspired by the human brain", "Robots performing physical tasks"], correct: 0 },
            { type: 'mcq', q: "What caused the “AI Winter”?", options: ["Global economic crisis", "Unrealistic expectations and lack of computational power", "AI becoming too advanced", "Overabundance of funding"], correct: 1 },
            { type: 'tf', q: "Machine Learning is a subfield of AI.", correct: "T" },
            { type: 'tf', q: "Classical AI relied heavily on data-driven learning from large datasets.", correct: "F" },
            { type: 'tf', q: "AI, Data Science, and Analytics are identical fields.", correct: "F" },
            { type: 'fill', q: "Define Artificial Intelligence in your own words.", answer: "The field of computer science that aims to create machines capable of performing tasks that typically require human intelligence." }
        ]
    },

    // Sheet 2: Python Fundamentals
    "sheet-2": {
        title: "Sheet 2 - Python Basics",
        data: [
            { type: 'tf', q: "In Python, variable names can start with numbers.", correct: "F" },
            { type: 'tf', q: "A list in Python is immutable.", correct: "F" },
            { type: 'mcq', q: "Which of the following is a mutable data type in Python?", options: ["Tuple", "String", "List", "Integer"], correct: 2 },
            { type: 'mcq', q: "What will len([10, 20, 30]) return?", options: ["2", "3", "30", "Error"], correct: 1 }
        ]
    },

    // Sheet 3: Python Sets & Advanced
    "sheet-3": {
        title: "Sheet 3 - Sets & Advanced Python",
        data: [
            { type: 'tf', q: "Sets in Python can contain duplicate elements.", correct: "F" },
            { type: 'tf', q: "The match statement in Python works similarly to switch in other languages.", correct: "T" },
            { type: 'mcq', q: "Which operator checks for object identity?", options: ["==", "is", "in", "!="], correct: 1 },
            { type: 'mcq', q: "Which operation gives items that are in either set, but not both?", options: ["A | B", "A & B", "A - B", "A ^ B"], correct: 3 }
        ]
    },

    // Sheet 4 & 5: Data Science Libraries
    "sheet-4-5": {
        title: "Sheet 4 & 5 - Data Science Libraries",
        data: [
            { type: 'tf', q: "NumPy is mainly used for numerical arrays.", correct: "T" },
            { type: 'tf', q: "Pandas Series can hold multiple columns of data.", correct: "F" },
            { type: 'mcq', q: "Which library is best for data visualization?", options: ["Pandas", "NumPy", "Matplotlib", "SciPy"], correct: 2 },
            { type: 'mcq', q: "What is the main purpose of NumPy?", options: ["Text processing", "Image rendering", "Numerical computation", "File management"], correct: 2 }
        ]
    }
};
