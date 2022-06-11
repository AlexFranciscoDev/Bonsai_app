import React from 'react'
import 'boxicons';

export const Pricing = () => {
    return (
        <div>
            <div className="pricing_title">
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
            <div className="pricing_content">
                {/* TODO: MAKE COMPONENT */}
                <div className="plan_div">
                    <h3>Starter</h3>
                    <p>Ideal for freelancers and contractors just starting out</p>
                    <div className="price">
                        <span className="money">$</span>
                        <span className="number">24</span>
                        <span className="month">/MONTH</span>
                    </div>
                    <ul>
                        <li>
                            <box-icon name='check'></box-icon> All templates
                        </li>
                        <li>
                            <box-icon name='check'></box-icon>Unlimited Clients & Projects
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Invoicing & Payments
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Proposals & Contracts
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Tasks & Time Tracking
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Client CRM
                        </li>
                    </ul>
                </div>
                <div className="plan_div">
                    <h3>Starter</h3>
                    <p>Ideal for freelancers and contractors just starting out</p>
                    <div className="price">
                        <span className="money">$</span>
                        <span className="number">24</span>
                        <span className="month">/MONTH</span>
                    </div>
                    <ul>
                        <li>
                            <box-icon name='check'></box-icon> All templates
                        </li>
                        <li>
                            <box-icon name='check'></box-icon>Unlimited Clients & Projects
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Invoicing & Payments
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Proposals & Contracts
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Tasks & Time Tracking
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Client CRM
                        </li>
                    </ul>
                </div>
                <div className="plan_div">
                    <h3>Starter</h3>
                    <p>Ideal for freelancers and contractors just starting out</p>
                    <div className="price">
                        <span className="money">$</span>
                        <span className="number">24</span>
                        <span className="month">/MONTH</span>
                    </div>
                    <ul>
                        <li>
                            <box-icon color="blue" name='check'></box-icon> All templates
                        </li>
                        <li>
                            <box-icon name='check'></box-icon>Unlimited Clients & Projects
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Invoicing & Payments
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Proposals & Contracts
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Tasks & Time Tracking
                        </li>
                        <li>
                            <box-icon name='check'></box-icon> Client CRM
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
