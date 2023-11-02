import useDeleteCollectionMutation from '@/hooks/mutaion/useDeleteCollection'
import { FavouredCatPhoto } from '@/types/Collection'
import { BsBookmarkXFill } from 'react-icons/bs'
interface Props {
  content: FavouredCatPhoto
}

export default function Card({ content }: Props) {
  const { mutate } = useDeleteCollectionMutation()
  const addCollection = () => {
    mutate({ favoriteId: content.id })
  }
  return (
    <div className="max-w-[400px] mb-4 relative">
      <div className="max-w-lg object-fit">
        <img className="" src={content.image.url} alt={''} />
      </div>
      <button className="absolute top-0 right-0 p-2" onClick={addCollection}>
        <BsBookmarkXFill className="text-rose-300 hover:text-rose-500" />
      </button>
    </div>
  )
}
