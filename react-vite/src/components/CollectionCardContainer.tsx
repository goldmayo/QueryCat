import useCollection from '@/hooks/query/useCollection'
import CollectionCard from '@/components/CollectionCard'

export default function CollectionCardContainer() {
  const { isLoading, data } = useCollection()
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="p-2">
      <ul className="columns-3 gap-4">
        {data &&
          data.map((favoriteCollection) => (
            <li key={favoriteCollection.id}>
              <CollectionCard content={favoriteCollection} />
            </li>
          ))}
      </ul>
    </div>
  )
}
