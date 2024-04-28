// api/login.js
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});


module.exports = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Authenticate user with Firebase Authentication
        const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
        
        // Return user data or token
        res.status(200).json({ user: userCredential.user });
    } catch (error) {
        // Handle authentication errors
        res.status(401).json({ error: error.message });
    }
};

//Go to your Vercel dashboard, navigate to your project, and then go to Settings > Environment Variables. 