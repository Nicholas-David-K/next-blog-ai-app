import Link from 'next/link';
import React from 'react'
import { Post } from '@prisma/client'
import Image from 'next/image';

type Props = {
	post: Post
	className?: string;
	imageHeight?: string;
	isSmallCard?: boolean;
	isLongForm?: boolean;
}

const Card = ({ className, imageHeight, isSmallCard = false, isLongForm = false, post }: Props) => {
	const { id, title, author, createdAt, image, snippet } = post || {}
	const date = new Date(createdAt)
	const options = { year: "numeric", month: "long", day: "numeric" } as any;
	const formattedDate = date.toLocaleDateString('en-us', options)

	return (
		<div className={className}>
			<Link className='basis-full hover:opacity-70'
				href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
			>
				<div className={`relative w-auto mb-3 ${imageHeight}`}>
					<Image
						fill={true}
						style={{ objectFit: 'cover' }}
						src={image}
						alt='Tech'
					/>
				</div>
			</Link>
			<div className='basis-full'>
				<Link
					href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
				>
					<h4 className={`font-bold hover:text-accent-green 
					${isSmallCard ? "text-base" : "text-lg"}
					${isSmallCard ? "line-clamp-2" : ""}
					`}
					>
						{title}
					</h4>
				</Link>

				<div className={`${isSmallCard ? "my-2" : "flex my-3 gap-3"}`}>
					<h5 className='font-semibold text-xs'>{author}</h5>
					<h6 className='text-wh-300 text-xs'>{formattedDate}</h6>
				</div>
				<p className={`text-wh-500 ${isLongForm ? "line-clamp-5" : "line-clamp-3"}`}>
					{snippet}
				</p>
			</div>
		</div>
	)
}

export default Card