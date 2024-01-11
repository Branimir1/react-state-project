## Small business food ordering app

The following project is a React web application with a mobile first approach for a small business where public users can place food orders.

## Notable features:
- Modern architecture, all components are seperated in different JSX files making the code more readable
- Design is mostly done React Bootstrap framework
(react-toastify being used for login toasts)
- Form validation with Bootstrap and success confirmation
- React hooks are used for handling most of the logic
- React Router is used for app navigation
- Firebase is used for user authentification, the orders are saved in the Firestore database, the admin can then check all the saved orders

## Note
To get the app running on your machine you would need to paste your own Firebase API keys into the 'firebase.js' file or inside of the .env file. 