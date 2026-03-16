import React from 'react';
import { content } from '../config/content';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-heading sm:text-4xl">{content.contact.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{content.contact.description}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 sm:p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">{content.contact.form.name}</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3 border"
                    placeholder={content.contact.form.placeholders.name}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">{content.contact.form.email}</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3 border"
                    placeholder={content.contact.form.placeholders.email}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="project-type" className="block text-sm font-medium text-slate-700">{content.contact.form.projectType}</label>
              <div className="mt-1">
                <select
                  id="project-type"
                  name="project-type"
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3 border bg-white"
                >
                  {content.contact.form.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">{content.contact.form.message}</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                  placeholder={content.contact.form.placeholders.message}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center rounded-lg border border-transparent bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {content.contact.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;