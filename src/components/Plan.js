import React from 'react'
import { useState } from 'react'

/*
OBJECT PLAN
Title: string
Description: string
Price_monthly: number
Price_yearly: number
Ribbon: boolean
Details: [string]
*/
export const Plan = ({ plan, priceYearly }) => {

    return (
        <div className="plan_div">
            {/* Ribbon */}
            {plan.ribbon &&
                <div className="ribbon">
                    MOST POPULAR
                </div>
            }
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <div className="price_content">
                <div className="price">
                    <span className="money">$</span>
                    {priceYearly ?
                        <span className="number">{plan.price_yearly}</span>
                        :
                        <span className="number">{plan.price_monthly}</span>
                    }
                    <span className="month">/MONTH</span>
                </div>
                {priceYearly ?
                    <div className="billedYearly">
                        <span>Billed yearly</span>
                    </div>
                    : ""    
            }
            </div>
            <ul>
                {plan.details.map((detail) =>
                    <li key={detail}>
                        <box-icon color="#00b289" name='check'></box-icon> {detail}
                    </li>
                )}
            </ul>
            <button className="start_button">START FREE</button>
        </div>
    )
}
