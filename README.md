### **GitHub README File**

---

# **Private Chef Menu Management App**

A React Native application designed for private chefs to manage dynamic menus with features for adding, removing, and viewing menu items. The app also offers filtering options and detailed insights into the menu.

---

## **Features**

- **Add/Remove Menu Items**: Add dishes with a name, description, course, and price. Remove unwanted dishes.
- **Menu Summary**: Displays the total number of dishes and their average price by course.
- **Course Filtering**: Filter menu items to view only starters, mains, desserts, etc.
- **Navigation**: Seamless transitions between screens for menu management and display.
- **Dynamic Array Management**: Stores menu items in an array for easy updates.
- **Responsive UI**: Optimized for both Android and iOS devices with an elegant color scheme.

---

## **Setup Instructions**

### **Prerequisites**
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio (for Android) or Xcode (for iOS)
- Git and a code editor like [Visual Studio Code](https://code.visualstudio.com/)

### **Steps to Run the App**

1. **Clone the Repository**  
   ```bash
   git clone <repository-link>
   cd private-chef-app
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start Metro Bundler**  
   ```bash
   npx react-native start
   ```

4. **Run the App**  
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


#### **Added Features**
1. **Average Price Calculation**: Displays average dish prices grouped by course.
2. **Separate Menu Management Screen**: Dedicated screen for adding/removing dishes.
3. **Course Filtering**: Guests can filter dishes to view specific courses.
4. **Array Management**: Menu data is saved in a dynamic array for updates.

#### **UI/UX Enhancements**
1. **Modular Codebase**: Organized components into reusable files.
2. **Consistent Styling**: Applied a unified color scheme for a professional look.
3. **Improved Navigation**: Added stack navigation for better user flow.

---

## **Screens Overview**

1. **Home Screen**: Displays the complete menu, total items, and average prices by course.
2. **Add/Remove Screen**: Allows chefs to manage dishes efficiently.
3. **Filter Screen**: Lets guests filter dishes by course.
