import requests


# response = requests.post('http://127.0.0.1:8000/api-token-auth/', data={'username': 'admin', 'password': 'admin'})
# print(response.status_code) # {'token': '2efa08beed5727856319740df3747df4e0a3655e'}
# print(response.json()) # {'token': '2efa08beed5727856319740df3747df4e0a3655e'}

token = '2cf0c2e96b6c51a8f3c0a91deb4a31dab35c9081'
response = requests.post('http://127.0.0.1:8000/api/projects', headers={'Authorization': token},
                         data={'name_project': 'Python', "repo_link": "https://github.com/andrey952155"})
print(response.status_code)
print(response)
