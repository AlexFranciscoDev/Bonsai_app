import React from 'react'

export const Pricing = () => {
    return (
        <div>
            <div className="pricing_container">
                <h1>Plans & Pricing</h1>
                <div className="switch_container">
                    <span>MONTHLY</span>
                    <div className="switch_toggle">
                        <label class="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <span>YEARLY</span>
                    <img src={process.env.PUBLIC_URL + "/img/switchbutton.svg"} alt="Switch button" />
                </div>
            </div>
        </div>
    )
}
