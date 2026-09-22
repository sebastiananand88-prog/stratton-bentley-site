import { useEffect } from "react";

interface MetaTagsConfig {
  title: string;
  description: string;
  canonical?: string;
}

export function useMetaTags(config: MetaTagsConfig) {
  useEffect(() => {
    // Set title
    document.title = config.title;

    // Set/update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", config.description);

    // Set/update canonical tag
    if (config.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", config.canonical);
    }

    return () => {
      // Cleanup if needed
    };
  }, [config]);
}
