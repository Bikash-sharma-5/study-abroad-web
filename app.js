require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const cookiePaser = require("cookie-parser");
const { check, validationResult } = require('express-validator');
const Student = require("./models/studentSchema");




const userRoute = require("./routes/user");


const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.static('public'));
const mbbsDestinations =[
  {
    "country": "Russia",
    "capital": "Moscow",
    "tuition_fees": "3,500 - 6,000 USD per year",
    "living_cost": "300 - 600 USD per month",
    "duration": "6 years",
    "language": "English, Russian",
    "popular_universities": ["Moscow State Medical University", "Kazan Federal University", "People’s Friendship University"],
    "image": "https://th.bing.com/th/id/OIP.jN_2GFwB3EGBfoMLKXzBPAHaEK?rs=1&pid=ImgDetMain",
    "description": "Russia is one of the top destinations for MBBS, offering high-quality education, globally recognized degrees, and affordable tuition fees. Most universities are government-funded, and students can choose to study in English or Russian.",
    "admission_details": {
      "eligibility": "50% in PCB (Physics, Chemistry, Biology) in 12th grade, NEET qualification required.",
      "intake_months": ["September", "January"],
      "application_process": "Submit an online application with required documents, receive an admission letter, apply for a visa, and complete enrollment."
    }
  },
  {
    "country": "Uzbekistan",
    "capital": "Tashkent",
    "tuition_fees": "2,000 - 4,000 USD per year",
    "living_cost": "200 - 500 USD per month",
    "duration": "5 years",
    "language": "English, Uzbek, Russian",
    "popular_universities": ["Tashkent Medical Academy", "Samarkand State Medical Institute"],
    "image": "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Uzbekistan is becoming a popular choice for MBBS aspirants due to its affordable tuition fees and English-medium courses. The country provides a good living standard and globally recognized medical programs.",
    "admission_details": {
      "eligibility": "50% in PCB in 12th grade, NEET qualification required.",
      "intake_months": ["September"],
      "application_process": "Submit an application, receive admission confirmation, apply for a visa, and travel to Uzbekistan."
    }
  },
  {
    "country": "Kazakhstan",
    "capital": "Astana",
    "tuition_fees": "3,000 - 5,500 USD per year",
    "living_cost": "250 - 500 USD per month",
    "duration": "5 years",
    "language": "English, Kazakh, Russian",
    "popular_universities": ["Kazakh National Medical University", "Astana Medical University"],
    "image": "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "Kazakhstan offers affordable MBBS programs with WHO and MCI/NMC-approved universities. The curriculum follows international medical standards, making it an excellent choice for Indian students.",
    "admission_details": {
      "eligibility": "50% in PCB in 12th grade, NEET qualification required.",
      "intake_months": ["September", "January"],
      "application_process": "Fill out the application form, receive an admission letter, apply for a visa, and confirm enrollment."
    }
  },
  {
    "country": "Philippines",
    "capital": "Manila",
    "tuition_fees": "2,500 - 6,000 USD per year",
    "living_cost": "300 - 600 USD per month",
    "duration": "5.5 years (1.5 years pre-med + 4 years MBBS)",
    "language": "English",
    "popular_universities": ["University of Perpetual Help", "AMA School of Medicine", "Davao Medical School Foundation"],
    "image": "https://th.bing.com/th/id/OIP.WvFNsw8Tgctp3PdYx9hg0wHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "description": "The Philippines is one of the best choices for Indian students due to its American-style medical education, English-medium courses, and high success rate in medical licensing exams.",
    "admission_details": {
      "eligibility": "50% in PCB in 12th grade, NEET qualification required.",
      "intake_months": ["June", "October"],
      "application_process": "Complete NMAT exam, apply for admission, receive confirmation, and process visa."
    }
  },
  {
    "country": "Georgia",
    "capital": "Tbilisi",
    "tuition_fees": "4,000 - 8,000 USD per year",
    "living_cost": "300 - 600 USD per month",
    "duration": "6 years",
    "language": "English, Georgian",
    "popular_universities": ["Tbilisi State Medical University", "New Vision University"],
    "image": "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Georgia offers high-quality MBBS education with European standards. No entrance exam is required, and students get direct admission.",
    "admission_details": {
      "eligibility": "50% in PCB in 12th grade, NEET qualification required.",
      "intake_months": ["October"],
      "application_process": "Apply online, get admission confirmation, apply for a visa, and travel to Georgia."
    }
  },
  {
    "country": "Kyrgyzstan",
    "capital": "Bishkek",
    "tuition_fees": "2,500 - 4,500 USD per year",
    "living_cost": "200 - 400 USD per month",
    "duration": "5 years",
    "language": "English, Kyrgyz, Russian",
    "popular_universities": ["Kyrgyz State Medical Academy", "Osh State University Medical Faculty"],
    "image": "https://th.bing.com/th/id/OIP.5GkX_wJyJgYh-_PEfeEqYwHaE8?rs=1&pid=ImgDetMain",
    "description": "Kyrgyzstan is a cost-effective choice for MBBS aspirants, with simple admission procedures and MCI/NMC-approved universities.",
    "admission_details": {
      "eligibility": "50% in PCB in 12th grade, NEET qualification required.",
      "intake_months": ["September"],
      "application_process": "Apply online, get admission confirmation, apply for a visa, and travel to Kyrgyzstan."
    }
  },
  {
    "country": "Egypt",
    "capital": "Cairo",
    "tuition_fees": "5,000 - 7,500 USD per year",
    "living_cost": "300 - 500 USD per month",
    "duration": "6 years",
    "language": "English, Arabic",
    "popular_universities": ["Cairo University Faculty of Medicine", "Ain Shams University Faculty of Medicine"],
    "image": "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Egypt is known for its historical significance in medicine and provides globally recognized MBBS degrees at an affordable cost.",
    "admission_details": {
      "eligibility": "50% in PCB in 12th grade, NEET qualification required.",
      "intake_months": ["October"],
      "application_process": "Apply online, get admission confirmation, apply for a visa, and travel to Egypt."
    }
  }
]

app.use(express.static(path.join(__dirname, "public")));
mongoose
  .connect(process.env.MONGO_URL
)
  .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));



app.get("/mbbs", (req, res) => {
  res.render("mbbs", { mbbsDestinations });
});
app.get("/", async (req, res) => {
 
  try {
   
   
    res.render("home",{ mbbsDestinations });
    
} catch (error) {
    res.status(500).send("Error fetching recipes.");
}
 
});

app.get('/details/:country', (req, res) => {
  const countryName = req.params.country;
  const destination = mbbsDestinations.find(dest => dest.country === countryName);
  
  if (destination) {
      res.render('details', { destination });
  } else {
      res.status(404).send('Country details not found.');
  }
});

app.post('/register', [
  check('name', 'Name is required').notEmpty(),
  check('education', 'Education is required').notEmpty(),
  check('email', 'Invalid email').isEmail(),
  check('contactNo', 'Contact number must be 10 digits').isLength({ min: 10, max: 10 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, education, email, address, contactNo, dob, countryPreference } = req.body;

  try {
    await Student.create({
      name,
      education,
      email,
      address,
      contactNo,
      dob,
      countryPreference
    });
    const allStudents = await Student.find({});
    console.log(allStudents)
    res.redirect('/');
    
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get("/form", (req, res) => {
  res.render("form"); // Render the favorites.ejs page
});

app.use("/user", userRoute);


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
