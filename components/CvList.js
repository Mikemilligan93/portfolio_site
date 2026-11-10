'use client';

import { useState } from 'react';

// Each role is its own accordion: several can be open at the same time.
export default function CvList({ jobs, labels }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) =>
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));

  return (
    <ol className="cv-list">
      {jobs.map((job) => {
        const isOpen = openIds.includes(job.id);
        return (
          <li key={job.id} className={`job${isOpen ? ' is-open' : ''}`}>
            <span className={`job__dot bg-${job.color}`} aria-hidden="true" />
            <div className="job__card">
              <h4 className="job__heading">
                <button
                  type="button"
                  className="job__toggle"
                  aria-expanded={isOpen}
                  aria-controls={`job-${job.id}`}
                  onClick={() => toggle(job.id)}
                >
                  <span className="job__main">
                    <span className="job__role">{job.role}</span>
                    <span className="job__meta">
                      <span className={`tag bg-${job.color}`}>{job.company}</span>
                      <span className="job__period">{job.period}</span>
                    </span>
                  </span>
                  <span className="job__icon" aria-hidden="true" />
                  <span className="sr-only">{isOpen ? labels.collapse : labels.expand}</span>
                </button>
              </h4>
              <div id={`job-${job.id}`} className="job__details" hidden={!isOpen}>
                <p className="job__location">{job.location}</p>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {job.skills.length > 0 && (
                  <p className="job__skills">
                    {job.skills.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
