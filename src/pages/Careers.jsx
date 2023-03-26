import React from 'react';
import PageHero from '../components/PageHero';
import RightArrowSection from '../components/RightArrowSection';
import WhyJoin from '../components/WhyJoin';
import ApplyJobs from '../components/ApplyJobs';

import JoinUs from '../assets/images/join-us.jpg';


const dataCare = {
  image: JoinUs,
  title: 'Care to join our mission?',
  text: 'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
};

const Careers = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <PageHero title="Careers" backgroundHero="bg-careers-hero" />
      <RightArrowSection dataText={dataCare} arrowUbication='top-60' />
      <WhyJoin />
      <ApplyJobs />
    </section>
  );
};

export default Careers;




