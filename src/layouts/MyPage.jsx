import { Helmet, HelmetProvider } from 'react-helmet-async';
// import ImageFileOne from '../assets/BGF.jpg';
import { useEffect } from 'react';

// Assuming you have fetched the description and image URL from the database
const pageTitle = 'Flower Aura Shop';
const pageDescription = 'Your page description goes here';
const pageImageURL = 'https://images.pexels.com/photos/14120220/pexels-photo-14120220.jpeg';

const MyPage = () => {
    useEffect(() => {
        // Update the document's title when the component mounts
        document.title = "About Us | Flower Aura Shop";


        // Clean up the title when the component unmounts
        return () => {
            document.title = pageTitle;

        };
    }, [])

    return (
        <HelmetProvider>
            <div>
                {/* Page content goes here */}
                <h1>{pageTitle}</h1>
                <p>{pageDescription}</p>
                <img src={pageImageURL} alt={pageTitle} />

                {/* Meta tags for sharing */}
                <Helmet>
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription} />
                    <meta property="og:image" content={pageImageURL} />
                    <meta property="og:image:alt" content={pageTitle} />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:type" content="https://app-share.netlify.app/page" />
                </Helmet>
            </div>
        </HelmetProvider>
    );
};

export default MyPage;
