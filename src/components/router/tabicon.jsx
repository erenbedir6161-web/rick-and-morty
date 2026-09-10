import {Book1,PresentionChart,LocationTick,Setting2} from
'iconsax-react-native'

import {CHARACTERS, EPİSODES, LOCATİONS, SETTİNGS} from '../utils/routes'

const TabIcon = ({screenName,color,focused,size}) => {
    if(screenName == CHARACTERS){
        return (
            <Book1 size={size} color={color} variant={focused ? "Bold" :
            "Outline"} />
        )
    }
    if(screenName == EPİSODES){
        return (
            <PresentionChart size={size} color={color} variant=
            {focused ? "Bold" : "Outline"} />
        )
    }
    if(screenName == LOCATİONS){
        return (
            <LocationTick size={size} color={color} variant={focused ?
            "Bold" : "Outline"} />
        )
    }
    if(screenName == SETTİNGS){
        return (
            <Setting2 size={size} color={color} variant={focused ?
            "Bold" : "Outline"} />
        )
    }
}

export default TabIcon