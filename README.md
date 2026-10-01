# 🐍 Python Tutorial: Complete Guide + Labs + Interview Preparation

A comprehensive and interactive Python learning platform designed for beginners to advanced learners. Master Python fundamentals, complete progressive labs, and prepare for technical interviews.

![Version](https://img.shields.io/badge/version-2.0-blue)
![Python](https://img.shields.io/badge/Python-3.8%2B-green)
![License](https://img.shields.io/badge/license-CC%20BY--NC--SA-blue)

## 📚 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Course Modules](#course-modules)
- [The 9 Progressive Labs](#the-9-progressive-labs)
- [Interview Preparation](#interview-preparation)
- [How to Use](#how-to-use)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 📖 Comprehensive Learning Path
- **Fundamentals Module**: Introduction, data types, control flow, functions, and OOP
- **9 Progressive Labs**: Hands-on exercises from basic to advanced
- **Interview Exercises**: 8+ practical problems with solutions
- **Interview Preparation**: Python and SQL mastery topics

### 🎯 Interactive Features
- Clean, modern web interface with light/dark theme support
- Click-to-view code examples for each lab
- Copy-to-clipboard functionality for all code snippets
- Responsive design for desktop and mobile
- Sticky navigation for easy module switching

### 💼 Interview Ready
- Key Python topics (lists, sets, dictionaries, comprehensions)
- SQL fundamentals and advanced queries
- Common coding patterns and best practices
- 1-week intensive study plan

## 📁 Project Structure

```
python-tutorial/
├── index.html          # Main HTML file with all course content
├── css/
│   └── styles.css      # Styling for light/dark theme
├── js/
│   └── script.js       # Interactive features and modal functionality
├── src/
│   └── labs/           # Lab files (to be created)
│       ├── 1/hello.py
│       ├── 2/variables.py
│       ├── 3/constantes.py
│       ├── 4/condicionales.py
│       ├── 5/funciones.py
│       ├── 6/bucles.py
│       ├── 7/poo.py
│       ├── 8/class.py
│       └── 9/modules/
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🚀 Getting Started

### Prerequisites
- **Python 3.8+** - Download from [python.org](https://www.python.org/downloads/)
- **Modern Web Browser** - Chrome, Firefox, Safari, or Edge
- **Code Editor** - VS Code, PyCharm, or any text editor

### Installation

1. **Clone or Download the Repository**
```bash
git clone https://github.com/yourusername/python-tutorial.git
cd python-tutorial
```

2. **Open in Browser**
Simply open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

3. **Start Learning**
Navigate through the course using the sticky navigation menu at the top.

## 📚 Course Modules

### 1️⃣ Fundamentals
Master the core concepts of Python programming:
- **Introduction to Python** - Why Python? Setup and first program
- **Data Types** - Strings, integers, floats, booleans, lists, dictionaries
- **Control Flow** - if/elif/else, for loops, while loops, list comprehension
- **Functions** - Definition, parameters, return values, lambda functions
- **OOP** - Classes, objects, attributes, methods, inheritance

### 2️⃣ The 9 Progressive Labs

Complete labs in order to build a solid foundation:

| # | Lab | Difficulty | Topics |
|---|-----|-----------|--------|
| 1 | **Hello World** | ⭐ Basic | Print, comments, basic I/O |
| 2 | **Variables and Types** | ⭐ Basic | String, int, float, bool, lists, dicts |
| 3 | **Constants** | ⭐ Basic | Constants, conventions, best practices |
| 4 | **Conditionals** | ⭐⭐ Intermediate | if/elif/else, logical operators |
| 5 | **Functions** | ⭐⭐ Intermediate | Functions, parameters, return values |
| 6 | **Loops** | ⭐⭐ Intermediate | for, while, break, continue |
| 7 | **OOP Intro** | ⭐⭐⭐ Advanced | Classes vs dictionaries |
| 8 | **Classes** | ⭐⭐⭐ Advanced | Objects, methods, attributes |
| 9 | **Modules** | ⭐⭐⭐ Advanced | Imports, organizing code |

### 3️⃣ Practical Interview Exercises

8+ real-world problems with solutions:
- **Easy**: Count frequencies, reverse dictionary, remove duplicates, find second largest
- **Medium**: Group even/odd, find intersection, sort by key, find duplicates

### 4️⃣ Interview Preparation

**Python Topics**
- Lists, sets, dictionaries and their operations
- List comprehension (very important!)
- Built-in functions: len(), min(), max(), sorted(), map(), filter()
- Common patterns: counting frequencies, reversing dictionaries, grouping data

**SQL Topics**
- SELECT, WHERE, ORDER BY
- GROUP BY, HAVING, aggregation functions
- INNER JOIN, LEFT JOIN, RIGHT JOIN
- Difference between WHERE and HAVING

**Interview Tips**
- Write pseudocode first
- Practice on LeetCode, HackerRank, InterviewBit
- Know your built-in functions
- Explain your logic out loud

## 💻 How to Use

### Learning Path (6 Weeks)

#### **Week 1-2: Fundamentals**
1. Read theory in "Fundamentals" section
2. Complete Labs 1-3 (Hello World, Variables, Constants)
3. Practice simple exercises
4. Experiment in interactive Python terminal

#### **Week 3-4: Control Flow**
1. Study Control Flow concepts
2. Complete Labs 4-6 (Conditionals, Functions, Loops)
3. Create small programs combining concepts
4. Practice "Easy" level interview exercises

#### **Week 5-6: Advanced Structures**
1. Study OOP fundamentals
2. Complete Labs 7-9 (OOP, Classes, Modules)
3. Create a small project: Contact Manager or Calculator
4. Practice "Medium" level interview exercises

### Running Labs Locally

1. Navigate to the lab file:
```bash
cd src/labs/1
python hello.py
```

2. Edit the file to complete exercises:
```bash
nano hello.py  # or open in your editor
```

3. Run with Python:
```bash
python hello.py
```

### Interactive Features

**View Lab Code**
- Click any lab card in the Labs section
- A modal will show the code example
- Click "Copy" to copy all code to clipboard
- Press ESC or click outside to close

**Copy Code Snippets**
- Hover over any code block
- Click the "Copy" button
- Code is copied to your clipboard

## 📖 Key Concepts Reference

### Data Types
```python
# String
name = "Juan"

# Integer
age = 42

# Float
height = 1.75

# Boolean
is_student = True

# List
fruits = ["apple", "banana", "orange"]

# Dictionary
person = {"name": "Juan", "age": 25}
```

### List Comprehension (Important!)
```python
# Simple
squares = [x**2 for x in range(10)]

# With condition
even = [x for x in range(10) if x % 2 == 0]

# Transformation
uppercase = [word.upper() for word in words]
```

### Functions
```python
def greet(name):
    return f"Hello, {name}!"

result = greet("Juan")
```

### Classes
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"
```

## 🎯 Interview Preparation Tips

### Python

**1. Master List Comprehension**
- Most Pythonic way to create lists
- Used in many interview problems

**2. Know Built-in Functions**
- `len()`, `sum()`, `min()`, `max()`
- `sorted()`, `enumerate()`, `zip()`
- `map()`, `filter()`

**3. Collections Module**
```python
from collections import Counter, defaultdict

# Count frequencies
Counter([1, 2, 2, 3, 3, 3])  # {3: 3, 2: 2, 1: 1}
```

### SQL

**1. Understand JOINs**
- INNER JOIN (only matches)
- LEFT JOIN (all from left)
- RIGHT JOIN (all from right)

**2. GROUP BY vs WHERE**
- WHERE: filters BEFORE grouping
- HAVING: filters AFTER grouping

**3. Practice on [SQLZoo.net](https://sqlzoo.net)**
- Free interactive SQL tutorial
- 30 min/day = great improvement

## 📚 Resources

### Python Learning
- [Real Python](https://realpython.com) - In-depth tutorials
- [Python Official Docs](https://docs.python.org/3/) - Reference
- [Python.org](https://python.org) - Download and community

### Practice Problems
- [LeetCode](https://leetcode.com) - Interview preparation
- [HackerRank](https://www.hackerrank.com) - Code challenges
- [CodeWars](https://www.codewars.com) - Programming challenges

### SQL Learning
- [SQLZoo.net](https://sqlzoo.net) - Interactive SQL tutorial
- [Mode Analytics](https://mode.com/sql-tutorial/) - SQL fundamentals
- [W3Schools SQL](https://www.w3schools.com/sql/) - Reference

### Interview Prep
- [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)
- [LeetCode Interview](https://leetcode.com/interview/)
- [InterviewBit](https://www.interviewbit.com/)

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3 (with CSS Variables)
- **Interaction**: Vanilla JavaScript (no frameworks)
- **Fonts**: 
  - [Poppins](https://fonts.google.com/specimen/Poppins) - Headlines
  - [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) - Code
- **Theme Support**: Light/Dark mode with system preference detection
- **Responsive**: Mobile-first design

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- ARIA labels where needed

## 🌙 Theme Support

The course automatically detects your system preference (light/dark) but you can override it. The interface adapts beautifully to both themes.

## 📝 Creating New Labs

To add a new lab file:

1. Create the file:
```bash
mkdir -p src/labs/1
touch src/labs/1/hello.py
```

2. Add code and exercises to the file

3. Update the HTML with a new lab card (optional, for the web interface)

4. Run locally:
```bash
python src/labs/1/hello.py
```

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -m 'Add improvement'`)
5. Push to branch (`git push origin feature/improvement`)
6. Open a Pull Request

### Areas for Contribution
- Additional labs or exercises
- Better explanations for concepts
- Bug fixes
- Translations
- Resource recommendations

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** License.

### What This Means:

✅ **You CAN:**
- Use this course for personal learning
- Share it with students or professionals
- Create adapted versions for educational purposes
- Modify and improve the materials
- **All for non-commercial use only**

❌ **You CANNOT:**
- Sell this course or any part of it
- Use it as a paid educational service without permission
- Incorporate it into a commercial product
- Charge money for access to these materials

💼 **For Commercial Use:**
If you wish to use this course commercially (sell it, use in a paid service, etc.), you must contact the author for permission:
- **Email:** juan.luna@3pillarglobal.com

See the [LICENSE](LICENSE) file for complete details.

## 👨‍💻 Author

**Juan Carlos Garcia Luna**

- [Website](https://jcgl.github.io/jcgl-site/)
- Email: juancarlosgarcialuna@gmail.com

## 🙏 Acknowledgments

- Inspired by best practices in Python education
- Thanks to the Python community
- Special thanks to all learners who use this course

## 📧 Support

Have questions or found a bug?
- Open an issue on GitHub
- Contact: juancarlosgarcialuna@gmail.com
- Check the course for tips and best practices

---

**Start your Python journey today!** 🚀

Happy coding! 💻
