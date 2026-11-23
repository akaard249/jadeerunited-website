import { useEffect } from 'react';

export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'product';
  image?: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageSeo(config: PageSeoConfig) {
  const jsonLdString = config.jsonLd ? JSON.stringify(config.jsonLd) : '';

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalPath = config.canonicalPath ?? window.location.pathname;
    const canonicalUrl = canonicalPath.startsWith('http')
      ? canonicalPath
      : `${origin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    const imageUrl = config.image
      ? config.image.startsWith('http')
        ? config.image
        : `${origin}${config.image.startsWith('/') ? config.image : `/${config.image}`}`
      : `${origin}/assets/jadeer/hero-fleet.jpg`;
    const robots = config.robots || 'index, follow, max-image-preview:large, max-snippet:-1';
    const ogType = config.ogType || 'website';

    document.title = config.title;
    upsertMeta('name', 'description', config.description);
    upsertMeta('name', 'robots', robots);
    upsertCanonical(canonicalUrl);

    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'Jadeer United');
    upsertMeta('property', 'og:title', config.title);
    upsertMeta('property', 'og:description', config.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', config.title);
    upsertMeta('name', 'twitter:description', config.description);
    upsertMeta('name', 'twitter:image', imageUrl);

    const existingClientScript = document.getElementById('jadeer-jsonld-client');
    if (jsonLdString) {
      let script = existingClientScript as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'jadeer-jsonld-client';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = jsonLdString;
    } else if (existingClientScript) {
      existingClientScript.remove();
    }
  }, [
    config.title,
    config.description,
    config.canonicalPath,
    config.ogType,
    config.image,
    config.robots,
    jsonLdString,
  ]);
}
