# ✨ Weather App

Welcome to the Weather App repository\! This is a simple, elegant, and user-friendly web application for checking the current weather conditions of various cities around the world. Built with vanilla JavaScript, this app focuses on a clean design and smooth user experience.

-----

## 🌟 Features

  * **Dynamic Weather Cards**: Add multiple cities to your dashboard. Each city is displayed in its own customizable card.
  * **Intuitive UI**: A sleek, minimalist design makes it easy to read weather information at a glance.
  * **Light & Dark Mode**: Weather cards dynamically change their theme (light or dark) based on the current weather conditions. A sunny day gets a light theme, and other conditions get a dark theme.
  * **Persistent Storage**: Your selected cities are saved in your browser's local storage, so they're there when you return.
  * **Add & Delete Cities**: Easily add new cities using a search input or delete existing weather cards from your dashboard.
  * **Responsive Design**: The app works and looks great on both desktop and mobile devices.

-----

## 🛠️ Technologies Used

  * **HTML5**: For the app's structure.
  * **CSS3 (with Tailwind CSS via a CDN)**: For styling and layout.
  * **JavaScript (ES6+)**: For all the application logic and API calls.
  * **AOS (Animate On Scroll) Library**: For subtle, elegant fade-up animations on the weather cards.
  * **Font Awesome & Bootstrap Icons**: For the icons used throughout the interface.

-----

## 🚀 Getting Started

Follow these simple steps to get the app up and running on your local machine.

### Prerequisites

You just need a modern web browser to run this application. No special server setup is required since it's a client-side app.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate into the project directory**:
    ```bash
    cd your-repository-name
    ```
3.  **Open the `index.html` file**:
    Simply double-click `index.html` or open it in your favorite browser.

-----

## 💡 Usage

  * **Add a City**: Click the `+` button in the bottom left corner. A search box will appear. Type in a city name (like "Paris" or "New York") and click "Send Request."
  * **Delete a Card**: Click the `Close Card` button at the bottom of a weather card. Note that the first card is locked and cannot be deleted.
  * **Clear All Data**: Click the trash icon `🗑️` to clear all saved cities from your local storage and reset the app to its default state.

-----

## 📂 Project Structure

```
.
├── index.html          # The main HTML file
├── style/
│   └── style.css       # Custom CSS for the app
├── script/
│   ├── script.js       # The main JavaScript file
│   └── data/
│       └── dummyWeather.json # Dummy data for fetching weather info
└── img/
    ├── bgdark.png      # Background image for dark mode cards
    └── bgsunny.png     # Background image for sunny mode cards
```

-----

## 🙏 Acknowledgements

  * **AOS - Animate On Scroll**: For providing the easy-to-use animation library.
  * **Tailwind CSS**: For the utility-first CSS framework.
  * **Bootstrap Icons**: For the beautiful and free icons.

Enjoy checking the weather\! ☀️

-----

This README is designed to be clear, easy to navigate, and visually appealing, providing all the necessary information for a user to understand, install, and use the project. The use of emojis, markdown headings, and code blocks makes it scannable and professional.

# Weather App 🌤️

A responsive and user-friendly web application that displays current weather information for cities worldwide with a beautiful UI design.

![Weather App](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-Latest-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-Tailwind-blue.svg)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

This Weather App provides real-time weather information in an elegant card-based interface. Users can add multiple cities, view detailed weather data, and manage their preferences with persistent storage using localStorage :cite[6].

The application features a clean, responsive design that works seamlessly across different devices and includes visual indicators for various weather conditions (sunny, cloudy, rainy, etc.) :cite[3].

## Features

- 🌍 **Multi-City Support**: Add and track weather for multiple cities
- 💾 **Local Storage**: Saves your preferences using browser localStorage
- 🎨 **Visual Design**: Beautiful weather-themed cards with conditional styling
- 📱 **Responsive Layout**: Grid-based design that works on desktop and mobile
- ⚡ **Real-time Data**: Fetch current weather information (using dummy data for demonstration)
- 🗑️ **Manage Cities**: Add or remove cities from your dashboard
- 🌙 **Theme Adaptation**: Interface adjusts based on weather conditions (day/night themes)

## Demo

Include a screenshot or GIF of your working application here.

![Weather App Screenshot](./screenshot.png)

*Note: Add actual screenshots of your application to this section* :cite[3].
