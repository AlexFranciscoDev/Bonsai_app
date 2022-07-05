import React, { useState, useRef } from 'react'

export const Footer = () => {

    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const handleToggle = () => {
        setClicked((prev) => !prev);
    }

    return (
        <footer>
            <section className="ft-main">
                <div className="ft-main-item">
                    <h2 className="ft-title">PRODUCT</h2>
                    <ul>
                        <li><a href="/#">Proposals</a></li>
                        <li><a href="/#">Contracts</a></li>
                        <li><a href="/#">Invoincing</a></li>
                        <li><a href="/#">Client CRM</a></li>
                        <li><a href="/#">Time Tracking</a></li>
                        <li><a href="/#">Task Tracking</a></li>
                        <li><a href="/#">Forms</a></li>
                        <li><a href="/#">Accounting</a></li>
                        <li><a href="/#">Bonsai Tax</a></li>
                        <li><a href="/#">Bonsai Cash</a></li>
                        <li><a href="/#">Pricing</a></li>
                        <li><a href="/#">Bonsai Reviews</a></li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">FREE RESOURCES</h2>
                    <ul>
                        <li><a href="/#">Freelance Resources</a></li>
                        <li><a href="/#">Freelance Blog by Bonsai</a></li>
                        <li><a href="/#">How to Write a Contract</a></li>
                        <li><a href="/#">Online Signature Maker</a></li>
                        <li><a href="/#">Self-Employed Taxes Hub</a></li>
                        <li><a href="/#">Self-Employed Tax Calculator</a></li>
                        <li><a href="/#">Self-Employed Tax Deductions</a></li>
                        <div className="invoiceTemplates">
                            <span onClick={handleToggle}>Invoice templates</span>
                            <span><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5f5a14486154c507c79e758f_001-down-chevron.svg" width="10" /></span>
                        </div>
                        <div ref={contentEl} className="invoiceTemplateDropdown"
                            style={clicked ? { height: contentEl.current.scrollHeight } : { height: "0px" }}>
                            <ul>
                                <li><a href="/#">Invoice generator</a></li>
                                <li><a href="/#">Blank Invoice template</a></li>
                                <li><a href="/#">Consultant Invoice template</a></li>
                                <li><a href="/#">Editable Invoice template</a></li>
                                <li><a href="/#">Graphic design invoice</a></li>
                                <li><a href="/#">Web design invice</a></li>
                                <li><a href="/#">Contractor invoice template</a></li>
                                <li><a href="/#">Photography Invoice template</a></li>
                                <li><a href="/#">Self employed template</a></li>
                            </ul>
                        </div>
                        <li>Proposal templates</li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">BONSAI</h2>
                    <ul>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Careers</a></li>
                        <li><a href="/#">Support</a></li>
                        <li><a href="/#">LinkedIn</a></li>
                        <li><a href="/#">Twitter</a></li>
                        <li><a href="/#">Privacy policy</a></li>
                        <li><a href="/#">Legal</a></li>
                    </ul>
                </div>
            </section>
            {/* Social media */}
            <section className="ft-social">
                <ul className="ft-social-list">
                    <li>
                        <a href="/#">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL1JREFUSEvtlIEJwjAQRV836AY6ghtUJ9EROoJOoCO4ghvoBDqCbuAGlQ8JHGo9UhJUaKBw0Ob/+4+7VhQ+VWF9fs5gCmyBGaBa5wTM+0ikJJDgGaifxLIZ7IHlm06zGRyBJhgcgBVw94YkBVFnxDbA2hPX+68bCMMkdGo7Fi49cYpi/RLKS2C59xH5iCuHwcKkSU6wC0uli3GCVN+Aa1BrgUuORfvPKbLJxwTu4o+IXESDPvB+FYNE7aXiBg+0MykZNmDKCAAAAABJRU5ErkJggg==" />
                        </a>
                        <a href="/#">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" />
                        </a>
                        <a href="/#">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg==" />
                        </a>
                        <a href="/#">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZdJREFUSEu1lYExBVEMRe+vABWgAlSAClABKkAFqAAdUMGnAlSADuiACpgzk+zkZ7L735rZzOzs7puXe5P7kryZJrbZxPhqITiUdCBp2x5ierfnRdLDUJBDBADfSNpYkuWnpAtJj9W+PoIrSZcj5bs1ogW3iuA/4A56J+k8MmSCPUnPtuFJEmQnks5s7cPeW/ZG/3vbc2xrR1GuTICe67bx2gj4XZX0nSSLazFrMDZ9byTgUOcBhOiIvsWyrKeW2UKZkqqnCei+JMqwxSjhtyq4mAFgu0FrnMZY9KdPdnCOBGi8YoivkjjwMRYJOuxI8BvQJiGIEZDN2pjwrcpcgS+fADGDfMi0P93ZYjQXY8Wtq8C+Mv2x86D86M7cAw5EL1B5OZCyTHGiSUiTEiUqL1u6mp5wIoDJmKrjO1onT64i/n1UAESZOUjsagfLkvr6Qv9Uw871LKdjCLUaikuHnfs7CQ1DNj7UohSZoMpy8EZDLmRg+FXOToDmnE85VlquTIjIgmyiMUq47cqbzDe2ELT0Qe+eyQn+AIklVhnz1DvpAAAAAElFTkSuQmCC" />
                        </a>
                    </li>
                </ul>
            </section>
            {/*Footer legal */}
            <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li>
                        <a href="/#">Tems & Conditions</a>
                    </li>
                    <li>
                        <a href="/#">Privacy policy</a>
                    </li>
                    <li>
                        <a href="/#">&copy; 2022 AlexFranciscoDev</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}
