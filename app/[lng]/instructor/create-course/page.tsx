import { Separator } from '@/components/ui/separator'
import Header from '../../../../components/shared/header'
import CourseFieldForm from '@/components/forms/course-field.form'

function Page() {
	return (
		<>
			<Header
				title='Create a course'
				description='Fill in the details below to create a new course'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-space_grotesk text-lg font-medium'>
					Basic information
				</h3>
				<Separator className='my-3' />
				<CourseFieldForm />
			</div>
		</>
	)
}

export default Page
