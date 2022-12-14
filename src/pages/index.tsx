import Head from 'next/head'
import { PostList } from '~/components/PostsList'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchPosts } from '~/hooks'
import { Header } from '~/components/Header'
import { Layout } from '~/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ContinuousDB Example App</title>
        <meta name="description" content="Powered by ContinuousDB" />
      </Head>
      <Header />
      <PostList />
    </Layout>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}