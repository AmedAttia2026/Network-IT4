const quizData = {
  courseTitle: "Artificial Intelligence",
  "tutorial-1-hybrid": {
    title: "Artificial Intelligence - Sheet 1 (MCQ & Fill Hybrid)",
    data: [
      // ====================================================================
      // =========== Part 1: Multiple-Choice Questions (MCQ) ================
      // ====================================================================
      {
        type: "mcq",
        q: "Which of the following best describes Classical AI?",
        options: [
          "Systems that rely on hand-coded rules and logic",
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
          "Unrealistic expectations and lack of computational power",
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
          "Thermodynamics",
          "Robotics"
        ],
        correct: 2
      },

      // ====================================================================
      // =========== Part 2: True / False Questions (Binary MCQ) ============
      // ====================================================================
      { type: "mcq", q: "Machine Learning is a subfield of AI.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "Classical AI relied heavily on data-driven learning from large datasets.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "AI, Data Science, and Analytics are identical fields with no real differences.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "Ethical considerations in AI include fairness, transparency, and avoiding bias.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "The future of AI is universally agreed to be risk-free and without controversy.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "Deep Learning is based on artificial neural networks inspired by the human brain.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "Natural Language Processing (NLP) and Computer Vision are examples of AI subfields.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "Artificial Intelligence aims to create systems that can mimic aspects of human intelligence.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "The 'AI Winter' refers to a period when AI research was thriving due to abundant funding.", options: ["True", "False"], correct: 1 },
      { type: "mcq", q: "Real AI applications include recommendation systems, virtual assistants, and autonomous vehicles.", options: ["True", "False"], correct: 0 },
      
      // ====================================================================
      // ======= Part 3: Short-Answer Questions (Fill-in-the-Blank) =========
      // ====================================================================
      {
        type: "fill",
        q: "Define Artificial Intelligence.",
        answer: "The field of computer science that aims to create machines capable of performing tasks that typically require human intelligence, such as reasoning, learning, and problem-solving."
      },
      {
        type: "fill",
        q: "What is the main difference between AI, Data Science, and Analytics?",
        answer: "AI: building systems that make decisions/learn; Data Science: extracting insights from data; Analytics: interpreting data for decision-making."
      },
      {
        type: "fill",
        q: "Give one example of a real-world AI application used in daily life.",
        answer: "Voice assistants (Siri, Alexa) / Recommendation systems (Netflix, YouTube) / Facial recognition."
      },
      {
        type: "fill",
        q: "State one ethical concern that arises with the increasing use of AI.",
        answer: "Bias and fairness / Privacy violations / Lack of transparency."
      },
      {
        type: "fill",
        q: "Why is the data-driven paradigm considered essential for modern AI systems?",
        answer: "Modern AI models depend on large amounts of data to learn patterns and make accurate predictions or decisions."
      },
      
      // ====================================================================
      // ======= Part 4: Discussion Questions (Fill-in-the-Blank) ===========
      // ====================================================================
      {
        type: "fill",
        q: "Summarize the comparison between Classical AI, Machine Learning (ML), and Deep Learning (DL).",
        answer: "Classical AI: Rule-based logic. ML: Learn from data. DL: Uses neural networks; most impactful due to success in perception tasks (image/speech)."
      },
      {
        type: "fill",
        q: "How did advances in data availability and computing power contribute to the resurgence of AI?",
        answer: "Allowed AI systems to train on massive datasets (Big Data) and utilize powerful processors (GPUs), dramatically improving performance."
      },
      {
        type: "fill",
        q: "State an industry likely to be transformed by AI in the next decade (e.g., Healthcare) and the main reason.",
        answer: "Healthcare: Automation of diagnosis (e.g., image analysis). OR Transportation: Development of autonomous vehicles."
      },
      {
        type: "fill",
        q: "Summarize the potential job impact of AI.",
        answer: "AI will likely replace routine jobs but create new roles in maintenance, data analysis, and ethics oversight; net effect depends on societal adaptation."
      },
      {
        type: "fill",
        q: "Summarize the balance of opportunities vs. risks in the future of AI.",
        answer: "Opportunities: increased efficiency and innovation. Risks: ethical misuse, bias, and unemployment. The impact depends on responsible development and governance."
      }
    ]
  }
};
