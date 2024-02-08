import Link from "next/link"

export default function Header() {
  return (
    <div className="flex justify-between text-white p-3 items-baseline  bg-black  bg-opacity-50 ">
      <div className="text-3xl">
        <Link href='/'>Home</Link>
      </div>
      <div className="flex justify-center">
        <div className="p-2"><Link className="text-xl" href='/performance'>Performance</Link></div>
        <div className="p-2"><Link className="text-xl" href='/scale'>Scale</Link></div>
      </div>
    </div>
  )
}
