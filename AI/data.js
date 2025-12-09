const quizData = {
    courseTitle: "Artificial Intelligence",

    // بيانات من الأسئلة النصية وسؤال التعبئة
    "tutorial-1-hybrid": {
        title: "Artificial Intelligence - Sheet 1 (Fill Question)",
        data: [
            {
                type: "fill",
                q: "1. Define Artificial Intelligence.",
                answer: "The field of computer science that aims to create machines capable of performing tasks that typically require human intelligence, such as reasoning, learning, and problem-solving."
            }
        ]
    },

    // Sheet 2: Python Fundamentals
    "sheet-2-python-fundamentals": {
        title: "Sheet 2 - Python Fundamentals (True/False & MCQ)",
        data: [
            // Part A - True / False Questions
            { type: 'tf', q: "1. In Python, variable names can start with numbers.", correct: false, rationale: "Variable names must start with a letter or an underscore." },
            { type: 'tf', q: "2. A list in Python is immutable.", correct: false, rationale: "Lists are mutable; tuples and strings are immutable." },
            { type: 'tf', q: "3. The `if`, `elif`, and `else` keywords are used for conditional statements.", correct: true },
            { type: 'tf', q: "4. The `for` loop in Python can iterate over lists, tuples, or strings.", correct: true },
            { type: 'tf', q: "5. A tuple allows modification of its elements after creation.", correct: false, rationale: "Tuples are immutable." },
            { type: 'tf', q: "6. The `try-except` block is used for handling exceptions.", correct: true },
            { type: 'tf', q: "7. The `import` statement is used to include external or user-defined modules.", correct: true },
            { type: 'tf', q: "8. The `reload()` function in Python can be used to re-import a module after changes.", correct: true, rationale: "Reloading a module is possible using `importlib.reload()` in modern Python." },
            { type: 'tf', q: "9. Arrays in Python are the same as lists in all aspects.", correct: false, rationale: "Lists are more generic; arrays (e.g., NumPy) are specialized for numerical operations." },
            { type: 'tf', q: "10. The keyword `def` is used to define a function in Python.", correct: true },

            // Part B - Multiple-Choice Questions
            { type: 'mcq', q: "1. Which of the following is a mutable data type in Python?", options: ["Tuple", "String", "List", "Integer"], correct: 2, rationale: "Lists can be modified after creation." },
            { type: 'mcq', q: "2. What will `len([10, 20, 30])` return?", options: ["2", "3", "30", "Error"], correct: 1, rationale: "The `len()` function returns the number of items in the list." },
            { type: 'mcq', q: "3. Which of these keywords is used to define a function in Python?", options: ["function", "def", "define", "func"], correct: 1 },
            { type: 'mcq', q: "4. Which exception will occur if you divide a number by zero?", options: ["SyntaxError", "NameError", "ZeroDivisionError", "ValueError"], correct: 2 },
            { type: 'mcq', q: "5. Which statement is used to import a specific function from a module?", options: ["import module.function", "from module import function", "module(function)", "include module.function"], correct: 1 },
            { type: 'mcq', q: "6. What does the following code print? (x = (1, 2, 3) \nx[0] = 5)", options: ["(5, 2, 3)", "[5, 2, 3]", "Error", "None"], correct: 2, rationale: "The variable 'x' is a tuple (immutable), so its elements cannot be changed." },
            { type: 'mcq', q: "7. Which function is used to handle exceptions in Python?", options: ["except()", "try()", "error()", "try-except"], correct: 3 },
            { type: 'mcq', q: "8. Which of the following creates a dictionary in Python?", options: ["{}", "[]", "()", "dict[]"], correct: 0 },
            { type: 'mcq', q: "9. The correct syntax to reload a module named `myModule` is:", options: ["reload(myModule)", "import.reload(myModule)", "importlib.reload(myModule)", "reload_module(myModule)"], correct: 2, rationale: "Requires the `importlib` library in Python 3." },
            { type: 'mcq', q: "10. What will this code output? (def add(x, y=2): return x + y \nprint(add(3)))", options: ["2", "3", "5", "Error"], correct: 2, rationale: "x is 3, and y defaults to 2, so 3 + 2 = 5." }
        ]
    },

    // Sheet 3 (Part 1): Python Sets
    "sheet-3-python-sets": {
        title: "Sheet 3 - Python Sets (True/False & MCQ)",
        data: [
            // Part A - True / False Questions
            { type: 'tf', q: "1. Sets in Python can contain duplicate elements.", correct: false, rationale: "Sets are defined as collections of unique elements." },
            { type: 'tf', q: "2. The `len()` function is used to count the number of items in a set.", correct: true },
            { type: 'tf', q: "3. Sets can hold items of different data types.", correct: true, rationale: "Sets can hold heterogeneous data types (e.g., integers, strings, tuples)." },
            { type: 'tf', q: "4. Elements in a set can be accessed using an index.", correct: false, rationale: "Sets are unordered and do not support indexing or slicing." },
            { type: 'tf', q: "5. The `add()` method inserts a new element into a set.", correct: true },
            { type: 'tf', q: "6. The `remove()` method does not raise an error if the element doesn’t exist.", correct: false, rationale: "The `remove()` method does raise a `KeyError`; the `discard()` method does not." },
            { type: 'tf', q: "7. The `|` operator performs a union between two sets.", correct: true },
            { type: 'tf', q: "8. The intersection of two sets gives elements present in both.", correct: true },
            { type: 'tf', q: "9. A `frozenset` is a mutable type of set.", correct: false, rationale: "A `frozenset` is an immutable version of a set." },
            { type: 'tf', q: "10. Lists, tuples, or strings can be converted into sets using `set()`.", correct: true },

            // Part B - Multiple-Choice Questions
            { type: 'mcq', q: "1. Which statement correctly creates an empty set?", options: ["{}", "set()", "[]", "set([])"], correct: 1, rationale: "`{}` creates an empty dictionary, not an empty set." },
            { type: 'mcq', q: "2. What happens when a duplicate element is added to a set?", options: ["Raises an error", "Ignored", "Replaced", "Duplicated"], correct: 1, rationale: "Sets automatically maintain uniqueness, so duplicates are silently discarded." },
            { type: 'mcq', q: "3. Which method removes and returns a random element?", options: ["pop()", "remove()", "delete()", "discard()"], correct: 0, rationale: "Since sets are unordered, `pop()` removes an arbitrary (random) element." },
            { type: 'mcq', q: "4. What does `A & B` represent?", options: ["Union", "Difference", "Intersection", "Symmetric Difference"], correct: 2, rationale: "The `&` operator finds elements common to both sets." },
            { type: 'mcq', q: "5. Which method gives elements that exist in the first set but not in the second?", options: ["difference()", "union()", "intersection()", "symmetric_difference()"], correct: 0, rationale: "Difference (or `A - B` operator)." },
            { type: 'mcq', q: "6. Which operation gives items that are in either set, but not both?", options: ["A | B", "A & B", "A - B", "A ^ B"], correct: 3, rationale: "The caret operator (`^`) performs the symmetric difference operation." },
            { type: 'mcq', q: "7. The `discard()` method differs from `remove()` because it:", options: ["Removes duplicates only", "Ignores missing elements", "Raises an error", "Adds elements"], correct: 1, rationale: "If the element is not found, `discard()` does nothing, while `remove()` raises a `KeyError`." },
            { type: 'mcq', q: "8. What is the output of `max({2, 4, 1, 5})`?", options: ["2", "1", "4", "5"], correct: 3 },
            { type: 'mcq', q: "9. Which of the following about `frozenset` is correct?", options: ["It is immutable", "It allows duplicates", "It can be changed", "It uses `add()`"], correct: 0, rationale: "`frozenset` is Python's immutable set type." },
            { type: 'mcq', q: "10. Converting `[1, 2, 2, 3]` into a set results in:", options: ["{1, 2, 3}", "{1, 2, 2, 3}", "[1, 2, 3]", "(1, 2, 3)"], correct: 0, rationale: "The list is converted, and the duplicate `2` is removed." }
        ]
    },

    // Sheet 3 (Part 2): Match, Operators, Comprehension
    "sheet-3-python-advanced": {
        title: "Sheet 3 (Part 2) - Match, Operators, Comprehension (True/False & MCQ)",
        data: [
            // Part A - True / False Questions
            { type: 'tf', q: "1. The `match` statement in Python works similarly to the `switch` statement in other languages.", correct: true, rationale: "It allows pattern matching against an expression." },
            { type: 'tf', q: "2. In a `match` statement, each case can contain an `if` guard condition.", correct: true, rationale: "The `if` guard adds an extra condition that must be met for the case to execute." },
            { type: 'tf', q: "3. The membership operator `in` returns `True` if the value exists in a sequence.", correct: true },
            { type: 'tf', q: "4. The `is` operator compares two objects by value, not by memory location.", correct: false, rationale: "The `is` operator compares object identity (memory location); `==` compares value." },
            { type: 'tf', q: "5. The expression `'a' in ['a', 'b', 'c']` returns `True`.", correct: true },
            { type: 'tf', q: "6. The `not in` operator returns `True` if the item is not found in the given sequence.", correct: true },
            { type: 'tf', q: "7. In list comprehension, the `for` keyword must appear before the `if` condition.", correct: true, rationale: "The structure is `[expression for item in iterable if condition]`." },
            { type: 'tf', q: "8. The `match` statement can only compare numbers, not strings.", correct: false, rationale: "`match` can compare various types, including numbers, strings, and complex patterns." },
            { type: 'tf', q: "9. The `is` operator checks if two variables point to the same object in memory.", correct: true },
            { type: 'tf', q: "10. `[x**2 for x in range(4)]` produces `[1, 4, 9, 16]`.", correct: false, rationale: "`range(4)` produces `0, 1, 2, 3`. Squaring these gives `[0, 1, 4, 9]`." },

            // Part B - Multiple-Choice Questions
            { type: 'mcq', q: "1. What will be the output of the following code? (x = 3 \nmatch x: \n    case 1: print('One') \n    case 3: print('Three'))", options: ["One", "Two", "Three", "Error"], correct: 2, rationale: "The value `x=3` matches the third case statement." },
            { type: 'mcq', q: "2. Which operator checks for **object identity**?", options: ["==", "is", "in", "!="], correct: 1 },
            { type: 'mcq', q: "3. What is the output of this code? (name = 'Roa' \nprint('a' in name))", options: ["'a'", "True", "False", "Error"], correct: 1, rationale: "The check is case-sensitive, and the string 'Roa' does contain the lowercase character 'a'." },
            { type: 'mcq', q: "4. Which of the following is **not** a membership operator?", options: ["in", "not in", "is", "None of the above"], correct: 2, rationale: "`is` is an identity operator. `in` and `not in` are membership operators." },
            { type: 'mcq', q: "5. What is the output of the following list comprehension? (result = [x for x in range(5) if x % 2 == 0])", options: ["[1, 3, 5]", "[0, 2, 4]", "[2, 4]", "[0, 1, 2, 3, 4]"], correct: 1, rationale: "`range(5)` is `0, 1, 2, 3, 4`. Even numbers are 0, 2, and 4." },
            { type: 'mcq', q: "6. Which statement is true about the `is` operator?", options: ["It compares object identity", "It compares values", "It works only on numbers", "It is the same as `==`"], correct: 0 },
            { type: 'mcq', q: "7. What will be printed? (a = [1, 2, 3] \nb = a \nprint(a is b))", options: ["True", "False", "Error", "None"], correct: 0, rationale: "`b = a` means both variables point to the *exact same* list object in memory." },
            { type: 'mcq', q: "8. Choose the correct list comprehension that generates squares of numbers from 1 to 5.", options: ["`[x^2 for x in range(1,6)]`", "`[x**2 for x in range(1,6)]`", "`[x*2 for x in range(1,6)]`", "`[x**2 for x in range(1,6)]` (Generator)"], correct: 1, rationale: "`**` is the exponentiation operator (square), and `range(1,6)` produces numbers 1 through 5." },
            { type: 'mcq', q: "9. What does this code print? (x = 10 \ny = 10 \nprint(x is y))", options: ["True", "False", "Depends on Python version", "Error"], correct: 0, rationale: "Python caches small integers (typically -5 to 256) for optimization, meaning `x` and `y` reference the same object." },
            { type: 'mcq', q: "10. Which of the following statements is correct?", options: ["`match` replaces `if-else` completely.", "The `match` statement must always have a default case.", "The `case` statements are checked in order, top to bottom.", "None of the above."], correct: 2 }
        ]
    },

    // Sheet 4 (Part 2): Advanced Python
    "sheet-4-python-advanced": {
        title: "Sheet 4 (Part 2) - Advanced Python Functions (True/False & MCQ)",
        data: [
            // Part A - True / False Questions
            { type: 'tf', q: "1. The `enumerate()` function can be used to get both the index and the value while looping through a sequence.", correct: true },
            { type: 'tf', q: "2. The `zip()` function combines two or more iterables into a single iterable of tuples.", correct: true },
            { type: 'tf', q: "3. A `lambda` function must always have a name.", correct: false, rationale: "They are anonymous functions." },
            { type: 'tf', q: "4. JSON stands for Java Simple Object Notation.", correct: false, rationale: "JSON stands for JavaScript Object Notation." },
            { type: 'tf', q: "5. Strings in Python are mutable objects.", correct: false, rationale: "Strings are immutable." },
            { type: 'tf', q: "6. The `format()` method and f-strings are both used for string formatting.", correct: true },
            { type: 'tf', q: "7. The `*args` parameter is used to accept a variable number of positional arguments.", correct: true },
            { type: 'tf', q: "8. The `**kwargs` parameter allows passing a variable number of keyword arguments.", correct: true },
            { type: 'tf', q: "9. In the LEGB rule, 'L' stands for 'Local' and 'G' stands for 'Global'.", correct: true },
            { type: 'tf', q: "10. When unpacking arguments, the number of items in the list must exactly match the number of parameters in the function.", correct: true },

            // Part B - Multiple-Choice Questions
            { type: 'mcq', q: "1. What does the following code output? (items = ['AI', 'ML', 'DL'] \nfor i, v in enumerate(items): \n    print(i, v))", options: ["0 AI 1 ML 2 DL", "AI 1 ML 2 DL", "(0, 'AI'), (1, 'ML'), (2, 'DL')", "Error"], correct: 0 },
            { type: 'mcq', q: "2. What will the following code produce? (names = ['Omar', 'Roa'] \nscores = [95, 98] \nprint(list(zip(names, scores)))", options: ["[['Omar', 95), ('Roa', 98)]", "['Omar', 'Roa', 95, 98]", "[(95, 'Omar'), (98, 'Roa')]", "Error"], correct: 0 },
            { type: 'mcq', q: "3. Which of the following defines a correct lambda function?", options: ["`lambda x, y: x + y`", "`def lambda(x, y): x + y`", "`lambda: x + y`", "`lambda(x, y) = x + y`"], correct: 0 },
            { type: 'mcq', q: "4. The `json.loads()` function is used to:", options: ["Convert a Python object into a JSON string", "Read JSON data from a file", "Convert a JSON string into a Python object", "Load JSON module"], correct: 2 },
            { type: 'mcq', q: "5. Which of the following string methods returns a capitalized version of a string?", options: [".upper()", ".capitalize()", ".title()", ".replace()"], correct: 1 },
            { type: 'mcq', q: "6. What will this print? (name = 'AI' \nprint(f'Welcome to {name} Course!'))", options: ["Welcome to {name} Course!", "Welcome to AI Course!", "Welcome Course to AI!", "Error"], correct: 1 },
            { type: 'mcq', q: "7. In the LEGB scope rule, which of the following is not a scope type?", options: ["Local", "Enclosed", "Global", "Base"], correct: 3, rationale: "The four scopes are **L**ocal, **E**nclosed, **G**lobal, and **B**uilt-in." },
            { type: 'mcq', q: "8. What will this function print? (def show(*args): \n    print(args) \nshow(1, 2, 3))", options: ["[1, 2, 3]", "(1, 2, 3)", "1 2 3", "Error"], correct: 1, rationale: "`*args` collects positional arguments into a tuple." },
            { type: 'mcq', q: "9. What will this output? (def info(**kwargs): \n    print(kwargs) \ninfo(name='Roa', score=95))", options: ["('Roa', 95)", "{'name': 'Roa', 'score': 95}", "['Roa', 95]", "Error"], correct: 1, rationale: "`**kwargs` collects keyword arguments into a dictionary." },
            { type: 'mcq', q: "10. What is the result of the following code? (def add(a, b): \n    return a + b \ndata = [10, 20] \nprint(add(*data))", options: ["[10, 20]", "1020", "30", "Error"], correct: 2, rationale: "`*data` unpacks the list into positional arguments: 10 + 20 = 30." }
        ]
    },

    // Sheet 5: NumPy, Pandas, Matplotlib
    "sheet-5-data-science-libraries": {
        title: "Sheet 5 - NumPy, Pandas, Matplotlib (True/False & MCQ)",
        data: [
            // Part A - True / False Questions
            { type: 'tf', q: "1. NumPy is mainly used for creating and manipulating numerical arrays in Python.", correct: true },
            { type: 'tf', q: "2. Pandas Series can hold multiple columns of data.", correct: false, rationale: "A Pandas Series holds one column; a DataFrame holds multiple columns." },
            { type: 'tf', q: "3. The `reshape()` function in NumPy changes the dimensions of an array.", correct: true },
            { type: 'tf', q: "4. DataFrames in Pandas can be thought of as 2D labeled data structures similar to an Excel sheet.", correct: true },
            { type: 'tf', q: "5. `flatten()` in NumPy converts a multidimensional array into a 1D array.", correct: true },
            { type: 'tf', q: "6. SciPy is mainly used for symbolic mathematics and logic programming.", correct: false, rationale: "SciPy is for scientific computing; **SymPy** is used for symbolic math." },
            { type: 'tf', q: "7. The modern replacement for `pandas.Panel` is `xarray.Dataset`.", correct: true, rationale: "`pandas.Panel` was deprecated, and the recommended replacements for 3D+ data are `xarray` or hierarchical indexing." },
            { type: 'tf', q: "8. Matplotlib is used for creating visualizations like line and bar charts.", correct: true },
            { type: 'tf', q: "9. In a NumPy 2D array, elements are accessed using two indices: `[row][column]`.", correct: true, rationale: "While `[row, column]` is preferred, `[row][column]` also works in NumPy." },
            { type: 'tf', q: "10. Pandas DataFrames can only contain numeric data types.", correct: false, rationale: "DataFrames can hold mixed data types (strings, booleans, dates, numbers, etc.)." },

            // Part B - Multiple-Choice Questions
            { type: 'mcq', q: "1. What is the main purpose of NumPy?", options: ["Text processing", "Image rendering", "Numerical computation using arrays", "File management"], correct: 2 },
            { type: 'mcq', q: "2. Which of the following creates a Pandas Series?", options: ["pd.list()", "pd.Series()", "pd.Array()", "pd.Table()"], correct: 1, rationale: "Assuming `import pandas as pd`." },
            { type: 'mcq', q: "3. A Pandas DataFrame is similar to:", options: ["A list of lists", "A table with rows and columns", "A NumPy scalar", "A single dictionary"], correct: 1 },
            { type: 'mcq', q: "4. The command `np.arange(0, 10, 2)` will create:", options: ["[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", "[0, 2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[1, 3, 5, 7, 9]"], correct: 1, rationale: "Starts at 0, stops before 10, steps by 2." },
            { type: 'mcq', q: "5. Which library is best for data visualization?", options: ["Pandas", "NumPy", "Matplotlib", "SciPy"], correct: 2 },
            { type: 'mcq', q: "6. What does `ndmin=2` do in a NumPy array?", options: ["Limits the maximum dimensions", "Forces the array to have at least 2 dimensions", "Creates a list of 2 elements", "None of the above"], correct: 1 },
            { type: 'mcq', q: "7. Which method allows you to reshape a NumPy array?", options: ["resize()", "reshape()", "flatten()", "change_shape()"], correct: 1 },
            { type: 'mcq', q: "8. `Pandas DataFrame()` function accepts which of the following parameters?", options: ["data, index, columns, dtype, copy", "data, labels, dtype, copy", "array, type, index", "table, columns, format"], correct: 0, rationale: "These are the primary optional parameters for the DataFrame constructor." },
            { type: 'mcq', q: "9. Which library provides advanced scientific and mathematical functions on top of NumPy?", options: ["SciPy", "Seaborn", "TensorFlow", "Pandas"], correct: 0 },
            { type: 'mcq', q: "10. Which of the following statements is true?", options: ["Pandas Panel is still the main 3D data structure.", "`xarray.Dataset` has replaced Pandas Panel.", "NumPy can store string data efficiently.", "Matplotlib cannot plot 3D graphs."], correct: 1 }
        ]
    }
};
