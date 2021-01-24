import React from 'react';

const Blogposts = () => {
    return (
        <div className="blogposts">
            <div className="blogpost-grid">
                <div className="blogpost-title">
                    <h2>How to organise your CSS</h2>
                </div>
                <div className="blogpost-thumbnail">
                    {/* blogpost thumbnail goes here */}
                </div>
                <div className="blogpost-summary">
                    <p>In this article I tell the story about Proin 
                        eu justo sit amet lacus bibendum tincidunt. 
                        Vivamus non volutpat nisl, a luctus mi.<br/><br/>

                        Donec aliquam est dui, vel vestibulum diam 
                        sollicitudin id. Quisque feugiat malesuada 
                        molestie.</p>
                </div>
            </div>
        </div>
    );
}

export default Blogposts;