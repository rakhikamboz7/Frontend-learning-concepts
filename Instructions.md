# Assignment

## 🎯 Objective

This assignment is designed to help you:

- Understand **Flexbox and layout behavior**
- Practice **debugging CSS using DevTools**
- Fix real-world **JavaScript issues (scope & closures)**
- Work with **API calls (fetch)**
- Write **clean, maintainable code**

---

## 📁 Project Setup

You are provided with:

- `index.html`
- `styles.css`
- `script.js`

The current implementation is **intentionally broken and poorly written**.

Your task is to **analyze, debug, and improve it**.

---

# 🎨 CSS Requirements

---

## 1. Fix Layout Using Flexbox

- Sidebar should appear on the **left**
- Main content should appear on the **right**
- Layout should be clean and properly aligned

---

## 2. Fix Header Layout

- Title should be on the **left**
- Navigation should be on the **right**
- Both should be aligned in a single row

---

## 3. Fix Cards Section

- Cards should:
    - Appear in rows
    - Have proper spacing
    - Wrap correctly when screen size reduces

---

## 4. Make It Responsive

- On smaller screens:
    - Layout should not break
    - Cards should stack properly
    - Sidebar should adjust (top or collapsible)

---

## 5. Remove Inline Styles

- All inline styles must be moved to `styles.css`

---

## 6. Improve Class Naming

Use meaningful class names.

Example:

❌ Bad:

```
.container
.main
```

✅ Better:

```
.dashboard
.dashboard__sidebar
.dashboard__main
```

---

# ⚡ JavaScript Requirements

---

## 1. Fix Existing Bug

- There is a bug related to **scope/closure**
- Identify the issue and fix it properly

---

## 2. Improve Data Rendering

- Avoid inefficient DOM updates like:

```
innerHTML += ...
```

- Use better approaches:
    - `createElement`
    - or build content once and render

---

## 3. Add Loading State

- When API call starts:
    - Show `"Loading..."` to the user

---

## 4. Handle Errors Properly

- If API fails:
    - Show a message like:
        
        ```
        Failedtoload data
        ```
        
- Do not rely only on `console.log`

---

## 5. (Optional Bonus)

- Prevent multiple clicks on button
- Improve user experience

---

# 🧪 Debugging Requirement (Important)

You must use **Browser DevTools**:

- Inspect elements
- Check layout issues
- Experiment with styles before writing code

---

# 🧠 Reflection (Mandatory)

Create a file named `notes.txt` and answer:

1. What layout issues did you find?
2. How did you fix them?
3. What was the JavaScript bug?
4. Why did it happen?
5. What improvements did you make?

---

# 🔧 Git Requirements

---

You must follow proper Git workflow:

### 1. Initialize Repository

```
gitinit
```

### 2. First Commit

```
gitadd .
gitcommit-m "initial commit"
```

### 3. Rename Branch

```
git branch -Mmain
```

### 4. Add Remote

```
git remoteadd origin <your-repo-url>
```

### 5. Push Code

```
git push -u originmain
```

---

### Feature Development

```
git checkout -b feature/dashboard-fix
```

Make all changes in this branch.

```
gitadd .
gitcommit-m "fix layout and improve JS"
git push origin feature/dashboard-fix
```

---

### Pull Request

- Create PR:

```
feature/dashboard-fix → main
```

---

# 📌 Submission

Submit:

- GitHub Repository Link
- Pull Request Link
- Screenshots:
    - Desktop view
    - Mobile view
- `notes.txt` file

---

# ⚠️ Important Guidelines

- Do NOT rewrite everything from scratch
- Focus on **fixing and improving existing code**
- Do NOT use external libraries or frameworks
- Keep solution **simple and readable**

---

# 🧠 Final Note

This assignment is not about writing perfect UI.

It is about:

- Understanding **why things break**
- Learning **how to debug**
- Writing **clean and maintainable code**