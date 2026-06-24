'use client'; // Required for using hooks like useRouter

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ElegantPolicyPage from '../Components/ElegentPage';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <ElegantPolicyPage title="Privacy Policy">
      <p className="text-neutral-600 mb-6">Last updated: June 2026</p>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold text-primary">Information We Collect</h2>
        <p className="text-neutral-600 leading-relaxed">
          At HD Seedlink Agro LLP, we respect your privacy. We collect information you provide directly to us,
          such as when you fill out an inquiry form, including your name, email, and contact details.
        </p>

        <h2 className="font-heading text-2xl font-bold text-primary">How We Use Your Data</h2>
        <p className="text-neutral-600 leading-relaxed">
          We use the information we collect to communicate with you, improve our agricultural logistics services,
          and ensure our support network operates effectively within Gujarat and beyond.
        </p>
      </section>
    </ElegantPolicyPage>
  );
}