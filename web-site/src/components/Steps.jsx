import React from 'react'

const Steps = ({ data }) => {
    return (
        <>
            {
                data.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <div id="step-section">
                                <div id={val.id} class="step-item" >
                                    <i class={val.icon}></i>
                                    <h3>{val.title}</h3>
                                    <p> {val.desc} </p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Steps