# **Reading Lamp**

## **About**
TapLamp is a simple, interactive mobile application designed to transform your phone into a reading lamp. With an intuitive design, the app allows you to adjust the brightness and select eye-friendly lamp colors that are ideal for reading in low-light environments. Whether you're relaxing with a book or studying late at night, TapLamp provides a minimalistic and customizable lighting experience.

---

## **Features**
- 🟢 **Toggle Switch**: Easily turn the lamp on or off using the intuitive switch at the bottom of the screen.
- 🌟 **Brightness Slider**: Adjust the lamp's brightness to your preferred intensity for optimal reading comfort.
- 🎨 **Color Selection Slider**: Choose from pre-selected, eye-friendly lamp colors, such as:
  - Warm Yellow (`#FFF8E1`)
  - Light Orange (`#FFE4B5`)
  - Soft White (`#FFECB3`)
- 🎥 **Animated Transitions**: Smooth color transitions when toggling the lamp on or off.

---

## **Tech Stack**
- **React Native**: Cross-platform mobile app development framework.
- **@react-native-community/slider**: For implementing smooth slider functionality.
- **Animated API**: For seamless animations for background color transitions.

---

## **Project Structure**
.
├── App.js                // Main entry point of the application
├── lamp.png              // Lamp image asset
├── assets/               // Folder for additional assets (if needed)
├── node_modules/         // Dependencies
├── package.json          // Project dependencies and scripts
└── README.md             // Documentation

## **Setup and Installation**

### **Step 1: Clone the Repository**
bash
git clone https://github.com/your-repo/taplamp.git
cd taplamp

### **Step 2: Install Dependencies**
Ensure you have Node.js and npm/yarn installed, then run:
bash
npm install

Or if using Yarn:
bash
yarn install


### **Step 3: Install Slider Dependency**
Since `Slider` is not built into React Native, install `@react-native-community/slider`:
bash
npm install @react-native-community/slider

Or with Yarn:
bash
yarn add @react-native-community/slider


### **Step 4: Run the Application**
To run the app on an emulator or physical device:
- For **Android**:
  bash
  npx react-native run-android

- For **iOS**:
  ```bash
  npx react-native run-ios

## **Usage**

### **1. Turn on the Lamp**
- Use the switch at the bottom of the screen to toggle the lamp on or off.

### **2. Adjust Brightness**
- Use the "Brightness" slider to control the light intensity for your reading needs.

### **3. Change Lamp Color**
- Use the "Lamp Color" slider to switch between warm, eye-friendly colors.

---

## **Customization**

### **Add More Colors**
Modify the `lampColors` array in `App.js` to include additional colors:
```javascript
const lampColors = ['#FFF8E1', '#FFE4B5', '#FFECB3', '#FFDAB9']; // Add your custom color codes
```

### **Update Slider Ranges**
Adjust the `minimumValue` and `maximumValue` props for the brightness and color sliders to fine-tune their functionality.

---

## **Future Improvements**
- 🕒 **Timer Feature**: Add a timer to automatically turn off the lamp after a set period.
- 🎨 **Custom Color Palette**: Allow users to select custom colors beyond the predefined options.
- 🌗 **Theme Settings**: Introduce light and dark themes for the app's interface.

---

## **Contributing**
We welcome contributions to improve TapLamp! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your forked repository:
   ```bash
   git push origin feature-name
   ```
4. Open a pull request for review.

---

## **License**
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it.

---

## **Screenshots**


---
