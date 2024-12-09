import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [emails, setEmails] = useState([]); 
    const [passwords, setPasswords] = useState([]);

    const registerUser = (username, email, password) => {
        if (emails.includes(email)) {
            return false;
        }
        setUsers((prevUsers) => [...prevUsers, username]);
        setEmails((prevEmails) => [...prevEmails, email]); 
        setPasswords((prevPasswords) => [...prevPasswords, password]); 
        return true;
    };

    const login = (email, password) => {
        const userIndex = emails.findIndex((e) => e === email);
        if (userIndex !== -1 && passwords[userIndex] === password) {
            setCurrentUser({
                username: users[userIndex],
                email: emails[userIndex]
            });
            return true;
        }
        return false;
    };

    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ 
            currentUser,
            users, 
            emails, 
            passwords, 
            registerUser,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
