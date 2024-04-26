import { getBlogPosts } from '@/db/blog'
import { MdxViewer } from '@/components/mdx-viewer'

const Page = ({params:{slug}}:{params:{slug:string}}) => {
  const blog = getBlogPosts().find((b)=> b.slug === slug)
  if(!blog) return null
  return (
    <div>
      <article className="prose-quoteless prose prose-stone dark:prose-invert prose-lg">
        <MdxViewer source={blog.content}/>
      </article>
    </div>
  )
}

export default Page