import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Ad2 from 'public/assets/ad-2.png'
import Image from 'next/image'
import AboutProfile from 'public/assets/about-profile.jpg'

type Props = {}

const Sidebar = (props: Props) => {
	return (
		<section>
			<h4 className='bg-wh-900 py-2 px-5 text-wh-50 text-xs font-bold text-center'>
				Subscribe and Follow
			</h4>
			<div className='mx-5 my-5'>
				<SocialLinks isDark />
			</div>
			<Subscribe />
			<div className='my-8'>
				<Image
					className='hidden md:block my-8'
					src={Ad2}
					alt='advert-2'
					width={500}
					height={1000}
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<h4 className='bg-wh-900 py-2 px-5 text-wh-50 text-xs font-bold text-center'>
				About the Blog
			</h4>
			<div className=' my-8 flex justify-center'>
				<Image
					src={AboutProfile}
					alt='Tech'
					sizes='(max-width: 480px) 100vw, 
						(max-width: 768px) 75vw,
						(max-wdith: 1060px) 50vw, 33vw'
					style={{ width: "500px", height: "250px", objectFit: 'cover' }}
				/>
			</div>
			<h4 className='py-2 px-5 text-wh-500 font-bold text-center'>
				Nicholas David
			</h4>
			<p className='text-wh-500 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi deleniti omnis corporis odio aut amet ipsam, minus in officia asperiores quam cum, rem molestias? Commodi soluta cum magni impedit.</p>

		</section>
	)
}

export default Sidebar