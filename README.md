# Hamro Samachar

![](https://github.com/Youbraj/hamro-samachar/blob/7260ae31038871d793063c6940df9ac5fee54ad8/public/app-screenshot.png)

Welcome to the Hamro Samachar — A News App! This application leverages the power of the NewsAPI to deliver the latest news articles from across the globe. With its intuitive interface, users can explore news organized by categories or search for specific topics that interest them.

---

## Features

### 1. **Category-Based News**

Stay updated with the latest developments in various domains. The app categorizes news into distinct sections such as:

- General
- Entertainment
- Business
- Sports
- Technology
- Health
- Science

Simply click on a category to access a curated list of articles relevant to your chosen topic.


### 3. **Comprehensive Article Details**

Each article provides detailed information, including:

- **Title**
- **Description**
- **Publication Date**
- **Source Channel**
- **External Link**: Quickly access the full article on the source website for in-depth reading.

### 4. **Responsive Design**

Enjoy a seamless browsing experience across all devices. Whether you're using a desktop, tablet, or smartphone, the app’s responsive design ensures optimal usability.

---

## Technologies Used

This app is powered by modern web development technologies:

### **1. React**

- A robust JavaScript library used for building dynamic and interactive user interfaces.

### **2. Router**

- Simplifies state management, ensuring the application’s data flow remains organized and predictable.

### **3. Styled-Components**

- CSS-in-JS library for styling components, enabling clean, scoped, and reusable styling.

### **4. React-Bootstrap**

- Provides pre-built responsive and customizable UI components, enhancing the app’s appearance and usability.


---

## Usage

Follow these steps to run the Hamro Samachar app on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Youbraj/hamro-samachar.git

2. **Navigate to the Project Directory:**

    ```bash
    cd hamro-samachar

3. **Install Dependencies:**

   ```bash
    npm install

4. **Set up NewsAPI key:**
   - Visit [NewsAPI](https://newsapi.org/) and create an account if you don't already have one.
   - Obtain your API key from the NewsAPI dashboard.
   - Create a `.env.local` file in the root of your project and add the following line:
     ```
     REACT_APP_NEWS_API_KEY="your_api_key_here"
     ```
   - Replace `your_api_key_here` with your actual NewsAPI key.


4. **Start the Development Server:**

   ```bash
    npm start

5. **Access the App:** Open your web browser and go to http://localhost:3000.

## Contributing

Contributions are highly appreciated! If you encounter any bugs or have ideas for enhancements, feel free to:

- Open an issue

- Submit a pull request

Your feedback and contributions will help make this app even better!

## Acknowledgements

- This app utilizes the NewsAPI for fetching news articles. Visit their website for more information: [NewsAPI](https://newsapi.org/)
