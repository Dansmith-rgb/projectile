import React from "react";
import Navbar from "./Navbar";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="home-container">
          <div className="left-col">
            <p className="subhead">Simple &amp; Clean</p>
            <h1>Project Management Made Easy</h1>

            <div className="hero-cta">
              <Link to="" className="primary-cta">
                Try for Free
              </Link>
              <Link to="" className="watch-video-cta">
                <img src="../../static/images/watch.svg" />
                Watch a video
              </Link>
            </div>
          </div>
          <img
            src="../../static/images/illustration.svg"
            className="hero-img"
            alt="illustration"
          />
        </div>
      </section>

      <section className="features-section">
        <div className="home-container">
          <ul className="features-list">
            <li>Unlimited Projects</li>
            <li>Email Deadline Reminders</li>
            <li>Simple dashboard</li>
            <li>Free</li>
            <li>Detailed analysis</li>
            <li>Other awesome features</li>
          </ul>
          <img
            src="../../static/images/projectmanagement.jpg"
            alt="Man pressing project management"
          />
        </div>
      </section>

      <section className="testimonials-section">
        <div className="home-container">
          <ul>
            <li>
              <img src="../../static/images/person.jpg" alt="Person" />

              <blockquote>
                Id laborum excepteur aliquip aute magna eu culpa ut laborum non.
                Cupidatat elit Lorem officia aliqua laborum magna commodo mollit
                cillum consectetur amet dolore labore reprehenderit. Amet ea
                minim excepteur commodo veniam esse consectetur.
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
              <img src="../../static/images/person.jpg" alt="Person" />

              <blockquote>
                Id laborum excepteur aliquip aute magna eu culpa ut laborum non.
                Cupidatat elit Lorem officia aliqua laborum magna commodo mollit
                cillum consectetur amet dolore labore reprehenderit. Amet ea
                minim excepteur commodo veniam esse consectetur.
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
              <img src="../../static/images/person.jpg" alt="Person" />

              <blockquote>
                Id laborum excepteur aliquip aute magna eu culpa ut laborum non.
                Cupidatat elit Lorem officia aliqua laborum magna commodo mollit
                cillum consectetur amet dolore labore reprehenderit. Amet ea
                minim excepteur commodo veniam esse consectetur.
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-section">
        <div className="home-container">
          <div className="contact-left">
            <h2>Contact</h2>

            <form action="">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />

              <label for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" />

              <input
                type="submit"
                className="send-message-cta"
                value="Send message"
              />
            </form>
          </div>

          <div className="contact-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15013.795478536702!2d-122.40453379434113!3d37.71353466869236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1615231488230!5m2!1sen!2suk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
