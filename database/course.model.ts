import { model, models, Schema } from 'mongoose'

const CourseSchema = new Schema(
	{
		title: String,
		description: String,
		learning: String,
		requirements: String,
		category: String,
		labguage: String,
		oldPrice: Number,
		currentPrice: Number,
		previewImage: String,
		published: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

const Course = models.Course || model('Course', CourseSchema)
export default Course
