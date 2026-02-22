# React Stopwatch App

A modern and responsive **Stopwatch Application** built using React Hooks.

---

## Features

- Start timer
- Stop timer
- Reset timer
- Prevents multiple intervals from running
- Clean card-based UI
- Gradient background design
- Button hover and click animations
- Responsive centered layout

---

## Technologies Used

- React
- useState Hook
- useRef Hook
- CSS3 (Flexbox, Gradient, Animations)

---

## Project Structure

```
src/
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

---

## How It Works

- `useState` manages the timer value.
- `useRef` stores the interval ID.
- `setInterval` increments time every second.
- `clearInterval` stops the timer safely.
- Protection logic prevents multiple intervals from running simultaneously.

---

## Installation

Install dependencies

```
npm install
```
Start development server

```
npm run dev
```

---

## Future Improvements

- Add minutes and hours format (HH:MM:SS)
- Add lap time feature
- Add dark/light mode toggle
- Add sound effect on start/stop

---

## Features Breakdown

### 1. Start Button
Starts the stopwatch and prevents duplicate intervals.

### 2. Stop Button
Stops the active timer safely.

### 3. Reset Button
Stops the timer and resets time to zero.

---

## UI Highlights

- Centered layout
- Gradient background
- Card hover animation
- Button hover scaling effect
- Clean typography
- Responsive design

---

## Possible Enhancements

- Add HH:MM:SS format
- Add Lap functionality
- Add Dark mode
- Add Sound effects
- Store time in local storage
- Add milliseconds precision

---

## Learning Outcome

This project strengthens understanding of:

- React Hooks
- Side-effect management
- Interval cleanup logic
- Component-based architecture
- Basic UI/UX improvement techniques
