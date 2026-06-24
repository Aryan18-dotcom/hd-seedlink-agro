"use client"
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ElegantPolicyPage from '../Components/ElegentPage';

export default function TermsOfUse() {
    const router = useRouter();
    return (
        <ElegantPolicyPage title="Terms of Use">

            <section className="space-y-8">
                <div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-3">Acceptance of Terms</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        By accessing the services provided by HD Seedlink Agro LLP, you agree to comply with these terms.
                        If you do not agree, please refrain from using our platform.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-3">Service Usage</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Our precision logistics and consulting services are provided for agricultural advancement.
                        Unauthorized reproduction of our proprietary management systems or methods is strictly prohibited.
                    </p>
                </div>
            </section>
        </ElegantPolicyPage>
    );
}