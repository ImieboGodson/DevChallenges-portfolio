import React from 'react';
import './Blogposts.css';

const Blogposts = () => {
    return (
        <div className="blogposts">
            <div className="blogpost-grid">
                <div className="category">
                    <h2>Blog</h2>
                </div>
                <div className="blogpost-thumbnail">
                    {/* blogpost thumbnail goes here */}
                </div>
                <div className="blogpost-title">
                    <h2>How to organise your CSS</h2>
                </div>
                <div className="blogpost-summary">
                    <p>In this article I tell the story about Proin 
                        eu justo sit amet lacus bibendum tincidunt. 
                        Vivamus non volutpat nisl, a luctus mi.<br/><br/>

                        Donec aliquam est dui, vel vestibulum diam 
                        sollicitudin id. Quisque feugiat malesuada 
                        molestie.</p>
                </div>
                <div className="blogpost-host">
                    <a href="#">Dev.to</a>
                </div>
            </div>
        </div>
    );
}

export default Blogposts;