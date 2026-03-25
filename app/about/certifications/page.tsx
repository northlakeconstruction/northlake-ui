export const metadata = {
  title: "Certifications — Northlake Construction",
}

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-6">
      <h1 className="text-4xl font-[oswald] uppercase tracking-wide mb-6">Certifications</h1>
      <h2>Minority Business Enterprise</h2>
        <p>
          We are designated by the City of Chicago as a Minority Business Enterprise. We are happy 
          to serve as a strategic partner for organizations seeking to meet 
          participation objectives without compromising performance. 
        </p>
      <h2>NAICS Classifications</h2>
        <table className="text-left w-full">
          <thead>
            <tr>
              <th className="pr-12 pb-2">NAICS Code</th>
              <th className="pb-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-12 py-1">237310</td>
              <td className="py-1">Highway, Street, and Bridge Construction</td>
            </tr>
            <tr>
              <td className="pr-12 py-1">238990</td>
              <td className="py-1">All Other Specialty Trade Contractors</td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}
