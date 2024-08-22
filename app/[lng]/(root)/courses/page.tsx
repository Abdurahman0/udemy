import TopBar from '@/components/shared/top-bar'
import AllCourses from './_components/all-courses'
import { getAllCourses } from '@/actions/course.action'
import { SearchParamsProps } from '@/app.types'

async function Page({ searchParams }: SearchParamsProps) {
	const resultJSON = await getAllCourses({
		filter: searchParams.filter,
		searchQuery: searchParams.q,
		page: searchParams.page ? +searchParams.page : 1,
	})

	const result = JSON.parse(JSON.stringify(resultJSON))

	return (
		<>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourses result={result} />
		</>
	)
}

export default Page
