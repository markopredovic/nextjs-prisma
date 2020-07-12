import React, { useState, useRef, useEffect } from "react";
import useSWR from "swr";

import Layout from "../../components/UI/Layout";
import PageTitle from "../../components/Shared/PageTitle";
import PostsList from "../../components/PostsList";
import Pagination from "../../components/Pagination";
import Loader from "../../components/UI/Loader/Loader";

const PostsPage = () => {
  const [filterText, setFilterText] = useState("");
  const filterRef = useRef();
  const [total, setTotal] = useState(0);
  const [limit] = useState(7);
  const [pageNumber, setPageNumber] = useState(1);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    filterRef.current && filterRef.current.focus();
  }, [filterText]);

  useEffect(() => {
    async function calculateTotal() {
      const result = await fetch(`/api/posts/total?filterText=${filterText}`);
      const data = await result.json();

      const total = data.posts.length;

      setTotal(total);
      setShouldFetch(true);
    }
    calculateTotal();
  }, [filterText]);

  const { data, error, mutate } = useSWR(
    shouldFetch
      ? () =>
          `/api/posts?filterText=${filterText}&pageNumber=${pageNumber}&limit=${limit}`
      : null
  );

  if (error) return <div>failed to load</div>;

  const handleFilter = () => {
    setFilterText(filterRef.current.value);
    setPageNumber(1);
  };

  const handlePaginationClick = (number) => {
    setPageNumber(number);
  };

  return (
    <Layout>
      <PageTitle title="All posts" />
      <Filter
        filterText={filterText}
        handleFilter={handleFilter}
        filterRef={filterRef}
      />
      <PostsList posts={data ? data.posts : []} mutate={mutate} />
      <Pagination
        total={total}
        limit={limit}
        handlePaginationClick={handlePaginationClick}
        activePage={pageNumber}
      />
      {!data && <Loader />}
    </Layout>
  );
};

export default PostsPage;
