import React from 'react';

const PostItem = (props) => {

    return (
        <div className='post'>

            <img src={props.post.picture} className="responsive"/>
            
                
            <div className='post__content'>

                <h2 className="style_text">{props.post.title}</h2>
                    
                <div className='description'>
                    Описание: {props.post.body}
                </div>

            </div>

            <p className="style_text">{props.post.cost}$</p>
            
            <button className='post__btns'><span>Купить</span></button>
            

        </div>
    );
};

export default PostItem;



