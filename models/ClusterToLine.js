/**
 * Created by OrElm on 22/08/2016.
 */
var mongoose = require('mongoose');

var ClusterToLine = mongoose.model('ClusterToLine', new mongoose.Schema({
    operator_name: String,
    office_line_id: Number,
    operator_line_id: Number,
    cluster_name: String,
    from_date: String,
    to_date: String,
    cluster_id: Number,
    line_type: Number,
    line_type_desc: String,
    cluster_sub_desc: String
}));