import { getCookie } from 'react-use-cookie';
import useCookie from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function CookieMonster () {
  const navigate = useNavigate();
  const token = (getCookie('token'));

  useEffect(() => {
  async function getValidation() {
    const response = await fetch(
      `http://localhost:3004/validate_token/${token}`
    );
    const res = await response.json();

    if (res.msg === "No tokens are found") {
         navigate("/")
      return;
    }
    if (res.msg == "Congrats: Validated Token!") {
         console.log("validation successful")
      return;
    }
  }

  getValidation();
}, []);




};
 
export default CookieMonster;

