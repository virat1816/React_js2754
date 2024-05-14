import React from 'react'

const Store = ({ data }) => {
    return (
        <>

            {
                data.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <div class="store-item">
                                <div class="icon-wrapper"><i class={val.icon}></i></div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        </React.Fragment>
                    )
                })
            }

        </>
    )
}

export default Store