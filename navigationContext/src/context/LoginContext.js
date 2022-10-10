import React from 'react';

export const ContextoLogin = React.createContext();

export default function LoginContext({ children }) {
    const [user, setUser] = React.useState(null);


    const login = (email, password) => {
        

        if (email == "Fulaninho@gmail.com" && password == "123") {
            setUser({
                email: "Fulaninho@gmail.com",
                name: "Fulaninho"
            })
        }
        else
            setUser(null);
            throw new Error("Usuário ou senha invalidos")
    }

    const logout = () => {
        setUser(null);
    }

    const authorized = user != null;

    return (
        <ContextoLogin.Provider value={{ user, authorized, login, logout }}>
            {children}
        </ContextoLogin.Provider>
    )
}

