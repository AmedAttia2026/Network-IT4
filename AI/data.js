const quizData = {
  courseTitle: "Artificial Intelligence",
  "tutorial-1": {
    title: "tutorial-1",
    data: [
      // ==== MCQs الأصلية (تمت إعادتها إلى MCQs) ====
      {
        type: "mcq",
        q: "Which of the following best describes Classical AI?",
        options: [
          "Systems that rely on hand-coded rules and logic", // 0
          "Systems that learn patterns from data",
          "Neural networks inspired by the human brain",
          "Robots performing physical tasks"
        ],
        correct: 0 
      },
      {
        type: "mcq",
        q: "What caused the 'AI Winter'?",
        options: [
          "Global economic crisis",
          "Unrealistic expectations and lack of computational power", // 1
          "AI becoming too advanced",
          "Overabundance of funding"
        ],
        correct: 1
      },
      {
        type: "mcq",
        q: "Which of the following is NOT typically considered a key subfield of AI?",
        options: [
          "Natural Language Processing",
          "Computer Vision",
          "Thermodynamics", // 2
          "Robotics"
        ],
        correct: 2
      },

      // ==== True / False (تم تحويلها إلى MCQs ثنائية الخيار لضمان التنسيق الصحيح) ====
      { type: "mcq", q: "Machine Learning is a subfield of AI.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "Classical AI relied heavily on data-driven learning from large datasets.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "AI, Data Science, and Analytics are identical fields with no real differences.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "Ethical considerations in AI include fairness, transparency, and avoiding bias.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "The future of AI is universally agreed to be risk-free and without controversy.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "Deep Learning is based on artificial neural networks inspired by the human brain.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "Natural Language Processing (NLP) and Computer Vision are examples of AI subfields.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "Artificial Intelligence aims to create systems that can mimic aspects of human intelligence.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "The 'AI Winter' refers to a period when AI research was thriving due to abundant funding.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "Real AI applications include recommendation systems, virtual assistants, and autonomous vehicles.", options: ["True", "False"], correct: 0 }
    ]
  }
};
