import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ToolSchema = new Schema({
	title : { type: String },
	value : { type: Number},
	date: { type: Date }
});

const Tool = mongoose.model('Tool', ToolSchema);