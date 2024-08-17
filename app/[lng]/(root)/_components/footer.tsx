'use client'

import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'

function Footer() {
	const t = useTranslate()

	return (
		<div className='mt-12 bg-secondary pt-12 max-md:px-4'>
			<div className='container mx-auto max-w-7xl pb-12'>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
					<div className='flex flex-col space-y-3 md:col-span-2'>
						<Logo />
						<p>{t('heroDescription')}</p>
					</div>

					<div className='flex flex-col space-y-3'>
						<h1 className='font-space_grotesk text-3xl'>{t('pages')}</h1>
						<div className='flex flex-col space-y-3 pt-6'>
							{navLinks.map(item => (
								<Link
									key={item.route}
									href={`/${item.route}`}
									className='font-medium transition-all hover:text-blue-500 hover:underline'
								>
									{t(item.name)}
								</Link>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-3'>
						<h1 className='font-space_grotesk text-3xl'>{t('contacts')}</h1>
						<div className='flex flex-col space-y-3 pt-6'>
							<div className='flex items-center space-x-3'>
								<PhoneCall size={20} />
								<div className='flex flex-col space-y-1'>
									<a
										href='tel:+998946542341'
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									>
										+998 (94) 654-23-41
									</a>
									<Separator className='dark:bg-gray-500' />
									<a
										href='tel:+890098765098'
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									>
										+89 009 876 098
									</a>
								</div>
							</div>

							<div className='flex items-center space-x-3'>
								<Mail size={20} />
								<a
									href='mailto:abdurahmanrahmanbekov@gmail.com'
									className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
								>
									abdurahmanrahmanbekov@gmail.com
								</a>
							</div>

							<div className='flex items-center space-x-3'>
								<MapPin size={20} />
								<span className='text-sm'>Uzbekistan Toshkent</span>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-12'>
					<Separator className='mb-3 dark:bg-gray-500' />
					<p>
						© {new Date().getFullYear()}. {t('copyright')}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
