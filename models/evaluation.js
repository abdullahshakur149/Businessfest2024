import { model, models, Schema } from 'mongoose';


const EvaluationSchema = new Schema({
    TeamName: {
        type: String,
        required: true,
        unique: true
    },
    Semester: {
        type: String,
        required: true
    },
    Program: {
        type: String,
        required: false
    },
   
    Description: {
        type: String,
        required: false
    },
    evaluation: {
        type: String,
        enum: ['approved', 'rejected'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Evaluation = models?.Evaluation || model('Evaluation', EvaluationSchema);

export default User;
