import fetch from 'node-fetch';

const USER_ID = 1137270
const API_KEY = "eyJrIjoiODk5NjNhZDY5ZmJkOWNiNTAyOTU1NTU2ZGNmOTljNzU5NDM2NDg3NiIsIm4iOiJmQVRIRVIiLCJpZCI6OTIwMzQxfQ=="

const body = 'test,bar_label=abc,source=grafana_cloud_docs metric=35.2';
async function go (){
const response = await fetch('https://influx-prod-13-prod-us-east-0.grafana.net/api/v1/push/influx/write', {
    method: 'post',
    body,
    headers: {
        'Authorization': `Bearer ${USER_ID}:${API_KEY}`, 
        'Content-Type': 'text/plain',
    },
});

const data = await response.status;

console.log(data);}
go ()