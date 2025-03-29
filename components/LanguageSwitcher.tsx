import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  return (
    <div className="flex gap-2">
      {locales?.map((lng) => (
        <button
          key={lng}
          onClick={() => router.push({ pathname, query }, asPath, { locale: lng })}
          className={`px-2 py-1 rounded text-sm ${lng === locale ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
