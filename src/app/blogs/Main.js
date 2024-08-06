import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { getPostNames, getPostData } from "../../../lib/getPostData"
import PostCard from "@/components/PostCard"
export default async function Main() {
	const allPostsData = await getPostNames()
	return (
		<section className="text-black body-font lg:pt-20 mb-auto">
			<div className="flex mx-auto justify-center items-center w-full flex-col px-24 max-w-screen-lg">
				<h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
					<span>Blogs</span>
				</h1>
				<h2 className="mb-2 mt-4 text-2xl tracking-tighter text-white text-center">
					<span>Chronicling the works of the community.</span>
				</h2>
				<div className="flex justify-start items-start w-full">
					{allPostsData.map(({ slug, title }) => (
						<PostCard key={slug} slug={slug} title={title} />
					))}
				</div>
			</div>
		</section>
	)
}

