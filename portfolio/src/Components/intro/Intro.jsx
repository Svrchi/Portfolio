import React from 'react';
import "./Intro.css";

const intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-left-intro">Hello, this is a </h2>
                    <h1 className="i-left-name"> Test </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Keyframe Test 1</div>
                            <div className="i-title-item">Keyframe Test 2</div>
                            <div className="i-title-item">Keyframe Test 3</div>
                            <div className="i-title-item">Keyframe Test 4</div>
                            <div className="i-title-item">Keyframe Test 5</div>
                        </div>
                    </div>
                    <div className="i-des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis. Amet nisl suscipit adipiscing bibendum est ultricies
                            integer quis auctor. Aenean sed adipiscing diam donec adipiscing tristique
                            risus nec feugiat.
                        </div>
                </div>
            </div>
            <div className="i-right">Right
            <img src="" alt="temp" className="i-img" />
            </div>

        </div>
    )
}

export default intro
