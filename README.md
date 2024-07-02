# Genius Workplace Frontend
Welcome to the frontend of Genius Workplace, an innovative platform designed to transform the way we work and collaborate. This repository contains the frontend code built with React, providing an intuitive and responsive user interface for the application.
## Backend Repo
➡️➡️➡️ [Genius WorkPlace Backend Repo](https://github.com/mdmarufhossianbd/genius-workplace-backend.git)
# Preview 
Live link : [Genius WorkPlace](https://genius-workplace.web.app/)

# How can you run it in you local machine
Must be have to installed nodejs in your machine before run this project.
- step 1
  ```
  git clone https://github.com/mdmarufhossianbd/genius-workplace-fronted.git
  ```
- step 2
  ```
  npm install
  ```
- step 3
  ```
  npm run dev
  ```
- step 4 [ note : setup .env.local file. In the root folder of this project create a .env.local file.]
  ```
  VITE_APIKEY=FIREBASE_APIKEY
  VITE_AUTHDOMAIN=FIREBASE_AUTHDOMAIN
  VITE_PROJECTID=FIREBASE_PROJECTID
  VITE_STORAGEBUCKET=FIREBASE_STORAGEBUCKET
  VITE_MESSAGINGSENDERID=FIREBASE_MESSAGINGSENDERID
  VITE_APPID=FIREBASE_APPID
  VITE_IMAGE_HOSTING_KEY=FIREBASE_IMAGE_HOSTING_KEY
  ```

# Technologies Used
- tanstack/react-query
- axios
- firebase
- framer-motion
- html2canvas-pro
- jspdf
- react-datepicker
- react-helmet
- react-hot-toast
- react-tabs
- react-to-pdf
- sweetalert2
- swiper

# Features
- Create a New Job: Users can create new job listings with detailed information.
- Apply for Jobs: Users can apply for job listings but are restricted from applying to jobs they have posted.
- Job Details PDF Download: Users can download the details of a job listing as a PDF
- Real Time job apply.
- user don't apply duplicate job apply

# License
This project is licensed under the MIT License. See the LICENSE file for details.
