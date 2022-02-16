#!/bin/bash

curl 'http://127.0.0.1:4741/sign-up' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "passwordConfirmation": "'"${PASSWORDCONFIRMATION}"'"
    }
  }'

echo