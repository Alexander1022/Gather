import { ClerkProvider } from "@clerk/react";
import App from "../App";
import { Routes, Route, useNavigate } from 'react-router'
import SignInPage from "../pages/SignIn";
import ProtectedRoute from "../ProtectedRoute";

export default function RootLayout() {
    const navigate = useNavigate();
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    return (
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
        >
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<App />} />
                </Route>
                <Route path="/sign-in" element={<SignInPage />} />
            </Routes>
        </ClerkProvider>
    )
}