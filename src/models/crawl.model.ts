import { model, Schema, Document } from 'mongoose';
import { Crawl } from '../interfaces/crawl.interface';

const crawlSchema: Schema = new Schema({
    pageUrl:{type:String, required:true},
    pageTitle:{type:String},
    pageDescription:{type:String},
    pageHeadings:[{type:String}]
}, { timestamps: true});

const crawlModel = model<Crawl & Document>('Crawl',crawlSchema );

export default crawlModel;
