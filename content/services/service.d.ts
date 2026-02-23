export interface Service {
    title: string
    description: string
    serviceType: string
    url: string
    Page: React.ComponentType<any>
    heroImg?: string
    linkImg?: string
}