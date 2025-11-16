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
  },
  
  // -----------------------------------------------------------------------------------
  // ====== محتوى Python Sets (تم الإبقاء عليه كـ type: 'fill' لضمان عمل الأكواد) =======
  // -----------------------------------------------------------------------------------
  "LEC 3": {
    "lectureTitle": "ARTIFICIAL INTELLIGENCE - Lecture 3: Python Sets",
    "data": [ 
      {
        "type": "fill", 
        "q": "Slide 3: Python Sets. Code:\nmySet = {\"apple\", \"banana\", \"cherry\"}\nprint(mySet)",
        "answer": "{'apple', 'cherry', 'banana'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 4: Set: Duplicates Not Allowed. Code:\nmySet = {\"apple\", \"banana\", \"apple\", \"cherry\"}\nprint(mySet)",
        "answer": "{'apple', 'cherry', 'banana'}"
      },
      {
        "type": "fill",
        "q": "Slide 4: Set: Duplicates Not Allowed (True/1). Code:\nmySet = {\"apple\", \"banana\", \"apple\", \"cherry\", True, 1, 2}\nprint(mySet)",
        "answer": "{'cherry', True, 2, 'apple', 'banana'}"
      },
      {
        "type": "fill",
        "q": "Slide 4: Set: Duplicates Not Allowed (False/0). Code:\nmySet = {\"apple\", \"banana\", \"apple\", \"cherry\", False, 1, 0}\nprint(mySet)",
        "answer": "{False, 1, 'apple', 'banana', 'cherry'}"
      },
      {
        "type": "fill",
        "q": "Slide 5: Set: Get Length (len()). Code:\nmySet = {\"apple\", \"banana\", \"cherry\"}\nprint(len(mySet))",
        "answer": "3"
      },
      {
        "type": "fill",
        "q": "Slide 5: Set: Get Length (len() with duplicates). Code:\nmySet = {\"apple\", \"banana\", \"cherry\", False, 1, 0}\nprint(len(mySet))",
        "answer": "5"
      },
      {
        "type": "fill",
        "q": "Slide 6: Set: Items' Data Types (Type Check). Code:\nmyset = {\"apple\", \"banana\", \"cherry\"}\nprint(type(myset))",
        "answer": "<class 'set'>"
      },
      {
        "type": "fill",
        "q": "Slide 7: Set: Creation (Using literals). Code:\nset1 = {1, 2, 3, 4}\nprint(set1)",
        "answer": "{1, 2, 3, 4}"
      },
      {
        "type": "fill",
        "q": "Slide 7: Set: Creation (Using set() constructor). Code:\nset2 = set()\nprint(set2)",
        "answer": "set()"
      },
      {
        "type": "fill",
        "q": "Slide 7: Set: Creation (From string). Code:\nset3 = set(\"Hello\")\nprint(set3)",
        "answer": "{'e', 'l', 'H', 'o'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 7: Set: Creation (From list). Code:\n# Creating a Set with the use of a List\nset4 = set([\"Borg1\", \"University1\", \"Borg1\"])\nprint(set4)",
        "answer": "{'University1', 'Borg1'}"
      },
      {
        "type": "fill",
        "q": "Slide 7: Set: Creation (From tuple). Code:\n# Creating a Set with the use of a tuple\ntup = (\"Borg2\", \"University2\", \"Borg2\")\nprint(set(tup))",
        "answer": "{'University2', 'Borg2'}"
      },
      {
        "type": "fill",
        "q": "Slide 7: Set: Creation (From dictionary - only keys). Code:\n# Creating a Set with the use of a dictionary\nd = {\"Borg3\": 1, \"University3\": 2, \"Borg3\": 3}\nprint(set(d))",
        "answer": "{'Borg3', 'University3'}"
      },
      {
        "type": "fill",
        "q": "Slide 8: Set: Accessing/Unindexed (TypeError Example). Code:\nset1 = {3, 1, 4, 1, 5, 9, 2}\nprint(set1)\n# Unindexed: Accessing elements by index is not possible\ntry:\n    print(set1[0])\nexcept TypeError as e:\n    print(e)",
        "answer": "{1, 2, 3, 4, 5, 9}\n'set' object is not subscriptable"
      },
      {
        "type": "fill",
        "q": "Slide 9: Set: Adding Elements (add() and update()). Code:\n# Creating a set\nset1 = {1, 2, 3}\n# Add one item\nset1.add(4)\n# Add multiple items\nset1.update([5, 6])\nprint(set1)",
        "answer": "{1, 2, 3, 4, 5, 6}"
      },
      {
        "type": "fill",
        "q": "Slide 9: Set: Adding Elements (update() with another set). Code:\nset1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset1.update(set2)\nprint(set1)",
        "answer": "{1, 2, 'a', 3, 'b', 'c'}"
      },
      {
        "type": "fill",
        "q": "Slide 10: Set: Accessing Elements (Iterating and 'in' keyword). Code:\nset1 = set([\"Borg\", \"El-Arab\", \"University.\"])\n# Accessing element using For loop\nfor i in set1:\n    print(i, end=\" \")\n# Checking the element using in keyword\nprint(\"Borg\" in set1)",
        "answer": "El-Arab Borg University. True # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 12: Set: Removing Elements (remove()). Code:\n# Using Remove Method\nset1 = {1, 2, 3, 4, 5}\nset1.remove(3)\nprint(set1)\n# Attempting to remove an element that does not exist\ntry:\n    set1.remove(10)\nexcept KeyError as e:\n    print(\"Error:\", e)",
        "answer": "{1, 2, 4, 5}\nError: 10"
      },
      {
        "type": "fill",
        "q": "Slide 12: Set: Removing Elements (discard()). Code:\n# Using discard() Method\nset1 = {1, 2, 4, 5}\nset1.discard(4)\nprint(set1)\n# Attempting to discard an element that does not exist\nset1.discard(10) # No error raised\nprint(set1)",
        "answer": "{1, 2, 5}\n{1, 2, 5}"
      },
      {
        "type": "fill",
        "q": "Slide 13: Set: Removing Elements (clear()). Code:\nset1 = {1, 2, 3, 4, 5}\nset1.clear()\nprint(set1)",
        "answer": "set()"
      },
      {
        "type": "fill",
        "q": "Slide 14: Set: Removing Elements (pop()). Code:\nset1 = {1, 2, 3, 4, 5}\nval = set1.pop()\nprint(val)\nprint(set1)\n# Using pop on an empty set\nset1.clear() # Clear the set to make it empty\ntry:\n    set1.pop()\nexcept KeyError as e:\n    print(\"Error:\", e)",
        "answer": "1\n{2, 3, 4, 5} # The popped element and the remaining set can vary\nError: 'pop from an empty set'"
      },
      {
        "type": "fill",
        "q": "Slide 15: Sets: Union operation (union() function). Code:\nset1 = {\"A\", \"B\", \"C\"}\nset2 = {\"D\", \"E\"}\nset4 = set1.union(set2)\nprint(\"Union using union() function\")\nprint(set4)",
        "answer": "Union using union() function\n{'D', 'E', 'B', 'C', 'A'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 15: Sets: Union operation (| operator). Code:\nset1 = {\"A\", \"B\", \"C\"}\nset3 = {\"F\", \"G\"}\nset4 = set1 | set3\nprint(\"\\nUnion using '|' operator\")\nprint(set4)",
        "answer": "\nUnion using '|' operator\n{'G', 'B', 'F', 'C', 'A'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 16: Sets: Union operation (Multiple sets with union()). Code:\nset1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset3 = {\"John\", \"Elena\"}\nset4 = {\"apple\", \"bananas\", \"cherry\"}\nmyset = set1.union(set2, set3, set4)\nprint(myset)",
        "answer": "{'b', 1, 2, 3, 'cherry', 'Elena', 'apple', 'c', 'a', 'bananas', 'John'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 16: Sets: Union operation (Multiple sets with | operator). Code:\nset1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset3 = {\"John\", \"Elena\"}\nset4 = {\"apple\", \"bananas\", \"cherry\"}\nmyset = set1 | set2 | set3 | set4\nprint(myset)",
        "answer": "{1, 2, 3, 'b', 'Elena', 'cherry', 'apple', 'John', 'bananas', 'c', 'a'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 17: Sets: Operator vs Method (union() with non-set iterables). Code:\nset1 = {\"a\", \"b\", \"c\"}\nset2 = (1, 2, 3) # tuple\nset3 = [\"John\", \"Elena\"] # list\nmyset = set1.union(set2, set3)\nprint(\"Union using union() function\")\nprint(myset)",
        "answer": "Union using union() function\n{'a', 2, 1, 3, 'c', 'b', 'John', 'Elena'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 17: Sets: Operator vs Method (| operator with non-set iterables). Code:\nset1 = {\"a\", \"b\", \"c\"}\nset2 = (1, 2, 3) # tuple\nset3 = [\"John\", \"Elena\"] # list\ntry:\n    myset = set1 | set2 | set3\n    print(myset)\nexcept TypeError as e:\n    print(\"Union using '|' operator\")\n    print(e)",
        "answer": "Union using '|' operator\nunsupported operand type(s) for |: 'set' and 'tuple'"
      },
      {
        "type": "fill",
        "q": "Slide 18: Sets: Intersection operation (using intersection()). Code:\nset1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\n# Intersection using: intersection() function\nset3 = set1.intersection(set2)\nprint(\"Intersection using intersection() function\")\nprint(set3)",
        "answer": "Intersection using intersection() function\n{3, 4}"
      },
      {
        "type": "fill",
        "q": "Slide 18: Sets: Intersection operation (using & operator). Code:\nset1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\n# Intersection using: \"&\" operator\nset3 = set1 & set2\nprint(\"\\nIntersection using '&' operator\")\nprint(set3)",
        "answer": "\nIntersection using '&' operator\n{3, 4}"
      },
      {
        "type": "fill",
        "q": "Slide 19: Sets: Intersection operation (intersection_update()). Code:\nset1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset1.intersection_update(set2)\nprint(set1)",
        "answer": "{'apple'}"
      },
      {
        "type": "fill",
        "q": "Slide 20: Sets: Differences (using difference()). Code:\nset1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\nprint(\" set1: \", set1);\nprint(\" set2: \", set2)\n# Difference of two sets: using difference() function\nset3 = set1.difference(set2)\nprint(\"\\nDifference of two sets using difference() function\")\nprint(set3)",
        "answer": " set1: {0, 1, 2, 3, 4}\n set2: {3, 4, 5, 6, 7, 8}\n\nDifference of two sets using difference() function\n{0, 1, 2}"
      },
      {
        "type": "fill",
        "q": "Slide 20: Sets: Differences (using - operator). Code:\nset1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\n# Difference of two sets: using '-' operator\nset3 = set1 - set2\nprint(\"\\nDifference of two sets using '-' operator\")\nprint(set3)",
        "answer": "\nDifference of two sets using '-' operator\n{0, 1, 2}"
      },
      {
        "type": "fill",
        "q": "Slide 21: Sets: Differences (difference_update()). Code:\nset1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset1.difference_update(set2)\nprint(set1)",
        "answer": "{'cherry', 'banana'}"
      },
      {
        "type": "fill",
        "q": "Slide 22: Sets: Symmetric Differences (symmetric_difference()). Code:\nset1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset3 = set1.symmetric_difference(set2)\nprint(set3)",
        "answer": "{'banana', 'microsoft', 'cherry', 'google'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 22: Sets: Symmetric Differences (^ operator). Code:\nset1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset3 = set1 ^ set2\nprint(set3)",
        "answer": "{'banana', 'google', 'microsoft', 'cherry'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 23: Sets: Symmetric Differences (symmetric_difference_update()). Code:\nset1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset1.symmetric_difference_update(set2)\nprint(set1)",
        "answer": "{'banana', 'google', 'microsoft', 'cherry'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 24: Sets: Maximum and Minimum Element (min() and max()). Code:\ns1 = {4, 12, 10, 9, 4, 13}\nprint(\"Minimum element: \", min(s1))\nprint(\"Maximum element: \", max(s1))",
        "answer": "Minimum element: 4\nMaximum element: 13"
      },
      {
        "type": "fill",
        "q": "Slide 25: Sets: Maximum and Minimum Element (sorted()). Code:\ns = {5, 3, 9, 1, 7}\n# Sorting the set (converts it into a sorted list)\nsorted_s = sorted(s)\nprint(\"Minimum element:\", sorted_s[0])\nprint(\"Maximum element:\", sorted_s[-1])",
        "answer": "Minimum element: 1\nMaximum element: 9"
      },
      {
        "type": "fill",
        "q": "Slide 28: Set: Frozen (From list). Code:\n# Creating a frozenset from a list\nfset = frozenset([1, 2, 3, 4, 5])\nprint(fset)",
        "answer": "frozenset({1, 2, 3, 4, 5})"
      },
      {
        "type": "fill",
        "q": "Slide 28: Set: Frozen (From set). Code:\n# Creating a frozenset from a set\nset1 = {3, 1, 4, 1, 5}\nfset = frozenset(set1)\nprint(fset)",
        "answer": "frozenset({1, 3, 4, 5})"
      },
      {
        "type": "fill",
        "q": "Slide 30: Set: Typecasting Objects (From list). Code:\n# Typecasting list into set\nli = [1, 2, 3, 3, 4, 5, 5, 6, 2]\nset1 = set(li)\nprint(set1)",
        "answer": "{1, 2, 3, 4, 5, 6}"
      },
      {
        "type": "fill",
        "q": "Slide 30: Set: Typecasting Objects (From string). Code:\n# Typecasting string into set\ns = \"Hello\"\nset1 = set(s)\nprint(set1)",
        "answer": "{'l', 'H', 'e', 'o'} # Order may vary"
      },
      {
        "type": "fill",
        "q": "Slide 30: Set: Typecasting Objects (From dictionary). Code:\n# Typecasting dictionary into set\nd = {1: \"One\", 2: \"Two\", 3: \"Three\"}\nset1 = set(d)\nprint(set1)",
        "answer": "{1, 2, 3}"
      }
    ]
  }
};
