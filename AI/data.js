/**
 * Consolidated Quiz Data Structure for the Artificial Intelligence Course (4th Year).
 *
 * This structure contains definitions for multiple tutorials, including MCQs (single and binary)
 * and Fill-in-the-Blank (Short Answer) questions.
 */
const quizData = {
  courseTitle: "Artificial Intelligence",

  // Data from the first submission (Sheet 1)
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
      // ======= Part 3 & 4: Short-Answer / Discussion (Fill-in-the-Blank) ==
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
  },

  // Data for the second submission (Sheet 3 - Python Sets)
  "tutorial-3-python-sets": {
    title: "Tutorial Sheet 3 - Python Sets",
    data: [
      // ====================================================================
      // =========== Part A: True / False Questions =========================
      // ====================================================================
      // Q1: Sets in Python can contain duplicate elements.
      { type: "mcq", q: "Sets in Python can contain duplicate elements.", options: ["True", "False"], correct: 1, explanation: "Sets only store unique elements." },
      // Q2: The len() function is used to count the number of items in a set.
      { type: "mcq", q: "The len() function is used to count the number of items in a set.", options: ["True", "False"], correct: 0 },
      // Q3: Sets can hold items of different data types.
      { type: "mcq", q: "Sets can hold items of different data types.", options: ["True", "False"], correct: 0 },
      // Q4: Elements in a set can be accessed using an index.
      { type: "mcq", q: "Elements in a set can be accessed using an index.", options: ["True", "False"], correct: 1, explanation: "Sets are unordered and do not support indexing." },
      // Q5: The add() method inserts a new element into a set.
      { type: "mcq", q: "The add() method inserts a new element into a set.", options: ["True", "False"], correct: 0 },
      // Q6: The remove() method does not raise an error if the element doesn’t exist.
      { type: "mcq", q: "The remove() method does not raise an error if the element doesn’t exist.", options: ["True", "False"], correct: 1, explanation: "The 'remove()' method raises a KeyError if the element is not found." },
      // Q7: The | operator performs a union between two sets.
      { type: "mcq", q: "The | operator performs a union between two sets.", options: ["True", "False"], correct: 0 },
      // Q8: The intersection of two sets gives elements present in both.
      { type: "mcq", q: "The intersection of two sets gives elements present in both.", options: ["True", "False"], correct: 0 },
      // Q9: A frozenset is a mutable type of set.
      { type: "mcq", q: "A frozenset is a mutable type of set.", options: ["True", "False"], correct: 1, explanation: "A frozenset is immutable." },
      // Q10: Lists, tuples, or strings can be converted into sets using set().
      { type: "mcq", q: "Lists, tuples, or strings can be converted into sets using set().", options: ["True", "False"], correct: 0 },

      // ====================================================================
      // =========== Part B: Multiple-Choice Questions ======================
      // ====================================================================
      {
        type: "mcq",
        q: "Which statement correctly creates an empty set?",
        options: ["{}", "set()", "[]", "set([])"],
        correct: 1,
        explanation: "The curly braces {} create an empty dictionary, not an empty set. `set()` is required."
      },
      {
        type: "mcq",
        q: "What happens when a duplicate element is added to a set?",
        options: ["Raises an error", "Ignored", "Replaced", "Duplicated"],
        correct: 1
      },
      {
        type: "mcq",
        q: "Which method removes and returns a random element?",
        options: ["pop()", "remove()", "delete()", "discard()"],
        correct: 0
      },
      {
        type: "mcq",
        q: "What does A & B represent?",
        options: ["Union", "Difference", "Intersection", "Symmetric Difference"],
        correct: 2
      },
      {
        type: "mcq",
        q: "Which method gives elements that exist in the first set but not in the second?",
        options: ["difference()", "union()", "intersection()", "symmetric_difference()"],
        correct: 0
      },
      {
        type: "mcq",
        q: "Which operation gives items that are in either set, but not both?",
        options: ["A | B", "A & B", "A - B", "A ^ B"],
        correct: 3,
        explanation: "The ^ operator performs the Symmetric Difference."
      },
      {
        type: "mcq",
        q: "The discard() method differs from remove() because it:",
        options: ["Removes duplicates only", "Ignores missing elements", "Raises an error", "Adds elements"],
        correct: 1
      },
      {
        type: "mcq",
        q: "What is the output of max({2, 4, 1, 5})?",
        options: ["2", "1", "4", "5"],
        correct: 3
      },
      {
        type: "mcq",
        q: "Which of the following about frozenset is correct?",
        options: ["It is immutable", "It allows duplicates", "It can be changed", "It uses add()"],
        correct: 0
      },
      {
        type: "mcq",
        q: "Converting [1, 2, 2, 3] into a set results in:",
        options: ["{1, 2, 3}", "{1, 2, 2, 3}", "[1, 2, 3]", "(1, 2, 3)"],
        correct: 0,
        explanation: "Sets automatically remove duplicate values."
      },

      // ====================================================================
      // =========== Part C: Programming Tasks (Modeled as Fill) ============
      // ====================================================================
      {
        type: "fill",
        q: "Programming Task 1: Create a set called 'colors' with 'red', 'green', 'blue' and add 'yellow'.",
        answer: "colors = {'red', 'green', 'blue'}; colors.add('yellow')"
      },
      {
        type: "fill",
        q: "Programming Task 2: Write code to find the intersection of {1, 2, 3} and {3, 4, 5}.",
        answer: "set_a = {1, 2, 3}; set_b = {3, 4, 5}; intersection = set_a & set_b"
      },
      {
        type: "fill",
        q: "Programming Task 3: Safely remove 'apple' from a set called 'fruits' without raising an error.",
        answer: "fruits = {'banana', 'orange', 'apple'}; fruits.discard('apple')"
      },
      {
        type: "fill",
        q: "Programming Task 4: Display the maximum and minimum values from {15, 5, 25, 10}.",
        answer: "my_set = {15, 5, 25, 10}; max_val = max(my_set); min_val = min(my_set)"
      },
      {
        type: "fill",
        q: "Programming Task 5: Convert the tuple (2, 4, 4, 6, 8) into a set and print it.",
        answer: "my_tuple = (2, 4, 4, 6, 8); my_set = set(my_tuple); print(my_set)"
      }
    ]
  },

  // Data for the new submission (Sheet 3 - Part 2)
  "tutorial-3-part2-python-basics": {
    title: "Tutorial Sheet 3 (Part 2) - Python Basics",
    data: [
      // ====================================================================
      // =========== Part A: True / False Questions =========================
      // ====================================================================
      { type: "mcq", q: "The match statement in Python works similarly to the switch statement in other languages.", options: ["True", "False"], correct: 0, explanation: "Python's `match` (introduced in Python 3.10) is a structural pattern matching feature similar to `switch`." },
      { type: "mcq", q: "In a match statement, each case can contain an if guard condition.", options: ["True", "False"], correct: 0, explanation: "Cases can include an `if` clause (a 'guard') to add extra matching conditions." },
      { type: "mcq", q: "The membership operator in returns True if the value exists in a sequence.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "The is operator compares two objects by value, not by memory location.", options: ["True", "False"], correct: 1, explanation: "The `is` operator checks for object *identity* (memory address), whereas `==` checks for value equality." },
      { type: "mcq", q: "The expression 'a' in ['a', 'b', 'c'] returns True.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "The not in operator returns True if the item is not found in the given sequence.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "In list comprehension, the for keyword must appear before the if condition.", options: ["True", "False"], correct: 0, explanation: "In a filtering list comprehension, the format is `[expression for item in iterable if condition]`." },
      { type: "mcq", q: "The match statement can only compare numbers, not strings.", options: ["True", "False"], correct: 1, explanation: "The `match` statement can match various types, including strings, lists, tuples, and dictionaries." },
      { type: "mcq", q: "The is operator checks if two variables point to the same object in memory.", options: ["True", "False"], correct: 0 },
      { type: "mcq", q: "[x**2 for x in range(4)] produces [1, 4, 9, 16].", options: ["True", "False"], correct: 1, explanation: "range(4) yields 0, 1, 2, 3. Squaring these gives [0, 1, 4, 9]." },

      // ====================================================================
      // =========== Part B: Multiple-Choice Questions ======================
      // ====================================================================
      {
        type: "mcq",
        q: "What will be the output of the following code? \n`x = 3 \nmatch x: \n  case 1: print('One') \n  case 2: print('Two') \n  case 3: print('Three')`",
        options: ["One", "Two", "Three", "Error"],
        correct: 2
      },
      {
        type: "mcq",
        q: "Which operator checks for object identity?",
        options: ["==", "is", "in", "!="],
        correct: 1,
        explanation: "`is` checks if two objects are the same in memory, while `==` checks if they have the same value."
      },
      {
        type: "mcq",
        q: "What is the output of this code? \n`name = 'Roa' \nprint('a' in name)`",
        options: ["'a'", "True", "False", "Error"],
        correct: 1,
        explanation: "The `in` operator checks if the substring 'a' is present in the string 'Roa'."
      },
      {
        type: "mcq",
        q: "Which of the following is not a membership operator?",
        options: ["in", "not in", "is", "None of the above"],
        correct: 2,
        explanation: "`in` and `not in` are membership operators. `is` is an identity operator."
      },
      {
        type: "mcq",
        q: "What is the output of the following list comprehension? \n`result = [x for x in range(5) if x % 2 == 0] \nprint(result)`",
        options: ["[1, 3, 5]", "[0, 2, 4]", "[2, 4]", "[0, 1, 2, 3, 4]"],
        correct: 1,
        explanation: "`range(5)` yields 0, 1, 2, 3, 4. The condition filters for even numbers (x % 2 == 0)."
      },
      {
        type: "mcq",
        q: "Which statement is true about the is operator?",
        options: ["It compares object identity", "It compares values", "It works only on numbers", "It is the same as =="],
        correct: 0
      },
      {
        type: "mcq",
        q: "What will be printed? \n`a = [1, 2, 3] \nb = a \nprint(a is b)`",
        options: ["True", "False", "Error", "None"],
        correct: 0,
        explanation: "Since 'b' is assigned the reference of 'a', both variables point to the exact same list object in memory, making the identity check (`is`) true."
      },
      {
        type: "mcq",
        q: "Choose the correct list comprehension that generates squares of numbers from 1 to 5.",
        options: ["[x^2 for x in range(1,6)]", "[x**2 for x in range(1,6)]", "[x*2 for x in range(1,6)]", "(x**2 for x in range(1,6))"],
        correct: 1,
        explanation: "`**` is the exponentiation operator in Python. `range(1,6)` generates 1 through 5. Option 'd' creates a generator expression, not a list."
      },
      {
        type: "mcq",
        q: "What does this code print? \n`x = 10 \ny = 10 \nprint(x is y)`",
        options: ["True", "False", "Depends on Python version", "Error"],
        correct: 0,
        explanation: "Python often caches small integers (typically -5 to 256) for efficiency, meaning `x` and `y` reference the same object for the value 10."
      },
      {
        type: "mcq",
        q: "Which of the following statements is correct?",
        options: ["match replaces if-else completely.", "The match statement must always have a default case.", "The case statements are checked in order, top to bottom.", "None of the above."],
        correct: 2,
        explanation: "`match` supplements, not replaces, `if-else`. The default case (`case _`) is optional."
      },

      // ====================================================================
      // =========== Part C: Programming Tasks (Modeled as Fill) ============
      // ====================================================================
      {
        type: "fill",
        q: "Programming Task 1: Write a match-case program that prints “Excellent”, “Good”, or “Poor” based on a score value (A, B, or C).",
        answer: "score = 'A'; match score: case 'A': print('Excellent'); case 'B': print('Good'); case _: print('Poor')"
      },
      {
        type: "fill",
        q: "Programming Task 2: Write a Python program that checks if 'apple' is in a list of fruits using a membership operator.",
        answer: "fruits = ['banana', 'apple', 'cherry']; if 'apple' in fruits: print(True)"
      },
      {
        type: "fill",
        q: "Programming Task 3: Write a program to check if two variables a and b refer to the same object using the identity operator.",
        answer: "a = [1]; b = a; print(a is b)"
      },
      {
        type: "fill",
        q: "Programming Task 4: Use list comprehension to create a list of squares for all numbers from 1 to 10.",
        answer: "squares = [x**2 for x in range(1, 11)]"
      },
      {
        type: "fill",
        q: "Programming Task 5: Write a list comprehension that extracts only even numbers from [1,2,3,4,5,6,7,8].",
        answer: "evens = [x for x in [1,2,3,4,5,6,7,8] if x % 2 == 0]"
      }
    ]
  }
};
