export interface NavLink{
    url: string
    title: string
    isNavigable: boolean   
}


export const navLinks:NavLink[] = [
    {
        url:"course",
        title: "courses",
        isNavigable: true
    },
    {
        url:"calendar",
        title: "calendar",
        isNavigable: true
    },
    {
        url:"apps",
        title: "apps",
        isNavigable: true
    },
]