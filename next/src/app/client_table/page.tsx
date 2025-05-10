"use client"
// Client side rendering
// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side
// https://swr.vercel.app/docs/getting-started
import useSWR from 'swr' // <- this is the recommended way to use React Hooks and Client rendering now

import { PageWrapper } from '../page_wrapper'

// Cannnot be async if client side rendered
export default function Table() {
    interface City {
        city: string,
        state: string
    }

    const fetchHelper = (url: string) => fetch(url).then((res) => res.json())

    const { data, error } = useSWR('https://localhost:8500/cities', fetchHelper)

    // https://tailwindcss.com/docs/flex-basis
    const TABLE_STYLE = "border-collapse border border-gray-400 text-left rounded-xs"

    // https://github.com/Thoughtscript/x_team_css_in_js
    const TD_STYLE = "border border-gray-300 p-3"
    const TH_STYLE = `${TD_STYLE} bg-black text-white`

    // Cool and much simplified rerendering/state management
    if (!data) return (PageWrapper(<div>Content is loading...</div>))
    if (error) return (PageWrapper(<div>Error fetching data...</div>))

    return (PageWrapper(
        <table className={TABLE_STYLE} width={500}>
            <thead>
                <tr>
                    <th className={TH_STYLE}>city</th>
                    <th className={TH_STYLE}>state</th>
                </tr>
            </thead>
            <tbody>
                {data.map((c: City) => (
                    <tr>
                        <td className={TD_STYLE}>{c.city}</td>
                        <td className={TD_STYLE}>{c.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>))
}
