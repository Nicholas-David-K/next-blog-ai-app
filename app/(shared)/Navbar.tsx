import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SocialLinks from './SocialLinks'
import Ad1 from 'public/assets/ad-1.jpg'

type Props = {}

const Navbar = (props: Props) => {
	return (
		<header className='mb-5'>
			<nav className='flex justify-between items-center w-full bg-wh-900 text-white-10 px-10 py-4 text-white'>
				<div className='hidden sm:block'>
					<SocialLinks isDark={false} />
				</div>
				<div className='flex justify-between items-center gap-10'>
					<Link href="/">Home</Link>
					<Link href="/">Trending</Link>
					<Link href="/">About</Link>
				</div>
				<div>
					<p>Sign In</p>
				</div>
			</nav>
			<div className='flex justify-between gap-8 items-center  mt-5 basis-4 mx-10'>
				<div className="basis-2/3 md:mt-3">
					<h1 className='font-bold text-3xl md:text-5xl'>BLOG OF THE FUTURE</h1>
					<p className='text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, ea commodi beatae deserunt, consectetur eum illo incidunt consequuntur magni, tenetur repellat facilis tempore! Harum temporibus qui omnis! Itaque, voluptate cum?</p>
				</div>
				<div className='basis-full relative w-auto h-32 bg-wh-500'>
					<Image
						fill={true}
						src={Ad1}
						alt='advert-1'
						sizes='(max-width: 480px) 100vw, 
						(max-width: 768px) 75vw,
						(max-wdith: 1060px) 50vw, 33vw'
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</div>
			<hr className='border-1 mx-10 my-4' />
		</header>
	)
}


export default Navbar;