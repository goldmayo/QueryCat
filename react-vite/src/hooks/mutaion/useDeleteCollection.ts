import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCollection } from '@/api/api/FavoriteCollection'

export type ApiServiceErr = any
export type MutOpt<Response, TVariables = MutationProps> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>

interface MutationProps {
  favoriteId: number
}
interface deleteCollectionResponse {
  message: string
}

export default function useDeleteCollectionMutation() {
  const queryClient = useQueryClient()
  const mutation = useMutation<deleteCollectionResponse, ApiServiceErr, MutationProps>({
    onMutate: async ({ favoriteId }: MutationProps) => {
      await deleteCollection(favoriteId)
      return await queryClient.invalidateQueries({ queryKey: ['collection'] })
    },
    onSuccess: async () => {
      // return await queryClient.invalidateQueries({ queryKey: ['collection'] })
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return mutation
}
