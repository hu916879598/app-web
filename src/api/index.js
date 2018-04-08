
import fetch from './fetch'

export const MonitList = (data)=>fetch({ url: '/queryHistory', method: 'POST', data });
