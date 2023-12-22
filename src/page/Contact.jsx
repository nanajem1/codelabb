import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../Style/Style.css";

const Contact = () => {
  return (
    <>
      <Navbar />

      <h1>Contact Us</h1>

      {/* Google Maps iframe */}
      <iframe
        title="Kampus UMM"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15807.000361491526!2d112.5992888!3d-7.9211517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881f5a1288a83%3A0x2a5ec5132ddb7113!2sLaboratorium%20Informatika%20UMM!5e0!3m2!1sen!2sid!4v1698819658218!5m2!1sen!2sid"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        className="google-map"
      ></iframe>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>SMS/WA/Telegram (Quick Response):</p>
          <p>Phone: +62 896-896-01317 wa.me/6289689601317</p>
          <p>wa.me/6289689601317</p>
        </div>
        <div className="visit-info">
          <h2>The Office</h2>
          <p>Address: Jl. Raya Tlogomas No.246, Jawa Timur 65144, Indonesia</p>
          <p>Phone: (0341) 464318, ext 252</p>
          <p>Email: lab.informatika@umm.ac.id</p>

          <h2>Business Hours</h2>
          <p>Monday - Friday 8am to 4pm</p>
          <p>Saturday - 8am to 12pm</p>
          <p>Sunday - Closed</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
