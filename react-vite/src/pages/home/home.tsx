import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CatCardContainer from '@/components/CatCardContainer'

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [count, setCount] = useState<number>(0)
  const handleSubmit = (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current === null) return
    setCount(inputRef.current.valueAsNumber)
  }
  return (
    <section className="h-screen p-4">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to={'/collection'} className="hover:scale-105 hover:text-rose-500">
              Collection
            </Link>
          </li>
          <li>
            <Link to={'/'} className="hover:scale-105 hover:text-rose-500">
              Cat Photo
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-semibold my-4">Cat Photo</h1>
      <form action="" onSubmit={handleSubmit} className="flex gap-2 items-center text-xl">
        <label htmlFor="photo_counts">How many photos? : </label>
        <input
          ref={inputRef}
          id="photo_counts"
          type="number"
          className="text-black"
          defaultValue={1}
          min={1}
          max={20}
        />
        <button type="submit" className="px-1 border border-white rounded-md hover:text-rose-500 hover:border-rose-500">
          Get Photos
        </button>
      </form>
      <CatCardContainer photoCount={count} />
    </section>
  )
}
