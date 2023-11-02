import useCreateCollectionMutation from '@/hooks/mutaion/useCreateCollection'
import { CatPhoto } from '@/types/Cat'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
interface Props {
  content: CatPhoto
}

export default function Card({ content }: Props) {
  const { mutate } = useCreateCollectionMutation()
  const addCollection = () => {
    mutate({ image_id: content.id })
  }
  return (
    <div className="max-w-[400px] mb-4 relative">
      <div className="max-w-lg object-fit">
        <img className="" src={content.url} width={content?.width} height={content?.height} alt={''} />
      </div>
      <button className="absolute top-0 right-0 p-2" onClick={addCollection}>
        <BsFillBookmarkCheckFill className="text-blue-300 hover:text-blue-500" />
      </button>
    </div>
  )
}
