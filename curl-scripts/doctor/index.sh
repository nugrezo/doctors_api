
curl 'http://127.0.0.1:4741/doctors' \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo