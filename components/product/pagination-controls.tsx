'use client'

import {Button} from "@/components/ui/button";
import {useQueryState, parseAsInteger} from 'nuqs';

export default function PaginationControls() {
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1).withOptions({shallow: false}));

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    return (
        <div className="mt-8 flex justify-center gap-4">
            <Button
                onClick={handlePrevious}
                disabled={page === 1}
                variant="outline"
            >
                Previous
            </Button>
            <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                Page {page}
            </span>
            <Button
                onClick={handleNext}
                variant="outline"
            >
                Next
            </Button>
        </div>
    );
}
