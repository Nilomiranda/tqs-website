import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styles
import "./styles/index.css"

// images
import enterprise from '../images/enterprise.svg' // enterprise icon
import skype from '../images/skype.svg' // skype icon
import individual from '../images/employee.svg' // individual icon
import send from '../images/send.png' // send icon
import facebook from '../images/facebook.svg' // facebook icon
import arcadis from '../images/arcadis.png' // arcadis company logo
import usp from '../images/usp.png' // usp company logo
import safra from '../images/safra.png' // safra company logo

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about-container">
      <div className="tri-right"></div>
      <div className="about-content">
        <h2>About us</h2>
        <p>
          We are an english school who wants to help you reach the next level in your business
          and profession.
        </p>
        <p>
          We understand that english is one of the most spoken languages around the world.
          Dominating it will enable you to reach new heights to offer your services world wide
          or work for anyone around the world.
        </p>
      </div>
    </div>
    <div className="section-container worked-container">
      <h2>Companies we worked with</h2>
      <div className="companies-container">
        <img src={ arcadis } data-company="arcadis" alt="Arcadis company logo"/>
        <img src={ usp } data-company="usp" alt="USP company logo"/>
        <img src={ safra } data-company="safra" alt="Safra bank company logo"/>
      </div>
    </div>
    <div className="team-container">
      <div className="section-container team-members">
        <h2>Meet the team</h2>
        <div className="member">
          <div className="avatar" />
          <div className="member-description">
            <h3>David Tidburry</h3>
            <p>
              Native English teacher from Liverpool, England.
              David has been teaching for over 5 years and he’ll
              always make sure you’ll have fun and learn a lot 
              during the classes.
            </p>
          </div>
        </div>
        <div className="member member-right">
          <div className="avatar" />
          <div className="member-description">
            <h3>Luciene Aquino</h3>
            <p>
              David’s wife and works together with him
              related to all translation services.
            </p>
          </div>
        </div>
        <div className="member">
          <div className="avatar" />
          <div class="member-description">
            <h3>Breaden Ross</h3>
            <p>
              Native English teacher from Vancouver, Canada.
              Working together with David to provide the best
              teachings to the students.
            </p>
          </div>
        </div>
      </div>
      <div className="tri-left"></div>
    </div> { /* end of team-container */ }
    <div className="section-container testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              “David is an excellent teacher, his way of teaching, always focused on his students, is very efficient and productive… 
              I always thought learning English was boring, not this time. David will teach you with a lot of laughs lol”
            </p>
            <p>Rodrigo Santini</p>
          </div>
          <div className="testimonial">
            <p>
              “The professor of The Queen’s Speech is very dynamic and has an excelente method of learning. I have been learning
              not only with books and grammar but also incorporates things within the environment that they teach. What makes it 
              most convenient is that the company is able to fit round my busy schedule and is also able to teach at my place of 
              work.”
            </p>
            <p>Carolina Bernardo</p>
          </div>
          <div className="testimonial">
            <p>
              “I have been studying with David for more than 2 years. I just have good things to say about him. He´s very responsible, 
              his classes are innovative and very joyful! With him, it´s 100% British English, which I prefer and like very much!!. 
              My level has improved a lot and now studying English is a hobby! I really recommend the Queen´s Speech for those who 
              want a new experience learning English.”  
            </p>
            <p>Thaís Minante Bueso</p>
          </div>
        </div>
      </div>
      <div className="services-container" id="services">
        <div className="tri-right" />
        <div className="services-content section-container">
          <h2>Services</h2>
          <div className="service translation">
            <svg className="service-icons" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m373.851562 308.296875c-1.445312-4.820313-7.390624-7.074219-13.496093-7.074219-5.945313 0-11.890625 2.253906-13.335938 7.074219l-31.011719 101.0625c-.160156.644531-.320312 1.285156-.320312 1.605469 0 5.144531 7.550781 8.675781 13.175781 8.675781 3.535157 0 6.265625-1.121094 7.070313-4.175781l6.101562-21.371094h36.796875l6.109375 21.371094c.800782 3.054687 3.53125 4.175781 7.066406 4.175781 5.625 0 13.175782-3.691406 13.175782-8.675781 0-.480469-.160156-.964844-.320313-1.605469zm-27.476562 69.40625 13.976562-49.324219 13.984376 49.324219zm0 0"/><path d="m456.835938 208.867188h-153.707032v-65.648438l49.953125-35.679688c3.941407-2.816406 6.28125-7.359374 6.28125-12.203124 0-4.847657-2.339843-9.390626-6.28125-12.207032l-50.554687-36.109375c-3.949219-26.570312-26.914063-47.019531-54.5625-47.019531h-192.796875c-30.421875 0-55.167969 24.746094-55.167969 55.167969v192.800781c0 30.417969 24.746094 55.164062 55.167969 55.164062h153.703125v65.648438l-49.953125 35.679688c-3.941407 2.816406-6.28125 7.363281-6.28125 12.207031s2.339843 9.390625 6.28125 12.203125l50.554687 36.109375c3.949219 26.570312 26.914063 47.019531 54.5625 47.019531h192.800782c30.417968 0 55.164062-24.75 55.164062-55.167969v-192.796875c0-30.421875-24.746094-55.167968-55.164062-55.167968zm-401.667969 64.265624c-13.878907 0-25.167969-11.289062-25.167969-25.167968v-192.800782c0-13.875 11.289062-25.164062 25.167969-25.164062h192.796875c13.875 0 25.164062 11.289062 25.164062 25.164062 0 4.847657 2.339844 9.394532 6.28125 12.207032l39.144532 27.960937-39.144532 27.960938c-3.941406 2.816406-6.28125 7.363281-6.28125 12.207031v73.367188h-9.09375c-30.417968 0-55.164062 24.746093-55.164062 55.164062v9.101562zm426.832031 183.699219c0 13.878907-11.289062 25.167969-25.164062 25.167969h-192.800782c-13.875 0-25.164062-11.289062-25.164062-25.167969 0-4.84375-2.339844-9.390625-6.28125-12.203125l-39.144532-27.960937 39.144532-27.960938c3.941406-2.816406 6.28125-7.363281 6.28125-12.207031v-112.464844c0-13.878906 11.289062-25.167968 25.164062-25.167968h24.054688.039062.039063 168.667969c13.875 0 25.164062 11.289062 25.164062 25.167968zm0 0"/><path d="m197.652344 138.277344c4.667968 0 8.457031-3.789063 8.457031-8.460938s-3.789063-8.460937-8.457031-8.460937h-37.628906v-20.539063c0-4.671875-3.789063-8.460937-8.460938-8.460937-4.667969 0-8.457031 3.789062-8.457031 8.460937v20.539063h-37.628907c-4.667968 0-8.457031 3.789062-8.457031 8.460937s3.789063 8.460938 8.457031 8.460938h11.660157c1.863281 17.863281 9.566406 34.007812 21.152343 46.511718-9.605468 5.75-20.824218 9.070313-32.8125 9.070313-4.667968 0-8.457031 3.785156-8.457031 8.457031s3.789063 8.460938 8.457031 8.460938c17.117188 0 32.996094-5.351563 46.085938-14.453125 13.09375 9.101562 28.972656 14.453125 46.089844 14.453125 4.667968 0 8.457031-3.789063 8.457031-8.460938s-3.789063-8.457031-8.457031-8.457031c-11.988282 0-23.207032-3.3125-32.8125-9.070313 11.585937-12.503906 19.289062-28.648437 21.152344-46.511718zm-46.089844 35.941406c-9.253906-9.605469-15.539062-22.078125-17.378906-35.941406h34.761718c-1.839843 13.863281-8.125 26.335937-17.382812 35.941406zm0 0"/></svg>
            <h3>Translation</h3>
          </div>
          <div className="service classes">
            <div className="class-option">
              <img src={ enterprise } alt="Enterprise icon" className="service-icons"/>  
              <h3>Corporate classes</h3>
            </div>
            <div className="class-option">
              <img src={ skype } alt="Skype icon" className="service-icons" />
              <h3>Skype classes</h3>
            </div>
            <div className="class-option">
              <img src={ individual } alt="Individual icon" className="service-icons" />
              <h3>Individual classes</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container email-container">
        <div className="signup-container">
          <h2>I would like information about...</h2>
          <form>
            <div className="form-options">
              <div className="form-option">
                <input type="checkbox" id="classes" name="classes" />
                <label for="classes">Classes</label>
              </div>
              <div className="form-option">
                <input type="checkbox" id="translations" name="translations" />
                <label for="translations">Translations</label>
              </div>
            </div>
            <div className="email-form">
              <input type="email" name="email" placeholder="Your email..." />
              <button type="submit">
                <img src={ send } alt="Send icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-container">
        <div className="tri-top"></div>
        <footer className="section-container">
          <a href="https://www.facebook.com/TheQueensSpeech/" target="_blank">
            <img src={ facebook } alt="Facebook logo"/>
          </a>
          <p>The Queen’s Speech Company  © { new Date().getFullYear() }</p>
        </footer>
      </div>
  </Layout> 
)

export default IndexPage
