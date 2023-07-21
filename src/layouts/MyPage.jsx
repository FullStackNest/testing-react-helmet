import { Helmet, HelmetProvider } from 'react-helmet-async';
import ImageFileOne from '../assets/BGF.jpg';

const MyPage = () => {
    // Assuming you have fetched the description and image URL from the database
    const pageTitle = 'Your Page Title';
    const pageDescription = 'Your page description goes here';
    const pageImageURL = ImageFileOne;

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
                    <meta property="og:type" content="website" />
                </Helmet>
            </div>
        </HelmetProvider>
    );
};

export default MyPage;
