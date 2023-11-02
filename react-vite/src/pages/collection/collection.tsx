import CollectionCardContainer from '@/components/CollectionCardContainer'
import { Link } from 'react-router-dom'

export default function Collection() {
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
      <h1 className="text-3xl font-semibold my-4">Collection</h1>
      <CollectionCardContainer />
    </section>
  )
}
