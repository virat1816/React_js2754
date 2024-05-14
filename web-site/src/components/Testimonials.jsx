import React from 'react'

const Testimonials = ({ data }) => {
    return (
        <>
            {
                data.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <div class="test-img">
                                <img src={val.img} alt="profile1" />
                                <p>{val.desc}</p>
                                <h4 class="author-name">{val.name}</h4>
                                <p class="job-roll">{val.roll}</p>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Testimonials