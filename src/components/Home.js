import React from 'react';

export default function Home() {
    return (
    <div>
        <header class="header">
            {/* <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Logo" class="header__logo"/>
            </div> */}

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Emily Bruner</span>
                    <span class="heading-primary--sub">Full Stack Web Developer</span>
                </h1>

                <a href="#section-tours" class="btn btn--white btn--animated">View Projects</a>
            </div>
        </header>

        <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Featured Projects
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-3">
                       <div class="card">
                           <div class="card__side card__side--front">
                                <div class="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">Kansha</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>Redux</li>
                                        <li>SASS</li>
                                        <li>NodeJS</li>
                                        <li>Postgres</li>
                                    </ul>
                                </div>
                           </div>
                           <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                    <p class="card__price-only">Project Summary:</p>
                                        <p class="card__price-value">A workplace recognition platform to appreciate peers through rewards and in-app messages. This was a build-on project where we completely overhauled the back end and front end to handle multiple user types and created the feature of organization accounts and administrator tools for monitoring employee activity and recognition.</p>
                                    
                                    </div>
                                    <a href="http://www.kansharewards.com" class="btn btn--white">View Project</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--2">Lambda Bug Tracker</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>Redux</li>
                                        <li>SASS</li>
                                        <li>NodeJS</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-2">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Project Summary: </p>
                                        <p class="card__price-value">A web app that allows teams of developers to track bugs of projects they are working on. </p>
                                    </div>
                                    <a href="https://lambda-bug-tracker.firebaseapp.com/" class="btn btn--white">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--3">Better Professor</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                    <li>ReactJS</li>
                                        <li>Redux</li>
                                        <li>SASS</li>
                                        <li>NodeJS</li>
                                        <li>Sqlite</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-3">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Project Summary</p>
                                        <p class="card__price-value">A web app that allows professors to manage deadlines and communications with their students. </p>
                                    </div>
                                    <a href="https://betterprofessor25.herokuapp.com/docs/" class="btn btn--white">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-huge">
                    <a href="https://github.com/emilybruner" class="btn btn--green">View More Work on Github</a>
                </div>
            </section>

            <section class="section-features">
                
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-world"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Front End</h3>
                            <p class="feature-box__text">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML/SCSS/CSS</li>
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-compass"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Back End</h3>
                            <p class="feature-box__text">
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Python</li>
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-map"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Database</h3>
                             <p class="feature-box__text">
                                <li>PostgresSQL</li>
                                <li>SQLite</li>
                                <li>SQL</li>
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-heart"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Tools</h3>
                            <p class="feature-box__text">
                                <li>Git/Github</li>
                                <li>Postman</li>
                                <li>Jest</li>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </div>

    )    
}