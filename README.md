
 OrderIt 🍽️

OrderIt is a full-stack MERN (MongoDB, Express, React, Node.js) based Food Ordering Application that allows users to browse food items, place orders, and manage their profiles with integrated payment processing.

---

 🚀 Features

✅ User authentication (JWT-based)
✅ Browse food items with categories
✅ Add to cart and place orders
✅ Stripe payment integration
✅ Admin dashboard for managing food items, orders, and users
✅ Cloudinary integration for image uploads
✅ Environment-based configuration management

---

 🛠️ Tech Stack

| Frontend | Backend              | Database | Other Integrations               |
| -------- | -------------------- | -------- | -------------------------------- |
| React.js | Node.js + Express.js | MongoDB  | Stripe API, Cloudinary, Mailtrap |

---

 📁 Project Structure


OrderIt/
├── Backend-obfuscated/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── .gitignore
├── config.env (not committed)
└── README.md


---

 🔧 Setup Instructions

1. Clone the repository

bash
git clone https://github.com/VatsalRaj481/OrderIt.git
cd OrderIt


2. Backend Setup

bash
cd Backend-obfuscated
npm install


3. Frontend Setup

bash
cd ../Frontend
npm install


4. Environment Variables

* Create a `config.env` file in `Backend-obfuscated/config/` based on:


PORT = 4000
NODE_ENV = DEVELOPMENT
DB_LOCAL_URI = mongodb://127.0.0.1:27017/Internship

JWT_SECRET = your_jwt_secret
JWT_EXPIRES_TIME = 90

CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret

EMAIL_USERNAME = your_email_username
EMAIL_PASSWORD = your_email_password
EMAIL_HOST = your_email_host
EMAIL_PORT = your_email_port
EMAIL_FROM = your_email_from

FRONTEND_URL = http://localhost:3000

STRIPE_SECRET_KEY = your_stripe_secret_key
STRIPE_API_KEY = your_stripe_api_key


5. Run the Application

* Backend:

bash
npm run dev


* Frontend:

bash
npm start


Visit `http://localhost:3000` to use the app.

---

 💡 Notes

* Do not commit secrets in your repo. Use `.gitignore` for `config.env`.
* Rotate your Stripe, Cloudinary, and Mailtrap keys if they were ever pushed publicly.
* This project is for learning and personal portfolio purposes. Enhance with production-grade security and deployments when used commercially.

---

 🙌 Author

[Vatsal Raj](https://github.com/VatsalRaj481)

---

 ⭐ Contributing

Feel free to fork this repo and create pull requests for improvements or new features.

---

✅ Instructions to add:

1. Create a file `README.md` in your project root.
2. Paste the above content.
3. Commit:

bash
git add README.md
git commit -m "Added README.md"
git push origin main

