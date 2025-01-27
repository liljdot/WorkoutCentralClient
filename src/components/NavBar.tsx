import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { MouseEventHandler } from "react"
import useGetHost from "../hooks/useGetHost"
import { useAuthContext } from "../hooks/useAuthContext"

const NavBar: React.FC = () => {
    const host = useGetHost()
    const { logout } = useLogout()
    const { authState } = useAuthContext()
    const { user } = authState

    const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
        logout(`http://${host}/api/user/logout`)
    }


    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Workout Central</h1></Link>

                <nav>
                    {user ?
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                        :
                        <div>
                            <Link to="/login">Login</Link>

                            <Link to="/signup">Sign Up</Link>
                        </div>}
                </nav>
            </div>
        </header>
    )
}

export default NavBar