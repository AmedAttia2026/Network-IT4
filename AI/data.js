const quizData = {
  courseTitle: "Artificial Intelligence",
  "tutorial-1": {
    title: "tutorial-1",
    data: [
      // ==== MCQs (Artificial Intelligence - تم تصحيحها لاستخدام 'correct' مع الفهرس) ====
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

      // ==== True / False (Artificial Intelligence - تم توحيدها لاستخدام 'correct') ====
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
  },
  
  // ===================================================================================
  // ====== تم إضافة محتوى Python Sets هنا تحت اسم LEC 3 ====================
  // ===================================================================================
  "LEC 3": {
    "lectureTitle": "ARTIFICIAL INTELLIGENCE - Lecture 3: Python Sets",
    "extractedCode": [
      {
        "slideTitle": "Python Sets",
        "page": 3,
        "code": "mySet = {\"apple\", \"banana\", \"cherry\"}\nprint(mySet)",
        "output": "{'apple', 'cherry', 'banana'}\n# OR\n{'banana', 'apple', 'cherry'}"
      },
      {
        "slideTitle": "Set: Duplicates Not Allowed",
        "page": 4,
        "code": "mySet = {\"apple\", \"banana\", \"apple\", \"cherry\"}\nprint(mySet)",
        "output": "{'apple', 'cherry', 'banana'}"
      },
      {
        "slideTitle": "Set: Duplicates Not Allowed (True/1)",
        "page": 4,
        "code": "mySet = {\"apple\", \"banana\", \"apple\", \"cherry\", True, 1, 2}\nprint(mySet)",
        "output": "{'cherry', True, 2, 'apple', 'banana'}"
      },
      {
        "slideTitle": "Set: Duplicates Not Allowed (False/0)",
        "page": 4,
        "code": "mySet = {\"apple\", \"banana\", \"apple\", \"cherry\", False, 1, 0}\nprint(mySet)",
        "output": "{False, 1, 'apple', 'banana', 'cherry'}"
      },
      {
        "slideTitle": "Set: Get Length (len())",
        "page": 5,
        "code": "mySet = {\"apple\", \"banana\", \"cherry\"}\nprint(len(mySet))",
        "output": "3"
      },
      {
        "slideTitle": "Set: Get Length (len() with duplicates)",
        "page": 5,
        "code": "mySet = {\"apple\", \"banana\", \"cherry\", False, 1, 0}\nprint(len(mySet))",
        "output": "5"
      },
      {
        "slideTitle": "Set: Items' Data Types (Type Check)",
        "page": 6,
        "code": "myset = {\"apple\", \"banana\", \"cherry\"}\nprint(type(myset))",
        "output": "<class 'set'>"
      },
      {
        "slideTitle": "Set: Creation (Using literals)",
        "page": 7,
        "code": "set1 = {1, 2, 3, 4}\nprint(set1)",
        "output": "{1, 2, 3, 4}"
      },
      {
        "slideTitle": "Set: Creation (Using set() constructor)",
        "page": 7,
        "code": "set2 = set()\nprint(set2)",
        "output": "set()"
      },
      {
        "slideTitle": "Set: Creation (From string)",
        "page": 7,
        "code": "set3 = set(\"Hello\")\nprint(set3)",
        "output": "{'e', 'l', 'H', 'o'} # Order may vary, 'l' is duplicated but appears once"
      },
      {
        "slideTitle": "Set: Creation (From list)",
        "page": 7,
        "code": "# Creating a Set with the use of a List\nset4 = set([\"Borg1\", \"University1\", \"Borg1\"])\nprint(set4)",
        "output": "{'University1', 'Borg1'}"
      },
      {
        "slideTitle": "Set: Creation (From tuple)",
        "page": 7,
        "code": "# Creating a Set with the use of a tuple\ntup = (\"Borg2\", \"University2\", \"Borg2\")\nprint(set(tup))",
        "output": "{'University2', 'Borg2'}"
      },
      {
        "slideTitle": "Set: Creation (From dictionary - only keys)",
        "page": 7,
        "code": "# Creating a Set with the use of a dictionary\nd = {\"Borg3\": 1, \"University3\": 2, \"Borg3\": 3}\nprint(set(d))",
        "output": "{'Borg3', 'University3'}"
      },
      {
        "slideTitle": "Set: Accessing/Unindexed (TypeError Example)",
        "page": 8,
        "code": "set1 = {3, 1, 4, 1, 5, 9, 2}\nprint(set1)\n# Unindexed: Accessing elements by index is not possible\ntry:\n    print(set1[0])\nexcept TypeError as e:\n    print(e)",
        "output": "{1, 2, 3, 4, 5, 9}\n'set' object is not subscriptable"
      },
      {
        "slideTitle": "Set: Adding Elements (add() and update())",
        "page": 9,
        "code": "# Creating a set\nset1 = {1, 2, 3}\n# Add one item\nset1.add(4)\n# Add multiple items\nset1.update([5, 6])\nprint(set1)",
        "output": "{1, 2, 3, 4, 5, 6}"
      },
      {
        "slideTitle": "Set: Adding Elements (update() with another set)",
        "page": 9,
        "code": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset1.update(set2)\nprint(set1)",
        "output": "{1, 2, 'a', 3, 'b', 'c'}"
      },
      {
        "slideTitle": "Set: Accessing Elements (Iterating and 'in' keyword)",
        "page": 10,
        "code": "set1 = set([\"Borg\", \"El-Arab\", \"University.\"])\n# Accessing element using For loop\nfor i in set1:\n    print(i, end=\" \")\n# Checking the element using in keyword\nprint(\"Borg\" in set1)",
        "output": "El-Arab Borg University. True"
      },
      {
        "slideTitle": "Set: Removing Elements (remove())",
        "page": 12,
        "code": "# Using Remove Method\nset1 = {1, 2, 3, 4, 5}\nset1.remove(3)\nprint(set1)\n# Attempting to remove an element that does not exist\ntry:\n    set1.remove(10)\nexcept KeyError as e:\n    print(\"Error:\", e)",
        "output": "{1, 2, 4, 5}\nError: 10"
      },
      {
        "slideTitle": "Set: Removing Elements (discard())",
        "page": 12,
        "code": "# Using discard() Method\nset1 = {1, 2, 4, 5}\nset1.discard(4)\nprint(set1)\n# Attempting to discard an element that does not exist\nset1.discard(10) # No error raised\nprint(set1)",
        "output": "{1, 2, 5}\n{1, 2, 5}"
      },
      {
        "slideTitle": "Set: Removing Elements (clear())",
        "page": 13,
        "code": "set1 = {1, 2, 3, 4, 5}\nset1.clear()\nprint(set1)",
        "output": "set()"
      },
      {
        "slideTitle": "Set: Removing Elements (pop())",
        "page": 14,
        "code": "set1 = {1, 2, 3, 4, 5}\nval = set1.pop()\nprint(val)\nprint(set1)\n# Using pop on an empty set\nset1.clear() # Clear the set to make it empty\ntry:\n    set1.pop()\nexcept KeyError as e:\n    print(\"Error:\", e)",
        "output": "1\n{2, 3, 4, 5} # The popped element and the remaining set can vary\nError: 'pop from an empty set'"
      },
      {
        "slideTitle": "Sets: Union operation (union() function)",
        "page": 15,
        "code": "set1 = {\"A\", \"B\", \"C\"}\nset2 = {\"D\", \"E\"}\nset4 = set1.union(set2)\nprint(\"Union using union() function\")\nprint(set4)",
        "output": "Union using union() function\n{'D', 'E', 'B', 'C', 'A'}"
      },
      {
        "slideTitle": "Sets: Union operation (| operator)",
        "page": 15,
        "code": "set1 = {\"A\", \"B\", \"C\"}\nset3 = {\"F\", \"G\"}\nset4 = set1 | set3\nprint(\"\\nUnion using '|' operator\")\nprint(set4)",
        "output": "\nUnion using '|' operator\n{'G', 'B', 'F', 'C', 'A'}"
      },
      {
        "slideTitle": "Sets: Union operation (Multiple sets with union())",
        "page": 16,
        "code": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset3 = {\"John\", \"Elena\"}\nset4 = {\"apple\", \"bananas\", \"cherry\"}\nmyset = set1.union(set2, set3, set4)\nprint(myset)",
        "output": "{'b', 1, 2, 3, 'cherry', 'Elena', 'apple', 'c', 'a', 'bananas', 'John'} # Order may vary"
      },
      {
        "slideTitle": "Sets: Union operation (Multiple sets with | operator)",
        "page": 16,
        "code": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset3 = {\"John\", \"Elena\"}\nset4 = {\"apple\", \"bananas\", \"cherry\"}\nmyset = set1 | set2 | set3 | set4\nprint(myset)",
        "output": "{1, 2, 3, 'b', 'Elena', 'cherry', 'apple', 'John', 'bananas', 'c', 'a'} # Order may vary"
      },
      {
        "slideTitle": "Sets: Operator vs Method (union() with non-set iterables)",
        "page": 17,
        "code": "set1 = {\"a\", \"b\", \"c\"}\nset2 = (1, 2, 3) # tuple\nset3 = [\"John\", \"Elena\"] # list\nmyset = set1.union(set2, set3)\nprint(\"Union using union() function\")\nprint(myset)",
        "output": "Union using union() function\n{'a', 2, 1, 3, 'c', 'b', 'John', 'Elena'}"
      },
      {
        "slideTitle": "Sets: Operator vs Method (| operator with non-set iterables)",
        "page": 17,
        "code": "set1 = {\"a\", \"b\", \"c\"}\nset2 = (1, 2, 3) # tuple\nset3 = [\"John\", \"Elena\"] # list\ntry:\n    myset = set1 | set2 | set3\n    print(myset)\nexcept TypeError as e:\n    print(\"Union using '|' operator\")\n    print(e)",
        "output": "Union using '|' operator\nunsupported operand type(s) for |: 'set' and 'tuple'"
      },
      {
        "slideTitle": "Sets: Intersection operation (using intersection())",
        "page": 18,
        "code": "set1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\n# Intersection using: intersection() function\nset3 = set1.intersection(set2)\nprint(\"Intersection using intersection() function\")\nprint(set3)",
        "output": "Intersection using intersection() function\n{3, 4}"
      },
      {
        "slideTitle": "Sets: Intersection operation (using & operator)",
        "page": 18,
        "code": "set1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\n# Intersection using: \"&\" operator\nset3 = set1 & set2\nprint(\"\\nIntersection using '&' operator\")\nprint(set3)",
        "output": "\nIntersection using '&' operator\n{3, 4}"
      },
      {
        "slideTitle": "Sets: Intersection operation (intersection_update())",
        "page": 19,
        "code": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset1.intersection_update(set2)\nprint(set1)",
        "output": "{'apple'}"
      },
      {
        "slideTitle": "Sets: Differences (using difference())",
        "page": 20,
        "code": "set1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\nprint(\" set1: \", set1);\nprint(\" set2: \", set2)\n# Difference of two sets: using difference() function\nset3 = set1.difference(set2)\nprint(\"\\nDifference of two sets using difference() function\")\nprint(set3)",
        "output": " set1: {0, 1, 2, 3, 4}\n set2: {3, 4, 5, 6, 7, 8}\n\nDifference of two sets using difference() function\n{0, 1, 2}"
      },
      {
        "slideTitle": "Sets: Differences (using - operator)",
        "page": 20,
        "code": "set1 = set()\nset2 = set()\nfor i in range(5):\n    set1.add(i)\nfor i in range(3, 9):\n    set2.add(i)\n# Difference of two sets: using '-' operator\nset3 = set1 - set2\nprint(\"\\nDifference of two sets using '-' operator\")\nprint(set3)",
        "output": "\nDifference of two sets using '-' operator\n{0, 1, 2}"
      },
      {
        "slideTitle": "Sets: Differences (difference_update())",
        "page": 21,
        "code": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset1.difference_update(set2)\nprint(set1)",
        "output": "{'cherry', 'banana'}"
      },
      {
        "slideTitle": "Sets: Symmetric Differences (symmetric_difference())",
        "page": 22,
        "code": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset3 = set1.symmetric_difference(set2)\nprint(set3)",
        "output": "{'banana', 'microsoft', 'cherry', 'google'}"
      },
      {
        "slideTitle": "Sets: Symmetric Differences (^ operator)",
        "page": 22,
        "code": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset3 = set1 ^ set2\nprint(set3)",
        "output": "{'banana', 'google', 'microsoft', 'cherry'}"
      },
      {
        "slideTitle": "Sets: Symmetric Differences (symmetric_difference_update())",
        "page": 23,
        "code": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\nset1.symmetric_difference_update(set2)\nprint(set1)",
        "output": "{'banana', 'google', 'microsoft', 'cherry'}"
      },
      {
        "slideTitle": "Sets: Maximum and Minimum Element (min() and max())",
        "page": 24,
        "code": "s1 = {4, 12, 10, 9, 4, 13}\nprint(\"Minimum element: \", min(s1))\nprint(\"Maximum element: \", max(s1))",
        "output": "Minimum element: 4\nMaximum element: 13"
      },
      {
        "slideTitle": "Sets: Maximum and Minimum Element (sorted())",
        "page": 25,
        "code": "s = {5, 3, 9, 1, 7}\n# Sorting the set (converts it into a sorted list)\nsorted_s = sorted(s)\nprint(\"Minimum element:\", sorted_s[0])\nprint(\"Maximum element:\", sorted_s[-1])",
        "output": "Minimum element: 1\nMaximum element: 9"
      },
      {
        "slideTitle": "Set: Frozen (From list)",
        "page": 28,
        "code": "# Creating a frozenset from a list\nfset = frozenset([1, 2, 3, 4, 5])\nprint(fset)",
        "output": "frozenset({1, 2, 3, 4, 5})"
      },
      {
        "slideTitle": "Set: Frozen (From set)",
        "page": 28,
        "code": "# Creating a frozenset from a set\nset1 = {3, 1, 4, 1, 5}\nfset = frozenset(set1)\nprint(fset)",
        "output": "frozenset({1, 3, 4, 5})"
      },
      {
        "slideTitle": "Set: Typecasting Objects (From list)",
        "page": 30,
        "code": "# Typecasting list into set\nli = [1, 2, 3, 3, 4, 5, 5, 6, 2]\nset1 = set(li)\nprint(set1)",
        "output": "{1, 2, 3, 4, 5, 6}"
      },
      {
        "slideTitle": "Set: Typecasting Objects (From string)",
        "page": 30,
        "code": "# Typecasting string into set\ns = \"Hello\"\nset1 = set(s)\nprint(set1)",
        "output": "{'l', 'H', 'e', 'o'}"
      },
      {
        "slideTitle": "Set: Typecasting Objects (From dictionary)",
        "page": 30,
        "code": "# Typecasting dictionary into set\nd = {1: \"One\", 2: \"Two\", 3: \"Three\"}\nset1 = set(d)\nprint(set1)",
        "output": "{1, 2, 3}"
      }
    ]
  }
};
