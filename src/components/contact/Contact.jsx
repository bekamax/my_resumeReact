import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <>
      <footer class="footer" id="footer">
        <div class="contaner">
          <div class="footer_inner">
            <div class="footer_left">
              <div class="footer_left__inner">
                <h2 class="footer_left__inner_top zag">CONTACT</h2>
              </div>
            </div>
            <div class="footer_right">
              <div class="footer_top">
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
                <hr />
              </div>
              <div class="footer_bottom">
                <div class="zagalovok">
                  <h2 class="black">Eraliev</h2>
                  <h2 class="yellow">Bekzhan</h2>
                </div>
                <ul class="footer_bottom_btn">
                  <li>
                    <a href="">
                      <i class="bi-facebook bi"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="bi-instagram bi"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="bi-what bi"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact