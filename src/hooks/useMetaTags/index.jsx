import { useEffect } from 'react';
/** 
 * *Change of site title 
 * @author Cnbergh
 */
const useMetaTags = (title, description) => {
    useEffect(() => {
        // title + our App Name
        document.title = `${title} | Y`;

        // Find or Create meta description tag
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.getElementsByTagName('head')[0].appendChild(meta);
        }

        // description
        meta.content = description;

        // Cleanup
        return () => {
            document.title = 'Y';
            meta.content = 'Better than X!';
        };
    }, [title, description]);
};

export default useMetaTags;