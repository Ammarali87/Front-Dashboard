import PostsTable from '@/components/Posts/Posts';
import LeftArrowBtn from '@/components/ArrowLeftCircle/leftArrowBtn';
import PostsPagination from '@/components/PostsPagination/PostsPagination';

const PostsPage = () => {
  return (
    <>
      <LeftArrowBtn text='Go Back' link='/' />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;