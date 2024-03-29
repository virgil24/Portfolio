import React from 'react';
import Cursor from 'src/components/Main/Cursor';
import SlidePresentation from 'src/components/Main/SlidePresentation';
import Nav from 'src/components/Main/Nav';
import NavResponsive from 'src/containers/NavResponsive';
import SlideProjects from 'src/components/Main/SlideProjects';
import SlideContact from 'src/components/Main/SlideContact';
import SlideAbout from 'src/containers/SlideAbout';
import SlideAboutResponsive from 'src/containers/SlideAboutResponsive';
import projectsData from 'src/data/projects';

import './styles.scss';

const Main = () => (
  <div>
    <Cursor />
    <Nav />
    {/* can use burger menu instead */}
    {/* <NavResponsive /> */}
    <div className="outer-wrapper">
      <div className="outer-wrapper__wrapper">
        <SlidePresentation />
        <SlideProjects projects={projectsData} />
        <SlideAbout />
        <SlideAboutResponsive />
        <SlideContact />
      </div>
    </div>
  </div>
);

export default Main;
