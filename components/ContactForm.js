'use client';

import { useState } from 'react';

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

// With NEXT_PUBLIC_FORM_ENDPOINT set, the form POSTs JSON to that endpoint
// (Formspree and similar services accept this). Without it, it opens the
// visitor's mail client with the message pre-filled.
export default function ContactForm({ labels, email }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return; // honeypot field: filled only by bots

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact – ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>{labels.name}</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label className="field">
        <span>{labels.email}</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>{labels.message}</span>
        <textarea name="message" rows={5} required />
      </label>
      <label className="field field--trap" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="btn btn--pink" disabled={status === 'sending'}>
        {status === 'sending' ? labels.sending : labels.send}
      </button>
      <p className="form__status" role="status">
        {status === 'sent' && labels.sent}
        {status === 'error' && labels.error}
        {status === 'idle' && !ENDPOINT && labels.mailNote}
      </p>
    </form>
  );
}
