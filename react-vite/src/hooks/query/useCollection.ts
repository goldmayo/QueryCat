import { getCollection } from '@/api/api/FavoriteCollection'
import { useQuery } from '@tanstack/react-query'

export default function useCollection() {
  return useQuery({
    queryKey: ['collection'],
    queryFn: () => getCollection(),
    enabled: true,
    refetchOnWindowFocus: false,
  })
}
