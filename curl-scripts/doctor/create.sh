# sh curl-scripts/index.sh

curl 'http://127.0.0.1:4741/doctors' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "doctor": {
      "name": "'"${NAME}"'",
      "lastName": "'"${LASTNAME}"'",
      "specialty": "'"${SPECIALTY}"'",
      "address": "'"${ADDRESS}"'",
      "phoneNumber": "'"${PHONENUMBER}"'",
      "owner": "'"${OWNER}"'"
    }
  }'