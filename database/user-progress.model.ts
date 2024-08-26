import { model, models, Schema } from 'mongoose'

const userProgressSchema = new Schema({
	userId: { type: String },
	lessonId: { type: String },
	isCompleted: { type: Boolean, default: false },
})

const UserProgress =
	models.UserProgress || model('UserProgress', userProgressSchema)

export default UserProgress
