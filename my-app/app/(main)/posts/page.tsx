"use client";

import React from "react";
import LeftArrowBtn from "@/components/ArrowLeftBtn/LeftArrowBtn";
import Posts from "@/components/Posts/Posts";
import PostsPagination from "@/components/PostsPagination/PostsPagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostsPage() {
  const router = useRouter();
  const params = useSearchParams();
  const page = Number(params?.get("page") ?? 1);

  function handlePageChange(nextPage: number) {
    router.push(`/posts?page=${nextPage}`);
  }

  const P = PostsPagination as any;

  return (
    <>
      <LeftArrowBtn text="Go Back" link="/" />
      <Posts />
      <P page={page} totalPages={10} onPageChange={handlePageChange} />
    </>
  );
}