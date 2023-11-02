import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { createCollection } from '@/api/api/FavoriteCollection'

export type ApiServiceErr = any
export type MutOpt<Response, TVariables = MutationProps> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>

interface MutationProps {
  image_id: string
  sub_id?: string
}
interface createCollectionResponse {
  message: string
  id: number
}

export default function useCreateCollectionMutation() {
  const mutation = useMutation<createCollectionResponse, ApiServiceErr, MutationProps>({
    onMutate: ({ image_id, sub_id = 'test-user-01' }: MutationProps) => {
      return createCollection(image_id, sub_id)
    },
    onSuccess(data) {
      console.log(data)
    },
    onError(error) {
      console.log(error)
    },
  })
  return mutation
}
