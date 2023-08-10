import requests
import base64

USER_ID = 1137270
API_KEY = "glc_eyJvIjoiOTIwMzQxIiwibiI6ImZhdGhlciIsImsiOiJMMHRIbnF5TTAxUjV6MTc3aEZSOEI5NksiLCJtIjp7InIiOiJwcm9kLXVzLWVhc3QtMCJ9fQ=="

body = 'test,bar_label=abc,source=grafana_cloud_docs metric=35.2'

response = requests.post('https://influx-prod-13-prod-us-east-0.grafana.net/api/v1/push/influx/write', 
                         headers = {
                           'Content-Type': 'text/plain',
                         },
                         data = str(body),
                         auth = (USER_ID, API_KEY)
)

status_code = response.status_code

print(status_code)