const quizData = {
  courseTitle: "Artificial Intelligence",
  "tutorial-1": {
    title: "tutorial-1",
    data: [
      // ==== MCQs ====
      {
        type: "mcq",
        q: "Which of the following best describes Classical AI?",
        options: [
          "Systems that rely on hand-coded rules and logic",
          "Systems that learn patterns from data",
          "Neural networks inspired by the human brain",
          "Robots performing physical tasks"
        ],
        answer: "Systems that rely on hand-coded rules and logic"
      },
      {
        type: "mcq",
        q: "What caused the 'AI Winter'?",
        options: [
          "Global economic crisis",
          "Unrealistic expectations and lack of computational power",
          "AI becoming too advanced",
          "Overabundance of funding"
        ],
        answer: "Unrealistic expectations and lack of computational power"
      },
      {
        type: "mcq",
        q: "Which of the following is NOT typically considered a key subfield of AI?",
        options: [
          "Natural Language Processing",
          "Computer Vision",
          "Thermodynamics",
          "Robotics"
        ],
        answer: "Thermodynamics"
      },

      // ==== True / False ====
      { type: "tf", q: "Machine Learning is a subfield of AI.", answer: "T" },
      { type: "tf", q: "Classical AI relied heavily on data-driven learning from large datasets.", answer: "F" },
      { type: "tf", q: "AI, Data Science, and Analytics are identical fields with no real differences.", answer: "F" },
      { type: "tf", q: "Ethical considerations in AI include fairness, transparency, and avoiding bias.", answer: "T" },
      { type: "tf", q: "The future of AI is universally agreed to be risk-free and without controversy.", answer: "F" },
      { type: "tf", q: "Deep Learning is based on artificial neural networks inspired by the human brain.", answer: "T" },
      { type: "tf", q: "Natural Language Processing (NLP) and Computer Vision are examples of AI subfields.", answer: "T" },
      { type: "tf", q: "Artificial Intelligence aims to create systems that can mimic aspects of human intelligence.", answer: "T" },
      { type: "tf", q: "The 'AI Winter' refers to a period when AI research was thriving due to abundant funding.", answer: "F" },
      { type: "tf", q: "Real AI applications include recommendation systems, virtual assistants, and autonomous vehicles.", answer: "T" }
    ]
  }
};
