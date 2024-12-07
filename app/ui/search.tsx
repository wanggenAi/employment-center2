'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const existingSearchStr = searchParams.get('query') || '';
  const existingTag = searchParams.get('tag') || '';
  const existingAvailability = searchParams.get('availability') === '1' ? 1 : searchParams.get('availability') === '0' ? 0 : undefined;

  const handleSearch = useDebouncedCallback((term: string, tag: string, availability: 0 | 1 | undefined) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log(`Searching... ${term}, Tag: ${tag}, Availability: ${availability}`);

    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }

    if (availability !== undefined) {
      params.set('availability', String(availability));
    } else {
      params.delete('availability');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-col flex-1 flex-shrink-0 space-y-4">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          defaultValue={existingSearchStr}
          onChange={(e) => handleSearch(e.target.value, existingTag, existingAvailability)}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>

      <div className="relative">
        <label htmlFor="tag" className="sr-only">Tag</label>
        <select
          id="tag"
          className="mt-2 p-2 border border-gray-200 rounded-md w-full"
          value={existingTag}
          onChange={(e) => handleSearch(existingSearchStr, e.target.value, existingAvailability)}
        >
          <option value="">All Tags</option>
          <option value="Design">Design</option>
          <option value="AWS">AWS</option>
          <option value="React">React</option>
          <option value="Scrum">Scrum</option>
          <option value="Deep Learning">Deep Learning</option>
          <option value="SQL">SQL</option>
          <option value="Android">Android</option>
        </select>
      </div>

      <div className="mt-2 flex items-center space-x-6">
        <label className="flex items-center">
          <input
            type="radio"
            name="availability"
            value="1"
            checked={existingAvailability === 1}
            onChange={() => handleSearch(existingSearchStr, existingTag, 1)}
            className="mr-2"
          />
          <span>Available</span>
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="availability"
            value="0"
            checked={existingAvailability === 0}
            onChange={() => handleSearch(existingSearchStr, existingTag, 0)}
            className="mr-2"
          />
          <span>Not Available</span>
        </label>

        <button
          type="button"
          className="text-blue-500"
          onClick={() => handleSearch(existingSearchStr, existingTag, undefined)}
        >
          Clear
        </button>
      </div>

    </div>

  );
}
