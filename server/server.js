require('dotenv').config();

const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const ngoRoutes = require('./routes/ngoRoutes');
const contactRoutes = require('./routes/contactRoutes');
const foodbanksFormRoutes = require('./routes/foodRegistrationFormRoutes'); 
const ngoRegistrationFormRoutes = require('./routes/ngoRegistrationFormRoutes');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const Contact = require('./models/contactModel'); // Assuming you have a Contact model
const authRoutes = require('./routes/auth');
const { connectDB, jwtSecret } = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Increase payload limit for body-parser (adjust the limit as needed)
app.use(express.json({ limit: '10mb' }));

// Connect to MongoDB
connectDB();

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Contact Form Submission Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Save form data to MongoDB
    const { email, message } = req.body;
    const contact = new Contact({ email, message });
    await contact.save();

    // Send Thank-You Email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Thank You for Contacting Us!',
      text: 'We have received your message. Thank you!',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Testing Email Sending Endpoint
app.post('/api/test-email', async (req, res) => {
  try {
    // Your email sending logic here
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// NGO Registration Form Submission Endpoint
app.post('/api/ngo-registration-form/register', async (req, res) => {
  try {
    const formData = req.body;
    const ngoRegistrationForm = new NgoRegistrationForm(formData);
    await ngoRegistrationForm.save();

    // You can add additional logic here, e.g., send confirmation email

    res.status(200).json({ message: 'NGO Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error - NGO Registration' });
  }
});

// Foodbank Registration Form Submission Endpoint
app.post('/api/foodbanks-form/register', async (req, res) => {
  try {
    const formData = req.body;
    const foodbanksForm = new FoodbanksForm(formData);
    await foodbanksForm.save();

    // You can add additional logic here, e.g., send confirmation email

    res.status(200).json({ message: 'Foodbank Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error - Foodbank Registration' });
  }
});

// Use Routes
app.use('/api', ngoRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ngo-registration-form', ngoRegistrationFormRoutes);
app.use('/api/foodbanks-form', foodbanksFormRoutes);
app.use('/api/auth', authRoutes);
// Run the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
