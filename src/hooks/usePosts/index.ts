import ky from 'ky-universal'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Post } from '@prisma/client'

const fetchPosts = async () => {
  return await ky('/api/posts').json() as Post[]
}

const createPost = async (post: any) => {
    return await ky('/api/posts', { method: "post", headers: {"content-type": "application/json"}, body: JSON.stringify(post)})
}

const deletePost = async (post: Post) => {
  return await ky(`/api/posts/${post.id}`, { method: "delete"})
}

const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })
}

const useCreatePost = (onSuccess: any) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['posts'],
        mutationFn: createPost,
        onSuccess: (post) => {
            queryClient.invalidateQueries({queryKey: ['posts']})
            if (onSuccess) onSuccess(post)
        }
    })
}

const useDeletePost = (onSuccess?: any) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deletePost'],
    mutationFn: deletePost,
    onSuccess: (post) => {
      queryClient.invalidateQueries({queryKey: ['posts']})
      if (onSuccess) onSuccess(post)
    }
  })
}

export { usePosts, fetchPosts, useCreatePost, useDeletePost }
