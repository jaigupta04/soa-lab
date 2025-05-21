import requests

data = {"features": [5.9, 3.0, 5.1, 1.8]}
res = requests.post("http://localhost:5000/predict", json=data)
print(res.json())
