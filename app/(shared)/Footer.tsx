import React from 'react'

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className='bg-wh-900 text-wh-50 py-10 px-10'>
			<div className='sm:flex justify-between mx-auto gap-16'>
				{/* FIRST COLUMN */}
				<div className='mt-16 basis-1/2 sm:mt-0'>
					<h4 className="font-bold">BLOG OF THE FUTURE</h4>
					<p className='my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sit nam provident assumenda asperiores eveniet a maiores quis modi fugit, omnis laboriosam, minima obcaecati dicta neque vitae voluptatum ratione aliquid?</p>
					<p>Copyright &copy; Blog of the Future</p>
				</div>
				{/* SECOND COLUMN */}
				<div className='mt-16 basis-1/4 sm:mt-0'>
					<h4 className="font-bold">LINKS</h4>
					<p>Lorem, ipsum dolor sit amet</p>
					<p>Eveniet, dolores. Fugit n</p>
					<p>Some random link</p>
					<p>Another random link</p>
				</div>
				{/* THIRD COLUMN */}
				<div className='mt-16 basis-1/4 sm:mt-0'>
					<h4 className="font-bold">CONTACT US</h4>
					<p>contactus@example.com</p>
					<p>+254 700 000 000</p>
				</div>

			</div>
		</footer>
	)
}

export default Footer;