import React from 'react'

export const Addons = () => {
    const title = "Super charge your work with add-ons";
    return (
        <div className="addons_container">
            <h2>{title}</h2>
            <div>
                <div className="addon">
                    <div className="addon_desc">
                        <h4>Collaborators</h4>
                        <p>Invite other users to specific projects for limited access and functionality.</p>
                        <a href="/#">LEARN MORE <span className='learnMoreIcon'>&gt;</span></a>
                    </div>
                    <div className="addon_price">
                        <h3>Free</h3>
                    </div>
                </div>
                <div className="addon">
                    <div className="addon_desc">
                        <h4>Partners</h4>
                        <p>Invite other users for full account access and company management.</p>
                        <a href="/#">LEARN MORE <span className='learnMoreIcon'>&gt;</span></a>
                    </div>
                    <div className="addon_price">
                        <h3>$9</h3>
                        <h5>/MONTH</h5>
                    </div>
                </div>
                <div className="addon">
                    <div className="addon_desc">
                        <h4>Bonsai Tax</h4>
                        <p>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
                        <a href="/#">LEARN MORE <span className='learnMoreIcon'>&gt;</span></a>
                    </div>
                    <div className="addon_price">
                        <h3>$10</h3>
                        <h5>/MONTH</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
