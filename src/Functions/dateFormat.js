// funçoes que manipulam a data.
export default function dateFormat(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Ju', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = days[date.getUTCDay()]
    const month = months[date.getUTCMonth()] 
    const day = date.getUTCDate()
    return `${dayOfWeek}, ${day} ${month}`
    
}


export function formatedData(date) {
    return new Date(Date.parse(date))
}