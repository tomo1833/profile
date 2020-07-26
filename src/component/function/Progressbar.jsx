import React from 'react';

const Progressbar = (props) => {

    return (
        <>
            {props.progress_bars.map((progress_bar, key) => {
                return (
                    <div className="progress-wrapper py-2" key={key}>
                        <div className="progress-info">
                            <div className="progress-label">
                                <span dangerouslySetInnerHTML={{ __html: progress_bar.progress_title }} />
                            </div>
                            <div className="progress-percentage">
                                <span>{progress_bar.status}</span>
                            </div>
                        </div>
                        <div className="progress progress-xl">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow={progress_bar.percent} aria-valuemin="0" aria-valuemax="100" style={
                                {
                                    width: progress_bar.percent + "%",
                                    animation: "3s ease 0s 1 normal none running animate-positive",
                                    opacity: 1,
                                }
                            }>
                            </div>
                        </div>
                    </div >
                );
            })}
        </>
    )

};

export default Progressbar;