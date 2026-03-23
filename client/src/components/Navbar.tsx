import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

export default function Navbar() {
    return (
        <header>
            <h1>Gather</h1>
            <nav>
                <Show when="signed-out">
                    <SignInButton />
                    <SignUpButton />
                </Show>
                
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </nav>

        </header>
    );
}