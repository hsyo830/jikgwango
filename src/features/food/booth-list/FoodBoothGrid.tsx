import { useState } from "react";

import FoodCard from "@/src/components/common/food-card/FoodCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { FoodBooth } from "@/src/types/foodBooth";

type FoodBoothGridProps = {
  filteredFoodBoothData: FoodBooth[];
};

// 보여줄 페이지 번호 배열을 계산하는 함수
// 예) 현재 7페이지, 전체 15페이지 → [1, '...', 5, 6, 7, 8, 9, '...', 15]
const getPageNumbers = (currentPage: number, totalPages: number): (number | "ellipsis")[] => {
  // 전체 페이지가 7 이하면 전부 표시
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];
  // 현재 페이지 기준 앞뒤로 1개씩만 표시 (window size = 1)
  const leftSibling = Math.max(currentPage - 1, 2);
  const rightSibling = Math.min(currentPage + 1, totalPages - 1);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  // 첫 페이지는 항상 표시
  pages.push(1);

  if (showLeftEllipsis) {
    pages.push("ellipsis");
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    pages.push(i);
  }

  if (showRightEllipsis) {
    pages.push("ellipsis");
  }

  // 마지막 페이지는 항상 표시
  pages.push(totalPages);

  return pages;
};

const FoodBoothGrid = ({ filteredFoodBoothData }: FoodBoothGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedFoodBooths = filteredFoodBoothData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredFoodBoothData.length / pageSize);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:mb-5 lg:grid-cols-3 xl:gap-5">
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
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                document
                  .querySelector("#food-booth-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-foreground hover:bg-surface-2 hover:text-foreground"
            />
          </PaginationItem>

          {/* 모바일 페이지네이션 */}
          {pageNumbers.map((page, index) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`} className="md:hidden">
                <PaginationEllipsis className="text-muted" />
              </PaginationItem>
            ) : (
              <PaginationItem key={`mobile-${page}`} className="md:hidden">
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                      : "text-foreground hover:bg-surface-2 hover:text-foreground"
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          {/* 태블릿/PC 페이지네이션 */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <PaginationItem key={`desktop-${page}`} className="hidden md:list-item">
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                      : "text-foreground hover:bg-surface-2 hover:text-foreground"
                  }
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
              className="text-foreground hover:bg-surface-2 hover:text-foreground"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default FoodBoothGrid;
