import {withIronSession} from 'next-iron-session'

const iron = (handler:any) => {
    return withIronSession(handler, {
        password: 'sofTquiMic4824ian2pablo1sant?123',
        cookieName: 'softquimic',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
        }
    })
}
export default iron