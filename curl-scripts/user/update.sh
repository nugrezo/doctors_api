# sh curl-scripts/index.sh

curl "http://127.0.0.1:4741/users/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "email": "'"${EMAIL}"'",
      "hashedPassword": "'"${PASSWORD}"'"
    }
  }'