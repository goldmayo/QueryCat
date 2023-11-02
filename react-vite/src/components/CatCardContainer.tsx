import Card from '@/components/Card'
import useCatPhoto from '@/hooks/query/useCatPhoto'

interface Props {
  photoCount: number
}

export default function CatCardContainer({ photoCount }: Props) {
  const { isLoading, data } = useCatPhoto(photoCount)
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="p-2">
      <ul className="columns-3 gap-4">
        {data &&
          data.map((catPhoto) => (
            <li key={catPhoto.id}>
              <Card content={catPhoto} />
            </li>
          ))}
      </ul>
    </div>
  )
}
