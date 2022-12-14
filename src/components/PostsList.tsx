import { Post } from '@prisma/client'
import React, { useState } from 'react'
import { usePosts, useCreatePost, useDeletePost } from '~/hooks/usePosts'
import ErrorBoundary from './ErrorBoundary'

export const PostList = () => {
  const { data, isLoading } = usePosts()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const onSubmit = async (e: any) => {
    e.preventDefault()
    if (title && content)
        mutation.mutate({title, content})
  }

  const onSuccess = () => {
    setTitle("")
    setContent("")
  }

  const mutation = useCreatePost(onSuccess)
  const deletePost = useDeletePost()

  if (isLoading) return <div>Loading</div>

  return (<ErrorBoundary>
    <section>

        {
            mutation.isLoading ? ('Adding post...') :
            (<>
                {mutation.isSuccess ? <div>Post added!</div> : null}
                <form onSubmit={onSubmit}>
                    <input name="title" required placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)} /> 
                    <textarea name="content" required placeholder="Enter some content" rows={12} value={content} onChange={(e) => setContent(e.target.value)} />
                    <button type="submit">
                        Create Post
                    </button>
                </form>

            </>)
        }
        
      <ul>
        {data?.map((post: Post, index: number) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href="#">{post.title}</a>
            </div>
            <div className="content">{post.content}</div>
            <button className="delete" onClick={() => deletePost.mutateAsync(post)}>delete</button>
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 20px;
          position: relative;
          transition: all 1s;
        }
        form {
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #f1f1f1;

        }
        input, textarea {
            border: 1px solid #f1f1f1;
            border-radius: 8px; 
            padding: 10px 10px;
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }
        button.delete {
            background-color: #f8f8f8;
            color: #666;
            width: auto;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            font-size: 0.5rem;
        }
        div.content {
            font-size: 14px;
            color: #333;
            margin-top: 10px;
            margin-left: 22px
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button {
            width: 100%;
            border-radius: 8px;
            padding: 10px 10px;
        }
      `}</style>
    </section>
    </ErrorBoundary>
    )
}
