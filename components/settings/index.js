import { useState, useContext, useEffect } from 'react';
import Layout from '../Base/Layout/Layout'
import { SettingsGrid, Sections, Details, Child, FlexLine } from './SettingsStyles'
import Link from 'next/link'
import { IsMobileContext } from 'context/IsMobile'
import AccountInfo from './account-info/AccountInfo'
import Terms from './terms-of-service/terms'
import Privacy from './privacy-policy/privacy'
import Payment from './payment-details/payment'
import Security from './password-and-security/security'
import Container from '../global/Container'

const SettingsComponent = ({ section }) => {
    const [isMobile] = useContext(IsMobileContext)
    const [clicked, setClicked] = useState(null)

    useEffect(() => {
        switch (section) {
            case 'account-information':
                setClicked(0)
                break;

            case 'payment-details':
                setClicked(1)
                break;

            case 'password-and-security':
                setClicked(2)
                break;

            case 'terms-of-service':
                setClicked(3)
                break;

            case 'privacy-policy':
                setClicked(4)
                break;
            default:
                setClicked(clicked)
                break;

        }
    }, [section])

    return (
        <Layout>
            <SettingsGrid>
                {(!isMobile || section == undefined) && (
                    <Sections>
                        <h1 className="header">Settings</h1>
                        <ul className="section-list">
                            <li className={clicked == 0 ? !isMobile ? "section-item active" : "section-item" : "section-item"} onClick={() => setClicked(0)}><span><Link href='/settings/account-information'>Account Information</Link></span></li>
                            <li className={clicked == 1 ? !isMobile ? "section-item active" : "section-item" : "section-item"} onClick={() => setClicked(1)}><span><Link href='/settings/payment-details'>Payment Details</Link></span></li>
                            <li className={clicked == 2 ? !isMobile ? "section-item active" : "section-item" : "section-item"} onClick={() => setClicked(2)}><span><Link href='/settings/password-and-security'>Password and Security</Link></span></li>
                            <li><FlexLine/></li>
                            <li className={clicked == 3 ? !isMobile ? "section-item active" : "section-item" : "section-item"} onClick={() => setClicked(3)}><span><Link href='/settings/terms-of-service'>Terms of service</Link></span></li>
                            <li className={clicked == 4 ? !isMobile ? "section-item active" : "section-item" : "section-item"} onClick={() => setClicked(4)}><span><Link href='/settings/privacy-policy'>Privacy Policy</Link></span></li>
                        </ul>
                    </Sections>
                )}
                <Details>
                    <Child>
                        {section == 'account-information' && <AccountInfo isMobile={isMobile} />}
                        {section == 'terms-of-service' && <Terms />}
                        {section == 'privacy-policy' && <Privacy />}
                        {section == 'payment-details' && <Payment />}
                        {section == 'password-and-security' && <Security />} 
                    </Child>                    
                </Details>
            </SettingsGrid>

        </Layout>
    )
}

export default SettingsComponent
