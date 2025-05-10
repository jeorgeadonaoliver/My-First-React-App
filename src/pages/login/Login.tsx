import { useNavigate } from 'react-router-dom';
import './Login.css'


export default function Login() {

    const navigate = useNavigate();
    const navigateToPage = (page:string) => {
      navigate(page);
    };
  return (
     <div className="loginbody">
      <form action="" className="loginform">
        <div className="mb-6">
          <label htmlFor="name" className="formlabel">Email/Username:</label>
          <input type="text" name="name" id="name" placeholder="email/username" className="frominput" />
        </div>
    <div>
      <label htmlFor="email" className="formlabel">Password:</label>
      <input type="password" name="email" id="email" placeholder="password" className="frominput" />
      <a href="#" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
    </div>
    <button className="buttonlogin" onClick={() => navigateToPage("/layout/home")}>Login</button>
  </form>
     </div>
  );
}