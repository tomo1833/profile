import React from 'react';
import BlockDetail from './Blockdetail';

const Blockslide = (props) => {

    return (
        <>
            {props.block_main.map((block_main, key) => {
                return (
                    <div className="block block-center block-slid-02 dark-mode-target my-5 light-theme" key={key}>
                        <div className="container">
                            <h2 id={block_main.block_id} className="d-flex align-items-center scroll-pm justify-content-center mb-7 dark-mode-target light-theme">{block_main.title}</h2>
                            <BlockDetail block_details={block_main.block_details} />
                        </div>
                    </div>
                );
            })}
        </>
    );

};

export default Blockslide;

