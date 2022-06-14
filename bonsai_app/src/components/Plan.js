import React from 'react'

/*
OBJECT PLAN
Title: string
Description: string
Price_monthly: number
Price_yearly: number
Ribbon: boolean
Details: [string]
*/
export const Plan = () => {
    return (
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
                    <box-icon color="#00b289" name='check'></box-icon> All templates
                </li>
                <li>
                    <box-icon color="#00b289" name='check'></box-icon>Unlimited Clients & Projects
                </li>
                <li>
                    <box-icon color="#00b289" name='check'></box-icon> Invoicing & Payments
                </li>
                <li>
                    <box-icon color="#00b289" name='check'></box-icon> Proposals & Contracts
                </li>
                <li>
                    <box-icon color="#00b289" name='check'></box-icon> Tasks & Time Tracking
                </li>
                <li>
                    <box-icon color="#00b289" name='check'></box-icon> Client CRM
                </li>
            </ul>
            <button class="start_button">START FREE</button>
        </div>
    )
}
