
const AuthProtectedRoute = ({ Component }) => {
    const token = localStorage.getItem("token")
    return token ? <Component /> : "Not Authorized"
}

export default AuthProtectedRoute