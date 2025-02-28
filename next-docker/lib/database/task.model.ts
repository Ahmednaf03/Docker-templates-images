import { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
    task: String,
    description: String,
    status: String,
});

const Task = models.Task || model('Task', TaskSchema);

export default Task;