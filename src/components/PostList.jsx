import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {

    return (

        <div >

            <h1 className='neon_heder'>{title}</h1>

            <div className='conteiner_roditel'>

                {posts.map((post) =>
                    <PostItem post={post} key={post.id} />
                )}
            </div>

        </div>
    );
};

export default PostList;