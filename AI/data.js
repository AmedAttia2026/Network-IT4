const quizData = {
    courseTitle: "Artificial Intelligence",
    facultyInfo: {
        deptAr: "قسم تكنولوجيا المعلومات",
        deptEn: "Information Technology Department",
        facultyAr: "كلية تكنولوجيا الصناعة والطاقة",
        facultyEn: "Faculty of Industrial and Energy Technology",
        year: "4th Year",
        lecturer: "Dr. Mohammed AbdelFattah",
        semester: "1st term 2025/2026"
    },

    // Sheet 1: Introduction to AI
    "sheet-1-intro": {
        title: "Sheet 1 - Introduction to AI",
        header: "Tutorial: Sheet 1 - Answer Key",
        data: [
            // Part 1: MCQs
            { 
                type: 'mcq', 
                q: "Q1. Which of the following best describes Classical AI?", 
                options: [
                    "Systems that rely on hand-coded rules and logic", 
                    "Systems that learn patterns from data", 
                    "Neural networks inspired by the human brain", 
                    "Robots performing physical tasks"
                ], 
                correct: 0 
            },
            { 
                type: 'mcq', 
                q: "Q2. What caused the “AI Winter”?", 
                options: [
                    "Global economic crisis", 
                    "Unrealistic expectations and lack of computational power", 
                    "AI becoming too advanced", 
                    "Overabundance of funding"
                ], 
                correct: 1 
            },
            { 
                type: 'mcq', 
                q: "Q3. Which of the following is NOT typically considered a key subfield of AI?", 
                options: [
                    "Natural Language Processing", 
                    "Computer Vision", 
                    "Thermodynamics", 
                    "Robotics"
                ], 
                correct: 2 
            },

            // Part 2: True / False
            { type: 'tf', q: "Q1. Machine Learning is a subfield of AI.", correct: true },
            { type: 'tf', q: "Q2. Classical AI relied heavily on data-driven learning from large datasets.", correct: false },
            { type: 'tf', q: "Q3. AI, Data Science, and Analytics are identical fields with no real differences.", correct: false },
            { type: 'tf', q: "Q4. Ethical considerations in AI include fairness, transparency, and avoiding bias.", correct: true },
            { type: 'tf', q: "Q5. The future of AI is universally agreed to be risk-free and without controversy.", correct: false },
            { type: 'tf', q: "Q6. Deep Learning is based on artificial neural networks inspired by the human brain.", correct: true },
            { type: 'tf', q: "Q7. Natural Language Processing (NLP) and Computer Vision are examples of AI subfields.", correct: true },
            { type: 'tf', q: "Q8. Artificial Intelligence aims to create systems that can mimic aspects of human intelligence.", correct: true },
            { type: 'tf', q: "Q9. The 'AI Winter' refers to a period when AI research was thriving due to abundant funding.", correct: false },
            { type: 'tf', q: "Q10. Real AI applications include recommendation systems, virtual assistants, and autonomous vehicles.", correct: true },

            // Part 3: Short-Answer Questions
            { 
                type: 'fill', 
                q: "1. Define Artificial Intelligence in your own words.", 
                answer: "The field of computer science that aims to create machines capable of performing tasks that typically require human intelligence, such as reasoning, learning, and problem-solving." 
            },
            { 
                type: 'fill', 
                q: "2. What is the main difference between AI, Data Science, and Analytics?", 
                answer: "AI focuses on building systems that can make decisions automatically; Data Science focuses on extracting insights from data; Analytics emphasizes interpreting data to support decision-making." 
            },
            { 
                type: 'fill', 
                q: "3. Give one example of a real-world AI application you use in daily life.", 
                answer: "Examples: voice assistants (Siri, Alexa), recommendation systems (Netflix, YouTube), facial recognition, or chatbots." 
            },
            { 
                type: 'fill', 
                q: "4. State one ethical concern that arises with the increasing use of AI.", 
                answer: "Bias and fairness, privacy violations, job displacement, or lack of transparency in automated decision-making." 
            },
            { 
                type: 'fill', 
                q: "5. Why is the data-driven paradigm considered essential for modern AI systems?", 
                answer: "Because modern AI models (like ML and Deep Learning) depend on large amounts of data to learn patterns and make accurate predictions." 
            },

            // Part 4: Discussion Questions
            { 
                type: 'fill', 
                q: "Discussion: Compare and contrast Classical AI, Machine Learning, and Deep Learning.", 
                answer: "Classical AI uses rule-based logic; ML allows learning from data; Deep Learning uses neural networks for complex patterns. DL is most impactful today due to success in image/speech recognition." 
            },
            { 
                type: 'fill', 
                q: "Discussion: How did advances in data and computing power contribute to AI's resurgence?", 
                answer: "Big data and powerful GPUs allowed training on massive datasets, improving performance and reviving interest after the AI Winter." 
            },
            { 
                type: 'fill', 
                q: "Discussion: Industry transformation in the next decade.", 
                answer: "Healthcare (diagnosis), Transportation (self-driving), Finance (fraud detection), or Education. Impact depends on societal needs and feasibility." 
            }
        ]
    },

    // Sheet 2: Python Fundamentals (Existing data maintained)
    "sheet-2-python-fundamentals": {
        title: "Sheet 2 - Python Fundamentals",
        header: "Tutorial: Sheet 2 - Python Basics",
        data: [
            /* ... بيانات شيت 2 السابقة التي أرسلتها ... */
        ]
    }
};
