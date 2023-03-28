import React from 'react';
import { Helmet } from 'react-helmet-async';

import PageHero from '../components/PageHero';
import RightArrowSection from '../components/RightArrowSection';
import OurValues from '../components/OurValues';
import ApplyJobs from '../components/ApplyJobs';

import JoinUs from '../assets/images/join-us.jpg';

import bgheropage from '../assets/images/careers-locations-hero-desktop.jpg';

const dataCare = {
  image: JoinUs,
  title: 'Care to join our mission?',
  text: 'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
};

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Scoot || Careers</title>
        <meta name='description' content='careers de la empresa / producto' />

      </Helmet>
      <section className="min-h-screen overflow-hidden">
        <PageHero title="Careers" backgroundHero={bgheropage} />
        <RightArrowSection dataText={dataCare} arrowUbication="top-60" />
        <OurValues title="Why join us?" />
        <ApplyJobs />
      </section>
    </>
  );
};

export default Careers;
