curl 'http://127.0.0.1:4741/users' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'