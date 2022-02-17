curl "http://127.0.0.1:4741/doctors/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  
  echo