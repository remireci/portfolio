"use client"
import Script from "next/script";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from "react";
import { pageview } from "../lib/gtagHelper";


function GoogleAnalyticsInner({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
    const pathname = usePathname();

    // if URL's querystring is needed, use useSearchParams
    // but problem with static rendering not solved yet...

    // const searchParams = useSearchParams();

    // useEffect(() => {
    //     // Ensure searchParams is available before using it

    //     if (searchParams) {
    //         const url = pathname + '?' + searchParams.toString();
    //         pageview(GA_MEASUREMENT_ID, url);
    //         console.log('url', url);
    //     }
    // }, [pathname, searchParams, GA_MEASUREMENT_ID]);

    // return null;


    useEffect(() => {

        console.log(pathname);
        console.log(GA_MEASUREMENT_ID);
        pageview(GA_MEASUREMENT_ID, pathname);

    }, [pathname, GA_MEASUREMENT_ID]);

    return null;
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {

    // const pathname = usePathname()
    // const searchParams = useSearchParams()

    // useEffect(() => {
    //     const url = pathname + searchParams.toString()

    //     pageview(GA_MEASUREMENT_ID, url);

    // }, [pathname, searchParams, GA_MEASUREMENT_ID]);

    return (
        <>
            <Script strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
            <GoogleAnalyticsInner GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        </>
    )
}
