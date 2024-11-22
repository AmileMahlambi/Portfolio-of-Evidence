### **README File**

---

# **Private Chef Menu Management App**

This app is designed for a private chef to manage menu items dynamically. It allows adding, removing, filtering, and viewing menu items by course. The app also calculates and displays the average price of items grouped by courses.

---

## **Features**

- Add menu items with details such as name, description, course, and price.
- Remove menu items from the list.
- View the total number of menu items.
- Display the average price of menu items by course.
- Filter menu items by course.
- Navigate between screens for better user experience.
- Modular design with reusable components.

---

## **Prerequisites**

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio or Xcode (for running the app on an emulator/simulator)
- A code editor, preferably [Visual Studio Code](https://code.visualstudio.com/)

---

## **Setup Instructions**

1. **Clone the Repository:**

   ```bash
   git clone <repository-link>
   cd private-chef-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start Metro Server:**

   ```bash
   npx react-native start
   ```

4. **Run the App:**

   - For Android:  
     ```bash
     npx react-native run-android
     ```
   - For iOS:  
     ```bash
     npx react-native run-ios
     ```

---

## **Change Log**

### **Version 1.0.0**
#### **New Features**
1. **Added Average Price Calculation**  
   - Displays the average price of menu items, broken down by course, on the home screen.

2. **Moved Add/Remove Menu Items to a Separate Screen**  
   - Allows users to manage menu items on a dedicated screen.

3. **Implemented Course Filtering**  
   - Guests can filter menu items by course, e.g., view only starters, mains, or desserts.

4. **Saved Menu Items in an Array**  
   - Ensures data persistence during app usage.

#### **Improvements**
1. **Code Refactoring**  
   - Separated components into multiple files for better organization and maintainability.

2. **Enhanced Navigation**  
   - Integrated stack navigation for smooth transitions between screens.

3. **Consistent Color Scheme**  
   - Applied a visually pleasing and consistent color palette across the app.

4. **Improved UI Design**  
   - Enhanced user experience with better layouts and styles.

---

## **Contributing**

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

---

## **License**

This project is licensed under the MIT License.

---

Feel free to reach out for any questions or support!
 
