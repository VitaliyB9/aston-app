import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import ButtonPost from "../components/buttons/ButtonPost";
import Modal from "../components/modal/Modal";
import Pagination from "../components/pagination/Pagination";
import PostForm from "../components/posts/PostForm";
import PostList from "../components/posts/PostList";
import { useFetch } from "../hooks/useFetch";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, setLoad, postErr] = useFetch(async (limit, page) => {
    const result = await PostService.getAll(limit, page);
    setPosts(result.data);
    const totalCount = result.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };
  return (
    <div>
      <ButtonPost onClick={fetchPosts}>Get Posts</ButtonPost>
      <ButtonPost onClick={() => setModal(true)}>Create Post</ButtonPost>
      <Modal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </Modal>
      {postErr && <h3>It`s Error: {postErr}</h3>}
      {setLoad ? (
        <h3>Loading...</h3>
      ) : (
        <PostList
          remove={removePost}
          posts={posts}
          title={"Posts List"}
        />
      )}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
