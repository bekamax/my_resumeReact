import React from 'react'
import "./myfoto.css"
const Myfoto = () => {
  return (
    <div>
      <section class="myfoto" id="myfoto">
        <div class="contaner">
          <div class="myfoto_inner">
            <div class="infa_left">
              <div class="myfoto_left">
                <h2 class="infa_left__inner_top zag">My foto</h2>
              </div>
            </div>
            <div class="myfoto_ritgh">
              <div class="myfoto_ritgh_inner">
                <div class="card">
                  <img
                    src="https://bekamax.github.io/my-resume/img/bloc/11.jpg"
                    alt=""
                  />
                  <span>2024</span>
                </div>
                <div class="card">
                  <img
                    src="https://bekamax.github.io/my-resume/img/bloc/123.jpg"
                    alt=""
                  />
                  <span>2023</span>
                </div>
                <div class="card">
                  <img
                    src="https://bekamax.github.io/my-resume/img/bloc/14.jpg"
                    alt=""
                  />
                  <span>2023</span>
                </div>
                <div class="card card_displaynone">
                  <img
                    src="https://bekamax.github.io/my-resume/img/bloc/15.jpg"
                    alt=""
                  />
                  <span>2023</span>
                </div>
                <div class="card card_displaynone">
                  <img
                    src="https://bekamax.github.io/my-resume/img/bloc/16.jpg"
                    alt=""
                  />
                  <span>2023</span>
                </div>
                <div class="card card_displaynone">
                  <img
                    src="https://bekamax.github.io/my-resume/img/bloc/17.jpg"
                    alt=""
                  />
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Myfoto