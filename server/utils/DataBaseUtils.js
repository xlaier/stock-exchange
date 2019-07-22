import mongoose from 'mongoose';

import '../models/Tool';

import config from '../../etc/config.json'

const Tool = mongoose.model('Tool');

export function setUpConnection() {
	mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
};

export function listTools() {
	return Tool.find()
		.then(tools => tools);
};

export function createTool(data) {
	const tool = new Tool({
		title: data.title,
		date: data.date,
		value: data.value
	});

	return tool.save();
};

export function deleteTool(id) {
	return Tool.findById(id).remove();
};