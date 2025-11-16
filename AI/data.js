const quizData = {
  courseTitle: "Artificial Intelligence",
  "tutorial-1": {
    title: "tutorial-1",
    data: [
      // ==== MCQs (تم استخدام 'correct' مع فهرس الإجابة) ====
      {
        type: "mcq",
        q: "Which of the following best describes Classical AI?",
        options: [
          "Systems that rely on hand-coded rules and logic", // الفهرس 0
          "Systems that learn patterns from data",
          "Neural networks inspired by the human brain",
          "Robots performing physical tasks"
        ],
        correct: 0 // الإجابة الصحيحة هي الخيار الأول
      },
      {
        type: "mcq",
        q: "What caused the 'AI Winter'?",
        options: [
          "Global economic crisis",
          "Unrealistic expectations and lack of computational power", // الفهرس 1
          "AI becoming too advanced",
          "Overabundance of funding"
        ],
        correct: 1 // الإجابة الصحيحة هي الخيار الثاني
      },
      {
        type: "mcq",
        q: "Which of the following is NOT typically considered a key subfield of AI?",
        options: [
          "Natural Language Processing",
          "Computer Vision",
          "Thermodynamics", // الفهرس 2
          "Robotics"
        ],
        correct: 2 // الإجابة الصحيحة هي الخيار الثالث
      },

      // ==== True / False (تم تغيير 'answer' إلى 'correct' لتوحيد المفاتيح) ====
      { type: "tf", q: "Machine Learning is a subfield of AI.", correct: "T" },
      { type: "tf", q: "Classical AI relied heavily on data-driven learning from large datasets.", correct: "F" },
      { type: "tf", q: "AI, Data Science, and Analytics are identical fields with no real differences.", correct: "F" },
      { type: "tf", q: "Ethical considerations in AI include fairness, transparency, and avoiding bias.", correct: "T" },
      { type: "tf", q: "The future of AI is universally agreed to be risk-free and without controversy.", correct: "F" },
      { type: "tf", q: "Deep Learning is based on artificial neural networks inspired by the human brain.", correct: "T" },
      { type: "tf", q: "Natural Language Processing (NLP) and Computer Vision are examples of AI subfields.", correct: "T" },
      { type: "tf", q: "Artificial Intelligence aims to create systems that can mimic aspects of human intelligence.", correct: "T" },
      { type: "tf", q: "The 'AI Winter' refers to a period when AI research was thriving due to abundant funding.", correct: "F" },
      { type: "tf", q: "Real AI applications include recommendation systems, virtual assistants, and autonomous vehicles.", correct: "T" }
    ]
  }
};
