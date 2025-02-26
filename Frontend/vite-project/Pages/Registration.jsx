/**
 * @description:
 * Page für die Registerierung
 *
 */

import React from 'react';
import '../src/index.scss';
import { RegisterButton } from '../Components/MainButtons.jsx';
import { Header } from '../Components/Header.jsx';

const Registeration = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Welcome to Mikihana, your App for Books and more!</h1>
      </header>
      <main>
        <img
          src="/Upload/Äffchen.png"
          alt="profilpicture"
          className="profilPicture"
        />
        <h2>REGISTRATION</h2>
        <form>
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
          <input type="text" placeholder="USERNAME" />
          <input type="email" placeholder="EMAIL ADDRESS" />
          <input type="password" placeholder="PASSWORD" />
          <input type="password" placeholder="REPEAT PASSWORD" />
          <input type="date" placeholder="TT.MM.JJJJ" />
          <select name="gender" id="gender">
            <option value="">GENDER</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">divers</option>
          </select>
        </form>
        <RegisterButton />
      </main>
      <footer>
        <p>Copyright 2025 Mikihana</p>
      </footer>
    </div>
  );
};
export default Registeration;
