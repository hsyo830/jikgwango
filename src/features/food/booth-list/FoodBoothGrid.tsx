import { useState } from "react";

import FoodCard from "@/src/components/common/food-card/FoodCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { FoodBooth } from "@/src/types/foodBooth";

type FoodBoothGridProps = {
  filteredFoodBoothData: FoodBooth[];
};

const FoodBoothGrid = ({ filteredFoodBoothData }: FoodBoothGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedFoodBooths = filteredFoodBoothData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredFoodBoothData.length / pageSize);

  return (
    <section className="w-full">
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:mb-5 lg:grid-cols-3 xl:gap-5 2xl:grid-cols-4">
        {paginatedFoodBooths.map((booth, index) => (
          <li key={booth.id} className="min-w-0">
            <FoodCard food={booth} variant="foodPage" index={index} />
          </li>
        ))}
      </ul>

      <Pagination className="py-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="이전"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              href="#"
              text="다음"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default FoodBoothGrid;
