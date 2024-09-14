const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express
const app = express();
const port = 5000; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/manageWasteDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// MongoDB Schema and Model
const donationSchema = new mongoose.Schema({
  name: String,
  mobileNo: String,
  donationType: String,
  address: String,
  message: String,
});

const Donation = mongoose.model('Donation', donationSchema);

// Route to handle form submission
app.post('/submit', async(req, res) => {
  const { name, mobileNo, donationType, address, message } = req.body;
  console.log(req.body); // Log the incoming data
  
  try {
    const newDonation = new Donation({
      name,
      mobileNo,
      donationType,
      address,
      message,
    });

    await newDonation.save(); // Save the new donation
    res.status(200).json({ message: 'Donation details saved successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle any errors that occur
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
