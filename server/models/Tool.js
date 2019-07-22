import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ToolSchema = new Schema({
	title : { type: String },
	date: [String ],
	value : [Number]
});

const Tool = mongoose.model('Tool', ToolSchema);