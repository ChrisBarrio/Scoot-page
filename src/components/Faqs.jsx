import React from 'react';

import Accordion from '../components/Accordion';

const dataHowItWorks = [
  {
    title: 'How do I download the app?',
    text: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
  },
  {
    title: 'Can I find a nearby Scoots?',
    text: 'Definitely! Simply open up the app and allow us to find your location while using it. We`ll show you all of the closest Scoots and some extra useful information.',
  },
  {
    title: 'Do I need a license to ride?',
    text: 'Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.',
  },
];
const dataSafeDriving = [
  {
    title: 'Should I wear a helmet?',
    text: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
  },
  {
    title: 'How about the rules & regulations?',
    text: 'Now is not the time to be a rule breaker. Be sure you`re complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people`s way.',
  },
  {
    title: 'What if I damage my Scoot?',
    text: 'Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There`s an option to add insurance for each trip, or you can sign up for annual insurance if you`re a regular Scooter.',
  },
];

const Faqs = () => {
  return (
    <section className="my-20">
      <h3 className="text-center text-4xl text-slate-700">FAQs</h3>
      <div className="my-10 mx-auto flex w-3/4 max-md:flex-col max-md:items-center max-md:w-full">
        <div className="w-1/4 max-md:w-full">
          <h4 className=" ml-4 text-4xl font-bold text-slate-700 max-md:text-center max-md:my-4">
            How it works
          </h4>
        </div>
        <div className="w-3/4">
          <Accordion dataText={dataHowItWorks} />
        </div>
      </div>
      <div className="my-10 mx-auto flex w-3/4 max-md:flex-col max-md:items-center max-md:w-full">
        <div className="w-1/4 max-md:w-full">
          <h4 className=" ml-4 text-4xl font-bold text-slate-700 max-md:text-center max-md:my-4">
            Safe driving
          </h4>
        </div>
        <div className="w-3/4">
          <Accordion dataText={dataSafeDriving} />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
