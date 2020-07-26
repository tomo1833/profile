import React from 'react';
import Progressbar from './Progressbar';

const BlockDetail = (props) => {

    return (
        <>
            {props.block_details.map((block_detail, key) => {
                return (
                    <div key={key}>
                        <h3 className="d-flex align-items-center justify-content-center mt-5 mb-5 dark-mode-target light-theme">{block_detail.title_detail}</h3>
                        <div className="row justify-content-between mb-7">
                            <div className={"col-12 col-lg-6 mb-5 mb-lg-0" + (block_detail.order_flg ? ' order-lg-2' : ' order-lg-1')} data-aos="zoom-in">
                                <div className="explanation my-3">
                                    <div dangerouslySetInnerHTML={{ __html: block_detail.comment }} />
                                </div>
                            </div>
                            <div className={"col-12 col-lg-6" + (block_detail.order_flg ? ' order-lg-1' : ' order-lg-2')} data-aos="zoom-in">
                                <div className="card shadow-soft border-light dark-mode-target light-theme p-2">
                                    <Progressbar progress_bars={block_detail.progress_bars} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default BlockDetail;