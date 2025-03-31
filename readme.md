# FraudShield

🚀 **FraudShield** is an AI-powered fraud detection system designed to identify fraudulent and fishy websites using a **3-step fraud detection process**. Built as part of **HACKMAIT 6.0**, where our team **CTRL+ALT+ELITE** reached the **finals** among 200+ teams!

## 🔍 Overview

FraudShield aims to provide a robust fraud detection mechanism by analyzing **URLs**, **company financials**, and **website behavior** to identify potential threats.

## ⚡ Features

1️⃣ **Analyze the URL**: Uses a **machine learning model trained on 2000+ fraudulent URLs** to classify URLs as safe or fraudulent.
2️⃣ **Process Company Financials**: Extracts public financial data (if available) and runs it through an **ML model trained on 180+ company financials** to assess risk.
3️⃣ **Monitor Website Behavior**: Simulates interactions with a fake IP to detect malicious activities and patterns.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Machine Learning**: Python, TensorFlow, Scikit-learn
- **Database**: MongoDB
- **API Integration**: Financial data APIs
- **Security**: Proxy & fake IP monitoring

## 🚀 Installation

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- MongoDB

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/FraudShield.git
   cd FraudShield
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   pip install -r requirements.txt  # Install Python dependencies
   python train_model.py  # Train ML models
   python app.py  # Start backend server
   ```

3. **Frontend Setup:**

   ```bash
   cd frontend
   npm install  # Install dependencies
   npm start  # Start frontend server
   ```

## 🏆 Hackathon Journey

- **Round 1:** Advanced from **200+ teams** to **top 55**.
- **Round 2:** Made it to the **top 17 finalists**.
- **Finals:** Pitched our idea at HACKMAIT 6.0 but missed the **top 3**.

## 👨‍💻 Team CTRL+ALT+ELITE

- 💻 **Ashwani Kumar Jha**
- 💻 **Sumit Bhatt**
- 💻 **Madhvan**
- 💻 **Krishna**

## 📌 Future Enhancements

✅ Improve ML model accuracy with more training data.
✅ Automate data retrieval for real-time fraud detection.
✅ Deploy as a browser extension for quick fraud analysis.

## 📄 License

This project is licensed under the **MIT License**.

## 🤝 Contributing

Pull requests are welcome! If you'd like to contribute, please open an issue first to discuss your proposed changes.

---

🔥 Built with passion at **HACKMAIT 6.0** 🚀
