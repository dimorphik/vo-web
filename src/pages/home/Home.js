import React, {Component} from 'react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">Robin Gabrielli</div>
        <div className="home__sub-header">stage actor, voice artist, musician</div>
        <div className="home__image-container">
          <img className="home__image" src="/assets/images/robin.gabrielli.headshot.jpg" alt="Robin Gabrielli headshot"/>
        </div>
        <div className="home__resume-download-container">
          <img src="/assets/icons/pdf.png" alt=""/>
          <a className="home__resume-link strong" href="/assets/pdf/robin.gabrielli.actor.resume.pdf" target="_blank">Resume (PDF)</a>
        </div>
        <div className="home__bio">
          <p className="home__p">
            <span className="strong">Robin Gabrielli</span>
            &nbsp;is a Bay Area actor, voiceover artist, musician, technologist and educator. For the past 25 years he's been
            appearing on stages all over his home state of Massachusetts, and his voice can be heard on numerous productions of
            Colonial Radio Theatre (available on Amazon) as well as the monthly science fiction podcast
            <span className="strong italic">&nbsp;Ars Paradoxica</span>.
          </p>
          <p className="home__p">
            Since relocating to the Bay Area, Robin has performed in Bigger Than a Breadbox Productions' award-winning 2016
            production of
            <span className="strong">&nbsp;"The Awakening"&nbsp;</span>
            as Leonce Pontellier, and just closed an acclaimed production of Lucas Hnath's
            <span className="strong">&nbsp;"Isaac's Eye"&nbsp;</span>
            with Custom Made Theatre Company as Robert Hooke. In just a couple of weeks, he'll begin rehearsals for New Conservatory
            Theatre's production of
            <span className="strong">&nbsp;"Sordid Lives"&nbsp;</span>
            as Wardell Owens.
          </p>

          <p className="home__p">
            Robin is now producing and narrating the audiobook for Josh Mathe's
            <span className="strong">&nbsp;"I, Athlete: How to unleash your inner athlete and supercharge your life!"&nbsp;</span>
            This book is an inspirational and practical guidebook for how to find and harness your inner athlete.
          </p>

          <p className="home__p">
            By day, Robin works at Sony Interactive Media at job he loves, building the next generation of PlayStation Network on
            the web.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
