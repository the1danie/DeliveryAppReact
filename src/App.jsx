import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmationPage from "./components/Join/Confirmation/ConfirmationPage.jsx";
import HomePage from "./components/Join/HomePage/HomePage.jsx";
import GeneratePassword from "./components/Join/GeneratePassword/GeneratePassword.jsx";
import AllUsers from "./components/Users/AllUsers/AllUsers.jsx";
import UserCard from "./components/Users/UserCard/UserCard.jsx";
import Modal from "./components/Users/UserCard/BlockUser/Modal.jsx";
import Statistics from "./components/Statistics/Main/Statistics.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/join/confirmation" element={<ConfirmationPage />} />
                <Route path="/join/generatepswd" element={<GeneratePassword />} />
                <Route path="/users" element={<AllUsers />} />
                <Route path="/users/edit" element={<UserCard />} />
                <Route path="/users/edit/block" element={<Modal />} />
                <Route path="/statistics" element={<Statistics />} />
            </Routes>
        </Router>
    );
}

export default App;
