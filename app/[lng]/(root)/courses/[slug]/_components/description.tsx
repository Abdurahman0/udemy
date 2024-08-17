'use client'

import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import {
	BarChart2,
	Clock,
	Infinity,
	Languages,
	MonitorPlay,
} from 'lucide-react'
import { GrCertificate } from 'react-icons/gr'

function Description() {
	const t = useTranslate()

	return (
		<div className='rounded-md border bg-secondary/50 p-4 shadow-lg dark:shadow-white/20 lg:sticky lg:top-24 lg:p-6'>
			<div className='flex items-center justify-between font-space_grotesk'>
				<div className='text-2xl font-bold'>$96.00</div>
				<div className='font-bold line-through'>$76.00</div>
			</div>

			<Button size={'lg'} className='mt-4 w-full font-bold'>
				{t('addToCart')}
			</Button>
			<Button size={'lg'} className='mt-2 w-full font-bold' variant={'outline'}>
				{t('buyNow')}
			</Button>

			<p className='my-3 text-center text-sm text-muted-foreground'>
				{t('guarantee')}
			</p>

			<div className='mt-4 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-space_grotesk'>
					<MonitorPlay className='size-5' />
					<span className='font-bold'>{t('lessons')}</span>
				</div>
				<p className='text-muted-foreground'>20</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-space_grotesk'>
					<Clock className='size-5' />
					<span className='font-bold'>{t('durations')}</span>
				</div>
				<p className='text-muted-foreground'>3 {t('hours')}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-space_grotesk'>
					<BarChart2 className='size-5' />
					<span className='font-bold'>{t('skillLevel')}</span>
				</div>
				<p className='text-muted-foreground'>Beginner</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-space_grotesk'>
					<Languages className='size-5' />
					<span className='font-bold'>{t('language')}</span>
				</div>
				<p className='text-muted-foreground'>English</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-space_grotesk'>
					<GrCertificate className='size-5' />
					<span className='font-bold'>{t('certificate')}</span>
				</div>
				<p className='text-muted-foreground'>{t('yes')}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-space_grotesk'>
					<Infinity className='size-5' />
					<span className='font-bold'>{t('fullLifetime')}</span>
				</div>
				<p className='text-muted-foreground'>{t('yes')}</p>
			</div>
		</div>
	)
}

export default Description
