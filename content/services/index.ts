import Paving from './paving.mdx'
import { Service } from './service'

const services: Record<string, Service> = {
    paving: {
        title: "Paving Contractor in Chicago",
        description: "Paving description",
        serviceType: "Asphalt Paving",
        url: 'https://northlake-construction.com/services/paving',
        Page: Paving,
    }
}

export default services