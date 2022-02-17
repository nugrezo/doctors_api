# sh curl-scripts/index.sh

curl "http://127.0.0.1:4741/doctors/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
   "doctor": {
      "name": "'"${NAME}"'",
      "lastName": "'"${LASTNAME}"'",
      "specialty": "'"${SPECIALTY}"'",
      "address": "'"${ADDRESS}"'",
      "phoneNumber": "'"${PHONENUMBER}"'"
    }
  }'