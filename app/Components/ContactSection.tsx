'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setFieldErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Client-side basic validation
    const errors: Record<string, boolean> = {};
    if (!(data.email as string).includes('@')) errors.email = true;
    if ((data.name as string).length < 2) errors.name = true;
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const getInputClass = (fieldName: string) => `
    w-full px-5 py-3.5 rounded-2xl neumorphism-input bg-transparent border-none outline-none transition-all
    ${fieldErrors[fieldName] 
      ? 'ring-2 ring-red-500 focus:ring-red-600' 
      : 'focus:ring-1 focus:ring-primary'}
    text-neutral-800
  `;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-primary block mb-2">Get In Touch</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Let's Cultivate Growth Together</h2>
            <p className="font-sans text-neutral-600 font-light mb-8 leading-relaxed text-sm sm:text-base">
              Whether you are a local cooperative, a corporate buyer, or a farming community looking to modernize your operations, our experts are ready to assist.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'info@hdseedlink.com', href: 'mailto:info@hdseedlink.com' },
                { icon: Phone, label: 'Call Our Office', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: MapPin, label: 'Our Headquarters', value: 'Ahmedabad, Gujarat, India', href: '#' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full neumorphism-btn-flat flex items-center justify-center text-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-sans">{item.label}</p>
                    <a href={item.href} className="text-neutral-800 font-semibold hover:text-primary transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-4xl neumorphism-flat text-left">
            <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Send Us an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Please check the highlighted fields.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input name="name" required className={getInputClass('name')} placeholder="Henil Dand" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Email</label>
                  <input name="email" required type="email" className={getInputClass('email')} placeholder="henil@seedlink.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                  <input name="phone" type="tel" className={getInputClass('phone')} placeholder="+91 99999 99999" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Subject</label>
                  <input name="subject" required className={getInputClass('subject')} placeholder="Sustainable seed consulting" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" required rows={4} className={getInputClass('message')} placeholder="Tell us about your requirements..." />
              </div>

              <button 
                disabled={status === 'loading'} 
                type="submit" 
                className={`w-full py-4 rounded-2xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2
                  ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-white'}
                  hover:shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50`}
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? (
                  <>Message Sent! <CheckCircle2 className="w-5 h-5" /></>
                ) : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;