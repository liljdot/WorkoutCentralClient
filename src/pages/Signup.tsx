import { useState } from "react"
import useSignup from "../hooks/useSignup"
import useGetHost from "../hooks/useGetHost"
import { LinearProgress } from "@mui/material"

const Signup: React.FC = () => {
    const host = useGetHost()

    const [email, setEmail] = useState<string>("")
    const [password, SetPassword] = useState<string>("")
    const { error: signupError, signup, isLoading } = useSignup()

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries());

        const { email, password } = data

        console.log(email, password)
        signup(email, password, `https://${host}/api/user/signup`)
            .then((token: string) => console.log(token))
            .catch((e: any) => console.log(e))

    }

    return (
            <div className="formContainer">
                <form className="signup" onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>

                    <label>Email:</label>
                    <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Password:</label>
                    <input name="password" type="password" value={password} onChange={e => SetPassword(e.target.value)} />

                    <button type="submit">Sign Up</button>

                    {(signupError && !isLoading) && <div className="error">{signupError.message}
                    </div>}

                    <div className="loaderContainer">
                        {isLoading && <LinearProgress color="primary" sx={{ height: 1.5 }} />}
                    </div>
                </form>
            </div>
    )
}

export default Signup