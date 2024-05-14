import React from 'react'

const Footer = () => {
    return (
        <>
            <section id="information-section">
                <div id="contact-wrapper">
                    <div id="left-side">
                        <p class="head">contact us</p>
                        <h3 class="title">address information</h3>
                        <p class="dec">Overeating is one of the most common causes of overweight and digestive problems.</p>
                        <h4 class="sub-title">London Store</h4>
                        <p class="l-dec">
                            Roeterseiland Campus Building E <br />
                            6th floor London <br />
                            Monday to Friday : 9am to 8pm <br />
                            examplemail.mail.com
                        </p>
                        <h4 class="sub-title">Berlin Store</h4>
                        <p class="l-dec">
                            Roeterseiland Campus Building E<br />
                            6th floor London <br />
                            Monday to Friday : 9am to 8pm<br />
                            examplemail.mail.com
                        </p>
                    </div>
                    <div id="right-side">
                        <p class="head">meet our team</p>
                        <h3 class="title">get in touch</h3>
                        <p class="dec">the rask proper nutririon- to remove from the diet harmful food and enrich it useful.</p>
                        <input class="input-box" type="text" name="Name" placeholder="Name" id="" />
                        <input class="input-box" type="number" name="Phone" placeholder="Phone" id="" />
                        <input class="input-box" type="text" name="subject" placeholder="Subject" />
                        <input class="input-box" type="email" name="E-mail" placeholder="E-mail" id="" />
                        <textarea class="input-box" name="Message" placeholder="Message" id="">Message</textarea>
                        <input id="primary-btn" type="button" value="SUBMIT NOW" />
                    </div>
                </div>
            </section>
            <footer>© Copyright 2018 Mobirise - All Rights Reserved</footer>
        </>
    )
}

export default Footer