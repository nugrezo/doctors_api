curl 'http://127.0.0.1:4741/sign-in' \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
