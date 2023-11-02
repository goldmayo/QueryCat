import { getCatPhotos } from '@/api/api/catPhoto'
import { useQuery } from '@tanstack/react-query'

export default function useCatPhoto(limit?: number) {
  return useQuery({
    queryKey: ['catPhotos', limit],
    // queryFn: (queryKey) => getCatPhotos(queryKey),
    queryFn: () => getCatPhotos(limit),
    notifyOnChangeProps: ['data'],
    enabled: !limit ? false : true,
    refetchOnWindowFocus: false,
  })
}
