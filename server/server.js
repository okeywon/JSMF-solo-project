const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const adminRouter = require('./routes/admin.router');
const stripeRouter = require('./routes/stripe.router');
const detailRouter = require('./routes/detail.router');
const commentRouter = require('./routes/comment.router');
const voteRouter = require('./routes/vote.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// limits file uploads and image uploads to 50mb
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/stripe', stripeRouter);
app.use('/api/detail', detailRouter);
app.use('/api/comment', commentRouter);
app.use('/api/vote', voteRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
