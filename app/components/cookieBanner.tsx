'use client';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
    const [isBannerVisible, setBannerVisible] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);

        if (storedCookieConsent !== null) {
            setCookieConsent(storedCookieConsent);
            setBannerVisible(false);
        } else {

            const showTimeout = setTimeout(() => {
                setBannerVisible(true);
            }, 1500);
    
            return () => clearTimeout(showTimeout);
            
        }
    }, []);

    useEffect(() => {
        if (cookieConsent !== null) {
            const newValue = cookieConsent ? 'granted' : 'denied';

            window.gtag && window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });

            setLocalStorage("cookie_consent", cookieConsent);

            // Hide the banner if consent is given or denied
            setBannerVisible(false);

            // For Testing
            console.log("Cookie Consent: ", cookieConsent);
        }
    }, [cookieConsent]);

    if (!isBannerVisible) return null;

    return (
        <div className="cookie-container">
            <div className='text-center'>
                <Link href="/info/cookies">
                    <p className='cookie-text'>This site uses <span className='font-bold'>cookies</span>.</p>
                </Link>
            </div>

            <div className='flex gap-2'>
                <button className='button-decline' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='button-allow' onClick={() => setCookieConsent(true)}>Allow</button>
            </div>
        </div>
    );
}
