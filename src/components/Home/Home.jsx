import React from "react";
import "./Home.css";
import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";

const Home = () => {
  return (
    <section id="Home" className="section">
      <div class="contaner">
        <div class="section_contaner">
          <div class="avatar_left">
            <div class="avatar_img">
              <img
                src="https://bekamax.github.io/my-resume/img/bloc/122.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div class="title_rigth">
            <div class="title_rigth__inner">
              <div class="title_top">
                <div class="zagalovok">
                  <h2 class="black">Eraliev</h2>
                  <h2 class="yellow">Bekzhan</h2>
                </div>
                <div class="title_bottom">
                  <span class="title_bottom__inner">Young web developer</span>

                  <ul class="title_social_button">
                    <li>
                      <a href="https://www.facebook.com/?locale=ru_RU">
                        <img src={Facebook} className="bi" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/eral1ev_b?igsh=MTM2Zno4a2toMnh4Nw==">
                        <img src={Instagram} className="bi" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/+996772190750">
                        <img src={Twitter} className="bi" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="section_bottom">
                  <hr />
                  <nav class="nav_section_bottom">
                    <div class="section_title">
                      <h4>Location</h4>
                      <a
                        href="https://www.google.com/maps/place/%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.871416,74.5818525,13z/data=!4m6!3m5!1s0x389eb7dc91b3c881:0x492ebaf57cdee27d!8m2!3d42.8746212!4d74.5697617!16zL20vMDFnOV8?entry=ttu"
                        target="_blank"
                      >
                        Kyrgyzstan, Bishkek
                      </a>
                    </div>
                    <div class="section_title">
                      <h4>Phone</h4>
                      <a href="tel:+996 705 190 750" target="_blank">
                        +996 705 190 750
                      </a>
                    </div>
                    <div class="section_title">
                      <h4>Web</h4>
                      <a href="https://github.com/bekamax" target="_blank">
                        github.com/bekamax
                      </a>
                    </div>
                    <div class="section_title">
                      <h4>Email</h4>
                      <a href="email:bekamax05@gmail.com" target="_blank">
                        bekamax05@gmail.com
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
