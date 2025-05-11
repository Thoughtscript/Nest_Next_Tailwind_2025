import { PageWrapper } from "../(helpers)/page_wrapper"

export default async function Table() {
  // https://tailwindcss.com/docs/flex-basis
  const TABLE_STYLE = "border-collapse border border-gray-400 text-left rounded-xs"

  // https://github.com/Thoughtscript/x_team_css_in_js
  const TD_STYLE = "border border-gray-300 p-3"
  const TH_STYLE = `${TD_STYLE} bg-black text-white`

  interface User {
    id: string,
    name: string,
    email: string
  }

  let users: User[] = []

  // If the following is used - the values are prefetched during build+deploy time:
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  users = await data.json()

  return (
    PageWrapper(< table className={TABLE_STYLE} width={500} >
        <thead>
          <tr>
            <th className={TH_STYLE}>id</th>
            <th className={TH_STYLE}>name</th>
            <th className={TH_STYLE}>name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr>
              <td className={TD_STYLE}>{u.id}</td>
              <td className={TD_STYLE}>{u.name}</td>
              <td className={TD_STYLE}>{u.name}</td>
            </tr>
          ))}
        </tbody>
      </table >))
}
