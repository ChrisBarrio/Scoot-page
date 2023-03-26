import React from 'react';
import PrimaryBtn from './PrimaryBtn';

const listJobs = [
  {
    id: 1,
    position: 'General Manager',
    country: 'Jakarta, Indonesia',
  },
  {
    id: 2,
    position: 'UX/UI Designer',
    country: 'Yokohama, Japan',
  },
  {
    id: 3,
    position: 'Blog Content Copywriter',
    country: 'New York, United States',
  },
  {
    id: 4,
    position: 'Graphic Designer',
    country: 'New York, United States',
  },
  {
    id: 5,
    position: 'Fleet Supervisor',
    country: 'Jakarta, Indonesia',
  },
  {
    id: 6,
    position: 'UX Analyst',
    country: 'London, United Kingdom',
  },
];

const ApplyJobs = () => {
  return (
    <section className="my-20">
      <div className="mx-auto flex w-3/4 flex-col">
        {listJobs.map((e) => (
          <div key={e.id} className="flex my-2 w-full justify-between bg-[#f2f5f9] p-4 ">
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-slate-700">{e.position}</h4>
              <p className="text-slate-600">{e.country}</p>
            </div>
            <div className="flex flex-col justify-center">
              <PrimaryBtn title="Apply" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplyJobs;
