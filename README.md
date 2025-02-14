# 🌍 Study MBBS Abroad - FRONTEND/BACKEND
WEBSITE: https://study-ktu0bn4tj-bikash-kumar-sharmas-projects-0c6fd68a.vercel.app

This is the backend for the **Study MBBS Abroad** website, a Node.js & Express-based web application that provides information about MBBS programs in various countries, allows student registrations, and includes authentication functionalities.

## 📢 Features

✅ **Country Listings** – Detailed MBBS study options for countries like Russia, Uzbekistan, and more.  
✅ **Student Registration** – Form-based user registration stored in MongoDB.  
✅ **Authentication System** – JWT-based authentication and session management.  
✅ **Dynamic Content Rendering** – Uses EJS templating engine for rendering pages.  
✅ **MongoDB Database Integration** – Stores student records in a cloud/local database.  
✅ **Form Validation** – Implements server-side validation for user inputs.  
✅ **Modular Routing** – Clean separation of user authentication and main functionalities.  

---

## 🛠️ Tech Stack

- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – Object Data Modeling (ODM)  
- **EJS** – Template rendering engine  
- **dotenv** – Environment variable management  
- **cookie-parser** – For handling user authentication cookies  
- **express-validator** – Validation middleware  

---

## 🚀 Getting Started  

### **1️⃣ Prerequisites**  

Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (v14 or later)  
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)  
- [Git](https://git-scm.com/)  

### **2️⃣ Clone the Repository**  

```sh
git clone https://github.com/yourusername/study-mbbs-abroad.git
cd study-mbbs-abroad
```

### **3️⃣ Install Dependencies**  

```sh
npm install
```

### **4️⃣ Set Up Environment Variables**  

Create a `.env` file in the root directory and configure it as follows:  

```env
PORT=8000
MONGO_URL=mongodb+srv://your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### **5️⃣ Start the Server**  

```sh
npm start
```

The backend will run at **http://localhost:8000/** 🚀  

---

## 📂 Project Structure  

```
study-mbbs-abroad/
│-- models/              # Database schemas
│   ├── studentSchema.js
│-- routes/              # Application routes
│   ├── user.js          # Authentication routes
│-- views/               # EJS templates for frontend rendering
│   ├── home.ejs
│   ├── mbbs.ejs
│   ├── details.ejs
│   ├── form.ejs
│-- public/              # Static assets (CSS, images)
│-- middlewares/         # Middleware functions
│-- server.js            # Main server file
│-- .env                 # Environment variables
│-- package.json         # Project metadata & dependencies
```

---

## 🔗 API Endpoints  

### **1️⃣ Home Page (GET)**
**`GET /`** – Displays the home page with available MBBS destinations.  

### **2️⃣ MBBS Destination List (GET)**  
**`GET /mbbs`** – Displays available MBBS destinations.  

### **3️⃣ Country Details (GET)**  
**`GET /details/:country`** – Fetches MBBS details for a specific country.  

### **4️⃣ Student Registration (POST)**  
**`POST /register`** – Submits a student registration form.  

#### **Request Body (JSON)**
```json
{
  "name": "John Doe",
  "education": "12th Grade",
  "email": "johndoe@example.com",
  "address": "New Delhi, India",
  "contactNo": "9876543210",
  "dob": "2002-05-15",
  "countryPreference": "Russia"
}
```

---

## 🔒 Authentication  

The project includes user authentication using cookies and JWT. The authentication middleware is found in `middlewares/authentication.js`.

- **Middleware**: `checkForAuthenticationCookie("token")`  
- **Routes**: Defined under `/routes/user.js`  

---

## 🛠️ Deployment  

### **Deploy on Heroku**
1. Create a Heroku project.  
2. Add a MongoDB cloud database (MongoDB Atlas).  
3. Deploy the backend using Heroku CLI:  

```sh
heroku create study-mbbs-abroad
git push heroku main
heroku config:set MONGO_URL=your_mongo_connection_string
heroku config:set JWT_SECRET=your_jwt_secret
heroku open
```

---

## 🤝 Contributing  

💡 **Want to improve this project?**  
Feel free to fork, create a branch, and submit a pull request! 🚀  

### **Steps to Contribute**  
1. Fork the repository  
2. Create a new branch: `git checkout -b feature-new`  
3. Commit your changes: `git commit -m "Added new feature"`  
4. Push to your branch: `git push origin feature-new`  
5. Create a pull request  

---

## 📜 License  

This project is licensed under the MIT License.  

---

## 📞 Contact  

For any queries, feel free to reach out:  
📧 **Email**: bikashsharma5151@gmail.com  
🌍 **Website**: https://study-ktu0bn4tj-bikash-kumar-sharmas-projects-0c6fd68a.vercel.app  
