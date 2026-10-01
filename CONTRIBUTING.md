# Contributing to Python Tutorial

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the Python Tutorial project.

## 🎯 Ways to Contribute

### 1. **Report Bugs**
Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 2. **Suggest Improvements**
Ideas for new features or improvements?
- Suggest new labs or exercises
- Recommend better explanations
- Propose UI/UX improvements
- Suggest new learning resources

### 3. **Add Content**
Help expand the course:
- Create new lab files
- Add more exercises
- Write additional examples
- Improve documentation

### 4. **Fix Issues**
Help fix existing bugs or implement requested features.

### 5. **Translations**
Help translate the course to other languages.

## 🛠 Development Setup

### Prerequisites
- Git
- Python 3.8+
- Modern code editor (VS Code recommended)
- Modern web browser

### Local Setup

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/python-tutorial.git
   cd python-tutorial
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # Or for bug fixes:
   # git checkout -b fix/bug-name
   ```

4. **Make Changes**
   - Edit files as needed
   - Test your changes
   - Ensure code quality

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add brief description of changes"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Go to GitHub and create a PR
   - Provide clear description
   - Link any related issues

## 📝 Contribution Guidelines

### Code Style

**HTML**
- Use semantic HTML5 elements
- Indent with 4 spaces
- Add comments for complex sections
- Use descriptive class/id names

**CSS**
- Use CSS variables for colors
- Follow mobile-first approach
- Use meaningful class names
- Keep specificity low

**JavaScript**
- Use vanilla JS (no frameworks)
- Use clear, descriptive variable names
- Add comments for complex logic
- Follow ES6 standards

**Python**
- Follow PEP 8 style guide
- Add docstrings to functions
- Use clear, descriptive names
- Include comments for complex logic

### Commit Messages

Write clear, descriptive commit messages:

```
[Type] Brief description

Longer explanation if needed.

Fixes #issue-number (if applicable)
```

**Types:**
- `[Feature]` - New feature
- `[Fix]` - Bug fix
- `[Docs]` - Documentation update
- `[Style]` - Code style changes
- `[Refactor]` - Code refactoring
- `[Test]` - Test additions

**Example:**
```
[Feature] Add Lab 10: Advanced Functions

Add a new lab covering decorators and generators
with practical examples and exercises.

Fixes #42
```

## 📚 Adding New Labs

To add a new lab:

1. **Create Lab Directory**
   ```bash
   mkdir -p src/labs/10
   ```

2. **Create Lab File**
   ```bash
   touch src/labs/10/advanced_functions.py
   ```

3. **Add Content**
   - Start with a clear comment header
   - Include explanations
   - Add example code
   - Include exercises

4. **Lab File Template**
   ```python
   # Lab 10: Advanced Functions
   # Topics: Decorators, generators, context managers
   
   # Example 1: Decorators
   def my_decorator(func):
       def wrapper():
           print("Before function")
           func()
           print("After function")
       return wrapper
   
   @my_decorator
   def hello():
       print("Hello!")
   
   hello()
   
   # Exercise: Create your own decorator
   # that measures function execution time
   ```

5. **Update Web Interface (Optional)**
   - Update `index.html` with new lab card
   - Add data attributes with code example
   - Follow existing structure

## 🎨 Design Contributions

### Colors
- Follow existing color scheme
- Ensure accessible contrast ratios
- Support both light and dark themes
- Use CSS variables

### Fonts
- Poppins (headlines)
- Fira Mono (code)
- System fonts (fallback)

### Responsive Design
- Mobile-first approach
- Test on multiple devices
- Min breakpoint: 320px
- Max breakpoint: 2560px

## 📖 Documentation Contributions

### README Updates
- Keep clear and concise
- Add examples for new features
- Update TOC if needed
- Fix typos and grammar

### Code Comments
- Explain WHY, not WHAT
- Use clear language
- Keep concise
- Update when code changes

## ✅ Testing Your Changes

### Visual Testing
1. Open `index.html` in browser
2. Test all sections
3. Try light/dark themes
4. Test on mobile devices
5. Check all interactive features

### Code Testing
```bash
# Python labs
python src/labs/1/hello.py

# Check syntax
python -m py_compile src/labs/*/
```

### Browser Compatibility
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers

## 🚀 Pull Request Process

1. **Before Creating PR**
   - Ensure changes are tested
   - Update documentation if needed
   - Remove debug code
   - Follow code style guidelines

2. **PR Description**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Other
   
   ## Changes Made
   - What changed
   - How it improves the project
   
   ## Testing Done
   - How you tested the changes
   - What browsers/devices tested
   
   ## Screenshots (if applicable)
   - Before/After images
   
   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Comments added (if needed)
   - [ ] Documentation updated
   - [ ] No new warnings generated
   - [ ] Tests pass locally
   ```

3. **Review Process**
   - Maintainers will review
   - May request changes
   - Address feedback promptly
   - Be respectful and collaborative

## 📋 Coding Standards

### HTML Standards
- Use semantic tags
- Valid HTML5
- Accessible structure
- Mobile responsive

### CSS Standards
- CSS3 features
- Mobile-first
- CSS variables
- No inline styles

### JavaScript Standards
- ES6+
- Vanilla JS (no jQuery)
- Well-documented
- Efficient code

### Python Standards
- PEP 8 compliant
- Clear docstrings
- Type hints where appropriate
- Tested code

## 🐛 Reporting Bugs

Use GitHub Issues with:

1. **Title**: Clear, concise summary
2. **Description**: 
   - What happened
   - What should happen
   - Steps to reproduce
3. **Environment**:
   - Browser/Python version
   - OS
   - Device type
4. **Screenshots/Logs**:
   - Visual proof if applicable
   - Error messages

## 💬 Communication

- Be respectful and inclusive
- Provide constructive feedback
- Ask for help if needed
- Thank contributors
- Celebrate achievements

## 📚 Resources

- [GitHub Help](https://help.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [PEP 8 Style Guide](https://pep8.org)
- [MDN Web Docs](https://developer.mozilla.org)

## ❓ Questions?

- Check existing issues/PRs
- Create a new discussion
- Email: juan.luna@3pillarglobal.com

---

**Thank you for contributing!** 🎉

Your help makes this course better for everyone. Don't hesitate to contribute, even if you're new to open source!

Happy coding! 💻
