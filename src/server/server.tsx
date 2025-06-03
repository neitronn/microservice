import { serverUserInfoProps } from "./server.props"

export const serverUserInfo : serverUserInfoProps = {
    id : 0,
    target : false,
    aboutmyself : {height : false, weight : false, desiredWeight : false},
    datebirth : '',
    targetWeek : false,
    lifeStyle : false,
    readyStart : false
}


export const setServerUserInfo = <K extends keyof serverUserInfoProps>(key: K, data: serverUserInfoProps[K]) => {
    serverUserInfo[key] = data
}
