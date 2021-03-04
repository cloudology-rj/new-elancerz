import { useContext } from 'react';
import {useRouter} from 'next/router'
import SettingsComponent from 'components/settings'
import {IsMobileContext} from 'context/IsMobile'

const Section = () => {
    const router = useRouter()
    const {section} = router.query
    const [isMobile] = useContext(IsMobileContext)


    return (
        <div>
            {/* {section == 'account-information' && <SettingsComponent section={section}/>} */}
            <SettingsComponent section={section}/>
        </div>
    )
}

export default Section

