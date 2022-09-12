import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='Joblify Logo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius id
            inventore voluptatum molestiae totam assumenda. Atque exercitationem
            magnam velit!. Testing out this app.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};
export default Landing;
