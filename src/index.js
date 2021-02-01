import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function Header() {
  return (
    <section className="header">
      <div className="header-logo">Company Logo</div>
      <div className="header-links">
        <ul>
          <li>bout</li>
          <li>Serdvices</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}

function Services({ img, name }) {
  return (
    <section className="services">
      <img src={img} alt="name" />
      <div className="services-name">{name}</div>
    </section>
  );
}

function MainSection() {
  return (
    <section className="MainSection">
      <div className="MainSection-contect">
        <div className="MainSection-header">Company Name</div>
        <div className="MainSection-services">
          <Services img="null" name="services" />
          <Services img="null" name="services" />
          <Services img="null" name="services" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-contect">loerlofkjh</div>
      <div className="about-image">
        <img src="sdf" alt="content" />
      </div>
    </section>
  );
}

function Comments({ comment, name }) {
  return (
    <section className="comments">
      <div className="comments-comment">{comment}</div>
      <div className="comments-client">
        <img src="null" alt="P" />
        {name}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-header">Testimonial</div>
      <div className="testimonial-comments">
        <Comments comment="sdf" name="sdf" />
        <Comments comment="sdf" name="sdf" />
        <Comments comment="sdf" name="sdf" />
      </div>
    </section>
  );
}

function ConnectForm() {
  return (
    <section className="connectForm">
      <form>
        <input type="text" placeholder="Fullname" />
        <input type="text" placeholder="Fullname" />
        <input type="text" placeholder="Fullname" />
        <input type="text" placeholder="Fullname" />
        <textarea placeholder="sdfsd" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

function Connect() {
  return (
    <section className="connect">
      <div className="connect-header">
        <div className="connect-main-header">Connect main</div>
        <div className="connect-secondary-header">Connect secondary</div>
      </div>
      <ConnectForm />
    </section>
  );
}

function Footer() {
  return (
    <section className="footer">
      <div className="footer-copyright">@copyright</div>
      <div className="footer-follow">follow us on</div>
    </section>
  );
}

function App() {
  return (
    <div className="progress-bar-v2">
      <Header />
      <MainSection />
      <About />
      <Testimonial />
      <Connect />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
