import React from 'react';

export default function Container({ params }) {
  return (
    <ol className="flex justify-between mb-lg">
      <li>
        {params.page !== 0 && (
          <Link className="flex p-2 text-white" href={`${params.previousPage}`}>
            Previous Page
          </Link>
        )}
      </li>

      <li>
        {params.limit !== nextPage && (
          <Link className="flex p-2 text-white" href={`${params.nextPage}`}>
            Next Page
          </Link>
        )}
      </li>
    </ol>
  );
}
