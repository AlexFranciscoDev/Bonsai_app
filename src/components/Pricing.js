import React, { useState } from 'react'
import 'boxicons';
import { Plan } from './Plan';
/*
OBJECT PLAN
Title: string
Description: string
Price_monthly: number
Price_yearly: number
Ribbon: boolean
Details: [string]
*/
export const Pricing = () => {
    const plans =
        [
            {
                "id": 1,
                "title": "Starter",
                "description": "Ideal for freelancers and contractors just starting out.",
                "price_monthly": 24,
                "price_yearly": 17,
                "ribbon": false,
                "details": [
                    "All Templates", "Unlimited Clients & Projects", "Invoicing & Payments", "Proposals & Contracts", "Tasks & Time Tracking",
                    "Client CRM", "Expense Tracking", "Up to 5 Project Collaborators"
                ]
            },
            {
                "id": 2,
                "title": "Professional",
                "description": "Everything a growing independent business needs to thrive.",
                "price_monthly": 39,
                "price_yearly": 32,
                "ribbon": true,
                "details": [
                    "Everything in Starter plus...", "Custom Branding", "Forms & Questionnaires", "Workflow Automations", "Client Portal",
                    "Calendly Integration", "Zapier Integration", "Up to 15 Project Collaborators"
                ]
            },
            {
                "id": 3,
                "title": "Business",
                "description": "The perfect package for small businesses and agencies.",
                "price_monthly": 79,
                "price_yearly": 52,
                "ribbon": false,
                "details": [
                    "Everything in Starter and Professional plus...", "Subcontractor Management", "Hiring Agreement Templates (1099 contracts)", "Subcontractor Onboarding", "Client Portal",
                    "Talent Pool", "3 Team Seats (additional seats $9/month)", "Accountant Access", "Connect Multiple Bank Accounts", "Unlimited Subcontractors", "Unlimited Project Collaborators"
                ]
            }
        ]

    const [priceYearly, setPriceYearly] = useState(false);
    const togglePriceYearly = () => {
        setPriceYearly(!priceYearly);
    }

    return (
        <div>
            <div className="pricing_title">
                <h1>Plans & Pricing</h1>
                <div className="switch_container">
                    <span>MONTHLY</span>
                    <div className="switch_toggle">
                        <label className="switch">
                            <input type="checkbox" onClick={ togglePriceYearly } />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <span>YEARLY</span>
                    <img src={process.env.PUBLIC_URL + "/img/switchbutton.svg"} alt="Switch button" />
                </div>
            </div>

            <div className="pricing_content">
                {/* TODO: MAKE COMPONENT */}
                {plans.map((plan) =>
                    <Plan plan={plan} priceYearly={priceYearly} key={plan.id} />
                )}
            </div>
        </div>
    )
}
